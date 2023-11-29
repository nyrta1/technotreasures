import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { DiscountsPageComponent } from './Pages/discounts-page/discounts-page.component';
import { CatalogPageComponent } from './Pages/catalog-page/catalog-page.component';
import { AboutUsPageComponent } from './Pages/about-us-page/about-us-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, title: 'Home'},
  {path: 'login', component: LoginPageComponent, title: 'Login'},
  {path: 'register', component: RegisterPageComponent, title: 'Register'},
  {path: 'discounts', component: DiscountsPageComponent, title: 'Discounts'},
  {path: 'catalog', component: CatalogPageComponent, title: 'Catalog'},
  {path: 'about-us', component: AboutUsPageComponent, title: 'About Us'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
