import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyCardComponent } from './family-members/family-card/family-card.component';
import { FamilyCardCounterComponent } from './family-members/family-card-counter/family-card-counter.component';
import { FamilyCardChildrenComponent } from './family-members/family-card-children/family-card-children.component';
import { FamilyCardAdultsComponent } from './family-members/family-card-adults/family-card-adults.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyCardComponent,
    FamilyCardCounterComponent,
    FamilyCardChildrenComponent,
    FamilyCardAdultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
