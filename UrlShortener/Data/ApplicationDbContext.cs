using Microsoft.EntityFrameworkCore;
using UrlShortener.Models;

namespace UrlShortener.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<ShortURL> ShortURLs { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) 
        { 
            
        }

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
        }
    }
}
