using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AuthLibrary.Dtos
{
    public class TokenDto
    {
        [Required]
        [EmailAddress]
        public string Email_id { get; set; }
        [Required]
        public string Token { get; set; }
        public int Role { get; internal set; }
    }
}
