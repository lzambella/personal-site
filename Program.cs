using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using resume_app.Models;
using Newtonsoft.Json;

namespace resume_app
{
    public class Program
    {
        public static string secret {get; set;}
        public static void Main(string[] args)
        {

            var host = CreateWebHostBuilder(args).Build();

            // Create and set up the database if it does not exist
            CreateDbIfNotExists(host);
            LoadKey();

            host.Run();
        }
        private static void CreateDbIfNotExists(IWebHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                try
                {
                    var context = services.GetRequiredService<ProjectContext>();
                    context.Database.EnsureCreated();
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occurred creating the DB.");
                }
            }
        }
        private static void LoadKey() 
        {
            try {
                using (StreamReader r = new StreamReader("./.key.json"))
                {
                    string json = r.ReadToEnd();
                    dynamic key = JsonConvert.DeserializeObject(json);
                    secret = key.API_KEY;
                }
            } catch (FileNotFoundException o) {
                Console.Error.WriteLine("API password can not be found! Attempting env...");
                // bad way of doing things
                secret = Environment.GetEnvironmentVariable("API_KEY");
            }
        }
        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
