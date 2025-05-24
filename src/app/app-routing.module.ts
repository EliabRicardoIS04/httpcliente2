import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoFormComponent } from './components/photo-form/photo-form.component';


import { InicioSecionComponent } from './components/inicio-secion/inicio-secion.component';

const routes: Routes = [


  { 
    path: 'photos/inicioSecion', 
    component: InicioSecionComponent
  },
  { 
    path: 'photos/new', 
    component: PhotoFormComponent 
  },
 
  { 
    path: '', 
    redirectTo: 'photos', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: 'photos' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
