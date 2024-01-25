using Volo.Abp.Domain.Entities;

public class Product: Entity<long>
{
    public string Name { get; set; }
    public string Type { get; set; }
}