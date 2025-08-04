import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentList } from './components/component-list/component-list';
import { ComponentDetail } from './components/component-detail/component-detail';

const routes: Routes = [
  { path: '', component: ComponentList },
  { path: 'components', component: ComponentList },
  { path: 'component-detail', component: ComponentDetail }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KmatRoutingModule { }
