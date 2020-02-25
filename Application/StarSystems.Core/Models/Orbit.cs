using System.Collections.Generic;

namespace StarSystems.Core.Models
{
    public class Orbit
    {
        public Orbit()
        {
            Planet = new HashSet<Planet>();
        }

        public int OrbitId { get; set; }
        public double SemiMajorAxis { get; set; }
        public double Period { get; set; }
        public double? Eccentricity { get; set; }
        public double? Inclination { get; set; }

        public ICollection<Planet> Planet { get; set; }
    }
}
