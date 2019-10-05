using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace resume_app.Migrations
{
    public partial class CreatePictureUrl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Project",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(nullable: true),
                    ShortDesc = table.Column<string>(nullable: true),
                    LongDesc = table.Column<string>(nullable: true),
                    Technologies = table.Column<string>(nullable: true),
                    StartDate = table.Column<DateTime>(nullable: false),
                    Completed = table.Column<bool>(nullable: false),
                    GithubLink = table.Column<string>(nullable: true),
                    PictureLink = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Project", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Project");
        }
    }
}
