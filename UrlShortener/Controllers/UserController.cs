using Microsoft.AspNetCore.Mvc;
using UrlShortener.Data;

namespace UrlShortener.Controllers
{
    [ApiController]
    [Route("users")]
    public class UserController : Controller
    {
        private readonly ApplicationDbContext _dbContext;

        public UserController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            var objGetUsers = _dbContext.Users.ToList();

            return Ok(objGetUsers);
        }

        [HttpGet("{id}")]

        public IActionResult GetUser(int Id)
        {
            if (Id == null || Id == 0)
            {
                return NotFound();
            }

            var objUser = _dbContext.Users.FirstOrDefault(u => u.Id == Id);

            if (objUser == null)
            {
                return NotFound();
            }

            return Ok(objUser);
        }
    }
}

