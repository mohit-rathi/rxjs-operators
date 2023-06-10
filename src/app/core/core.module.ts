import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, HomeComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
