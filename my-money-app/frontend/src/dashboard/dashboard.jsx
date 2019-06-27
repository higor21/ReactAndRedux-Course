import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import { getSummary } from '../dashboard/dashboardActions'

class Dashboard extends Component {

    componentWillMount(){
        this.props.getSummary()
    }

    render(){
        const { credit, debt } = this.props.summary

        return (
            <div>
                <ContentHeader title='Dashboard' small='versão 0.1' />
                <Content>
                    <Row>
                        <ValueBox
                            color='green' value={`R$ ${credit}`} cols='12 6 4'
                            text='Total de Créditos' icon='bank'
                        />
                        <ValueBox
                            color='red' value={`R$ ${debt}`} cols='12 6 4'
                            text='Total de Débitos' icon='credit-card'
                        />
                        <ValueBox 
                            color='blue'value={`R$ ${credit-debt}`} cols='12 6 4'
                            text='Valor Consolidado' icon='money'
                        />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)