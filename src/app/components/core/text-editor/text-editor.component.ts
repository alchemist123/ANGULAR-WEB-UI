import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare var $:any;
declare var DrawerJs: any;
declare var GGBApplet: any;

import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  @Input() id: string;
  @Input() content: string = ''
  @Input() height: string = ""
  @Input() placeholder: string = ""
  @Output() onUpdate: EventEmitter<string> = new EventEmitter();
 
  
  constructor() {
    console.log(this.id);
    
   }

  ngOnChanges(){
   
    console.log("Trying to set new content", this.content)
      if(this.content!="")
      $('#'+this.id).trumbowyg("html",this.content)
   
  }

  ngOnInit(): void {
    var that =this;
    setTimeout(() =>{
      $('#'+this.id).trumbowyg({
        svgPath: "assets/libs/text-editor/icons.svg",
        autogrow: true,
        imageWidthModalEdit: true,
        urlProtocol: true,
        btnsDef: {
          // Create a new dropdown
          image: {
              dropdown: ['insertImage', 'base64'],
              ico: 'insertImage'
          },

      },
      btns: [
        ['viewHTML'],
        ['formatting'],
        ['specialChars'],
        ['strong', 'em', 'del'],
        ['foreColor', 'backColor'],
        ['superscript', 'subscript'],
        ['link'],
        ['image'], // Our fresh created dropdown
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
        ['unorderedList', 'orderedList'],
        ['horizontalRule'],
        ['table'],
        ['removeformat'],
        ['fullscreen']
    ],
    plugins: {
      specialchars: {
          symbolList: [
            '002B', '2212', '00D7', '00F7', '003D', '2260', '00B1', '00AC', '003C', null,
              '003E', '00B0', '00B9', '00B2', '00B3', '0192', '0025', '0089', '2031', null,
              '2023', '25B6', '2B29', '25C6', '2211', '2243', '2264', '2265', '2200', null,
          '2201', '2202', '2203', '2204', '2205', '2207', '2208', '2209', '220B', null,
          '220C', '220F', '2210', '2211', '2213', '2214', '2216', '2217', '2218', null,
          '221A', '221D', '221E', '221F', '2220', '2221', '2222', '2223', '2224', null,
          '2225', '2226', '2227', '2228', '2229', '222A', '222B', '222C', '222D', null,
          '222E', '222F', '2230', '2232', '2233', '2234', '2235', '2236', '2237', null,
          '2238', '223A', '223B', '223C', '223D', '223E', '223F', '2240', '2241', null,
          '2242', '2242', '2243', '2244', '2245', '2246', '2247', '2248', '2248', null,
          '2248', '2249', '224A', '224B', '224C', '224D', '224E', '224F', '2250', null,
          '2251', '2252', '2253', '2254', '2255', '2256', '2257', '2258', '2259', null,
          '225A', '225B', '225C', '225D', '225E', '225F', '2261', '2262', '2263', null,
          '2264', '2265', '2266', '2267', '2268', '2269', '226A', '226B', '226C', null,
          '226D', '226E', '226F', '2270', '2271', '2272', '2273', '2274', '2275', null,
          '2276', '2278', '2279', '227A', '227B', '227C', '227D', '227E', '227F', null,
          '2280', '2281', '2282', '2283', '2284', '2285', '2286', '2287', '2288', null,
          '2289', '228A', '228B', '228C', '228D', '228F', '228E', '2290', '2291', null,
          '2292', '2293', '2294', '2295', '2296', '2297', '2298', '2299', '229A', null,
          '229B', '229C', '229D', '229E', '229F', '22A0', '22A1', '22A2', '22A3', null,
          '22A4', '22A5', '22A6', '22A6', '22A7', '22A8', '22A9', '22AA', '22AB', null,
          '22AC', '22AD', '22AE', '22AF', '22B0', '22B2', '22B3', '22B4', '22B5', null,
          '22B6', '22B7', '22B8', '22B9', '22BA', '22BB', '22BC', '22BD', '22BE', null,
          '22BF', '22C0', '22C1', '22C2', '22C3', '22C4', '22C5', '22C6', '22C7', null,
          '22C8', '22C9', '22CA', '22CB', '22CC', '22CD', '22CE', '22CF', '22D0', null,
          '22D1', '22D2', '22D3', '22D4', '22D5', '22D6', '22D7', '22D8', '22D9', null,
          '22DA', '22DB', '22DC', '22DD', '22DE', '22DF', '22E0', '22E1', '22E2', null,
          '22E3', '22E4', '22E5', '22E6', '22E7', '22E8', '22E9', '22EA', '22EB', null,
          '22EC', '22ED', '22EE', '22EF', '22F0', '22F1', '22F2', '22F3', '22F4', null,
          '22F5', '22F6', '22F7', '22F8', '22F9', '22FA', '22FB', '22FC', '22FD', null,
          '22FE', '2308', '2309', '230A', '230B', '2329', '232A', null 
       ]
      },
      resizimg: {
        minSize: 64,
        step: 16,
    }
  }
      }).on('tbwchange',()=>{
        
        that.onUpdate.emit($('#'+that.id).trumbowyg('html'))
      }).on('tbwpaste',()=>{
        that.onUpdate.emit($('#'+that.id).trumbowyg('html'))
      });
      console.log("Trying to set content", this.content)
      if(this.content!="")
      $('#'+this.id).trumbowyg("html",this.content)
     if(this.height!=""){
      var visibleEditors = document.getElementsByClassName("trumbowyg-editor-visible")  as HTMLCollectionOf<HTMLElement>;
      for(var i=0; i<visibleEditors.length; i++){
        visibleEditors[i].style.minHeight = this.height;
      }
      var activeEditors = document.getElementsByClassName("trumbowyg-editor")  as HTMLCollectionOf<HTMLElement>;
      for(var i=0; i<visibleEditors.length; i++){
        activeEditors[i].style.minHeight = this.height;
      }

      var textArea = document.getElementsByClassName("trumbowyg-textarea")  as HTMLCollectionOf<HTMLElement>;
      for(var i=0; i<visibleEditors.length; i++){
        textArea[i].style.minHeight = this.height;
      }

     }

    this.insertButtonsToEditor()

    
    },100)
  }



  insertButtonsToEditor(){
   var buttonPane = <HTMLElement>document.getElementById("container_"+this.id)
   buttonPane = <HTMLElement>buttonPane.getElementsByClassName("trumbowyg-button-pane")[0]
   var eqButton = this.htmlToElement("<div class='trumbowyg-button-group'> <input type='button' value='EQ'  data-toggle='modal' data-target='#equationModal_"+this.id+"' /> </div>")
   buttonPane.appendChild(eqButton);
  }

  openEqModal(){
    console.log("openEqModal")
    $("#equationModal_"+this.id).modal('show');
  }

  insertEquation($event){
    $("#equationModal_"+this.id).modal('hide');
    let imgData = $event.img;
    let imgString = `<img src='${imgData}'></img>`
    let newData = $('#'+this.id).trumbowyg('html') + imgString
    $('#'+this.id).trumbowyg("html",newData)
    $("#equationModal_"+this.id).modal('hide');


  }

   htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}





}
