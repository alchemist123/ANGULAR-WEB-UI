import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.css']
})
export class ListClassesComponent implements OnInit {
  classList: any;
  text: any;

  constructor(private comService: CommunicationService) { }

  ngOnInit(): void {
    localStorage.setItem("previousData","false")
    this.listClasses()
  }

  listClasses(){
    this.comService.executePOSTAPI(APIStandars.listPriviousYearClass,{}).subscribe(
      (data:any)=>{
        if(data.length ==0){
          this.text = "Yet to publish, Contact your teacher."
        }
        console.log(data);
        this.classList = data
      }
    )
  }


}
