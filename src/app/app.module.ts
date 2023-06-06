import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { OperatorModule } from './operator/operator.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, OperatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
