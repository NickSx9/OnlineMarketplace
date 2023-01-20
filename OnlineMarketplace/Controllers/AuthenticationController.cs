using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using omp.Authentication.Facade;
using omp.Authentication.Facade.Interfaces;
using omp.Authentication.Facade.Model;
using OnlineMarketplace.Mapper;
using OnlineMarketplace.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace OnlineMarketplace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase
    {

        private string _authenticationToken = "hygt-876j-iukb-5437";
        private string _loginToken = "h52t-876X";
        private string _registrationToken = "iukb-5yD8";
        private IAuthenticationFacade _authenticationFacade;

        private readonly ILogger<AuthenticationController> _logger;

        public AuthenticationController(ILogger<AuthenticationController> logger)
        {
            _logger = logger;
            _authenticationFacade = new AuthenticationFacade();
        }

        [HttpGet]
        public ActionResult<bool> CheckExistingUsernames([FromHeader(Name = "Authentication")] string authToken, [FromBody] string username)
        {
            if (authToken != _authenticationToken)
            {
                return BadRequest();
            }
            if (username == null)
            {
                return BadRequest();
            }
            // check the database for a matching username (if not in the db - return avaiable 
            return Ok("Worked");
            // return BadRequest("Not worked")
        }

        [HttpPost("Register")]
        public ActionResult<bool> Register([FromHeader(Name = "Authentication")] string authToken, [FromHeader(Name = "Registration")] string regToken, [FromBody] Registration userDetails)
        {
            //map outside object to inside object.
            if (regToken != _registrationToken)
            {
                return BadRequest();
            }
            IRegistrationMapper mapper = new RegistrationMapper();
            RegistrationObj regObj = mapper.GetMappedRegistrationObject(userDetails);
            _authenticationFacade.Registration(regObj);
            return Created("", "");
        }

        [HttpPost("Login")]
        public ActionResult<bool> Login([FromHeader(Name = "Authentication")] string authToken, [FromHeader(Name = "Login")] string loginToken, [FromBody] Login userDetails)
        {
            if (loginToken != _loginToken)
            {
                return BadRequest();
            }
            return Ok(new Response()
            {
                Success = true,
                Message = "Login Sucessful"
            });
        }
    }
}