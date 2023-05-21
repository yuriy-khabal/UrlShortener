using System.Security.Cryptography;
using System.Text;

namespace UrlShortener.Services
{
    public class ShortUrlService
    {
        public string GenerateShortenedUrl(string originalUrl)
        {
            using (var md5 = MD5.Create())
            {
                byte[] inputBytes = Encoding.UTF8.GetBytes(originalUrl);
                byte[] hashBytes = md5.ComputeHash(inputBytes);

                // Взяти частину хешу як скорочену URL
                string hashString = BitConverter.ToString(hashBytes).Replace("-", "").Substring(0, 8);

                return hashString;
            }
        }
    }
}
