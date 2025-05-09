using Microsoft.AspNetCore.Mvc;
using email.Models;
using System.Net;
using System.Net.Mail;

namespace email.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatController : ControllerBase
    {
        [HttpPost("submit")]
        public IActionResult Submit([FromBody] ContactModel model)
        {
            if (model == null) return BadRequest("Invalid data.");

            try
            {
                string body = $"Name: {model.Name}\nPhone: {model.Phone}\nEmail: {model.Email}";

                MailMessage mail = new MailMessage
                {
                    From = new MailAddress("hello@vibgyor.co.in", "hello vibgyor"),
                    Subject = "New Customer Inquiry",
                    Body = body,
                    IsBodyHtml = false
                };

             
                mail.To.Add("hello@vibgyor.co.in");

              
                mail.ReplyToList.Add(new MailAddress(model.Email));

                
                SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587)
                {
                    Credentials = new NetworkCredential("hello@vibgyor.co.in", "tsez kdcv uhjo gjei"),
                    EnableSsl = true
                };

                smtp.Send(mail);
                return Ok("Customer data sent to company email successfully!");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
    }
}
