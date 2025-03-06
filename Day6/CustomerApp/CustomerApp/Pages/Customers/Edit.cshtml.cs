using CustomerApp.Models;
using CustomerApp.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CustomerApp.Pages.Customers
{
    public class EditModel : PageModel
    {
        private readonly CustomerService _customerService;

        public EditModel()
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
            if (!ModelState.IsValid)
                return Page();

            _customerService.UpdateCustomer(Customer);
            return RedirectToPage("Index");
        }
    }
}
