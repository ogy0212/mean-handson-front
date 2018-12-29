import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { MyBindingsComponent } from './my-bindings/my-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    NewcompComponent,
    MyBindingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
