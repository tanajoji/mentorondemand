using AdminLibrary.Models;
using SharedLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace AdminLibrary.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        AdminContext context;
        public AdminRepository(AdminContext context)
        {
            this.context = context;
        }



        public bool BlockUser(MODUser user)
        {
            try
            {

                context.MODUsers.Update(user);
                int result = context.SaveChanges();
                if (result > 0) //result>0 since result has no.of records updated
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool DeleteUser(MODUser user)
        {
            try
            {
                context.MODUsers.Remove(user);
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {

                throw;
            }
        }


        public IEnumerable<MODUser> GetMentors()
        {
            var mentors = from a in context.MODUsers
                          join ma in context.UserRoles on a.Id equals ma.UserId
                          where ma.RoleId == "2"
                          select a;
            return mentors;
        }

        public IEnumerable<MODUser> GetStudents()
        {
            var stud = from a in context.MODUsers
                       join ma in context.UserRoles on a.Id equals ma.UserId
                       where ma.RoleId == "3"
                       select a;
            return stud;
        }

        public IEnumerable<Technology> GetTechnologies()
        {
            var tech = from t in context.Technologies
                       select t;
            return tech;
        }

        public MODUser GetUser(string id)
        {
            return context.MODUsers.Find(id);
        }

        public bool UnblockUser(MODUser user)
        {
            try
            {

                context.MODUsers.Update(user);
                int result = context.SaveChanges();
                if (result > 0) //result>0 since result has no.of records updated
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool AddTechnology(Technology tech)
        {
            try
            {
                var technology = new Technology
                {
                    TechnologyName = tech.TechnologyName,
                    Commission = tech.Commission,
                };
                context.Technologies.Add(technology);
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw;
            }
        }


        public bool DeleteTechnology(Technology tech)
        {
            try
            {
                context.Technologies.Remove(tech);
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public Technology GetTechnology(int id)
        {
            return context.Technologies.Find(id);
        }

        public bool EditTechnology(Technology technology)
        {
            try
            {

                context.Technologies.Update(technology);
                int result = context.SaveChanges();
                if (result > 0) //result>0 since result has no.of records updated
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
