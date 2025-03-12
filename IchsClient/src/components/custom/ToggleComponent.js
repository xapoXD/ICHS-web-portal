import React, { useState, useEffect } from 'react';
import closedIcon from './vectors/vector_closed.png';
import openIcon from './vectors/vector_open.png';

const ToggleComponent = ({ title, initialOpenState, content }) => {
    const [isOpen, setIsOpen] = useState(initialOpenState);

    // Update state if initialOpenState changes (e.g., when navigating via hash)
    useEffect(() => {
        setIsOpen(initialOpenState);
    }, [initialOpenState]);

    const toggleOpenState = () => {
        setIsOpen(!isOpen);
    };

    const textStyle = {
        lineHeight: '2',
        textAlign: 'justify',
    };

    const titleContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer', // Makes it clear it's clickable
        marginBottom: 20,
    };

    const titleStyle = {
        fontFamily: 'Arial',
        borderBottom: '3px solid #0FCEA0', 
        //marginTop: '0px',
        //margin: 10, // Ensure spacing is consistent
        //marginBottom: 200,
        flexGrow: 0, // Ensures text takes up available space
    };

    return (
        <div>
            {/* Clickable area wraps title and icon , marginTop: '50px' */}
            <div style={titleContainerStyle} onClick={toggleOpenState}>
                <h3 style={titleStyle}>{title}</h3>
                <img
                    src={isOpen ? openIcon : closedIcon}
                    alt={isOpen ? 'Open icon' : 'Closed icon'}
                    style={{ width: '40px', height: '20px', marginLeft: '30px'}}
                />
            </div>
            {isOpen && <p style={textStyle}>{content}</p>}
        </div>
    );
};

export default ToggleComponent;
