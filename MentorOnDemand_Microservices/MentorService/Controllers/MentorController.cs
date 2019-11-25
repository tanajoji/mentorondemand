using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MentorLibrary.Models;
using MentorLibrary.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SharedLibrary.Models;

namespace MentorService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MentorController : ControllerBase
    {
        IMentorRepository repository;
        public MentorController(IMentorRepository repository)
        {
            this.repository = repository;
        }


        // POST: api/Admin/addcourse
        //[Route("addcourse")]
        [HttpPost("addcourse")]

        public IActionResult AddCourse([FromBody] Course course)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddCourse(course);
                if (result)
                {
                    return Created("AddCourse", course.Id);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }


        // GET: api/Admin/getmentor/5
        [HttpGet("mcourselist/{id}")]
        public IActionResult GetMCourseList(string id)
        {
            var course = repository.GetMCourseList(id);
            if (!course.Any())
            {
                return NoContent();
            }
            return Ok(course);
        }

        // GET: api/Admin/getmentor/5
        [HttpGet("mcompletedlist/{id}")]
        public IActionResult GetMCompletedList(string id)
        {
            var course = repository.GetMCompletedList(id);
            if (!course.Any())
            {
                return NoContent();
            }
            return Ok(course);
        }


        [Route("courselist")]
        [HttpGet]
        public IActionResult GetCourses()
        {
            var tech = repository.GetCourses();
            if (!tech.Any())
            {
                return NoContent();
            }
            return Ok(tech);
        }


        //[Route("profile")]
        [HttpPost("profile")]

        public IActionResult AddProfile([FromBody] Mentorprofile profile)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddProfile(profile);
                if (result)
                {
                    return Created("AddProfile", profile.Id);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }


        [HttpGet("getmentor/{mail}")]
        public IActionResult GetMentor(string mail)
        {
            var mentor = repository.GetMentor(mail);
            if (mentor == null)
            {
                return NotFound();
            }
            return Ok(mentor);
        }

    }
}