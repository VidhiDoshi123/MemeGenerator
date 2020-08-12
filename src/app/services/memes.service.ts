import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class MemesService {

  constructor(private firestore: AngularFirestore) { }

  getMemes() { 
    return this.firestore.collection("memes").snapshotChanges();
  }
  getMemesOfUser(userId: number){
    return this.firestore.collection("memes", ref => ref.where('user_id', '==', userId)).snapshotChanges();
    }
}
