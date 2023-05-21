using Microsoft.AspNetCore.Mvc;
using UrlShortener.Data;
using UrlShortener.Models;

namespace UrlShortener.Controllers
{
    public class ShortURLController : Controller
    {
        private readonly ApplicationDbContext _dbContext;

        public ShortURLController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetUrls()
        {   
            var objUrlsList = _dbContext.ShortURLs.ToList();
            return View(objUrlsList);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]

        public IActionResult Create(ShortURL obj)
        {
            return View();
        }
    }
}
