import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private auth: AuthService, private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const curretUserValue = this.auth.activeUser;
    if (curretUserValue) {
      if (
        route.data.roles &&
        route.data.roles.indexOf(curretUserValue.role) === -1
      )
        this.route.navigate(["login"])
        return false;
    } else {
      
      return true;
     
    }

  
  }
}
