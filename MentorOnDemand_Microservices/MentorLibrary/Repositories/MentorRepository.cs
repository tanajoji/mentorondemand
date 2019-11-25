using MentorLibrary.Models;
using SharedLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace MentorLibrary.Repositories
{
    public class MentorRepository : IMentorRepository
    {
        MentorContext context;
        public MentorRepository(MentorContext context)
        {
            this.context = context;
        }



        public MODUser GetMentor(string mail)
        {
            var mentor = (from a in context.MODUsers
                          where a.Email == mail
                          select a).First();
            return mentor;
        }

        public bool AddCourse(Course course1)
        {
            try
            {
                var course = new Course
                {
                    TechnologyName = course1.TechnologyName,
                    Commission = course1.Commission,
                    TechnologyId = course1.TechnologyId,
                    MentorId = course1.MentorId,
                    CourseFee = course1.CourseFee,
                    StartDate = course1.StartDate,
                    EndDate = course1.EndDate
                };
                context.Courses.Add(course);
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

        public IEnumerable<Course> GetMCourseList(string id)
        {
            var course = from a in context.Courses
                         where a.MentorId == id && a.EndDate >= DateTime.Today
                         select a;
            return course;
        }

        public IEnumerable<Course> GetMCompletedList(string id)
        {
            var course = from a in context.Courses
                         where a.MentorId == id && a.EndDate <= DateTime.Today
                         select a;
            return course;
        }

        public IEnumerable<Course> GetCourses()
        {
            var course = from a in context.Courses
                         select a;
            return course;
        }

        public bool AddProfile(Mentorprofile profile)
        {
            try
            {
                var prof = new Mentorprofile
                {
                    MentorId = profile.MentorId,
                    Name = profile.Name,
                    Experience = profile.Experience,
                    TimeSlot = profile.TimeSlot,
                    LinkedinId = profile.LinkedinId
                };
                context.Mentorprofiles.Add(prof);
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
    }
}
