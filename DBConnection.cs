using System;
using System.Data.SqlClient;


namespace IntraModule
{
    public class DBConnection
    {
        public string ConnectionString = @"Server=localhost,Authentication=Windows Authentication, Database=Saturn"
;
        SqlConnection objConnection;

        public void openConnection()
        {
            objConnection = new SqlConnection(ConnectionString);
            objConnection.Open();
        }

        public void ExecuteQueries(string Query_)
        {
            SqlCommand cmd = new SqlCommand(Query_, objConnection);
            cmd.ExecuteNonQuery();
        }

        public SqlDataReader DataReader(string Query_)
        {
            SqlCommand cmd = new SqlCommand(Query_, objConnection);
            SqlDataReader dr = cmd.ExecuteReader();
            return dr;
        }

        public void closeConnection()
        {
            objConnection.Close();
        }



    }
}
