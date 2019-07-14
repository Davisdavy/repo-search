import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { HomeComponent } from '../home/home.component';
import { RepositoryComponent } from '../repository/repository.component';
import { PageErrorComponent} from '../page-error/page-error.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'repo', component: RepositoryComponent},
  {path: '' , redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageErrorComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
