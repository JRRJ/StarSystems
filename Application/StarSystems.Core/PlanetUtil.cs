using System;

namespace StarSystems.Core
{
    public class PlanetUtil
    {
        /// <summary>
        /// Based on power law mass-radius relationship from Bashi et al. 2017
        /// https://arxiv.org/abs/1701.07654
        /// </summary>
        public static double PredictPlanetRadiusFromMass(double mass)
        {
            const double massCutoff = 124f;
            const double radiusCutoff = 12.1f;
            const double slopeLargePlanets = 0.01;
            const double slopeSmallPlanets = 0.55;

            if (mass > massCutoff)
            {
                Func<double, double> massRadiusRelationship = m => Math.Pow(m, slopeLargePlanets);
                return massRadiusRelationship(mass) * (radiusCutoff / massRadiusRelationship(massCutoff));
            } else
            {
                Func<double, double> massRadiusRelationship = m => Math.Pow(m, slopeSmallPlanets);
                return massRadiusRelationship(mass) * (radiusCutoff / massRadiusRelationship(massCutoff));
            }
        }
    }
}
