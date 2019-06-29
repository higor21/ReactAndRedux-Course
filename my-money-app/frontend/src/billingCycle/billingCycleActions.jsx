import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { /* reset as resetForm, */ initialize } from 'redux-form'

import { selectTab, showTabs } from '../common/tabs/tabActions'

const BASE_URL = "http://localhost:3000/api"
const INITIAL_VALUES = {}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){
    return submit(values, 'post')
}

export function update(values){
    return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method){
    return dispatch => {
        const id = values._id || ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            }).catch(e => {
                e.response.data.errors.forEach(e => toastr.error('Erro: ', e))
            })
    }
}

export function showUpdate(billingCycle){
    return showTab('tabUpdate', billingCycle)
}

export function showDelete(billingCycle){
    return showTab('tabDelete', billingCycle)
}

function showTab(tab, billingCycle){
    return [
        selectTab(tab),
        showTabs(tab),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init(){
    return [
        selectTab('tabList'),
        getList(),
        showTabs('tabList', 'tabCreate'),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}