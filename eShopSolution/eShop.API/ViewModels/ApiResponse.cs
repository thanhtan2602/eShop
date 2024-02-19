using System.Net;

namespace eShop.API.ViewModels
{
    public class ApiResponse
    {
        public ApiResponse()
        {
            ErrorMessages = new List<string>();
        }
        public HttpStatusCode StatusCode { get; set; } = HttpStatusCode.OK;
        public bool IsSuccess { get; set; } = true;
        public List<string> ErrorMessages { get; set; }
        public object Result { get; set; }
        public string Message { get; set; }

        public ApiResponse Success(object result = null)
        {
            StatusCode = HttpStatusCode.OK;
            IsSuccess = true;
            Result = result;
            return this;
        }
        public ApiResponse Failed(HttpStatusCode statusCode, List<string> errorMessages, object result = null)
        {
            StatusCode = statusCode;
            IsSuccess = false;
            Result = result;
            ErrorMessages = errorMessages;
            return this;
        }
    }
}
