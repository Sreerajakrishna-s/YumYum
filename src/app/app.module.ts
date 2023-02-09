import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  {
    path:'', component:HomeComponent,pathMatch:'full'
  }, 
  {
    path:'about', component:AboutComponent
  }, 
  {
    path:'book', component:BookComponent

  }, 
  {
    path:'cart', component:CartComponent
  },
 
  {
    path:'menu', component:MenuComponent
  }, 


];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BookComponent,
    CartComponent,
    ProfileComponent,
    SearchComponent,
    AboutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
