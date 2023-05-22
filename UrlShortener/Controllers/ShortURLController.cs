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

        [HttpGet]
        public IActionResult GetAllUrls()
        {
            var objUrlsList = _dbContext.ShortURLs.ToList();

            return Ok(objUrlsList);
        }

        [HttpGet("{id}")]

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

        [HttpPost]
        public IActionResult Create([FromBody]ShortURLModel shortUrlModel)
        {
            var existingUrl = _dbContext.ShortURLs.FirstOrDefault(u => u.OriginalURL == shortUrlModel.OriginalURL);
            if (existingUrl != null)
            {
                return BadRequest("URL already exists.");
            }

            var mapper = new ShortURLMapper();
            var shortUrl = mapper.MapToShortURL(shortUrlModel);

            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid validation");
            }

            _dbContext.Add(shortUrl);
            _dbContext.SaveChanges();

            return CreatedAtAction(nameof(GetUrl), new { id = shortUrl.Id }, shortUrl);

        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUrl(int id)
        {
            var url = _dbContext.ShortURLs.FirstOrDefault(u => u.Id == id);
            if (url == null)
            {
                return NotFound();
            }

            _dbContext.ShortURLs.Remove(url);
            _dbContext.SaveChanges();

            return Ok(url);
        }

    }
}
