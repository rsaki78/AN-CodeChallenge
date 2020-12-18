import { AuthenticationModule } from './../Modules/authentication/authentication.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BlankComponentComponent } from './blank-component/blank-component.component';
import { NavigationComponent } from './main-layout/navigation/navigation.component';
import { FooterComponent } from './main-layout/footer/footer.component';

// ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MainLayoutComponent,
    BlankComponentComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,

    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class LayoutModule { }
