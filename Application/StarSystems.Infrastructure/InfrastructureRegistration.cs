using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using StarSystems.Infrastructure.Interfaces;
using StarSystems.Infrastructure.Repositories;
namespace StarSystems.Infrastructure
{
    public static class InfrastructureRegistration
    {
        public static void AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddEntityFrameworkNpgsql()
                .AddDbContext<StarSystemContext>(options => options.UseNpgsql(configuration.GetConnectionString("StarSystemDatabase")))
                .BuildServiceProvider();

            services.AddScoped<IPlanetRepository, PlanetRepository>();
            services.AddScoped<IStarRepository, StarRepository>();
            services.AddScoped<IStarSystemRepository, StarSystemRepository>();
        }
    }
}
