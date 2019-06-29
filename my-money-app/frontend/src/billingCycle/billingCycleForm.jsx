import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/* reduxForm ~> decora o componente para ligar o componente como redux Form */
import { reduxForm, Field, formValueSelector } from 'redux-form'
import CustomInput from '../common/form/labelAdInput'
import { init } from './billingCycleActions'
import ItemList from './ItemList'
import Summary from './summary'

class BillingCycleForm extends Component {
    
    calculateSummary(){
        const sum = (a, b) => a + b
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render(){
        /* o método 'heandleSubmit' foi incluido pela decoração do reduxForm (lá em baixo) */
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()

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
                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>
                    <ItemList
                        cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend='Créditos'
                    />
                    <ItemList
                        cols='12 6' list={debts} readOnly={readOnly}
                        field='debts' legend='Débitos' showStatus={true}
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

const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts'),
})
const mapDistatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDistatchToProps)(BillingCycleForm)