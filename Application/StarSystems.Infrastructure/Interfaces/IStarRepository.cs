using StarSystems.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace StarSystems.Infrastructure.Interfaces
{
    public interface IStarRepository
    {
        Task<IEnumerable<Star>> GetStarsAsync();
        Task<IEnumerable<Star>> GetStarsByStarSystemIdAsync(int starSystemId);
        Task<Star?> GetStarAsync(int id);
    }
}
