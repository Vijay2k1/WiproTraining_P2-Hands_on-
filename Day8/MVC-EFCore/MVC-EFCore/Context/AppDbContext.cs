using Microsoft.EntityFrameworkCore;
using MVC_EFCore.Models;

namespace MVC_EFCore.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)  : base(options) { }

        public DbSet<Employee> Employees { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=VIJZZZ\\MSSQLSERVER01;database=DemoDb2;integrated security=true;TrustServerCertificate=true");
        }
    }
}