using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Threading.Tasks;
using VibgyorAPI.Models;

namespace VibgyorAPI.Services
{
    public class EmailService
    {
        private readonly SmtpSettings _smtpSettings;

        public EmailService(IOptions<SmtpSettings> smtpSettings)
        {
            _smtpSettings = smtpSettings.Value;
        }

        public async Task SendEmailToCompanyAsync(RequirementRequest request)
        {
            try
            {
                var email = new MimeMessage();
                email.From.Add(MailboxAddress.Parse(_smtpSettings.SenderEmail));
                email.To.Add(MailboxAddress.Parse(_smtpSettings.SenderEmail)); 
                email.ReplyTo.Add(new MailboxAddress(request.Name, request.Email)); 
                email.Subject = "New Customer Inquiry";

                var body = $@"
                    <p><strong>Name:</strong> {request.Name}</p>
                    <p><strong>Email:</strong> {request.Email}</p>
                    <p><strong>Phone:</strong> {request.Phone}</p>
                    <p><strong>Property:</strong> {request.Property}</p>
                    <p><strong>Requirements:</strong> {string.Join(", ", request.Requirements)}</p>";

                email.Body = new BodyBuilder { HtmlBody = body }.ToMessageBody();

                await SendEmailAsync(email);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error sending email to company: {ex.Message}");
                throw;
            }
        }

        public async Task SendEmailToCustomerAsync(RequirementRequest request)
        {
            try
            {
                var email = new MimeMessage();
                email.From.Add(MailboxAddress.Parse(_smtpSettings.SenderEmail));
                email.To.Add(MailboxAddress.Parse(request.Email)); 
                email.Subject = "Thank you for contacting Vibgyor ";

                var body = $@"
                    <p>Dear {request.Name},</p>
                    <p>Thank you for contacting Vibgyor. Our team will get back to you shortly.</p>
                    <p>Best Regards,<br>Vibgyor  Team</p>";

                email.Body = new BodyBuilder { HtmlBody = body }.ToMessageBody();

                await SendEmailAsync(email);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error sending email to customer: {ex.Message}");
                throw;
            }
        }

        private async Task SendEmailAsync(MimeMessage email)
        {
            using var smtp = new SmtpClient();
            await smtp.ConnectAsync(_smtpSettings.Server, _smtpSettings.Port, SecureSocketOptions.StartTls);
            await smtp.AuthenticateAsync(_smtpSettings.Username, _smtpSettings.Password);
            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true);
        }
    }
}
