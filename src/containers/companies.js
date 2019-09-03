import React, { Component } from "react"
import { connect } from "react-redux"

import actionTypes from '../constants'
import CompanyLink from "../components/companyLink"

class CompaniesList extends Component {
  componentDidMount(){
    this.props.fetchCompanies();
  };

  content(companies){
    if(companies.length === 0){
      return <p>No companies yet</p>
    }
    return companies.map(company => {
      return <li><CompanyLink company={company} key={company.id}/></li>
    });
  }

  render(){
    const { companies } = this.props;
   
    return (
        <div className="companies-list">
            <ul>
                {companies ? this.content(companies) : ''}
            </ul>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companiesReducer.companies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCompanies: () => dispatch({ type: actionTypes.FETCH_COMPANIES_REQUEST })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList);