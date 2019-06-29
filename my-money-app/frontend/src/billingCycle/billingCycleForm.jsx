import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/* reduxForm ~> decora o componente para ligar o componente como redux Form */
import { reduxForm, Field } from 'redux-form'
import CustomInput from '../common/form/labelAdInput'
import { init } from './billingCycleActions'

class BillingCycleForm extends Component {
    
    render(){
        /* o método 'heandleSubmit' foi incluido pela decoração do reduxForm (lá em baixo) */
        const { handleSubmit, readOnly } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={CustomInput} readOnly={readOnly}
                        label='Nome' cols='12 8' placeholder='Informe o nome'
                    />
                    <Field name='month' component={CustomInput} readOnly={readOnly}
                        label='Mês' cols='12 2' placeholder='Informe o mês'
                    />
                    <Field name='year' component={CustomInput} readOnly={readOnly}
                        label='Year' cols='12 2' placeholder='Informe o ano'
                    />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )    
    }
}
/* destroyOnUnmout: não permite a destrução dos dados após o componente ser distruído */
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDistatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDistatchToProps)(BillingCycleForm)