import { Component, OnInit, ViewChild } from '@angular/core';
import {GeneratorService} from '../../services/generator.service';
import {AuthenticationService} from '../../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  @ViewChild('memeCanvas',{static:false}) myCanvas;

  topText: string = '';
  bottomText: string = '';
  fileEvent: any;
  public fontsize:number=50;
  constructor(private generatorService: GeneratorService,private auth:AuthenticationService,private route:Router) { }
  user;

  
  async ngOnInit() {
    let a=await this.auth.Authenticate();
    if(a==null){
      this.route.navigate(['/']);
    }
    
  }

  preview(e:any){
    this.fileEvent=e;
    let canvas=this.myCanvas.nativeElement;
    let ctx=canvas.getContext('2d');

    let render =new FileReader();
    render.readAsDataURL(e.target.files[0]);
    render.onload = function(event){

      const img=new Image();
      img.src= event.target.result as string;
      img.onload=function(){
        ctx.drawImage(img,50,150,200,200);
      }
    }
    
  }

  drawText(){
    let canvas=this.myCanvas.nativeElement;
    let ctx=canvas.getContext('2d');
    this.preview(this.fileEvent); 
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    ctx.fillStyle = 'black';
    ctx.textAlign='center';
    ctx.font =this.fontsize+'px sans-serif';
   
    ctx.fillText(this.topText,canvas.width/2,100);
    ctx.fillText(this.bottomText,canvas.width/2,500);

  }
  downloadImg(download_type:string){
    let canvas= this.myCanvas.nativeElement;
    let image= canvas.toDataURL('image/png');
    console.log(image);
    if(download_type=='save'){
      this.generatorService.createMemes(image).then(res => {
        alert(res);
        });
    }
    else{
    let link =document.createElement('a');
    link.download = 'memeImg.png';
    link.href= image;
    link.click();
    }
  }

}
