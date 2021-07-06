import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumsRoutingModule } from './forums-routing.module';
import { ForumsComponent } from './forums.component';
import { ForumComponent } from './forum/forum.component';


@NgModule({
  declarations: [ForumsComponent, ForumComponent],
  imports: [
    CommonModule,
    ForumsRoutingModule
  ]
})
export class ForumsModule { }
