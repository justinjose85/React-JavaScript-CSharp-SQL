import React from 'react'

export const Issues = ({issues}) => {

    console.log('issues length:::', issues.length)
    if (issues.length === 0) return null

    const IssueRow = (issue,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                <td>{index + 1}</td>

                <td>{issue.machinename}</td>
                <td>{issue.mvn}</td>
                <td>{issue.customer}</td>
                <td>{issue.reportedon}</td>
                <td>{issue.dreport}</td>
                <td>{issue.responsible}</td>
                <td>{issue.changereport}</td>
                <td>{issue.priority}</td>
                <td>{issue.status}</td>

              </tr>
          )
    }

    const issueTable = issues.map((issue,index) => IssueRow(issue,index))

    return(
        <div className="container">
            <h2>Issues</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                 <th>Problem Id</th>
                        <th>Maschinenname</th>
                        <th>MVN</th>
                        <th>Kunden</th>
                        <th>Gemeldet Am</th>
                        <th>8D-Bericht Nr.</th>
                        <th>Zust&auml;ndig</th>
                        <th>&Auml;nderungsnummer</th>
                        <th>Priorit&auml;t</th>
                        <th>Status</th>

                </tr>
                </thead>
                <tbody>
                    {issueTable}
                </tbody>
            </table>
        </div>
    )
}