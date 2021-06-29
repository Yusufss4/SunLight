using Microsoft.EntityFrameworkCore.Migrations;

namespace ContosoUniversity.Migrations
{
    public partial class ColumnFirstName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "AirPressure",
                table: "Student",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "Altitude",
                table: "Student",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "HeatIndex",
                table: "Student",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "Humidity",
                table: "Student",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "Lux",
                table: "Student",
                nullable: false,
                defaultValue: 0f);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AirPressure",
                table: "Student");

            migrationBuilder.DropColumn(
                name: "Altitude",
                table: "Student");

            migrationBuilder.DropColumn(
                name: "HeatIndex",
                table: "Student");

            migrationBuilder.DropColumn(
                name: "Humidity",
                table: "Student");

            migrationBuilder.DropColumn(
                name: "Lux",
                table: "Student");
        }
    }
}
