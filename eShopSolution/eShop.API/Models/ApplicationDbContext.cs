using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace eShop.API.Models
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions options) 
            : base(options)
        {

        }

        public DbSet<User> Users {  get; set; }
        public DbSet<Product> Products {  get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            InitUsers(builder);
        }

        private void InitUsers(ModelBuilder builder)
        {
            builder.Entity<User>().ToTable("Users");
            builder.Entity<Product>().ToTable("Products");
            builder.Entity<Category>().ToTable("Categories");
        }
    }
}
