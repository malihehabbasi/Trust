import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule,ButtonModule,InputTextModule,InputMaskModule,SelectButtonModule,TableModule ],
})
export class HomeModule {}
