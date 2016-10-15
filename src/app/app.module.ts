import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumsSearchComponent } from './albums-search/albums-search.component';
import { AlbumsNewReleasedComponent } from './albums-new-released/albums-new-released.component';
import { AlbumsDetailComponent } from './albums-detail/albums-detail.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AlbumsListComponent,
    AlbumsSearchComponent,
    AlbumsNewReleasedComponent,
    AlbumsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
