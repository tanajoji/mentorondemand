using SharedLibrary.Models;
using StudentLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;
namespace StudentLibrary.Repositories
{
    public interface IStudentRepository
    {
        MODUser GetUserByMail(string usermail);
        public bool AddTraining(Training training);
        public IEnumerable<Training> GetTrainingList(string id);
        public IEnumerable<Training> GetCompletedTrainingList(string id);
        Mentorprofile GetMentorProfile(string id);
    }
}
