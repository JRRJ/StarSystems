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
        public float SemiMajorAxis { get; set; }
        public float Period { get; set; }
        public float? Eccentricity { get; set; }
        public float? Inclination { get; set; }

        public ICollection<Planet> Planet { get; set; }
    }
}
