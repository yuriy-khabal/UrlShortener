namespace UrlShortener.Models
{
    public class ShortURLModel
    {
        public int Id { get; set; }
        public string OriginalURL { get; set; }
        public string URLdescription { get; set; }
        public int CreatedByUserId { get; set; }   

    }
}
