using System.Collections.Generic;

namespace StarSystems.Core.Models
{
    public class StarSystem
    {
        public StarSystem()
        {
            Star = new HashSet<Star>();
        }

        public int StarSystemId { get; set; }
        public string SystemName { get; set; }
        public float RightAscension { get; set; }
        public float Declination { get; set; }
        public float Parallax { get; set; }
        public float Distance { get; set; }

        public ICollection<Star> Star { get; set; }
    }
}
