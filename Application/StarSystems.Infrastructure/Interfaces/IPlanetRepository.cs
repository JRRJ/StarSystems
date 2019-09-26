using StarSystems.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace StarSystems.Infrastructure.Interfaces
{
    public interface IPlanetRepository
    {
        Task<IEnumerable<Planet>> GetPlanetsAsync();
        Task<IEnumerable<Planet>> GetPlanetsByStarIdAsync(int starId);
        Task<Planet?> GetPlanetAsync(int id);
    }
}
