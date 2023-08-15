import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-reform',
  templateUrl: './reform.component.html',
  styleUrls: ['./reform.component.css']
})
export class ReformComponent implements OnInit {
  regions = ["Приморский", "Odesa", "Kiyv", "Kharkiv", "Lviv", "Chernivtsi"];
  registerForm = new FormGroup({
    avatar: new FormControl(""),
    login: new FormControl("", [Validators.required, Validators.pattern(/^\w\w\w+$/)]),
    realName: new FormControl("", [ Validators.required, Validators.pattern(/^\w\w\w+$/)]),
    birthdate: new FormControl(""),
    gender: new FormControl("", [ Validators.required ]),
    agree: new FormControl("", [ Validators.requiredTrue ]),
    region: new FormControl("", [ Validators.required ]),
  });
  constructor() { }

  ngOnInit(): void {
  }
  
  regClick(): void {
    console.log(this.registerForm.valid, this.registerForm.value);
    this.registerForm.markAllAsTouched();
  }
}
