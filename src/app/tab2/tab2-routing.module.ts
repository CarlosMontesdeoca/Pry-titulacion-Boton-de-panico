import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  //   children: [
  //     {
  //       path: 'new-contact',
  //       loadChildren: () => import('../new-contact/new-contact.module').then(m => m.NewContactPageModule)
  //     },
  //     {
  //       path: '',
  //       redirectTo: '/tab2',
  //       pathMatch: 'full'
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   redirectTo: '/tab2',
  //   pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
