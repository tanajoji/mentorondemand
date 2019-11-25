
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SharedLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace StudentLibrary.Models
{
    public class StudentContext : IdentityDbContext
    {
        public StudentContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<MODUser> MODUsers { get; set; }
        public DbSet<Training> Trainings { get; set; }
        public DbSet<Mentorprofile> Mentorprofiles { get; set; }
    }
}
