import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { MemesComponent } from './components/memes/memes.component';
import { HomeComponent } from './home/home.component';
import { UserMemesComponent } from './user-memes/user-memes.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

// const JWT_Module_Options: JwtModuleOptions = {
//   config: {
//       tokenGetter: yourTokenGetter,
//       whitelistedDomains: yourWhitelistedDomains
//   }
// };
@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    MemesComponent,
    HomeComponent,
    UserMemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    // JwtModule.forRoot(JWT_Module_Options)
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
