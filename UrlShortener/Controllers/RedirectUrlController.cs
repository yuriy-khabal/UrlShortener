using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UrlShortener.Data;

namespace UrlShortener.Controllers
{
    [ApiController]
    [Route("redirect")]
    public class RedirectUrlController : Controller
    {
        private readonly ApplicationDbContext _dbContext;

        public RedirectUrlController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("{shortenedUrl}")]
        public IActionResult GetUrl(string shortenedUrl)
        {
            const string path = "https://localhost:7044/redirect/";
            var objUrl = _dbContext.ShortURLs.FirstOrDefault(u => u.ShortenedURL == path + shortenedUrl);

            if (objUrl == null)
            {
                return NotFound();
            }

            return Redirect(objUrl.OriginalURL);
        }
    }
}
