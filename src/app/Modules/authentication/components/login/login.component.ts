import { FormatHelper } from './../../../../shared/core/format.helpers';
import { SessionService } from './../../../../services/session/session.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as uuid from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formatHelper = FormatHelper.getInstance();
  formGroup: FormGroup;
  get form() { return this.formGroup.controls; }

  constructor(
    private fb: FormBuilder,
    private sessionService: SessionService,
    private router: Router,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.formGroup = this.fb.group({
      userName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
    });
  }

  doLogin() {
    if (this.formGroup.valid) {
      const data = this.formGroup.value;

      if (data.userName === 'test@mail.com' && data.password === 'q!w"e#r$') {
        const token = uuid.v4();
        const profile = {
          userName: data.userName,
          firstName: 'Code',
          lastName: 'Challenge'
        };

        this.sessionService.login(token);
        this.formatHelper.setUserLogged(profile);
        this.router.navigate(['/admin']);
      }
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

}
