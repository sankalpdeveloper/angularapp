import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guard/auth.guard';
import { UserEditComponent } from './user-edit/user-edit.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { MultiselectComponent } from './multiselect/multiselect.component'
import { TreeStructureComponent } from './tree-structure/tree-structure.component'

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    component:UserComponent,
  },
  {
    path: 'edit/:id',
    component:UserEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "google-map",
    component: GoogleMapComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "datepicker",
    component: DatepickerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "image-upload",
    component: ImageUploadComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'multiselect',
    component: MultiselectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "tree",
    component: TreeStructureComponent,
    canActivate: [AuthGuard],
  },
  {
     path: 'login',
     component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  },
  {
    path: ' ',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
