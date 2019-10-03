using Microsoft.EntityFrameworkCore;
using resume_app.Models;

namespace resume_app.Models {
    public class ProjectContext : DbContext {
        public ProjectContext (DbContextOptions<ProjectContext> options) : base(options) {}

        public DbSet<Project> Projects {get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Project>().ToTable("Project");
        }
    }
}