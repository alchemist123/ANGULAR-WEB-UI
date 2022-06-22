import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { TaskMediaUploadModalComponent } from '../task-media-upload-modal/task-media-upload-modal.component';

@Component({
  selector: 'app-cm-unit-view',
  templateUrl: './cm-unit-view.component.html',
  styleUrls: ['./cm-unit-view.component.css']
})
export class CmUnitViewComponent implements OnInit {
  inventoryId: any;
  inventoryContent:any
  url:any
  value: any;
  contentType: any;
  typeValue: any;
  contentTypeValue: any;
  inventId: any;
  private _id: any;
  contentId: any;
  lessoName: any;
  userType: any;
  count: any;
  challengeType: any;
  task: any=[];
  taskId: any;
  taskdata : any [];
  completedTask: any=[];
  moduleId: any;
  addModule: any;
  taskName: any;
  description: any;
  msg: any;
  tasks: any;
  
  constructor(private activatedRouter: ActivatedRoute,private route:Router,private comService: CommunicationService,public sanitizer: DomSanitizer,private authService:AuthService, private notify: NotificationsService,private matdialog:MatDialog) { }

  ngOnInit(): void {
    this.addModule = localStorage.getItem("addModule")
    this.taskName=localStorage.getItem("taskName")
    this.activatedRouter.params.subscribe((data)=>{
      this.inventoryId = data["id"]
      this.moduleId= data["moduleId"]
      console.log(this.inventoryId,this.moduleId);
      
    })
    this.contentId = localStorage.getItem("inventoryId")
    console.log("inv",this.contentId);
    
    //this.getViewCount()
    this.userType = localStorage.getItem("userType")
    console.log(this.userType)
    //this.inventorySelection()
    this.listInventoryContent()
  }

  inventorySelection(){
    console.log("data");
    
  }

  listInventoryContent(){
    console.log("daatata");
    
    console.log("use",this.authService.activeUser.userType);
    
     if(this.userType == "teacher"){

    this.comService.executePOSTAPI(APIStandars.listTeacherInventoryContent,{inventoryId:this.inventoryId}).subscribe(
      (data:any)=>{
        console.log(data);
        this.url = data.map(item=>item.contentData)
        console.log(this.url);
        this.value = "https://"+this.url.find(element=>element)
        
        this.typeValue = this.url.find(element=>element)
        console.log(this.typeValue);

        this.contentType = data.map(item=>item.contentType)
        console.log( this.contentType);
        this.contentTypeValue = this.contentType[0]
        console.log(this.contentTypeValue);

        this.inventId =  data.map(item=>item._id)
        console.log(this.inventId);
        this._id = this.inventId[0]
        console.log( this._id);
        
        this.inventoryContent = data
        console.log("data", this.inventoryContent);
        
      }
    )
    }
    else{
      this.comService.executePOSTAPI(APIStandars.listStudentInventoryContent,{inventoryId:this.inventoryId}).subscribe(
        (data:any)=>{
          console.log(data);
          this.url = data.map(item=>item.contentData)
          console.log(this.url);
          this.value = "https://"+this.url.find(element=>element)
          
          this.typeValue = this.url.find(element=>element)
          console.log(this.typeValue);
  
          this.contentType = data.map(item=>item.contentType)
          console.log( this.contentType);
          this.contentTypeValue = this.contentType[0]
          console.log(this.contentTypeValue);
  
          this.inventId =  data.map(item=>item._id)
          console.log(this.inventId);
          this._id = this.inventId[0]
          console.log( this._id);
          
          this.inventoryContent = data
          console.log("data", this.inventoryContent);
          
        }
      )

        

    }
    this.getViewCount()
    this.getInventoryData()
    this.listTaskwithStudentTask()
    this.findCompletedTask()
    this.playVedio()
 }

  getInventoryData(){
    if(this.userType =="student"){
    this.comService.executePOSTAPI(APIStandars.getInventoryData,{inventoryId:this.inventoryId}).subscribe(
      (data:any)=>{
        console.log(data);
        this.lessoName = data.lessonName
        this.description = data.description
        console.log( "desc",this.description);
      }
    )}
    else{
      this.comService.executePOSTAPI(APIStandars.getInventoryTeacherData,{inventoryId:this.inventoryId}).subscribe(
        (data:any)=>{
          console.log(data);
          this.lessoName = data.lessonName
          this.description = data.description
          console.log( this.description);
        }
      )
    }
  }

  getViewCount(){
    if(this.userType =="student"){
    this.comService.executePOSTAPI(APIStandars.getViewCount,{inventoryId:this.inventoryId}).subscribe(
      (data)=>{
        console.log(data);
        this.count = data["count"]
        console.log( this.count);
       
      }
    )
    }
    else{
      this.comService.executePOSTAPI(APIStandars.getTeacherViewCount,{inventoryId:this.inventoryId}).subscribe(
        (data)=>{
          console.log(data);
          this.count = data["count"]
          console.log( this.count);
        }
      )
    }
  }

  playVedio(){
    
    if(this.userType =="student"){

    this.comService.executePOSTAPI(APIStandars.playVedio,{inventoryId:this.inventoryId}).subscribe(
      (data)=>{
        console.log("data",data);
       
      }
    )
    }
    else{
      this.comService.executePOSTAPI(APIStandars.playVideo,{inventoryId:this.inventoryId}).subscribe(
        (data)=>{
          console.log("data",data);
         
        }
      )
    }
    //this.getViewCount()
  }

  completedInventory(){
    if(this.userType == "teacher"){
      this.comService.executePOSTAPI(APIStandars.completedTeacherInventory,{inventoryId:this.inventoryId}).subscribe(
        (data)=>{
          console.log(data);
          this.notify.showSuccess("You are successfully completed this inventory","Please select next inventory")
        },
        (err)=>{
         this.notify.showDanger("Failed", "")
       
       }
      )
    }
    else{
      this.comService.executePOSTAPI(APIStandars.completedInventory,{inventoryId:this.inventoryId}).subscribe(
        (data)=>{
          console.log(data);
          this.notify.showSuccess("You are successfully completed this inventory.","Please select next inventory.")
        },
         (err)=>{
          this.notify.showDanger("Failed", "")
        
        }
      )
    }
    //this.listInventoryContent()
  }

  taskData(data){
    this.taskdata = data
    this.taskId = data["task"]["_id"]
    console.log("data",this.taskId);
    
  }

  // listTask(){
  //   if(this.userType == "teacher"){
  //   this.comService.executePOSTAPI(APIStandars.listTeacherTask,{challengeId:this.inventoryId}).subscribe(
  //     (data)=>{
  //       console.log(data);
  //       this.task = data
  //       this.challengeType = data[0]["contentType"]
  //       console.log(this.challengeType);
        
  //     }
  //   )}
  //   else{
  //     this.comService.executePOSTAPI(APIStandars.listStudentTask,{challengeId:this.inventoryId}).subscribe(
  //       (data)=>{
  //         console.log(data);
  //         this.task = data
  //         this.challengeType = data[0]["contentType"]
  //         console.log(this.challengeType);
          
  //       }
  //     )
  //   }
  // }

  listTaskwithStudentTask(){
    if(this.userType == "teacher"){
      this.comService.executePOSTAPI(APIStandars.listTaskwithStudentTask,{challengeId:this.inventoryId}).subscribe(
        (data:any)=>{
          if(data.length == 0){
            this.msg = "You have no data to display"
          }
          this.tasks = data
          console.log(data);
          data.map((item:any)=>{
            this.task.push({...item.task, studTasks:item.studTask, feedback:item.feedback})
          })
          console.log(this.task);
          this.challengeType = data[0]["task"]["contentType"]
          console.log(this.challengeType);
          
        }
      )}
      else{
        this.comService.executePOSTAPI(APIStandars.listTaskwithStudentsTask,{challengeId:this.inventoryId}).subscribe(
          (data:any)=>{
            if(data.length == 0){
              this.msg = "You have no data to display"
            }
            this.tasks = data
            console.log(data);
            data.map((item:any)=>{
              //this.task.push({...item.task, studTasks:item.studTask, feedback:item.feedback})
            })
            console.log(this.task);
            this.challengeType = data[0]["task"]["contentType"]
            console.log(this.challengeType);
            
          }
        )
      }
  }

  findCompletedTask(){
    if(this.userType == "student"){
    this.comService.executePOSTAPI(APIStandars.findCompletedTask,{challengeId:this.inventoryId}).subscribe(
      (data)=>{
        console.log(data);
        this.completedTask = data
        console.log(this.completedTask);
        
      }
    )}
    else{
      this.comService.executePOSTAPI(APIStandars.findCompletedTeacherTask,{challengeId:this.inventoryId}).subscribe(
        (data:any)=>{
          console.log(data);
          this.completedTask.push(data)
          console.log("id",this.completedTask);
          
        }
      )
    }
  }
  taskCompletedId(_id){
    return this.completedTask.includes(_id)
  }

  mapLabLesson(){
    this.comService.executePOSTAPI(APIStandars.mapLabLesson,{batchId:this.moduleId, lessonId:this.inventoryId}).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("You are successfully completed.","")
        this.route.navigate([])
      },
      (err)=>{
        this.notify.showDanger("Failed", "")
      
      }
    )
  }

  medialUploadModal(){
    var dialogRef = this.matdialog.open(TaskMediaUploadModalComponent,{
      data:{_id:this.taskId},
      autoFocus: false,
      maxHeight: '98vh'
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
       this.listTaskwithStudentTask()
      }
    )
  }

  get safeUrl(){
    console.log(this.sanitizer.bypassSecurityTrustUrl(this.value));
    console.log(this.value);
    
    return this.sanitizer.bypassSecurityTrustUrl(this.value);
  }

  get TypeUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.typeValue);
  }

  get TypeUrl2(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.typeValue);
  }

   onEdit() { // function onEdit
    window.scrollTo(0, 0); // very top
    }
}
