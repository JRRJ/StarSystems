using Microsoft.EntityFrameworkCore;
using StarSystems.Core.Models;
using StarSystems.Infrastructure.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StarSystems.Infrastructure.Repositories
{
    class PlanetRepository : IPlanetRepository
    {
        private readonly StarSystemContext _context;

        public PlanetRepository(StarSystemContext context)
        {
            _context = context;
        }

        public async Task<Planet?> GetPlanetAsync(int id)
        {
            return await _context.Planet
                .Include(ss => ss.Orbit)
                .FirstOrDefaultAsync(ss => ss.PlanetId == id);
        }

        public async Task<IEnumerable<Planet>> GetPlanetsByStarIdAsync(int starId)
        {
            return await _context.Planet
                .Include(ss => ss.Orbit)
                .Where(s => s.StarId == starId)
                .ToListAsync();
        }


        public async Task<IEnumerable<Planet>> GetPlanetsAsync()
        {
            return await _context.Planet
                .Include(ss => ss.Orbit)
                .ToListAsync();
        }
    }
}
