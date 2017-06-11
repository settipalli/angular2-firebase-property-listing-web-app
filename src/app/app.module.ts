import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";

import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";

import {environment} from "environments/environment";

import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {NavbarComponent} from "./components/navbar/navbar.component";

import {FirebaseService} from "./services/firebase.service";
import {PropertiesComponent} from "./components/properties/properties.component";
import {PropertyComponent} from "./components/property/property.component";
import {FlashMessagesModule} from "angular2-flash-messages";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'properties', component: PropertiesComponent},
  {path: 'properties/:id', component: PropertyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PropertiesComponent,
    PropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlashMessagesModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
