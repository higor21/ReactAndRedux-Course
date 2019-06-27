import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard2/dashboard2'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer