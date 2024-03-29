import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Tab2Page2Page } from './page2.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Tab2Page },
      { path: 'page2', component: Tab2Page2Page }
    ])
  ],
  declarations: [Tab2Page, Tab2Page2Page]
})
export class Tab2PageModule {}
