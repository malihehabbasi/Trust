using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

internal interface IProductAppService :
    ICrudAppService< //Defines CRUD methods
        CreateProductDto, //Used to show books
        long, //Primary key of the book entity
        PagedAndSortedResultRequestDto, //Used for paging/sorting
        CreateProductDto>
{
}