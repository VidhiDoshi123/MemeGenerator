import { Component, OnInit } from '@angular/core';
import {MemesService} from '../services/memes.service';
@Component({
  selector: 'app-user-memes',
  templateUrl: './user-memes.component.html',
  styleUrls: ['./user-memes.component.css']
})
export class UserMemesComponent implements OnInit {

  user_memes: any;

  constructor(private memesService:MemesService) { }

  ngOnInit(): void {

    // this.getMemes();
  }

//   getMemes = () =>
// this.memesService.getMemesOfUser().subscribe(res =>(this.user_memes = res));
}
