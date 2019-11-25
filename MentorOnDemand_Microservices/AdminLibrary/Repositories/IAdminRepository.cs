using SharedLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AdminLibrary.Repositories
{
    public interface IAdminRepository
    {
        public IEnumerable<MODUser> GetStudents();

        public IEnumerable<MODUser> GetMentors();
        MODUser GetUser(string id);
        bool DeleteUser(MODUser user);
        bool BlockUser(MODUser user);
        bool UnblockUser(MODUser user);
        public IEnumerable<Technology> GetTechnologies();
        public bool AddTechnology(Technology technology);
        Technology GetTechnology(int id);
        bool DeleteTechnology(Technology technology);
        bool EditTechnology(Technology technology);

    }
}
