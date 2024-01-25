using Volo.Abp.Application.Dtos;

public class CreateProductDto: EntityDto<long>
{
    public string Name { get; set; }
    public string Type { get; set; }
}