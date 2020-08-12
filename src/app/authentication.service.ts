import { Injectable } from '@angular/core';
import { auth } from 'firebase/app'; 
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(public afAuth: AngularFireAuth,private route:Router) { }

  GoogleAuth() { return this.AuthLogin(new auth.GoogleAuthProvider()); }

   AuthLogin(provider) { 
     return this.afAuth.signInWithPopup(provider).then((result) => { console.log('You have been successfully logged in!');
     this.route.navigate(['/generator']);
     }).catch((error) => { console.log(error) }) }

     signOut() {this.afAuth.signOut(); this.route.navigate(['/']); }

     async Authenticate()
     {
       let a=null;
       await this.afAuth.onAuthStateChanged(function(user) { 
         if (user) { // User is signed in. 
           a=user.uid;
        } else{
          a=null;
        } 
       });
         return a;
     }

    
}
