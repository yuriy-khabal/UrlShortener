using Microsoft.AspNetCore.Mvc;
using UrlShortener.Data;
using UrlShortener.Data.Repository;
using UrlShortener.Data.Repository.IRepository;
using UrlShortener.Entities;
using UrlShortener.Models;

namespace UrlShortener.Controllers
{
    [ApiController]
    [Route("users")]
    public class UserController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public UserController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            var objGetUsers = _unitOfWork.User.GetAll().ToList();

            return Ok(objGetUsers);
        }

        [HttpGet("{id}")]

        public IActionResult GetUser(int Id)
        {
            if (Id == null || Id == 0)
            {
                return NotFound();
            }

            var objUser = _unitOfWork.User.Get(u => u.Id == Id);

            if (objUser == null)
            {
                return NotFound();
            }

            return Ok(objUser);
        }

        [HttpPost]
        public IActionResult Create([FromBody]User user)
        {
            var existingUrl = _unitOfWork.User.Get(u => u.Username == user.Username);
            if (existingUrl != null)
            {
                return BadRequest("User already exists.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid validation");
            }

            _unitOfWork.User.Add(user);
            _unitOfWork.Save();

            return CreatedAtAction(nameof(GetUrl), new { id = user.Id }, user);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var url = _unitOfWork.User.Get(u => u.Id == id);
            if (url == null)
            {
                return NotFound();
            }

            _unitOfWork.User.Remove(url);
            _unitOfWork.Save();

            return Ok(url);
        }
    }
}

