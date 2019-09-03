import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import DateTime from 'react-datetime'


class CompanyForm extends Component{

  renderDateTime = ({input}) => (
    <DateTime 
      dateFormat="DD/MM/YYYY"
      timeFormat={false}
      {...input}
    />)
    

  render(){
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="name">Название компании:</label>
          <Field name="name" component="input" type="text" className="form-control"/>
        </div>
        <div className='form-group'>
          <label htmlFor="type_company">Тип организации:</label>
          <Field name="type_company" component="select" className="form-control form-control-sm">
            <option value="OOO">ООО</option>
            <option value="ИП">ИП</option>
          </Field>
        </div>
        <div className='form-check'>
          <Field name="active" component="input" type="checkbox" className="form-check-input"/>
          <label htmlFor="active" className="form-check-label">Активна:</label>
        </div>
        <div className='form-group'>
          <label htmlFor="ogrn">ОГРН:</label>
          <Field name="ogrn" component="input" type="number" className="form-control"/>
        </div>
        <div className='form-group'>
          <label>Дата регистрации:</label>
          <Field name="registration_date" component={this.renderDateTime} className="form-control"/>
        </div>
        <button type="submit" className="btn">Сохранить</button>
        {/* <p>После сохранения данные в карточке кампании обновяться</p> */}
      </form>
    )
  }
}

CompanyForm = reduxForm({
  form: 'company'
})(CompanyForm)

export default CompanyForm