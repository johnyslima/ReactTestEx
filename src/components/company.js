import React, { Component } from "react"
import moment from "moment"

class Company extends Component {
  render(){
    const { company } = this.props

    return(
      <div className="company">
        <div className="card">
            <h2 className="card-header">{company.name}</h2>
            <div className="card-body">
                <p>ОГРН: {company.ogrn}</p>
                <p>Тип компании: {company.type_company}</p>
                <p>Дата регистрации: {moment(company.registration_date).format('DD MMMM YYYY')}</p>
                <p>Статус: {company.active ? 'Активна' : 'Неактивна'}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Company;