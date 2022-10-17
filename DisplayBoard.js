import React from 'react'

export const DisplayBoard = ({ numberOfIssues, getAllIssues}) => {

    
    return(
        <div style={{ backgroundColor:'#FFFFFF'}} className="display-board">
            <h4 style={{ color: 'darkred' }}>Eintr&auml;ge</h4>
            <div className="number">
                Anzahl der Eintr&auml;ge: {numberOfIssues}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllIssues()} className="btn btn-warning">Eintr&auml;ge abrufen</button>
            </div>
        </div>
    )
}