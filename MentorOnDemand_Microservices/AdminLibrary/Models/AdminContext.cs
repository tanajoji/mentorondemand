using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SharedLibrary.Models;
using System;
using System.Collections.Generic;

using System.Diagnostics.CodeAnalysis;
using System.Text;

namespace AdminLibrary.Models
{
    public class AdminContext : IdentityDbContext
    {
        public AdminContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<MODUser> MODUsers { get; set; }
     
        public DbSet<Technology> Technologies { get; set; }
    }
}
