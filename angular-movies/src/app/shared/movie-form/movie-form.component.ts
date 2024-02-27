import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss',
})
export class MovieFormComponent implements OnInit {
  movieForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      title: '',
      overview: '',
      image: '',
      'release-date': '',
      budget: 0,
      revenue: 0,
      popularity: 0,
      homepage: '',
    });
  }

  onSubmit(): void {
    console.log(this.movieForm.value);
  }
}
