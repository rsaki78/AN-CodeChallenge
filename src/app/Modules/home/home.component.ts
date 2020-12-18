import { FormatHelper } from './../../shared/core/format.helpers';
import { RssService } from './../../services/rss/rss.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formatHelper = FormatHelper.getInstance();
  holidaysResponse: any = null;
  cameraLensResponse: any = null;

  pieChartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  pieChartData = [300, 500, 100];

  constructor(
    private rssService: RssService
  ) {
  }

  ngOnInit() {
    this.loadHolidays();
    this.loadCameraLens();
  }

  loadHolidays() {
    this.rssService.getHolidays().subscribe(response => {
      this.holidaysResponse = response;
    });
  }

  loadCameraLens() {
    this.rssService.getCameraLens().subscribe(response => {
      this.cameraLensResponse = response;
    });
  }

  isUserAuthenticated() {
    return this.formatHelper.getUserLogged() != null;
  }

}
