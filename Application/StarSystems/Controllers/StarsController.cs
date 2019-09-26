// This is an automatically generated file to reference while the real controllers are in-progress.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StarSystems.Core.Models;
using StarSystems.Infrastructure;

namespace StarSystems.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StarsController : ControllerBase
    {
        private readonly StarSystemContext _context;

        public StarsController(StarSystemContext context)
        {
            _context = context;
        }

        // GET: api/Stars
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Star>>> GetStar()
        {
            return await _context.Star.ToListAsync();
        }

        // GET: api/Stars/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Star>> GetStar(int id)
        {
            var star = await _context.Star.FindAsync(id);

            if (star == null)
            {
                return NotFound();
            }

            return star;
        }

        // PUT: api/Stars/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStar(int id, Star star)
        {
            if (id != star.StarId)
            {
                return BadRequest();
            }

            _context.Entry(star).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Stars
        [HttpPost]
        public async Task<ActionResult<Star>> PostStar(Star star)
        {
            _context.Star.Add(star);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStar", new { id = star.StarId }, star);
        }

        // DELETE: api/Stars/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Star>> DeleteStar(int id)
        {
            var star = await _context.Star.FindAsync(id);
            if (star == null)
            {
                return NotFound();
            }

            _context.Star.Remove(star);
            await _context.SaveChangesAsync();

            return star;
        }

        private bool StarExists(int id)
        {
            return _context.Star.Any(e => e.StarId == id);
        }
    }
}
