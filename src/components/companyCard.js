import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

import actionTypes from "../constants"
import Company from "./company"

class CompanyCard extends Component {
  componentDidMount(){
    const id = this.props.location.pathname.split('/')[2]
    this.props.fetchCompany(id) //get data
  };
  
  render(){
    // const { fetching, company, error } = this.props
    const { company } = this.props
    
    if(!company){
      return <p>Loading...</p>
    }

    // if (error){
    //  return <p style={{ color: "red" }}>Sorry, something went wrong!</p>
    // }

    const editUrl = `/company/edit/${company.id}`
    return(
      <div>
        <NavLink to="/" className="btn btn-link">Назад</NavLink>
        &nbsp;
        <NavLink to={editUrl} className="btn btn-link">Редактировать</NavLink>
        <Company company={company} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // fetching: state.companiesReducer.fetching,
    // error: state.companiesReducer.error,
    company: state.companiesReducer.company
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCompany: (id) => dispatch({ type: actionTypes.FETCH_COMPANY, payload: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyCard);