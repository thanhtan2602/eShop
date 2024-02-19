using eShop.API.Services;
using eShop.API.ViewModels.QueryModels;
using Microsoft.AspNetCore.Mvc;

namespace eShop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IJwtService _jwtService;

        public UserController(IJwtService jwtService)
        {
            _jwtService = jwtService;
        }

        [HttpPost("SignUp")]
        public IActionResult SignUp([FromBody] SignUpRequest request)
        {
            // Implement your logic to store user details in the database
            // You might want to hash the password before saving it

            // For simplicity, just return a success message
            return Ok(new { Message = "User signed up successfully!" });
        }

        [HttpPost("SignIn")]
        public IActionResult SignIn([FromBody] SignInRequest request)
        {
            // Implement your logic to authenticate the user
            // Verify username and password against your database

            // For simplicity, generate a JWT token and return it
            var token = _jwtService.GenerateJwtToken(request.UserId);
            return Ok(new { Token = token });
        }
    }
}
