using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SharedLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MentorLibrary.Models
{
    public class MentorContext : IdentityDbContext
    {
        public MentorContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<MODUser> MODUsers { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Mentorprofile> Mentorprofiles { get; set; }
    }
}
