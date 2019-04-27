import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchdataforuser } from '../actions/datafetch';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons/Button';

export class Dashboard extends Component {

    componentDidMount() {
        this.props.dispatch(fetchdataforuser());
    }

    logout = () =>{
        this.props.logout();
    }
    render() {
        return (
            <div id="loginDetails">
                Welcome, {this.props.userName}
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
                        {this.props.dataforuser && this.props.dataforuser.user && this.props.dataforuser.user.map((element, index) => {
                            return (
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
                <br />
                <br />
                <Button
                    id="btnSubmit"
                    type="submit"
                    children="Logout"
                    className="btn-green"
                    raised
                    secondary
                    onClick={this.logout}
                />
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
