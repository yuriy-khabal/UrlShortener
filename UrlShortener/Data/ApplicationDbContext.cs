using Microsoft.EntityFrameworkCore;
using UrlShortener.Entities;

namespace UrlShortener.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) 
        { 
            
        }
        public DbSet<User> Users { get; set; }
        public DbSet<ShortURL> ShortURLs { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<User>()
                .HasKey(u => u.Id);

            modelBuilder
                .Entity<User>()
                .Property(u => u.Username)
                .IsRequired();

            modelBuilder
                .Entity<User>()
                .Property(u => u.Password)
                .IsRequired();

            modelBuilder
                .Entity<User>()
                .HasMany(u => u.ShortURLs)
                .WithOne(s => s.CreatedBy)
                .HasForeignKey(s => s.CreatedByUserId);

            modelBuilder
               .Entity<User>()
               .HasData(
                   new User
                   {
                       Id = 1,
                       Username = "Andriy",
                       Password = "05val89",
                       Role = "Admin"
                   }
               );

            modelBuilder
                .Entity<ShortURL>()
                .HasKey(s => s.Id);

            modelBuilder
                .Entity<ShortURL>()
                .Property(s => s.OriginalURL)
                .IsRequired();

            modelBuilder
                .Entity<ShortURL>()
                .Property(s => s.ShortenedURL)
                .IsRequired();

            modelBuilder
                .Entity<ShortURL>()
                .HasOne(s => s.CreatedBy)
                .WithMany(u => u.ShortURLs)
                .HasForeignKey(s => s.CreatedByUserId);

            modelBuilder
                .Entity<ShortURL>()
                .Property(s => s.CreatedDate)
                .IsRequired();

            modelBuilder
                .Entity<ShortURL>()
                .HasData(
                    new ShortURL
                    {
                        Id = 1,
                        OriginalURL = "https://www.youtube.com/",
                        ShortenedURL = "RT3OFD",
                        URLdescription = "Youtube",
                        CreatedByUserId = 1,
                        CreatedDate = DateTime.Now
                    }
                );            
        }
    }
}
