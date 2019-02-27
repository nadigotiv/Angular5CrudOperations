import{Directive,ElementRef,Renderer2,Input, OnInit} from "@angular/core"
 @Directive({
     selector:'[smart-Text]'
 })
 export class SmartText implements OnInit {
     @Input() Config;
     constructor(private element:ElementRef, private render:Renderer2){

     }
     
     ngOnInit(){
        let fieldType='text';
        if (typeof this.Config !== 'undefined' && this.Config == 'password'){
            fieldType = 'password';
            }            
            this.render.setProperty(this.element.nativeElement, "type", fieldType);

     }
 }