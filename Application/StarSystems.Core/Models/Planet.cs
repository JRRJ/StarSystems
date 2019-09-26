namespace StarSystems.Core.Models
{
    public class Planet
    {
        public int PlanetId { get; set; }
        public string PlanetName { get; set; }
        public float? Mass { get; set; }
        public float? Radius { get; set; }
        public float? Density { get; set; }
        public float? Gravity { get; set; }
        public int? Temperature { get; set; }
        public float? AtmosphericPressure { get; set; }
        public string DiscoveryMethod { get; set; }
        public int OrbitId { get; set; }
        public int StarId { get; set; }

        public Orbit Orbit { get; set; }
        public Star Star { get; set; }
    }
}
