using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SharedLibrary.Models
{
    public class Course
    {
        public int Id { get; set; }
        [Required]
        public string MentorId { get; set; }
        [Required]
        public int TechnologyId { get; set; }
        [Required]
        public string TechnologyName { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        [Required]
        public int CourseFee { get; set; }
        [Required]
        public string Commission { get; set; }
    }
}
