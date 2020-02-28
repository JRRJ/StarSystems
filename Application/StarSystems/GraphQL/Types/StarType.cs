using GraphQL.Types;
using StarSystems.Core.Models;
using StarSystems.Infrastructure.Interfaces;
using System.Collections.Generic;

namespace StarSystems.GraphQL.Types
{
    public class StarType : ObjectGraphType<Star>
    {
        public StarType(IPlanetRepository planetsRepository, IStarSystemRepository starSystemRepository)
        {
            Field(s => s.StarId, nullable: false, type: typeof(IdGraphType));
            Field(s => s.StarName, nullable: false).Description("Primary designation of this star");
            Field(s => s.SpectralType, nullable: false);
            Field(s => s.BvColorIndex, type: typeof(FloatGraphType));
            Field(s => s.AbsoluteMagnitude, type: typeof(FloatGraphType));
            Field(s => s.Mass, type: typeof(FloatGraphType));
            Field(s => s.Radius, type: typeof(FloatGraphType));
            Field(s => s.Luminosity, type: typeof(FloatGraphType));
            Field(s => s.Temperature, type: typeof(FloatGraphType));
            Field(s => s.Age, type: typeof(FloatGraphType));
            Field(s => s.Metallicity, type: typeof(FloatGraphType));
            Field(s => s.DiscoveryYear, nullable: true, type: typeof(IntGraphType));

            Field<ListGraphType<PlanetType>, IEnumerable<Planet>>()
                .Name("planets")
                .ResolveAsync(context => planetsRepository.GetPlanetsByStarIdAsync(context.Source.StarId));

            Field<StarSystemType, StarSystem>()
                .Name("starSystem")
                .ResolveAsync(context => starSystemRepository.GetStarSystemAsync(context.Source.StarSystemId)!);
        }
    }
}
