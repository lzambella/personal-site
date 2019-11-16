using Microsoft.EntityFrameworkCore;
using resume_app.Models;

namespace resume_app.Models {
    public class ProjectContext : DbContext {
        public ProjectContext (DbContextOptions<ProjectContext> options) : base(options) {}

        public DbSet<Project> Projects {get; set;}
        public DbSet<Update> Updates {get; set;}
        
        // Setup mapping the models to the database tables
        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Project>().ToTable("Project");
            modelBuilder.Entity<Update>().ToTable("Updates");
        }
    }
}