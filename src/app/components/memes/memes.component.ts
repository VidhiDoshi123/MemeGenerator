import { Component, OnInit } from '@angular/core';
import {GeneratorService} from '../../services/generator.service';
import { MemesService} from '../../services/memes.service';

import { AuthenticationService } from 'src/app/authentication.service';
@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {

  memes: any;
  bookmarked_memes=[];

  constructor(private memesService:MemesService,public auth:AuthenticationService) { }

  ngOnInit() {

    
    this.memesService.getMemes().subscribe(res=>{this.memes = res;
      
      this.bookmarked_memes=this.memes.filter(function(eachMeme){
        
        return eachMeme.payload.doc.data().bookmark;
      
    }
      
     
    )
      console.log(this.bookmarked_memes);
  });
  }

  updateLike(memeID){
      for(var i=0;i<this.memes.length;i++){
        if(memeID==i){
          this.memesService.updateLike(this.memes[i]);
        }
      }
  }
  updateBookmark(memeID){
    for(var i=0;i<this.memes.length;i++){
      if(memeID==i){
        this.memesService.updateBookmark(this.memes[i]);
      }
    }
}

}
  


