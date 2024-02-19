using Azure;
using eShop.API.Models;
using eShop.API.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace eShop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        private ApiResponse _response;
        public ProductController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
            _response = new ApiResponse();
        }

        [HttpGet]
        [Route("load")]
        public async Task<IActionResult> Load()
        {
            _response.StatusCode = HttpStatusCode.OK;
            _response.Result = _dbContext.Products;
            return Ok(_response);
        }
    }
}
