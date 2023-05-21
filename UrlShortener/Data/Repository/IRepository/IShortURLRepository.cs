using UrlShortener.Models;

namespace UrlShortener.Data.Repository.IRepository
{
    public interface IShortURLRepository : IRepository<ShortURLModel>
    {
        void Update(ShortURLModel shortURL);
    }
}
