import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from "socket.io-client";
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public socket: any;

  constructor(private http: HttpClient, private authService: AuthService) { 
 if(this.authService.activeUser)
    this.initSocket()

  }

  executeGETAPI(url, data){
     return this.http.get(url,{params:data})
  }

  executePOSTAPI(url, data){
    return this.http.post(url,data)
  }

  



  initSocket(mode=0){
   if(this.socket){
     this.socket.disconnect();
   } 
   this.socket = io(`wss://stemclass-prod-xy7nv.ondigitalocean.app?mode=${mode}&id=${this.authService.activeUser.id}`);
   //this.socket = io(`wss://node-express-backend-45k7g.ondigitalocean.app??mode=${mode}&id=${this.authService.activeUser.id}`);
  }

   reportDataInitForTeacher(){
        this.socket.emit("pre_process_report")
        this.socket.emit("post_process_report")
        this.socket.emit("self_process_report")
        this.socket.emit("activity_process_report")
       // this.socket.emit("student_on_time_listener")
  }



  reportDataInitForTopLevel(){
    this.socket.emit("top_level_pre_report")
    this.socket.emit("top_level_post_report")
    this.socket.emit("top_level_self_report")
    this.socket.emit("top_level_act_report")
}

  emit(eventName){
    this.socket.emit(eventName)
  }

  listen(eventName){
    return new Observable((subscriber)=>{
        this.socket.on(eventName,(data)=>{
          subscriber.next(data)
        })
    })
  }
}
