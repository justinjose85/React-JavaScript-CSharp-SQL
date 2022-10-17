import React from 'react';

export const Header = () => {

    const headerStyle = {

        width: '100%',
        padding: '1%',
        backgroundColor: "white",
        color: 'darkblue',
        /*textAlign: 'center',*/
        fontFamily: "Bookman Old Style"
         
    }

  
    return (
      
        <div style={headerStyle}>

            <div className="row">
                <div className="col-md-8">
                    <img style={{ width: 150, height: 150 }} src="https://img.freepik.com/premium-vector/letter-initial-mf-logo-template-company_573652-1110.jpg?w=826" alt="Strautmann Umwelttechnik Logo" /> 
                </div>
                <div className="col-md-4">

                    <a style={{ padding: '15px', color: 'darkred', fontWeight: 'bold' }} href="/home">Reklamation</a> 
                    <a style={{ padding: '15px', color: 'darkred', fontWeight: 'bold' }} href="/kalender">Kalender</a>
                    <a style={{ padding: '15px', color: 'darkred', fontWeight: 'bold' }} href="/kalender">Anmelden</a>

                </div>
            </div>






            {/*  <h1 style={{ textAlign: "center" }}>Strautmann Ingenieurb&uuml;ro</h1>*/}

        </div > 
    )
} 