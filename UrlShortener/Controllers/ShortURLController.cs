using Microsoft.AspNetCore.Mvc;

namespace UrlShortener.Controllers
{
    public class ShortURLController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
