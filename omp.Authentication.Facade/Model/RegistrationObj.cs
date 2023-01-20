using System;
using System.Collections.Generic;
using System.Text;

namespace omp.Authentication.Facade.Model
{
    public class RegistrationObj
    {
        public string RegistrationDate { get; set; }
        public bool AccountStatue { get; set; }
        public CustomerDetails CustomerDetails { get; set; }
        public CompanyDetails CompanyDetails { get; set; }
    }

    public class CustomerDetails
    {
        public string Title { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string EmailAddress { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class CompanyDetails
    {
        public string CompanyName { get; set; }
        public string CompanyEmail { get; set; }
        public string ContactNumber { get; set; }
        public CompanyAddress CompanyAddress { get; set; }
        public string SubscriptionType { get; set; }
    }

    public class CompanyAddress
    {
        public string AddressLineOne { get; set; }
        public string AddressLineTwo { get; set; }
        public string TownCity { get; set; }
        public string Postcode { get; set; }
    }
}
