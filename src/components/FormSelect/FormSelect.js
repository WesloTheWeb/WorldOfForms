import React from 'react';
import classes from './FormSelect.module.css';

const { previewForm } = classes;

const FormSelect = ({title, id, description}) => {
    return (
        <div className={previewForm} key={id}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default FormSelect;