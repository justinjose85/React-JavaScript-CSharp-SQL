using System;

namespace Module1.Models
{
    public class IssueModel
    {
        public int Id { get; set; }

        public string machinename { get; set; }
        
        public int mvn { get; set; }
        
        public string customer { get; set; }
        
        public DateTime reportedon{ get; set; }
        
        public string dreport { get; set; }
        
        public string responsible { get; set; }

        public string changereport { get; set; }

        public string priority { get; set; }
        public string status { get; set; }

    }
}