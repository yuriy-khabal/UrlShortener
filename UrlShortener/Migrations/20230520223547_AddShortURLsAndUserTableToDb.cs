using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UrlShortener.Migrations
{
    /// <inheritdoc />
    public partial class AddShortURLsAndUserTableToDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ShortURLs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OriginalURL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ShortenedURL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    URLdescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedByUserId = table.Column<int>(type: "int", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShortURLs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ShortURLs_Users_CreatedByUserId",
                        column: x => x.CreatedByUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Password", "Role", "Username" },
                values: new object[] { 1, "05val89", "Admin", "Andriy" });

            migrationBuilder.InsertData(
                table: "ShortURLs",
                columns: new[] { "Id", "CreatedByUserId", "CreatedDate", "OriginalURL", "ShortenedURL", "URLdescription" },
                values: new object[] { 1, 1, new DateTime(2023, 5, 21, 1, 35, 46, 938, DateTimeKind.Local).AddTicks(7287), "https://www.youtube.com/", "RT3OFD", "Youtube" });

            migrationBuilder.CreateIndex(
                name: "IX_ShortURLs_CreatedByUserId",
                table: "ShortURLs",
                column: "CreatedByUserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ShortURLs");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
