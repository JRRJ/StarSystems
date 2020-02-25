using System;
using System.Collections.Generic;

namespace StarSystems.Core.Models
{
    public partial class StarSystem
    {
        private readonly Func<double, double> radians = degrees => Math.PI * degrees / 180.0;

        public StarSystem()
        {
            Star = new HashSet<Star>();
        }

        public int StarSystemId { get; set; }
        public string SystemName { get; set; }
        public double RightAscension { get; set; }
        public double Declination { get; set; }
        public double Parallax { get; set; }
        public double Distance { get; set; }

        public ICollection<Star> Star { get; set; }

        public double X => Distance * Math.Cos(radians(Declination)) * Math.Cos(radians(RightAscension));
        public double Y => Distance * Math.Cos(radians(Declination)) * Math.Sin(radians(RightAscension));
        public double Z => Distance * Math.Sin(radians(Declination));
    }
}
