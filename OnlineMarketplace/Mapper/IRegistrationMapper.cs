using omp.Authentication.Facade.Model;
using OnlineMarketplace.Model;

namespace OnlineMarketplace.Mapper
{
    public interface IRegistrationMapper
    {
        RegistrationObj GetMappedRegistrationObject(Registration registration);
    }
}