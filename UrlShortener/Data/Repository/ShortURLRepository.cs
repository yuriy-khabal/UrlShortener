using System.Linq.Expressions;
using UrlShortener.Data.Repository.IRepository;
using UrlShortener.Entities;

namespace UrlShortener.Data.Repository
{
    public class ShortURLRepository : Repository<ShortURL>, IShortURLRepository
    {
        private readonly ApplicationDbContext _db;      
        public ShortURLRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Update(ShortURL shortURL)
        {
            _db.Update(shortURL);
        }

    }
}
