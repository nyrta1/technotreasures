import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutUsPageComponent } from './Pages/about-us-page/about-us-page.component';
import { CatalogPageComponent } from './Pages/catalog-page/catalog-page.component';
import { DiscountsPageComponent } from './Pages/discounts-page/discounts-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { HeaderComponent } from './Pages/Partails/header/header.component';
import { FooterComponent } from './Pages/Partails/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsPageComponent,
    CatalogPageComponent,
    DiscountsPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
