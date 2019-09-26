using GraphQL.Server;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;
using StarSystems.GraphQL.Types;

namespace StarSystems.GraphQL
{
    public static class GraphQLRegistration
    {
        public static void AddStarSystemsGraphQL(this IServiceCollection services)
        {
            services.AddScoped<StarSystemType>();
            services.AddScoped<StarType>();
            services.AddScoped<OrbitType>();
            services.AddScoped<PlanetType>();

            services.AddScoped<StarSystemsQuery>();

            services.AddScoped<ISchema, StarSystemsSchema>();

            services.AddGraphQL()
                .AddGraphTypes(ServiceLifetime.Scoped);
        }
    }
}
