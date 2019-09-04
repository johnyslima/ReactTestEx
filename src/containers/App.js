import React, { Component } from "react";
import { Route, HashRouter as Router } from "react-router-dom";

import CompaniesList from "./companies";
import CompanyCard from "../components/companyCard";
import EditCompany from "../containers/editCompany";

class App extends Component {

  render() {
    return (
      <div className="main">
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <header>
                <h1 className="title">Список компаний</h1>
                </header>
                <Router>
                <div className="app">
                    <section className="content">
                    <Route path="/" exact component={CompaniesList}/>
                    <Route path="/company/:id" exact component={CompanyCard}/>
                    <Route path="/company/edit/:id" exact component={EditCompany}/>
                    </section>
                </div>
                </Router>
                {/* {this.props.children} */}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
