import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Career extends Component {
    render() {
        return (
            <h1>
                Welcome to Career
            </h1>
        )
    }
}

Career.propTypes = {
    index: PropTypes.string,
}