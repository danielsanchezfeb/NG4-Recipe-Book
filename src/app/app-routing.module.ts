import { HomeComponent } from './core/home/home.component';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NgModule} from '@angular/core';

const appRoutes:Routes=[
  {path: '',component:HomeComponent},
  {path:'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'}
];

@NgModule({
imports:[
  RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
],
exports:[RouterModule]
})
export class AppRoutingModule{}
