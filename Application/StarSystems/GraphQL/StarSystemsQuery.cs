using GraphQL.Types;
using StarSystems.Core.Models;
using StarSystems.GraphQL.Types;
using StarSystems.Infrastructure.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace StarSystems.GraphQL
{
    public class StarSystemsQuery : ObjectGraphType
    {
        public StarSystemsQuery(IStarSystemRepository starSystemRepository)
        {
            Field<ListGraphType<StarSystemType>, IEnumerable<StarSystem>>()
                .Name("starSystems")
                .Argument<IntGraphType>("WithinLightYearsOfEarth")
                .Argument<BooleanGraphType>("predictPlanetRadii", "return an estimated planetary radius if an observed radius does not exist")
                .ResolveAsync(async context => {
                    var starSystems = await starSystemRepository.GetStarSystemsAsync();
                    var maxDistance = context.GetArgument<int?>("WithinLightYearsOfEarth");
                    if (maxDistance != null)
                    {
                        starSystems = starSystems.Where(ss => ss.Distance < maxDistance);
                    }
                    return starSystems;
                });

            Field<StarSystemType, StarSystem>()
                .Name("starSystem")
                .Argument<NonNullGraphType<IdGraphType>>("id", "id of the star system")
                .Argument<BooleanGraphType>("predictPlanetRadii", "return an estimated planetary radius if an observed radius does not exist")
                .ResolveAsync(async context => {
                    var id = context.GetArgument<int>("id");
                    return await starSystemRepository.GetStarSystemAsync(id)!;
                });
        }
    }
}
