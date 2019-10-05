﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using resume_app.Models;

namespace resume_app.Migrations
{
    [DbContext(typeof(ProjectContext))]
    partial class ProjectContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("resume_app.Models.Project", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Completed");

                    b.Property<string>("GithubLink");

                    b.Property<string>("LongDesc");

                    b.Property<string>("PictureLink");

                    b.Property<string>("ShortDesc");

                    b.Property<DateTime>("StartDate");

                    b.Property<string>("Technologies");

                    b.Property<string>("Title");

                    b.HasKey("ID");

                    b.ToTable("Project");
                });
#pragma warning restore 612, 618
        }
    }
}
