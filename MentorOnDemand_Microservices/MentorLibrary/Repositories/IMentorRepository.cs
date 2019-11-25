using SharedLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MentorLibrary.Repositories
{
    public interface IMentorRepository
    {
        MODUser GetMentor(string mail);
        public bool AddCourse(Course course);
        public IEnumerable<Course> GetMCourseList(string id);
        public IEnumerable<Course> GetMCompletedList(string id);
        public IEnumerable<Course> GetCourses();
        public bool AddProfile(Mentorprofile profile);
    }
}
