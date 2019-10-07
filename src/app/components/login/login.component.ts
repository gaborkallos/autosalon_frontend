import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth/auth.service';
import {Administrator} from '../../models/administrator/administrator';
import {AdminService} from '../../service/admin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formbuilder: FormBuilder,
    private authservice: AuthService,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
    this.returnUrl = '/';
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const admin: Administrator = this.loginForm.value;
    this.authservice.login(admin);
  }

}
