using Microsoft.AspNetCore.Mvc;

namespace UrlShortener.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
