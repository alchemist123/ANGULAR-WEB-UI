import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  updatePathName(pathName: string, text: string){
      var currentPath:any = localStorage.getItem("parentPath")
      if(currentPath!=null){
        currentPath = JSON.parse(currentPath)
        var pathIndex = -1;
        for(var i=0 ; i<currentPath.length ; i++){
            if(currentPath[i].pathName == pathName){
              pathIndex = i;
              break;
            }
        }
        
        console.log("Path inex is", pathIndex)
        if(pathIndex>=0){   
            currentPath = currentPath.splice(pathIndex, currentPath.length - pathIndex);
        }
        else{
          currentPath.push({pathName, text})
        }
      }
      else{ 
        currentPath = [{pathName, text}]
      }
      localStorage.setItem("parentPath",JSON.stringify(currentPath));
  }

  resetParentPath(){
    localStorage.removeItem("parentPath")
  }
  getPath(){
    var path = localStorage.getItem("parentPath")
    if(path!=null){
      return JSON.parse(path);
    }
  }

}
