import React from 'react';

const ErrorMessages = ({message}) => {
    return (
        <div className='error-message'>
           {message}
        </div>
    );
};

export default ErrorMessages;