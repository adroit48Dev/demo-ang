import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumsComponent } from './forums.component';
import { ForumComponent } from './forum/forum.component';


const routes: Routes = [
  {
    path: '',
    component: ForumsComponent,
    children:[
      {
        path: 'forum',
        component: ForumComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumsRoutingModule { }
