namespace UrlShortener.Data.Repository.IRepository
{
    public interface IUnitOfWork
    {
       public IShortURLRepository ShortUrl { get;}
       public IUserRepository User { get; }

       void Save();
    }
}
