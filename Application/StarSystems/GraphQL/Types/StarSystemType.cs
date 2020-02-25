using GraphQL.Types;
using StarSystems.Core.Models;
using StarSystems.Infrastructure.Interfaces;
using System.Collections.Generic;

namespace StarSystems.GraphQL.Types
{
    public class StarSystemType : ObjectGraphType<StarSystem>
    {
        public StarSystemType(IStarRepository starRepository)
        {
            Field(ss => ss.StarSystemId, type: typeof(IdGraphType));
            Field(ss => ss.SystemName);
            Field(ss => ss.RightAscension).Description("Right ascension in degrees.");
            Field(ss => ss.Declination).Description("Declination in degrees.");
            Field(ss => ss.Parallax);
            Field(ss => ss.Distance).Description("Distance in light-years.");
            Field<ListGraphType<StarType>, IEnumerable<Star>>()
                .Name("Stars")
                .ResolveAsync(async ctx =>
                {
                    return await starRepository.GetStarsByStarSystemIdAsync(ctx.Source.StarSystemId);
                });
            Field(ss => ss.X);
            Field(ss => ss.Y);
            Field(ss => ss.Z);
        }
    }
}
