import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    n: new FormControl('',
      [Validators.required, Validators.minLength(6)]),
    e: new FormControl('',
      [Validators.required, Validators.email]),
  })
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.contactForm);
  }
}
