using Microsoft.EntityFrameworkCore;
using StarSystems.Core.Models;
using StarSystems.Infrastructure.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StarSystems.Infrastructure.Repositories
{
    class StarRepository : IStarRepository
    {
        private readonly StarSystemContext _context;

        public StarRepository(StarSystemContext context)
        {
            _context = context;
        }

        public async Task<Star?> GetStarAsync(int id)
        {
            return await _context.Star
                .FirstOrDefaultAsync(ss => ss.StarSystemId == id);
        }

        public async Task<IEnumerable<Star>> GetStarsByStarSystemIdAsync(int starSystemId)
        {
            return await _context.Star
                .Where(s => s.StarSystemId == starSystemId)
                .ToListAsync();
        }

        public async Task<IEnumerable<Star>> GetStarsAsync()
        {
            return await _context.Star.ToListAsync();
        }
    }
}
