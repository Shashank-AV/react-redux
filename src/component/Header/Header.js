import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Header.scss';
import { withRouter  } from 'react-router';

class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false,
        feedbackOpen: false
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    toggleFeedback = (value) => {
        this.setState({
            feedbackOpen: value
        })
    }

    handleBackLogin = (e) => {
        e.preventDefault()
        this.props.history.push('/')
    }

    render() {
        
        return (
            <AppBar
                position="fixed"
                style={{
                    color: '#000000',
                    height: "70px"
                }}
            >
                <ExitToAppIcon style={{ marginTop: "1%", marginLeft: "95%", color: "#fff", cursor: "pointer"}} fontSize="large" onClick={this.handleBackLogin} />
            </AppBar>
        );
    }
}

Header.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(withRouter (Header));