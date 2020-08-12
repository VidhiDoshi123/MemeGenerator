import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  memes: Observable<any[]>;
  private data: { user_id: number; meme_id: number; image_data: string };
  constructor(private firestore: AngularFirestore) {
    

   }

   createMemes(meme_image: string) {

    this.data = {
    meme_id: 4,
    user_id: 1,
    image_data: meme_image,
    };
    
    
    return new Promise<any>((resolve, reject) =>{
    this.firestore
    .collection("memes")
    .add(this.data)
    .then(res => {}, err => reject(err));
    });
    }
}
