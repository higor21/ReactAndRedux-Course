import React, { Component } from 'react'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
    render(){
        return (
            <div>
                <ContentHeader title='Dashboard' small='versão 0.1' />
                <Content>
                    <Row>
                        <ValueBox
                            color='green' value='R$ 2352,50' cols='12 6 4'
                            text='Total de Créditos' icon='bank'
                        />
                        <ValueBox
                            color='red' value='R$ 800,50' cols='12 6 4'
                            text='Total de Débitos' icon='credit-card'
                        />
                        <ValueBox
                            color='blue' value='R$ 1532,00' cols='12 6 4'
                            text='Valor Consolidado' icon='money'
                        />
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard