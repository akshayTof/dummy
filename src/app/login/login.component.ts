import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { tokenReference } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder,  private router: Router) { 
    this.messageForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    if(this.messageForm.controls.email.value == 'admin@tof.com' && this.messageForm.controls.password.value == 'qwerty' ) {
      console.log(this.messageForm.controls.email.value);
      this.success = true;
      this.router.navigate(['dash']);
    } else {
      return;
    }
   
  }

  ngOnInit() {
  }
}
