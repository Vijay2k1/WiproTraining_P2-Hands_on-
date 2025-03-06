using CustomerApp.Models;
using CustomerApp.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CustomerApp.Pages.Customers
{
    public class DeleteModel : PageModel
    {
        private readonly CustomerService _customerService;

        public DeleteModel()
        {
            _customerService = new CustomerService();
        }

        [BindProperty]
        public Customer Customer { get; set; }

        public IActionResult OnGet(int id)
        {
            Customer = _customerService.GetCustomerById(id);
            if (Customer == null)
                return RedirectToPage("Index");

            return Page();
        }

        public IActionResult OnPost()
        {
            _customerService.DeleteCustomer(Customer.CustomerID);
            return RedirectToPage("Index");
        }
    }
}
