import React, { useState } from 'react';
import closedIcon from './vectors/vector_closed.png';
import openIcon from './vectors/vector_open.png';

const ToggleComponent = ({ title, initialOpenState, content }) => {
    const [isOpen, setIsOpen] = useState(initialOpenState);

    const toggleOpenState = () => {
        setIsOpen(!isOpen);
    };

    const textStyle = {
        lineHeight: '2',
        textAlign: 'justify',
        
    };

    const titleStyle = {
        fontFamily: 'Arial',
        borderBottom: '3px solid #0FCEA0', 
        paddingBottom: '5px',
    };

    return (

        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={titleStyle}>{title}</h3>
                
                <img
                    src={isOpen ? openIcon : closedIcon}
                    alt={isOpen ? 'Open icon' : 'Closed icon'}
                    style={{ width: '40px', height: '20px', marginRight: '0px', cursor: 'pointer', marginLeft: '50px' }}
                    onClick={toggleOpenState} 
                />
            </div>
            {isOpen && <p style={textStyle} >{content}</p>}

        </div>
    );
};

export default ToggleComponent;

