import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { ExpanderPrototype } from './expander-prototype-component/expander-prototype.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Added for animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    // My stuff
    //ExpanderPrototype
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Added for animation
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
