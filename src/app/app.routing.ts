import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsSearchComponent } from './albums-search/albums-search.component';
import { AlbumsNewReleasedComponent } from './albums-new-released/albums-new-released.component';
import { AlbumsDetailComponent } from './albums-detail/albums-detail.component';

const appRoutes: Routes = [{
   path: '', 
   component: AlbumsNewReleasedComponent
},{
  path: 'search',
  component: AlbumsSearchComponent
},{
  path: 'albums/:id',
  component: AlbumsDetailComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
