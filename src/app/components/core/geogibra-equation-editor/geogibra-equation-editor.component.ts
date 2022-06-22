import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare var GGBApplet: any;
declare var html2canvas: any;
import * as uuid from 'uuid';

@Component({
  selector: 'app-geogibra-equation-editor',
  templateUrl: './geogibra-equation-editor.component.html',
  styleUrls: ['./geogibra-equation-editor.component.css']
})
export class GeogibraEquationEditorComponent implements OnInit {
  @Output() onInsertClick: EventEmitter<any> = new EventEmitter();
  @Input() id: any;
  isInited: boolean = false;

   constructor() { 
    setTimeout(() => {
      this.initGeogibra()
    },500)

   }

  ngOnInit(): void {
  
  
  
  }

  ngOnChanges(){
    
  }


initGeogibra(){

  var editorAPI;
  var codebase;
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('cb')) {
    codebase = urlParams.get('cb');
    codebase = "https://apps-builds.s3-eu-central-1.amazonaws.com/geogebra/branches/" + codebase + "/web3d/";
  }
  var parameters = {
  "useBrowserForJS":false,
  "app":false,
  "id":this.id + "applet_id",
  "appName":"evaluator",
  "scaleContainerClass":"wrap",
  "fontSize": 32,
  "showAlgebraInput":true,
  "showToolBar":false,
  // specify the rounding for a calculation (for state.eval)
  "rounding": 6,
  "keyboardType": "notes",
  // useful if you have several editors on a page
  "preventFocus": false,
  // called after the editor is fully loaded
  "appletOnLoad":function(api){   
      // editorAPI = api;          
      // api.registerClientListener((listener)=>{
      //   console.log(listener)
      // });
      // // initial state
      // var state = [];
      // state[0] = "editorKeyTyped";
      // editorAPI.setEditorState({"content": "sqrt(x/(2+x))"});
      // update other text fields
      //listener(state);
    }
  
  };
  
   var applet = new GGBApplet(parameters);
  if (codebase) {
    applet.setHTML5Codebase(codebase);
  }
  applet.inject(this.id);
  }

  extractEquation(){
    var that = this;
    html2canvas(document.getElementById(this.id), {
      onrendered: function (canvas) {
        let data = {img: canvas.toDataURL()}
        that.onInsertClick.emit(data);
      },
    });
  }

  ngOnDestroy(): void{
    console.log("onDestroy")
      //this.applet = null;
  }



}
