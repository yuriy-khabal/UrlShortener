namespace UrlShortener.Models
{
    public class ShortURLGetModel
    {
        public int Id { get; set; }
        public string OriginalURL { get; set; }

        public string ShortenedUrl { get; set; }
        public string URLdescription { get; set; }
        public int CreatedByUserId { get; set; }

        public DateTime CreatedDate { get; set;}
    }
}
