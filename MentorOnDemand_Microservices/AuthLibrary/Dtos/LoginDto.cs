using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AuthLibrary.Dtos
{
    public class LoginDto
    {
        [Required]
        [EmailAddress]
        public string Email_id { get; set; }

        [Required]
        public string Pass_word { get; set; }
    }
}
