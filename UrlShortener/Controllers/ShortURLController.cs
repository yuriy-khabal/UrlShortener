using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Reflection.PortableExecutable;
using UrlShortener.Data;
using UrlShortener.Mappers;
using UrlShortener.Models;
using UrlShortener.Services;

namespace UrlShortener.Controllers
{
    [ApiController]     
    [Route("urls")]
    public class ShortURLController : Controller
    {   
        private readonly ApplicationDbContext _dbContext;

        public ShortURLController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("get")]

        public IActionResult GetAllUrls()
        {
            var objUrlsList = _dbContext.ShortURLs.ToList();

            return Ok(objUrlsList);
        }

        [HttpGet("get/{id}")]

        public IActionResult GetUrl(int Id)
        {
            if (Id == null || Id == 0)
            {
                return NotFound();
            }

            var objUrl = _dbContext.ShortURLs.FirstOrDefault(u => u.Id == Id);

            if (objUrl == null)
            {
                return NotFound();
            }

            return Ok(objUrl);
        }

        [HttpGet("{shortenedUrl}")]

        public IActionResult GetUrl(string shortenedUrl)
        {

            var objUrl = _dbContext.ShortURLs.FirstOrDefault(u => u.ShortenedURL == "https://localhost:7044/urls/" + shortenedUrl);

            if (objUrl == null)
            {
                return NotFound();
            }

            return Redirect(objUrl.OriginalURL);
        }


        [HttpPost("create")]
        public IActionResult Create([FromBody]ShortURLModel shortUrlModel)
        {
            var existingUrl = _dbContext.ShortURLs.FirstOrDefault(u => u.OriginalURL == shortUrlModel.OriginalURL);
            if (existingUrl != null)
            {
                return BadRequest("URL already exists.");
            }

            var mapper = new ShortURLMapper();
            var shortUrl = mapper.MapToShortURL(shortUrlModel);

            _dbContext.Add(shortUrl);
            _dbContext.SaveChanges();

            return CreatedAtAction(nameof(GetUrl), new { id = shortUrl.Id }, shortUrl);

        }

        [HttpDelete("remove/{id}")]
        public IActionResult DeleteUrl(int id)
        {
            var url = _dbContext.Users.FirstOrDefault(u => u.Id == id);
            if (url == null)
            {
                return NotFound();
            }

            _dbContext.Users.Remove(url);
            _dbContext.SaveChanges();

            return Ok(url);
        }

        /*private string GenerateShortenedUrlCode()
        {
            // Implement your code generation logic here
            // Example: Generate a random alphanumeric string
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var random = new Random();
            string code = new string(Enumerable.Repeat(chars, 6)
                .Select(s => s[random.Next(s.Length)]).ToArray());
            return code;
        }*/
    }
}
