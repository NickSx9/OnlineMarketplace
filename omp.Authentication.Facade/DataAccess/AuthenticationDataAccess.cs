using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
using omp.Authentication.Facade.Interfaces;
using omp.Authentication.Facade.Model;
using omp.DataAccess.Core;

namespace omp.Authentication.Facade.DataAccess
{
    internal class AuthenticationDataAccess : IAuthenticationDataAccess
    {
        public bool Registration(RegistrationObj userDetails)
        {
            Database.MarketplaceConnectionString();
            return true;
        }

        public bool LoginAuthenticationDetails()
        {
            return true;
        }

        public bool CheckExistingUsername(string username)
        {
            return false;
        }
    }
}
