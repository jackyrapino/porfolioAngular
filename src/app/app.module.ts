import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { SkillsComponent } from './components/skills/skills.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PresentationComponent,
    AboutMeComponent,
    SkillsComponent,
    TimelineComponent,
    ContactComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
