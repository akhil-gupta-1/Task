import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchdataforuser} from '../actions/datafetch';
import PropTypes from 'prop-types';

export class Dashboard extends Component {

    componentDidMount(){
        this.props.dispatch(fetchdataforuser());
    }
    render() {
        return (
            <div id="loginDetails">
                Welcome 
                <table>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>age</td>
                            <td>gender</td>
                            <td>email</td>
                            <td>phone</td>
                        </tr>
                        {this.props.dataforuser  && this.props.dataforuser.user&& this.props.dataforuser.user.map((element, index)=>{
                            return(
                            <tr>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.age}</td>
                            <td>{element.gender}</td>
                            <td>{element.email}</td>
                            <td>{element.phone}</td>
                        </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

Dashboard.propTypes = {
    dispatch: PropTypes.func,
  }

function mapStateToProps(state) {
    return {
      dataforuser: state.dashboardReducer.data
    }
  }

export default connect(mapStateToProps)(Dashboard);
