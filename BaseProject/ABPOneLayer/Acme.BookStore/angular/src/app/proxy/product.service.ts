import type { CreateProductDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiName = 'Default';
  

  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/product/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CreateProductDto>({
      method: 'GET',
      url: `/api/app/product/${id}`,
    },
    { apiName: this.apiName,...config });
  
    create = (input: CreateProductDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CreateProductDto>({
      method: 'POST',
      url: '/api/app/product',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  // getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
  //   this.restService.request<any, PagedResultDto<CreateProductDto>>({
  //     method: 'GET',
  //     url: '/api/app/product',
  //     params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
  //   },
  //   { apiName: this.apiName,...config });
  

    getList = ( config?: Partial<Rest.Config>) =>
    this.restService.request<any, CreateProductDto[]>({
      method: 'GET',
      url: '/api/app/product',
    },
    { apiName: this.apiName,...config });

  update = (id: number, input: CreateProductDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CreateProductDto>({
      method: 'PUT',
      url: `/api/app/product/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
