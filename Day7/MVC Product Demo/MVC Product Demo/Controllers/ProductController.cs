using Microsoft.AspNetCore.Mvc;
using MVC_Product_Demo.Models;

namespace MVC_Product_Demo.Controllers
{
    public class ProductController : Controller
    {
       
        // pass 1 Object using ViewBag
        public IActionResult PassSingleProductViewBag()
        {
            Product product = new Product
            {
                PCode = 101,
                Name = "Laptop",
                QtyInStock = 5,
                Details = "High performance laptop",
                Price = 75000
            };

            ViewBag.Product = product;
            return View();
        }

        //  Pass 5 products using ViewBag
        public IActionResult PassMultipleProductsViewBag()
        {
            List<Product> productList = new List<Product>
            {
                new Product { PCode = 101, Name = "Laptop", QtyInStock = 5, Details = "High performance laptop", Price = 75000 },
                new Product { PCode = 102, Name = "Smartphone", QtyInStock = 10, Details = "Latest model smartphone", Price = 40000 },
                new Product { PCode = 103, Name = "Tablet", QtyInStock = 7, Details = "Portable tablet", Price = 30000 },
                new Product { PCode = 104, Name = "Smartwatch", QtyInStock = 15, Details = "Fitness smartwatch", Price = 15000 },
                new Product { PCode = 105, Name = "Headphones", QtyInStock = 20, Details = "Noise-canceling headphones", Price = 8000 }
            };

            ViewBag.Products = productList;
            return View();
        }

        //  Pass 1 object directly to View
        public IActionResult PassSingleProductModel()
        {
            Product product = new Product
            {
                PCode = 106,
                Name = "Gaming Console",
                QtyInStock = 3,
                Details = "Latest generation gaming console",
                Price = 50000
            };

            return View(product);
        }

        //  Pass 5 products list directly to View
        public IActionResult PassMultipleProductsModel()
        {
            List<Product> productList = new List<Product>
            {
                new Product { PCode = 201, Name = "Keyboard", QtyInStock = 25, Details = "Mechanical keyboard", Price = 5000 },
                new Product { PCode = 202, Name = "Mouse", QtyInStock = 30, Details = "Wireless mouse", Price = 2000 },
                new Product { PCode = 203, Name = "Monitor", QtyInStock = 8, Details = "4K Monitor", Price = 35000 },
                new Product { PCode = 204, Name = "Printer", QtyInStock = 5, Details = "Laser printer", Price = 25000 },
                new Product { PCode = 205, Name = "Router", QtyInStock = 12, Details = "WiFi 6 Router", Price = 12000 }
            };

            return View(productList);
        }
    }
}