using IntraModule;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Module1.Models
{
    public class IssueRepository : IIssueRepository
    {
        private List<IssueModel> issues = new List<IssueModel>();
        private int _nextId = 1;
        private DBConnection objDBConnection;

        public IssueRepository()
        {
            Add(new IssueModel { machinename = "Press1", mvn = 9185, customer = "Apple Inc.", reportedon = new DateTime(2022, 02, 15), dreport = "00045658", responsible = "Kidlo", changereport = "158-2022", priority = "Hoch", status = "In Bearbeitung" });
            Add(new IssueModel { machinename = "Press2", mvn = 3275, customer = "Saudi Aramco", reportedon = new DateTime(2022, 02, 15), dreport = "00085658", priority = "Niedrig", status = "Ausstehend" });
            Add(new IssueModel { machinename = "Press3", mvn = 5915, customer = "Microsoft Corp.", reportedon = new DateTime(2022, 02, 15), dreport = "00075658", responsible = "Kidlo", changereport = "158-2022", priority = "Mittel", status = "Abgeschlossen" });
        }



        public IEnumerable<IssueModel> GetAll()
        {
            return issues;
        }

        public IssueModel Add(IssueModel item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            item.Id = _nextId++;
            issues.Add(item);
            return item;
        }

        public IssueModel CreateIssueinDB(IssueModel item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            objDBConnection.openConnection();
            string strQuery = "INSERT INTO Tbl_IntraIssues" + item.machinename+  ","+ item.priority;
            objDBConnection.ExecuteQueries(strQuery);
            objDBConnection.closeConnection();

            return item;
        }

        public IEnumerable<IssueModel> DBGetIssues()


        {
            objDBConnection.openConnection();
            string strQuery = "SELECT * FROM Tbl_IntraIssues ";
            SqlDataReader dr = objDBConnection.DataReader(strQuery);
            objDBConnection.closeConnection();

            foreach (IssueModel item in dr)
            {
                issues.Add(item);
            }
            return issues;
        }

    }
}