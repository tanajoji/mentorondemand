using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedLibrary.Models
{
    public class MODUser : IdentityUser
    {
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Status { get; set; }
    }
}
