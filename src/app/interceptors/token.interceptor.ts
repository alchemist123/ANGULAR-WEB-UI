import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';

import { AuthService } from  "../services/auth/auth.service"
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { MatSpinner } from '@angular/material/progress-spinner';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  count = 0;
  constructor(public auth: AuthService, private _snackBar: MatSnackBar) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.auth.activeUser!=null && this.auth.activeUser.accessToken){
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.activeUser.accessToken}`
      }
    });
  }
if(this.count==0){
  this.count++;
  this._snackBar.openFromComponent(SpinnerComponent);
}else{
  this.count++;
}


    return next.handle(request).pipe(
     tap(
       (event: HttpEvent<any>) =>{
         if(event instanceof HttpResponse){
           console.log({ResposneREciveCount:this.count})
           if(this.count==1){
           this._snackBar.dismiss()
           this.count=0;
           }
           else{
             this.count--;
           }
         }
       },
       (error: any) =>{
        
        if(this.count==1){
        this.count=0;
        this._snackBar.dismiss()
        }
        else{
          this.count--;
        }
        
         this._snackBar.open("Oops, Something went wrong, Please try again!","")
        setInterval(()=>{
            this._snackBar.dismiss()
        },3000)
       }
     )
    )
  }


}