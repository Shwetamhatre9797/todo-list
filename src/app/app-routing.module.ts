import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Mycomponents/aboutus/aboutus.component';
import { TodosComponent } from './Mycomponents/todos/todos.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent},
  { path: 'Aboutus', component: AboutusComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AboutusComponent]
