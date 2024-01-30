import { AuthService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { ProductService } from "@proxy";
import { CreateProductDto } from "@proxy";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }
  newid:string='';
  newname:string='';
  newtype:string='';
  createProductDtoItems: CreateProductDto[];
  stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];

  value: string = 'off';
  


  createProductDto :CreateProductDto={
    id:0,
    name:'',
    type:'',
  }

  constructor(
      private authService: AuthService
    , private productService: ProductService
    ) {}

    ngOnInit(): void {
      
      this.getList();
    }
  
  login() {
    this.authService.navigateToLogin();
  }

 
  create(): void{

    this.createProductDto.name=this.newname;
    this.createProductDto.type=this.newtype;

    this.productService.create(this.createProductDto).subscribe((result) => {
      this.newname = "";
      this.newtype = "";
    });
  }


  getList():void {
    this.productService.getList().subscribe((result) => {
      this.createProductDtoItems=result;
    

     for (var i = 0; i < this.createProductDtoItems.length; i++){
      console.log("sss");
     }
     


    });
  }
}
