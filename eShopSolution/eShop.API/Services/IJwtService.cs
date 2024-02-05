namespace eShop.API.Services
{
    public interface IJwtService
    {
        string GenerateJwtToken(string userId);
    }
}
