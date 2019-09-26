using GraphQL.Types;
using StarSystems.Core.Models;
using StarSystems.Infrastructure.Interfaces;

namespace StarSystems.GraphQL.Types
{
    public class PlanetType : ObjectGraphType<Planet>
    {
        public PlanetType(IStarRepository starRepository)
        {
            Field(s => s.PlanetId, nullable: false, type: typeof(IdGraphType)).Name("id");
            Field(s => s.PlanetName, nullable: false);
            Field(s => s.Mass, type: typeof(FloatGraphType));
            Field(s => s.Radius, type: typeof(FloatGraphType));
            Field(s => s.Density, type: typeof(FloatGraphType));
            Field(s => s.Gravity, type: typeof(FloatGraphType));
            Field(s => s.Temperature, type: typeof(FloatGraphType));
            Field(s => s.AtmosphericPressure, type: typeof(FloatGraphType));
            Field(s => s.DiscoveryMethod);

            Field<OrbitType, Orbit>()
                .Name("orbit")
                .Resolve(context => context.Source.Orbit);

            Field<StarType, Star>()
                .Name("star")
                .ResolveAsync(context => starRepository.GetStarAsync(context.Source.StarId));
        }
    }
}
