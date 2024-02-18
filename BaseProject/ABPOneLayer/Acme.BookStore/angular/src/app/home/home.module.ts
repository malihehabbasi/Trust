import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TestComponent } from '../home/test/test.component';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes=[
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'Test',component:TestComponent

      },
    ]
  }
];
@NgModule({
  declarations: [HomeComponent],

  imports: [SharedModule, HomeRoutingModule,ButtonModule,InputTextModule,InputMaskModule,SelectButtonModule,TableModule,TestComponent,RouterModule.forChild(routes) ],
})
export class HomeModule {}
