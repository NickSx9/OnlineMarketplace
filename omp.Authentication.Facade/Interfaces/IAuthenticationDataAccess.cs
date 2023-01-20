using omp.Authentication.Facade.Model;

namespace omp.Authentication.Facade.Interfaces
{
    internal interface IAuthenticationDataAccess
    {
        bool CheckExistingUsername(string username);
        bool LoginAuthenticationDetails();
        bool Registration(RegistrationObj userDetails);
    }
}