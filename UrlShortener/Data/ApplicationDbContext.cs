using Microsoft.EntityFrameworkCore;

namespace UrlShortener.Data
{
    public class ApplicationDbContext : DbContext
    {   
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) 
        { 
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /*modelBuilder
                .Entity<>()
                .T*/
        }
    }
}
