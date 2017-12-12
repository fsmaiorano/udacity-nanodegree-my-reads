import React, { Component } from 'react';

import './Loading.css';

class Loading extends Component {

    componentDidUpdate = () => {
        let showLoading = this.props.toggleLoading;
        let loadingOverlay = document.getElementsByClassName('loading-overlay')[0];
        showLoading === true ? loadingOverlay.classList.remove("show") : loadingOverlay.classList.add("show") ;
    }

    render() {
        return (
            <div>
                <div className="loading-overlay">
                    <div className="loading"></div>
                </div>
            </div>
        )
    }
}

export default Loading;