using SharedLibrary.Models;
using StudentLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace StudentLibrary.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        StudentContext context;
        public StudentRepository(StudentContext context)
        {
            this.context = context;
        }

        public MODUser GetUserByMail(string usermail)
        {
            var user = (from a in context.MODUsers
                        where a.Email == usermail
                        select a).First();
            return user;
        }

        public bool AddTraining(Training train)
        {
            try
            {
                var training = new Training
                {
                    TechnologyId = train.TechnologyId,
                    TechnologyName = train.TechnologyName,
                    UserId = train.UserId,
                    CourseFee = train.CourseFee,
                    StartDate = train.StartDate,
                    EndDate = train.EndDate
                };
                context.Trainings.Add(training);
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

        public IEnumerable<Training> GetTrainingList(string id)
        {
            var training = from a in context.Trainings
                           where a.UserId == id && a.EndDate >= DateTime.Today
                           select a;
            return training;
        }

        public IEnumerable<Training> GetCompletedTrainingList(string id)
        {
            var training = from a in context.Trainings
                           where a.UserId == id && a.EndDate <= DateTime.Today
                           select a;
            return training;
        }


        public Mentorprofile GetMentorProfile(string id)
        {
            var mentor = (from a in context.Mentorprofiles
                          where a.MentorId == id
                          select a).First();
            return mentor;
        }
    }
}
