using StarSystems.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace StarSystems.Infrastructure.Interfaces
{
    public interface IStarSystemRepository
    {
        Task<IEnumerable<StarSystem>> GetStarSystemsAsync();
        Task<StarSystem?> GetStarSystemAsync(int id);
    }
}