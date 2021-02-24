import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapacityPlannerComponent } from './capacity-planner/capacity-planner.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },  
  { path: 'home', component: HomeComponent },  
  { path: 'capacity-planner', component: CapacityPlannerComponent },  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
