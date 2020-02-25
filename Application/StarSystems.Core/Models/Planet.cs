namespace StarSystems.Core.Models
{
    public class Planet
    {
        public int PlanetId { get; set; }
        public string PlanetName { get; set; }
        public double? Mass { get; set; }
        public double? Radius { get; set; }
        public double? Density { get; set; }
        public double? Gravity { get; set; }
        public int? Temperature { get; set; }
        public double? AtmosphericPressure { get; set; }
        public string DiscoveryMethod { get; set; }
        public int? DiscoveryYear { get; set; }
        public int OrbitId { get; set; }
        public int StarId { get; set; }

        public Orbit Orbit { get; set; }
        public Star Star { get; set; }
    }
}
