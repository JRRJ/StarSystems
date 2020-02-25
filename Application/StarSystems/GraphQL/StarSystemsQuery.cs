using GraphQL.Types;
using StarSystems.Core.Models;
using StarSystems.GraphQL.Types;
using StarSystems.Infrastructure.Interfaces;
using System.Collections.Generic;

namespace StarSystems.GraphQL
{
    public class StarSystemsQuery : ObjectGraphType
    {
        public StarSystemsQuery(IStarSystemRepository starSystemRepository)
        {
            Field<ListGraphType<StarSystemType>, IEnumerable<StarSystem>>()
                .Name("starSystems")
                .Argument<BooleanGraphType>("predictPlanetRadii", "return an estimated planetary radius if an observed radius does not exist")
                .ResolveAsync(context => starSystemRepository.GetStarSystemsAsync());

            Field<StarSystemType, StarSystem>()
                .Name("starSystem")
                .Argument<NonNullGraphType<IdGraphType>>("id", "id of the star system")
                .Argument<BooleanGraphType>("predictPlanetRadii", "return an estimated planetary radius if an observed radius does not exist")
                .ResolveAsync(context => {
                    var id = context.GetArgument<int>("id");
                    return starSystemRepository.GetStarSystemAsync(id);
                });
        }
    }
}
