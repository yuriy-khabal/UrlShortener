using UrlShortener.Entities;
using UrlShortener.Models;
using UrlShortener.Services;

namespace UrlShortener.Mappers
{
    public class UserMapper
    {
        public User MapToUser(UserModel model)
        {
            var user = new User
            {
                Username = model.Username,
                Password = model.Password,
                Role = model.Role,
            };

            return user;
        }
    }
}
