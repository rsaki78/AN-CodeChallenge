import { Router } from '@angular/router';
import { FormatHelper } from './../../shared/core/format.helpers';
import { SessionService } from './../../services/session/session.service';
import { BaseComponent } from './../../shared/core/Base Components/base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends BaseComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
  }

  doLogout() {
    localStorage.clear();
    this.sessionService.logout();
    this.router.navigate(['/']);
  }

}
