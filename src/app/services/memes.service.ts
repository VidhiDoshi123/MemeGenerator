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

    updateLike(meme){
      //console.log(meme.payload.doc.data().like);
      if(meme.payload.doc.data().like==true){
        alert("You disliked this meme");
        return this.firestore
        .collection("memes")
        .doc(meme.payload.doc.id)
        .set({ like: false }, { merge: true });
        
      }
      else{
        alert("You liked this meme");
        return this.firestore
        .collection("memes")
        .doc(meme.payload.doc.id)
        .set({ like: true }, { merge: true });
  
      }
}

updateBookmark(meme){
  
  if(meme.payload.doc.data().bookmark==true){
    alert("You unbookmarked this meme");
    return this.firestore
    .collection("memes")
    .doc(meme.payload.doc.id)
    .set({ bookmark: false }, { merge: true });
    
  }
  else{
    alert("You bookmarked this meme");
    return this.firestore
    .collection("memes")
    .doc(meme.payload.doc.id)
    .set({ bookmark: true }, { merge: true });

  }
}
}
