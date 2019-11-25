using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminLibrary.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SharedLibrary.Models;

namespace AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AdminController : ControllerBase
    {
        IAdminRepository repository;
        public AdminController(IAdminRepository repository)
        {
            this.repository = repository;
        }



        [Route("mentorlist")]
        [HttpGet]
        public IActionResult GetMentors()
        {
            var mentors = repository.GetMentors();
            if (!mentors.Any())
            {
                return NoContent();
            }
            return Ok(mentors);
        }


        [Route("studentlist")]
        [HttpGet]
        public IActionResult GetStudents()
        {
            var stud = repository.GetStudents();
            if (!stud.Any())
            {
                return NoContent();
            }
            return Ok(stud);
        }

        [Route("technologylist")]
        [HttpGet]
        public IActionResult GetTechnologies()
        {
            var tech = repository.GetTechnologies();
            if (!tech.Any())
            {
                return NoContent();
            }
            return Ok(tech);
        }

        // GET: api/Admin/technology/5
        [HttpGet("technology/{id}")]
        public IActionResult Get(int id)
        {
            var technologies = repository.GetTechnology(id);
            if (technologies == null)
            {
                return NotFound();
            }
            return Ok(technologies);
        }

        


     

        

        // DELETE: api/Admin/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var user = repository.GetUser(id);
            if (user == null)
            {
                return NotFound();
            }
            bool result = repository.DeleteUser(user);
            if (result)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }

        [HttpDelete("technology/{id}")]
        public IActionResult DeleteTechnology(int id)
        {
            var technology = repository.GetTechnology(id);
            if (technology == null)
            {
                return NotFound();
            }
            bool result = repository.DeleteTechnology(technology);
            if (result)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }


        //BLOCK: api/Admin/block/{id}
        [HttpPut("block/{id}")]
        public IActionResult BlockUser(string id)
        {
            var user = repository.GetUser(id);
            if (user == null)
            {
                return NotFound();
            }
            if (id == user.Id)
            {
                user.Status = "blocked";
                bool result = repository.BlockUser(user);
                if (result)
                {
                    return Ok();
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return NotFound();
        }

        //BLOCK: api/Admin/unblock/{id}
        [HttpPut("unblock/{id}")]
        public IActionResult UnblockUser(string id)
        {
            var user = repository.GetUser(id);
            if (user == null)
            {
                return NotFound();
            }
            if (id == user.Id)
            {
                user.Status = "active";
                bool result = repository.UnblockUser(user);
                if (result)
                {
                    return Ok();
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return NotFound();
        }

        // POST: api/Admin
        [Route("addtechnology")]
        [HttpPost]

        public IActionResult Post([FromBody] Technology technology)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddTechnology(technology);
                if (result)
                {
                    return Created("AddTechnology", technology.Id);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }




        // PUT: api/Admin/technology/5
        [HttpPut("technology/{id}")]
        public IActionResult Put(int id, [FromBody] Technology technology)
        {
            if (ModelState.IsValid && id == technology.Id)
            {
                bool result = repository.EditTechnology(technology);
                if (result)
                {
                    return Ok();
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }




    }
}