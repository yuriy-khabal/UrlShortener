using UrlShortener.Data.Repository.IRepository;
using UrlShortener.Entities;

namespace UrlShortener.Data.Repository
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        private ApplicationDbContext _db;
        public UserRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Update(User user)
        {
            _db.Update(user);
        }
    }
}
