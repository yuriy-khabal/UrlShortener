using UrlShortener.Data.Repository.IRepository;

namespace UrlShortener.Data.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        public IShortURLRepository ShortUrl { get; private set; }
        public IUserRepository User { get;private set; }

        private ApplicationDbContext _db;

        public UnitOfWork(ApplicationDbContext db)
        {
            _db = db;
            ShortUrl = new ShortURLRepository(_db);
            User = new UserRepository(_db);
        }

        public void Save()
        {
            _db.SaveChanges();
        }

    }
}
