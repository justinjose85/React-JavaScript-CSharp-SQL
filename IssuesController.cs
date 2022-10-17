using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Module1.Controllers
{
    [ApiController]
    public class IssuesController : ControllerBase
    {

        private readonly ILogger<IssuesController> _logger;

        static readonly Models.IIssueRepository repository = new Models.IssueRepository();

        public IssuesController(ILogger<IssuesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("api/issues")]
        public IEnumerable<Models.IssueModel> GetAllIssues()
        {
            return repository.GetAll();
        }

        [HttpPost]
        [Route("api/issue")]
        [Consumes("application/json")]
        public Models.IssueModel PostIssue(Models.IssueModel item)
        {
            return repository.Add(item);
        }
        

    }
}
