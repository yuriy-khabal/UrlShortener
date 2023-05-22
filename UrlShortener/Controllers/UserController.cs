using Microsoft.AspNetCore.Mvc;
using UrlShortener.Data;
using UrlShortener.Data.Repository;
using UrlShortener.Data.Repository.IRepository;
using UrlShortener.Entities;
using UrlShortener.Mappers;
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
        public IActionResult GetAll()
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
        public IActionResult Create([FromBody]UserModel userModel)
        {
            var existingUrl = _unitOfWork.User.Get(u => u.Username == userModel.Username);
            if (existingUrl != null)
            {
                return BadRequest("User already exists.");
            }

            var mapper = new UserMapper();
            var user = mapper.MapToUser(userModel);

            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid validation");
            }

            _unitOfWork.User.Add(user);
            _unitOfWork.Save();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
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

