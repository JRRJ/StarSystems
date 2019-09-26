using Microsoft.EntityFrameworkCore;
using StarSystems.Core.Models;
using StarSystems.Infrastructure.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace StarSystems.Infrastructure.Repositories
{
    class StarSystemRepository : IStarSystemRepository
    {
        private readonly StarSystemContext _context;

        public StarSystemRepository(StarSystemContext context)
        {
            _context = context;
        }

        public async Task<StarSystem?> GetStarSystemAsync(int id)
        {
            return await _context.StarSystem
                .FirstOrDefaultAsync(ss => ss.StarSystemId == id);
        }

        public async Task<IEnumerable<StarSystem>> GetStarSystemsAsync()
        {
            return await _context.StarSystem.ToListAsync();
        }
    }
}
