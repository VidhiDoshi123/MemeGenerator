
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
     console.log(result);

     let users={
      'userId':result.user.uid, 
      'isLogged':true
    };
    localStorage.clear();
    localStorage.setItem('key', JSON.stringify(users));
     this.route.navigate(['/generator']);
     }).catch((error) => { console.log(error) }) }

     signOut() {
       this.afAuth.signOut();
        this.route.navigate(['/']);
        localStorage.clear();
       }

      Authenticate():boolean
     {
      let user=JSON.parse(localStorage.getItem('key'));
      console.log(user);
      if(user!=null){
      if(user.isLogged){
        return true;
      }
      else{
        return false;
      }
     }
     return false;
    }
    

    

    
}

