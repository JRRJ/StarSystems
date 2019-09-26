using System.Collections.Generic;

namespace StarSystems.Core.Models
{
    public partial class Star
    {
        public Star()
        {
            Planet = new HashSet<Planet>();
        }

        public int StarId { get; set; }
        public string StarName { get; set; }
        public string SpectralType { get; set; }
        public float? BvColorIndex { get; set; }
        public float? AbsoluteMagniude { get; set; }
        public float? Mass { get; set; }
        public float? Radius { get; set; }
        public float? Luminosity { get; set; }
        public int? Temperature { get; set; }
        public float? Age { get; set; }
        public float? Metallicity { get; set; }
        public int StarSystemId { get; set; }

        public StarSystem StarSystem { get; set; }
        public ICollection<Planet> Planet { get; set; }
    }
}
