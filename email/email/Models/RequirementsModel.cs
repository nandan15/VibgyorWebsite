using System.Collections.Generic;

namespace VibgyorAPI.Models
{
    public class RequirementRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Property { get; set; }
        public List<string> Requirements { get; set; } = new();
    }
}
