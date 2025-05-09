using System.Net.Mail;

namespace email.Controllers
{
    internal class mailaddress : MailAddress
    {
        public mailaddress(string address, string? displayName) : base(address, displayName)
        {
        }
    }
}