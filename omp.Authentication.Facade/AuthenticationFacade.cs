using System;
using omp.Authentication.Facade.DataAccess;
using omp.Authentication.Facade.Interfaces;
using omp.Authentication.Facade.Model;

namespace omp.Authentication.Facade
{
    public class AuthenticationFacade : IAuthenticationFacade
    {
        private readonly IAuthenticationDataAccess _authenticationDataAccess;
        public AuthenticationFacade()
        {   // learn how to inject this
            _authenticationDataAccess = new AuthenticationDataAccess();
        }
        public bool IsUserAuthenticated()
        {
            return _authenticationDataAccess.LoginAuthenticationDetails();
        }
        public bool Registration(RegistrationObj registration)
        {
            return _authenticationDataAccess.Registration(registration);
        }
    }
}
