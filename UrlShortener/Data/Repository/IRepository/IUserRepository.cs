using UrlShortener.Models;
namespace UrlShortener.Data.Repository.IRepository
{
    public interface IUserRepository : IRepository<User>
    {
        void Update(User user);
    }
}
