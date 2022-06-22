import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare var DrawerJs: any;
declare var $: any;
import {v4 as uuidv4} from 'uuid';
@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css']
})
export class PaintComponent implements OnInit {
id:any;
  @Output() onImageChange: EventEmitter<string> = new EventEmitter()
  constructor() { 
    this.id = uuidv4.v4();
    this.insertDraw()
  }

  ngOnInit(): void {
   
  }


  insertDraw(){
    setTimeout(()=>{
        this.initDraw(this.id)
    },200);

  }

  initDraw(id){

  console.log("setting drawer")
  var drawerPlugins = [
    // Drawing tools
    'Pencil',
    'Eraser',
    'Text',
    'Line',
    'ArrowOneSide',
    'ArrowTwoSide',
    'Triangle',
    'Rectangle',
    'Circle',
    'Image',
    'BackgroundImage',
    'Polygon',
    'ImageCrop',

    // Drawing options
    //'ColorHtml5',
    'Color',
    'ShapeBorder',
    'BrushSize',
    'OpacityOption',

    'LineWidth',
    'StrokeWidth',

    'Resize',
    'ShapeContextMenu',
    'CloseButton',
    'OvercanvasPopup',
    'OpenPopupButton',
    'MinimizeButton',
    'ToggleVisibilityButton',
    'MovableFloatingMode',
    'FullscreenModeButton',

    'TextLineHeight',
    'TextAlign',

    'TextFontFamily',
    'TextFontSize',
    'TextFontWeight',
    'TextFontStyle',
    'TextDecoration',
    'TextColor',
    'TextBackgroundColor'
];

// drawer is created as global property solely for debug purposes.
// doing  in production is considered as bad practice
   var canvas = new DrawerJs.Drawer(null, {
    plugins: drawerPlugins,
    corePlugins: [
        'Zoom' // use null here if you want to disable Zoom completely
    ],
    pluginsConfig: {
        Image: {
            scaleDownLargeImage: true,
            maxImageSizeKb: 10240, //1MB
            cropIsActive: true
        },
        BackgroundImage: {
            scaleDownLargeImage: true,
            maxImageSizeKb: 10240, //1MB
            //fixedBackgroundUrl: '/examples/redactor/images/vanGogh.jpg',
            imagePosition: 'center',  // one of  'center', 'stretch', 'top-left', 'top-right', 'bottom-left', 'bottom-right'
            acceptedMIMETypes: ['image/jpeg', 'image/png', 'image/gif'] ,
            dynamicRepositionImage: true,
            dynamicRepositionImageThrottle: 100,
            cropIsActive: false
        },
        Text: {
            editIconMode : false,
            editIconSize : 'large',
            defaultValues : {
              fontSize: 72,
              lineHeight: 2,
              textFontWeight: 'bold'
            },
            predefined: {
              fontSize: [8, 12, 14, 16, 32, 40, 72],
              lineHeight: [1, 2, 3, 4, 6]
            }
        },
        Zoom: {
            enabled: true, 
            showZoomTooltip: true, 
            useWheelEvents: true,
            zoomStep: 1.05, 
            defaultZoom: 1, 
            maxZoom: 32,
            minZoom: 1, 
            smoothnessOfWheel: 0,
            //Moving:
            enableMove: true,
            enableWhenNoActiveTool: true,
            enableButton: true
        }
    },
    toolbars: {
        drawingTools: {
            position: 'top',         
            positionType: 'outside',
            customAnchorSelector: '#custom-toolbar-here',  
            compactType: 'scrollable',   
            hidden: false,     
            toggleVisibilityButton: false,
            fullscreenMode: {
                position: 'top', 
                hidden: false,
                toggleVisibilityButton: false
            }
        },
        toolOptions: {
            position: 'bottom', 
            positionType: 'inside',
            compactType: 'popup',
            hidden: false,
            toggleVisibilityButton: false,
            fullscreenMode: {
                position: 'bottom', 
                compactType: 'popup',
                hidden: false,
                toggleVisibilityButton: false
            }
        },
        settings : {
            position : 'right', 
            positionType: 'inside',					
            compactType : 'scrollable',
            hidden: false,	
            toggleVisibilityButton: false,
            fullscreenMode: {
                position : 'right', 
                hidden: false,
                toggleVisibilityButton: false
            }
        }
    },
    defaultActivePlugin : { name : 'Pencil', mode : 'lastUsed'},
    debug: true,
    activeColor: '#a1be13',
    transparentBackground: false,
    align: 'center',  //one of 'left', 'right', 'center', 'inline', 'floating'
    lineAngleTooltip: { enabled: true, color: 'blue',  fontSize: 15}
});

  $('#'+id).append(canvas.getHtml());
  canvas.onInsert();
  }


}
