using GraphQL.Types;
using StarSystems.Core;
using StarSystems.Core.Models;
using StarSystems.Infrastructure.Interfaces;
using System;
using System.Threading.Tasks;

namespace StarSystems.GraphQL.Types
{
    public class PlanetType : ObjectGraphType<Planet>
    {
        public PlanetType(IStarRepository starRepository)
        {
            Field(s => s.PlanetId, nullable: false, type: typeof(IdGraphType)).Name("id");
            Field(s => s.PlanetName, nullable: false);
            Field(s => s.Mass, type: typeof(FloatGraphType));
            Field<FloatGraphType, double?>()
                .Name("radius")
                .Resolve(context =>
                {
                    if (context.GetArgument("predictPlanetRadii", defaultValue: true))
                    {
                        return context.Source.Radius ?? PlanetUtil.PredictPlanetRadiusFromMass(context.Source.Mass.GetValueOrDefault());
                    }
                    return context.Source.Mass;
                });
            Field(s => s.Density, type: typeof(FloatGraphType));
            Field(s => s.Gravity, type: typeof(FloatGraphType));
            Field<IntGraphType>()
                .Name("temperature")
                .Resolve(context =>
                {
                    if (context.Source.Temperature != null)
                    {
                        return context.Source.Temperature;
                    }

                    var star = context.Source.Star;
                    if (star!.Luminosity != null)
                    {
                        return (int)(252 * Math.Pow(star.Luminosity.GetValueOrDefault() / Math.Pow(context.Source.Orbit.SemiMajorAxis, 2), 0.25));
                    }
                    return null;
                });
            Field(s => s.AtmosphericPressure, type: typeof(FloatGraphType));
            Field(s => s.DiscoveryMethod, nullable: true);
            Field(s => s.DiscoveryYear, nullable: true, type: typeof(IntGraphType));
            Field<BooleanGraphType>()
                .Name("isRadiusPredicted")
                .Resolve(context => context.GetArgument("predictPlanetRadii", defaultValue: true) && context.Source.Radius == null);

            Field<OrbitType, Orbit>()
                .Name("orbit")
                .Resolve(context => context.Source.Orbit);

            Field<StarType, Star>()
                .Name("star")
                .ResolveAsync(context => starRepository.GetStarAsync(context.Source.StarId));
        }
    }
}
