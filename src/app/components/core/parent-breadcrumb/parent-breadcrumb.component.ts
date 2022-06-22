import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-parent-breadcrumb',
  templateUrl: './parent-breadcrumb.component.html',
  styleUrls: ['./parent-breadcrumb.component.css']
})
export class ParentBreadcrumbComponent implements OnInit {
  pathName = []
  constructor(private utils:UtilsService) { }

  ngOnInit(): void {
      this.pathName = this.utils.getPath()
  }

}
