using System;
using System.Collections.Generic;

namespace Module1.Models
{
    public interface IIssueRepository
    {
        IEnumerable<IssueModel> GetAll();

        IssueModel Add(IssueModel issue);
    }
}