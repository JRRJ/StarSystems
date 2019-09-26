using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StarSystems.Core.Models;
using StarSystems.Infrastructure.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StarSystems.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StarSystemController : ControllerBase
    {
        private IStarSystemRepository _starSystemRepository;

        public StarSystemController(IStarSystemRepository starSystemRepository)
        {
            _starSystemRepository = starSystemRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<StarSystem>>> GetStarSystems()
        {

            return (await _starSystemRepository.GetStarSystemsAsync()).ToList();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<StarSystem>> GetStarSystemNode(int id)
        {
            var starSystem = await _starSystemRepository.GetStarSystemAsync(id);
            if (starSystem == null)
            {
                return NotFound();
            }

            return starSystem;
        }

        //[HttpPost]
        //public async Task<ActionResult<StarSystem>> AddStarSystem(StarSystem starSystemNode)
        //{
        //    _starSystemContext.StarSystem.Add(starSystemNode);
        //    await _starSystemContext.SaveChangesAsync();

        //    return CreatedAtAction("GetStarSystem", new { id = starSystemNode.StarSystemId }, starSystemNode);
        //}
    }
}
