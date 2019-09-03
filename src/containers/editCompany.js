import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import actionTypes from "../constants"
import CompanyForm from "./companyForm"
import Company from "../components/company"

class EditCompany extends Component {
  componentDidMount(){
    const id = this.props.location.pathname.split('/')[3];
    this.props.fetchCompany(id);
  };

  saveData = (values) => {
    let updatedCompany = values;
    updatedCompany.id = this.props.company.id
    this.props.updateCompany(updatedCompany)
  };
  
  render(){
    const {company} = this.props;
    
    if(!company){
      return <p>Loading...</p>
    }

    const backUrl = `/company/${company.id}`
    return(
      <div className="container">
        <NavLink to={backUrl} className="btn btn-link">Назад</NavLink>
        <h3>Редактирование карточки компании</h3>
        <CompanyForm onSubmit={this.saveData} initialValues={company}/>
        <div className="card">
            <Company company={company} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    company: state.companiesReducer.company
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCompany: (id) => dispatch({ type: actionTypes.FETCH_COMPANY, payload: id }),
    updateCompany: (company) => dispatch({ type: actionTypes.UPDATE_COMPANY, payload: company})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);