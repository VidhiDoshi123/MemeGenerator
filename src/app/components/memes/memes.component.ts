import { Component, OnInit } from '@angular/core';
import {GeneratorService} from '../../services/generator.service';
import { MemesService} from '../../services/memes.service';
@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {

  memes: any;

  constructor(private memesService:MemesService) { }

  ngOnInit(): void {

    this.getMemes();
  }

  getMemes = () =>
this.memesService.getMemes().subscribe(res =>(this.memes = res));
}
