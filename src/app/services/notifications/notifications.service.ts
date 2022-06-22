import { Injectable } from '@angular/core';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toastr: ToastrService, private ngxBootstrapConfirmService: NgxBootstrapConfirmService) { }
  showSuccess(title, message) {
    this.toastr.success(message, title,{
      timeOut: 5000,
      positionClass: 'toast-top-right',
    });
  }

  showDanger(title, message) {
    this.toastr.error(message, title,{
      timeOut: 5000,
      positionClass: 'toast-top-right',
    });
  }

  showConfirm(message, confirmLabel, declineLabel) {
    let options ={
      title: message,
      confirmLabel: confirmLabel,
      declineLabel: declineLabel
    }
   return this.ngxBootstrapConfirmService.confirm(options)
  
  }
}
