using UrlShortener.Models;
using UrlShortener.Entities;
using UrlShortener.Services;

namespace UrlShortener.Mappers
{
    public  class ShortURLMapper
    {
        public  ShortURL MapToShortURL(ShortURLModel model)
        {
            var shortURL = new ShortURL
            {   
                OriginalURL = model.OriginalURL,
                ShortenedURL = "https://localhost:7044/redirect/" + new ShortUrlService().GenerateShortenedUrl(model.OriginalURL),
                URLdescription = model.URLdescription,
                CreatedByUserId = model.CreatedByUserId,
                CreatedDate = DateTime.Now,              
            };

            return shortURL;
        }

        public ShortURLModel MapToShortURLModel(ShortURL model)
        {
            var shortURLModel = new ShortURLModel
            {
                OriginalURL = model.OriginalURL,              
                URLdescription = model.URLdescription,
                CreatedByUserId = model.CreatedByUserId,
            };

            return shortURLModel;
        }

    }
}
