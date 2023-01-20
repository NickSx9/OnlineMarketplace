using Microsoft.VisualBasic;
using omp.Authentication.Facade.Model;
using OnlineMarketplace.Model;
using System;

namespace OnlineMarketplace.Mapper
{
    public class RegistrationMapper : IRegistrationMapper
    {
        public RegistrationObj GetMappedRegistrationObject(Registration registration)
        {
            RegistrationObj registrationObj = new RegistrationObj()
            {
                AccountStatue = true,
                CustomerDetails = new CustomerDetails()
                {
                    Title = registration.Title,
                    Firstname = registration.Firstname,
                    Lastname = registration.Lastname,
                    Username = registration.Username,
                    Password = registration.Password,
                    EmailAddress = registration.EmailAddress
                },
                CompanyDetails = new CompanyDetails()
                {
                    CompanyName = registration.CompanyName,
                    CompanyEmail = registration.CompanyEmail,
                    CompanyAddress = new omp.Authentication.Facade.Model.CompanyAddress()
                    {
                        AddressLineOne = registration.CompanyAddress.AddressLineOne,
                        AddressLineTwo = registration.CompanyAddress.AddressLineTwo,
                        TownCity = registration.CompanyAddress.TownCity,
                        Postcode = registration.CompanyAddress.Postcode
                    }
                },
                RegistrationDate = DateTime.Now.ToString()
            };
            return registrationObj;
        }
    }
}
