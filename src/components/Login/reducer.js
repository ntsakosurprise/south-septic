
import * as types from './types'
import * as props from './props'



export default (state = props, action)=>{

    switch (action.type) {

        case types.TEST:

        return Object.assign({}, state, {
            test: action.test
            
        })

        
    
    

        default:
        return state
    }


}