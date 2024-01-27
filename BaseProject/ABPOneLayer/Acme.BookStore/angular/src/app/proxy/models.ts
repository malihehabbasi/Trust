import type { EntityDto } from '@abp/ng.core';

export interface CreateProductDto extends EntityDto<number> {
  name?: string;
  type?: string;
}
