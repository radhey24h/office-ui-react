import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SiteRoutes from '../routes';

export default class Content extends Component {
    render() {
        return (
            <div id="content">
                <SiteRoutes />
            </div>
        )
    }
}

Content.propTypes = {
    index: PropTypes.string,
}