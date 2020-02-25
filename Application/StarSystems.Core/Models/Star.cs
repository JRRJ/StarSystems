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
        public double? BvColorIndex { get; set; }
        public double? AbsoluteMagnitude { get; set; }
        public double? Mass { get; set; }
        public double? Radius { get; set; }
        public double? Luminosity { get; set; }
        public int? Temperature { get; set; }
        public double? Age { get; set; }
        public double? Metallicity { get; set; }
        public int? DiscoveryYear { get; set; }
        public int StarSystemId { get; set; }

        public StarSystem StarSystem { get; set; }
        public ICollection<Planet> Planet { get; set; }
    }
}
