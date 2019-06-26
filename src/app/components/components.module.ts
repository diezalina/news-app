import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewsComponent } from './news/news.component';
import { SingularNewsComponent } from './singular-news/singular-news.component';

@NgModule({
  declarations: [
    NewsComponent,
    SingularNewsComponent
  ], 
  exports: [
    NewsComponent,
    SingularNewsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
