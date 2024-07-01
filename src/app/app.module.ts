import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PanelComponent } from './panel/panel.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { TransferHttpCacheModule } from '@nguniversal/common';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    PanelComponent,
    RepositoriesComponent,
    OrganizationsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, TransferHttpCacheModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
