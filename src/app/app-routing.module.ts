import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneratorComponent } from './components/generator/generator.component';
import { MemesComponent } from './components/memes/memes.component';
import {HomeComponent} from './home/home.component';
import {UserMemesComponent} from './user-memes/user-memes.component';
const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'generator' , component: GeneratorComponent},
  {path: 'viewall' , component: MemesComponent},
  {path: 'mygallery' , component: UserMemesComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
