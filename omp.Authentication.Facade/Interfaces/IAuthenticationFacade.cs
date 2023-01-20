using omp.Authentication.Facade.Model;

namespace omp.Authentication.Facade.Interfaces
{
    public interface IAuthenticationFacade
    {
        public bool IsUserAuthenticated();
        public bool Registration(RegistrationObj registration);
    }
}