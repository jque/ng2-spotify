import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      search: ['', <any>Validators.required]
    });
  }

  submit(): void {
    if (this.form.valid) {
      const value: string = this.form.value.search.trim();
      this.router.navigate(['/search', {q: value}]);
    }
  }
}
