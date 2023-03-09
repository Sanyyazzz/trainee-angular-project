using Microsoft.AspNetCore.Mvc;

namespace StaticData_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly ILogger<EmployeeController> _logger;

        public EmployeeController(ILogger<EmployeeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Employee> GetAll()
        {
            return new List<Employee>()
            {
              new Employee { Id = 0, FirstName = "Oleksandr", LastName = "Ivanitskyi", Salary = 400, IsMarried = false },
              new Employee { Id = 1, FirstName = "Ivan", LastName = "Ivanocush", Salary = 800, IsMarried = false },
              new Employee { Id = 2, FirstName = "Mykola", LastName = "Kutsko", Salary = 600, IsMarried = true },
              new Employee { Id = 3, FirstName = "Masha", LastName = "Polyakova", Salary = 700, IsMarried = false },
            };
        }
    }
}
