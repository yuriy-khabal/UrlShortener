using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Reflection.PortableExecutable;
using UrlShortener.Data;
using UrlShortener.Mappers;
using UrlShortener.Models;
using UrlShortener.Entities;
using UrlShortener.Services;
using UrlShortener.Data.Repository.IRepository;

namespace UrlShortener.Controllers
{
    [ApiController]     
    [Route("urls")]
    public class ShortURLController : Controller
    {   
        private readonly IUnitOfWork _unitOfWork;

        public ShortURLController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public IActionResult GetAllUrls()
        {
            var objUrlsList = _unitOfWork.ShortUrl.GetAll().ToList();

            return Ok(objUrlsList);
        }

        [HttpGet("{id}")]

        public IActionResult GetUrl(int Id)
        {
            if (Id == null || Id == 0)
            {
                return NotFound();
            }

            var objUrl = _unitOfWork.ShortUrl.Get(u => u.Id == Id);

            if (objUrl == null)
            {
                return NotFound();
            }

            return Ok(objUrl);
        }

        [HttpPost]
        public IActionResult Create([FromBody]ShortURLModel shortUrlModel)
        {
            var existingUrl = _unitOfWork.ShortUrl.Get(u => u.OriginalURL == shortUrlModel.OriginalURL);
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

            _unitOfWork.ShortUrl.Add(shortUrl);
            _unitOfWork.Save();

            return CreatedAtAction(nameof(GetUrl), new { id = shortUrl.Id }, shortUrl);

        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUrl(int id)
        {
            var url = _unitOfWork.ShortUrl.Get(u => u.Id == id);
            if (url == null)
            {
                return NotFound();
            }

            _unitOfWork.ShortUrl.Remove(url);
            _unitOfWork.Save();

            return Ok(url);
        }

    }
}
