using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using resume_app.Models;

//TODO: Use authentication instead of single passwords for auth (might be too complicated for the scope of the Update)
namespace resume_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UpdateController : ControllerBase
    {
        private readonly ProjectContext _context;
        public UpdateController(ProjectContext context)
        {
            _context = context;
        }

        // GET: api/Update
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Update>>> GetUpdates()
        {
            return await _context.Updates.ToListAsync();
        }

        // GET: api/Update/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Update>> GetUpdate(int id)
        {
            var Update = await _context.Updates.FindAsync(id);

            if (Update == null)
            {
                return NotFound();
            }

            return Update;
        }

        // PUT: api/Update/5
        // Requires password
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUpdate(int id, Update Update)
        {
            var key = HttpContext.Request?.Headers["API_KEY"];

            if (!(key.ToString() == Program.secret)) {
                return Unauthorized();
            } else {
                if (id != Update.ID)
                {
                    return BadRequest();
                }

                _context.Entry(Update).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UpdateExists(id))
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

        // POST: api/Update
        // Requires password
        [HttpPost]
        public async Task<ActionResult<Update>> PostUpdate([FromBody]Update Update)
        {
            var key = HttpContext.Request?.Headers["API_KEY"];

            if (!(key.ToString() == Program.secret)) {
                return Unauthorized();
            } else {
                _context.Updates.Add(Update);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetUpdate", new { id = Update.ID }, Update);
            }
        }

        // DELETE: api/Update/5
        // Requires password
        [HttpDelete("{id}")]
        public async Task<ActionResult<Update>> DeleteUpdate(int id)
        {
            var key = HttpContext.Request?.Headers["API_KEY"];
            if (!(key.ToString() == Program.secret)) {
                return Unauthorized();
            } else {
            var Update = await _context.Updates.FindAsync(id);
                if (Update == null)
                {
                    return NotFound();
                }

                _context.Updates.Remove(Update);
                await _context.SaveChangesAsync();

                return Update;
            }
        }

        private bool UpdateExists(int id)
        {
            return _context.Updates.Any(e => e.ID == id);
        }
    }
}
