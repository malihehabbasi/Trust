using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

public class ProductAppService :
    CrudAppService< //Defines CRUD methods
        Product,
        CreateProductDto, //Used to show books
        long, //Primary key of the book entity
        PagedAndSortedResultRequestDto, //Used for paging/sorting
        CreateProductDto>, IProductAppService
{
    public ProductAppService(IRepository<Product, long> repository): base(repository)
    {
    }
}

