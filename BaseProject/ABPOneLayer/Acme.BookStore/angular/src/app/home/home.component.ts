import { AuthService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { ProductService } from "@proxy";
import { CreateProductDto } from "@proxy";
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
      
      this.productService.getList().subscribe((result) => {
        this.createProductDtoItems=result;
       console.log(this.createProductDtoItems);
      });
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

}
