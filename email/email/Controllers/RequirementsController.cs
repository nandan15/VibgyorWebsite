using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using VibgyorAPI.Models;
using VibgyorAPI.Services;

namespace VibgyorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RequirementsController : ControllerBase
    {
        private readonly EmailService _emailService;

        public RequirementsController(EmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> Submit([FromBody] RequirementRequest request)
        {
            if (request == null || string.IsNullOrWhiteSpace(request.Name) || string.IsNullOrWhiteSpace(request.Email))
                return BadRequest("Name and Email are required.");

            if (!IsValidEmail(request.Email))
                return BadRequest("Invalid Email Address.");

            try
            {
                await _emailService.SendEmailToCompanyAsync(request);
                await _emailService.SendEmailToCustomerAsync(request);
                return Ok(new { message = "Enquiry submitted and emails sent successfully!" });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Email Error: {ex.Message}");
                return StatusCode(500, $"An error occurred while sending the emails: {ex.Message}");
            }
        }

        private bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }
    }
}
