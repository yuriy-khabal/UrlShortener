using UrlShortener.Entities;

namespace UrlShortener.Data.Repository.IRepository
{
    public interface IShortURLRepository : IRepository<ShortURL>
    {
        void Update(ShortURL shortURL);
    }
}
