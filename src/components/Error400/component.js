
import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import ErrorHeader from './errorheader/errorheader'





class NotFound404 extends Component{


    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE HEADER COMPONENT IS GOING TO MOUNT')
    }


    render(){

        return(

            <article className="grid-row pd-bottom-fd-xxx-sm">
                  
                  <section>
                      <ErrorHeader />
                  </section>

                 <section className="notfound__content">

                     <div className="notfound__ow">

                         <span className="notfound__ow--f-1">4</span>
                         <span className="notfound__ow--o">
                             <small className="notfound__ow--o-num">0</small>
                             <small className="notfound__ow--o-text">Bad Request</small>
                         </span>
                         <span className="notfound__ow--f-2">0</span>

                     </div>
                     <div className="notfound__message">

                        <h3 className="notfound__message--title">Your request resulted in an error</h3>

                        <p className="notfound__message--text">
                            You got to this page because the request you've sent is bad.

                        </p>

                        <Link to="/" className="link">
                            <button className="notfound__message--btn">Go to Home</button>
                        </Link>
                     </div>
                 </section>

                 <strong className="clearfix" />

            </article>
        )
    }




}

const mapStateToProps = (state)=>{


    return {

        login: {
            ...state.auth
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(NotFound404)