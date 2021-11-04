import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { handleClick, name, isSelected } = this.props;
        
        return (
            <button 
                type="button" 
                className={isSelected ? 'btn btn-primary me-5' : 'btn btn-outline-primary me-5'}
                onClick={() => handleClick(name)}
            >
                {name}
            </button>
        );
    }
}

export default Button;