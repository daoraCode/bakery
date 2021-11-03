import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { handleClick, name } = this.props;
        return (
            <button 
                type="button" 
                className="btn btn-outline-primary me-5" 
                onClick={() => handleClick(name)}
            >
                {name}
            </button>
        );
    }
}

export default Button;