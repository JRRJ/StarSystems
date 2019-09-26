using GraphQL.Types;
using GraphQL.Utilities;
using System;

namespace StarSystems.GraphQL
{
    public class StarSystemsSchema : Schema
    {
        public StarSystemsSchema(IServiceProvider serviceProvider)
            : base(serviceProvider)
        {
            Query = serviceProvider.GetRequiredService<StarSystemsQuery>();
        }
    }
}
