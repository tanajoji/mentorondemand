using Microsoft.AspNetCore.Mvc;
using StudentLibrary.Models;
using StudentLibrary.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using SharedLibrary.Models;

namespace StudentService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        IStudentRepository repository;
        public StudentController(IStudentRepository repository)
        {
            this.repository = repository;
        }




        // GET: api/Admin/5
        [HttpGet("getuserid/{usermail}")]
        public IActionResult GetUserByMail(string usermail)
        {
            var user = repository.GetUserByMail(usermail);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }


        // POST: api/Admin
        [Route("addtraining")]
        [HttpPost]

        public IActionResult Post([FromBody] Training training)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddTraining(training);
                if (result)
                {
                    return Created("AddTraining", training.Id);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        [Route("traininglist/{id}")]
        [HttpGet]
        public IActionResult GetTrainingList(string id)
        {
            var trainings = repository.GetTrainingList(id);
            if (!trainings.Any())
            {
                return NoContent();
            }
            return Ok(trainings);
        }


        [Route("completedtraininglist/{id}")]
        [HttpGet]
        public IActionResult GetCompletedTrainingList(string id)
        {
            var trainings = repository.GetCompletedTrainingList(id);
            if (!trainings.Any())
            {
                return NoContent();
            }
            return Ok(trainings);
        }


        // GET: api/Admin/5
        [HttpGet("getmentorprofile/{id}")]
        public IActionResult GetMentorProfile(string id)
        {
            var mentor = repository.GetMentorProfile(id);
            if (mentor == null)
            {
                return NotFound();
            }
            return Ok(mentor);
        }
    }


}