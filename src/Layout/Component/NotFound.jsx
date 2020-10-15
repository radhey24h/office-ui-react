import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NotFound extends Component {
    render() {
        return (
            <h1>Page not found</h1>
        )
    }
}

NotFound.propTypes = {
    index: PropTypes.string,
}