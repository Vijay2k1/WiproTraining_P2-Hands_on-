using CustomerApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace CustomerApp.Services
{
    public class CustomerService
    {
        private static List<Customer> customers = new List<Customer>
        {
            new Customer { CustomerID = 1, Name = "Vijay", Address = "123 Main Bangalore", Country = "IND", City = "BNG", Phoneno = "1234567890" },
            new Customer { CustomerID = 2, Name = "Ajay", Address = "456 Main Mysore", Country = "IND", City = "MYS", Phoneno = "9876543210" }
        };

        public List<Customer> GetAllCustomers()
        {
            return customers;
        }

        public Customer GetCustomerById(int id)
        {
            return customers.FirstOrDefault(c => c.CustomerID == id);
        }

        public void AddCustomer(Customer customer)
        {
            customer.CustomerID = customers.Count + 1;
            customers.Add(customer);
        }

        public void UpdateCustomer(Customer customer)
        {
            var existingCustomer = GetCustomerById(customer.CustomerID);
            if (existingCustomer != null)
            {
                existingCustomer.Name = customer.Name;
                existingCustomer.Address = customer.Address;
                existingCustomer.Country = customer.Country;
                existingCustomer.City = customer.City;
                existingCustomer.Phoneno = customer.Phoneno;
            }
        }

        public void DeleteCustomer(int id)
        {
            var customer = GetCustomerById(id);
            if (customer != null)
            {
                customers.Remove(customer);
            }
        }
    }
}
