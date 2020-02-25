using Microsoft.EntityFrameworkCore;
using StarSystems.Core.Models;

namespace StarSystems.Infrastructure
{
    public partial class StarSystemContext : DbContext
    {
        public StarSystemContext()
        {
        }

        public StarSystemContext(DbContextOptions<StarSystemContext> options)
            : base(options)
        {
        }

        public DbSet<Orbit> Orbit { get; set; }
        public DbSet<Planet> Planet { get; set; }
        public DbSet<Star> Star { get; set; }
        public DbSet<StarSystem> StarSystem { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//                optionsBuilder.UseNpgsql("Host=localhost;Database=postgres;Username=postgres;Password=postgres");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "3.0.0-preview5.19227.1");

            modelBuilder.Entity<Orbit>(entity =>
            {
                entity.ToTable("orbit", "star_systems");

                entity.Property(e => e.OrbitId)
                    .HasColumnName("orbit_id")
                    .UseNpgsqlIdentityAlwaysColumn();

                entity.Property(e => e.Eccentricity).HasColumnName("eccentricity");

                entity.Property(e => e.Inclination).HasColumnName("inclination");

                entity.Property(e => e.Period).HasColumnName("period");

                entity.Property(e => e.SemiMajorAxis).HasColumnName("semi_major_axis");
            });

            modelBuilder.Entity<Planet>(entity =>
            {
                entity.ToTable("planet", "star_systems");

                entity.Property(e => e.PlanetId)
                    .HasColumnName("planet_id")
                    .UseNpgsqlIdentityAlwaysColumn();

                entity.Property(e => e.AtmosphericPressure).HasColumnName("atmospheric_pressure");

                entity.Property(e => e.Density).HasColumnName("density");

                entity.Property(e => e.DiscoveryMethod)
                    .HasColumnName("discovery_method")
                    .HasMaxLength(55);

                entity.Property(e => e.DiscoveryYear).HasColumnName("discovery_year");

                entity.Property(e => e.Gravity).HasColumnName("gravity");

                entity.Property(e => e.Mass).HasColumnName("mass");

                entity.Property(e => e.OrbitId).HasColumnName("orbit_id");

                entity.Property(e => e.PlanetName)
                    .IsRequired()
                    .HasColumnName("planet_name")
                    .HasMaxLength(255);

                entity.Property(e => e.Radius).HasColumnName("radius");

                entity.Property(e => e.StarId).HasColumnName("star_id");

                entity.Property(e => e.Temperature).HasColumnName("temperature");

                entity.HasOne(d => d.Orbit)
                    .WithMany(p => p.Planet)
                    .HasForeignKey(d => d.OrbitId)
                    .HasConstraintName("planet_orbit_id_fkey");

                entity.HasOne(d => d.Star)
                    .WithMany(p => p.Planet)
                    .HasForeignKey(d => d.StarId)
                    .HasConstraintName("planet_star_id_fkey");
            });

            modelBuilder.Entity<Star>(entity =>
            {
                entity.ToTable("star", "star_systems");

                entity.Property(e => e.StarId)
                    .HasColumnName("star_id")
                    .UseNpgsqlIdentityAlwaysColumn();

                entity.Property(e => e.AbsoluteMagnitude).HasColumnName("absolute_magnitude");

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.BvColorIndex).HasColumnName("bv_color_index");

                entity.Property(e => e.DiscoveryYear).HasColumnName("discovery_year");

                entity.Property(e => e.Luminosity).HasColumnName("luminosity");

                entity.Property(e => e.Mass).HasColumnName("mass");

                entity.Property(e => e.Metallicity).HasColumnName("metallicity");

                entity.Property(e => e.Radius).HasColumnName("radius");

                entity.Property(e => e.SpectralType)
                    .IsRequired()
                    .HasColumnName("spectral_type")
                    .HasMaxLength(55);

                entity.Property(e => e.StarName)
                    .IsRequired()
                    .HasColumnName("star_name")
                    .HasMaxLength(255);

                entity.Property(e => e.StarSystemId).HasColumnName("star_system_id");

                entity.Property(e => e.Temperature).HasColumnName("temperature");

                entity.HasOne(d => d.StarSystem)
                    .WithMany(p => p.Star)
                    .HasForeignKey(d => d.StarSystemId)
                    .HasConstraintName("star_star_system_id_fkey");
            });

            modelBuilder.Entity<StarSystem>(entity =>
            {
                entity.ToTable("star_system", "star_systems");

                entity.Property(e => e.StarSystemId)
                    .HasColumnName("star_system_id")
                    .UseNpgsqlIdentityAlwaysColumn();

                entity.Property(e => e.Declination).HasColumnName("declination");

                entity.Property(e => e.Distance).HasColumnName("distance");

                entity.Property(e => e.Parallax).HasColumnName("parallax");

                entity.Property(e => e.RightAscension).HasColumnName("right_ascension");

                entity.Property(e => e.SystemName)
                    .IsRequired()
                    .HasColumnName("system_name")
                    .HasMaxLength(255);
            });
        }
    }
}
