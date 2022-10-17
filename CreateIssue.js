import React from 'react';


const CreateIssue = ({ onChangeForm, createIssue }) => {


    return(
        <div style={{ backgroundColor: '#8ED1FC' }} className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2 style={{ color: 'darkred' }}>Problem erstellen</h2>
                <form>
                    <div className="row">


                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">Maschinenname</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="machinename" id="machinename" aria-describedby="emailHelp" placeholder="Maschinenname" />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">MVN</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="mvn" id="mvn" aria-describedby="emailHelp" placeholder="MVN" />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">Kunden</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="customer" id="customer" aria-describedby="emailHelp" placeholder="Kunden" />
                            </div>



                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">Gemeldet Am</label>
                                <input type="date" onChange={(e) => onChangeForm(e)} className="form-control" name="reportedon" id="reportedon" aria-describedby="emailHelp" placeholder="dd/mm/yyyy" />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">8D-Bericht Nr.</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="dreport" id="dreport" aria-describedby="emailHelp" placeholder="8D-Bericht" />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">Zust&auml;ndig</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="responsible" id="responsible" aria-describedby="emailHelp" placeholder="Zust&auml;ndig" />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">&Auml;nderungsnummer</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="changereport" id="changereport" aria-describedby="emailHelp" placeholder="&Auml;nderungsnummer" />
                            </div>


                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">Priorit&auml;t</label>
                                    <select onChange={(e) => onChangeForm(e)} className="form-control" name="priority" id="priority" aria-describedby="emailHelp">
                                    <option value="Niedrig">Niedrig</option>
                                    <option value="Mittel">Mittel</option>
                                    <option value="Hoch">Hoch</option>

                                    </select>
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">Status</label>
                                
                                
                                    <select onChange={(e) => onChangeForm(e)} className="form-control" name="status" id="status" aria-describedby="emailHelp">
                                    <option value="Ausstehend">Ausstehend</option>
                                    <option value="In Bearbeitung">In Bearbeitung</option>
                                    <option value="Abgeschlossen">Abgeschlossen</option>
                                         
                                </select>
                               
                            </div>

                        </div>

                        <button type="button" onClick={(e) => createIssue()} className="btn btn-danger">Erstellen</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default CreateIssue