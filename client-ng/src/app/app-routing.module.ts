import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './componenets/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// D Es posible encadenar routings, en lugar de usar la palabra "component" usamos "redirect". Al hacer esto
// podemnos crear independencia porque podemos crear un arbol completo de urls

// D Repaso de Observables junto con los ".pipe()" de los eventos.

// D Junto con los observavles estan los "forkjoin" que serian como los promise.all
