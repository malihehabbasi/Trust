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
  datasourcetable:any[];
  createProductDtoItems: CreateProductDto[];
  stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];

  value: string = 'off';
  

  cols = [
    { field: "name", header: "name" },
    { field: "type", header: "type" },
    { field: "id", header: "id" }
];
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
      this.getList();
    });
  }


  getList():void {
    this.productService.getList().subscribe((result) => {
      let a = JSON.stringify(result);
      let b=a.substring(a.indexOf('['),a.length-1);
    
       this.datasourcetable= JSON.parse(b);
    });


}
    
delete(id):void{

  this.productService.delete(id).subscribe((result) => {
    this.getList();
  });

  }
}
