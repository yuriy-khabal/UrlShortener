namespace UrlShortener.Entities
{
    public class ShortURL
    {
        public int Id { get; set; }
        public string OriginalURL { get; set; }
        public string ShortenedURL { get; set; }
        public string URLdescription { get; set; }
        public int CreatedByUserId { get; set; }
        public DateTime CreatedDate { get; set; }
        public User CreatedBy { get; set; }
    }
}
