import React from 'react';
import pT from 'prop-types';
import classNames from 'classnames';

import './Textarea.css'

const Textarea = ({ className, ...props }) => {
    return (
        <div className={classNames('textarea', className)} >
            <textarea {...props} className='textarea-input'></textarea>
        </div>);
};

Textarea.propTypes = {
    className: pT.string,
}

export default Textarea;