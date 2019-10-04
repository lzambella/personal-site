using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using resume_app.Models;

//TODO: Use authentication instead of single passwords for auth (might be too complicated for the scope of the project)
namespace resume_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly ProjectContext _context;
        public ProjectController(ProjectContext context)
        {
            _context = context;
        }

        // GET: api/Project
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
            return await _context.Projects.ToListAsync();
        }

        // GET: api/Project/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetProject(int id)
        {
            var project = await _context.Projects.FindAsync(id);

            if (project == null)
            {
                return NotFound();
            }

            return project;
        }

        // PUT: api/Project/5
        // Requires password
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProject(int id, Project project)
        {
            var key = HttpContext.Request?.Headers["API_KEY"];

            if (!(key.ToString() == Program.secret)) {
                return Unauthorized();
            } else {
                if (id != project.ID)
                {
                    return BadRequest();
                }

                _context.Entry(project).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProjectExists(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }

            return NoContent();
        }

        // POST: api/Project
        // Requires password
        [HttpPost]
        public async Task<ActionResult<Project>> PostProject([FromBody]Project project)
        {
            var key = HttpContext.Request?.Headers["API_KEY"];

            if (!(key.ToString() == Program.secret)) {
                return Unauthorized();
            } else {
                _context.Projects.Add(project);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetProject", new { id = project.ID }, project);
            }
        }

        // DELETE: api/Project/5
        // Requires password
        [HttpDelete("{id}")]
        public async Task<ActionResult<Project>> DeleteProject(int id)
        {
            var key = HttpContext.Request?.Headers["API_KEY"];
            if (!(key.ToString() == Program.secret)) {
                return Unauthorized();
            } else {
            var project = await _context.Projects.FindAsync(id);
                if (project == null)
                {
                    return NotFound();
                }

                _context.Projects.Remove(project);
                await _context.SaveChangesAsync();

                return project;
            }
        }

        private bool ProjectExists(int id)
        {
            return _context.Projects.Any(e => e.ID == id);
        }
    }
}
