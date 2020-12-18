import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoReferenceMapComponent } from './components/geo-reference-map/geo-reference-map.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GeoReferenceMapComponent,
    ChartComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ChartsModule,
    AgmCoreModule.forRoot()
  ],
  exports: [
    GeoReferenceMapComponent,
    ChartComponent,
  ],
  providers: [
    ThemeService
  ]
})
export class SharedModule { }
