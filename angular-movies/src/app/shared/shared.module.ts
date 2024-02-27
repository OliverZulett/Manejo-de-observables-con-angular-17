import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, MovieFormComponent],
  exports: [NavbarComponent, MovieFormComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
