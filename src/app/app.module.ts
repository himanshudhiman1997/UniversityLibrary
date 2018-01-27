import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { NewcompComponent } from './newcomp/newcomp.component';
import { HeaderComponent } from './header/header.component';
import { BooksService } from './books.service';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DatatableComponent } from './datatable/datatable.component';

const appRoutes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home', component: MainPageComponent},
  {path: 'requestbook', component: RequestBookComponent},
  {path:'**',component:PageNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
  //  NewcompComponent,
    HeaderComponent,
    MainPageComponent,
    FooterComponent,
    RequestBookComponent,
    PageNotFoundComponent,
    DatatableComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
