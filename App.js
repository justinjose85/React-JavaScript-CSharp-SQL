import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { Header } from './components/Header'
import { Issues } from './components/Issues'
import CreateIssue from './components/CreateIssue'
import { DisplayBoard } from './components/DisplayBoard'
import { getAllIssues, createIssue } from './services/IssueService'




class App extends Component {

    state = {
        issue: {},
        issues: [],
        numberOfIssues: 0
    }

    createIssue = (e) => {
        createIssue(this.state.issue)
            .then(response => {
                console.log(response);
                this.setState({numberOfIssues: this.state.numberOfIssues + 1})
            });
    }

    getAllIssues = () => {
        getAllIssues()
            .then(issues => {
                console.log(issues)
                this.setState({issues: issues, numberOfIssues: issues.length})
            });
    }

    onChangeForm = (e) => {
        let issue = this.state.issue
        if (e.target.name === 'machinename') {
            issue.machinename = e.target.value;
        } else if (e.target.name === 'mvn') {
            issue.mvn = e.target.value;
        } else if (e.target.name === 'customer') {
            issue.customer = e.target.value;
        } else if (e.target.name === 'reportedon') {
            issue.reportedon = e.target.value;
        } else if (e.target.name === 'dreport') {
            issue.dreport = e.target.value;
        } else if (e.target.name === 'responsible') {
            issue.responsible = e.target.value;
        } else if (e.target.name === 'changereport') {
            issue.changereport = e.target.value;
        } else if (e.target.name === 'priority') {
            issue.priority = e.target.value;
        } else if (e.target.name === 'status') {
            issue.status = e.target.value;

        }
        this.setState({ issue })
    }

    render() {

        return (
            <div className="App">
                <Header></Header>
                <div className="container mrgnbtm">
                    <div className="row">
                        <div className="col-md-8">
                            <CreateIssue
                                onChangeForm={this.onChangeForm}
                                createIssue={this.createIssue}
                            >
                            </CreateIssue>
                        </div>
                        <div className="col-md-4">
                            <DisplayBoard
                                numberOfIssues={this.state.numberOfIssues}
                                getAllIssues={this.getAllIssues}
                            >
                            </DisplayBoard>
                        </div>
                    </div>
                </div>
                <div className="row mrgnbtm">
                    <Issues issues={this.state.issues}></Issues>
                </div>
            </div>
        );
    }
}

export default App;