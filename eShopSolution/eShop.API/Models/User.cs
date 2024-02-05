using Microsoft.AspNetCore.Identity;

namespace eShop.API.Models
{
    public class User : IdentityUser
    {
        public string FullName { get; set; }
        public string Image { get; set; }
        public bool IsActive { get; set; }
    }
}
