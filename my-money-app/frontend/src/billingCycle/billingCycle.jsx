import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import TabsHeader from '../common/tabs/tabsHeader';
import TabsContent from '../common/tabs/tabsContent';
import Tabs from '../common/tabs/tabs'
import TabHeader from '../common/tabs/tabHeader'
import TabContent from '../common/tabs/tabContent';
import { selectTab, showTabs } from '../common/tabs/tabActions'
import { create } from './billingCycleActions'
import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {

    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList','tabCreate')
    }

    render(){
        return (
            <div>
                <ContentHeader title="Billing Cycle" small="versão 0.1" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'> 
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'> 
                                <Form onSubmit={this.props.create}/>
                            </TabContent>
                            <TabContent id='tabUpdate'> Alterar </TabContent>
                            <TabContent id='tabDelete'> Excluir </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)