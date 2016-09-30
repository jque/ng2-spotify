import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumsDetailComponent } from './albums-detail/albums-detail.component';

const appRoutes: Routes = [{
  path: '',
  component: AlbumsListComponent
},{
  path: 'albums/:id',
  component: AlbumsDetailComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
