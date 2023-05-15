import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentsComponent } from './components/students/students.component';
import { OptionsComponent } from './components/options/options.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterActivatedServiceService } from './services/router-activated-service.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContentComponent } from './components/content/content.component';
import { LoginActivatedService } from './services/login-activated.service';

const routes: Routes = [
  { path: 'register', component: RegisterComponent , canActivate: [LoginActivatedService]},
  {path: 'content', component: ContentComponent, canActivate: [LoginActivatedService]},
  {path: 'control', component: OptionsComponent,canActivate: [RouterActivatedServiceService]},
  {path: 'control/:id', component: OptionsComponent,canActivate: [RouterActivatedServiceService]},
  {path: 'students', component: StudentsComponent,canActivate: [RouterActivatedServiceService]},
  {path: '', component: StudentsComponent,canActivate: [RouterActivatedServiceService]},
  {path: '**', component: StudentsComponent,canActivate: [RouterActivatedServiceService]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    StudentsComponent,
    OptionsComponent,
    ContentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
