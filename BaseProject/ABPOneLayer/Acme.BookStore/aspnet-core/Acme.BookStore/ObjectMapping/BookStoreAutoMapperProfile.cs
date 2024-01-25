using AutoMapper;

namespace Acme.BookStore.ObjectMapping;

public class BookStoreAutoMapperProfile : Profile
{
    public BookStoreAutoMapperProfile()
    {
        /* Create your AutoMapper object mappings here */
        CreateMap<Product, CreateProductDto>();
        CreateMap<CreateProductDto, Product>();
    }
}
