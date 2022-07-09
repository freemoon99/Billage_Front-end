import React from 'react';
import './Template.css';

const TodoTemplate = ({ children }) => {
    return (
        <div className="Template">
            <div className="app-title">Billage</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;