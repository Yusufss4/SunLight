using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ContosoUniversity.Migrations
{
    public partial class FreshStart2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Student",
                nullable: false,
                defaultValueSql: "FORMAT(getdate(),'MM/dd/yyyy,hh:mm:ss')",
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValueSql: "FORMAT(getdate(),'MM/dd/yyyyThh:mm:ss')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreateDate",
                table: "Student",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "FORMAT(getdate(),'MM/dd/yyyyThh:mm:ss')",
                oldClrType: typeof(DateTime),
                oldDefaultValueSql: "FORMAT(getdate(),'MM/dd/yyyy,hh:mm:ss')");
        }
    }
}
