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

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'control', component: OptionsComponent },
  { path: 'students', component: StudentsComponent },
  { path: '', component: StudentsComponent },
  { path: '**', component: StudentsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    StudentsComponent,
    OptionsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
