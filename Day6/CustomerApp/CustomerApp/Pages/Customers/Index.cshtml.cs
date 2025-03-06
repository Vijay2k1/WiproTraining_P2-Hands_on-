using CustomerApp.Models;
using CustomerApp.Services;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;

namespace CustomerApp.Pages.Customers
{
    public class IndexModel : PageModel
    {
        private readonly CustomerService _customerService;

        public IndexModel()
        {
            _customerService = new CustomerService();
        }

        public List<Customer> Customers { get; set; }

        public void OnGet()
        {
            Customers = _customerService.GetAllCustomers();
        }
    }
}
