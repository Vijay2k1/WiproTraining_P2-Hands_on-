using CustomerApp.Models;
using CustomerApp.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CustomerApp.Pages.Customers
{
    public class CreateModel : PageModel
    {
        private readonly CustomerService _customerService;

        public CreateModel()
        {
            _customerService = new CustomerService();
        }

        [BindProperty]
        public Customer Customer { get; set; }

        public IActionResult OnPost()
        {
            if (!ModelState.IsValid)
                return Page();

            _customerService.AddCustomer(Customer);
            return RedirectToPage("Index");
        }
    }
}
