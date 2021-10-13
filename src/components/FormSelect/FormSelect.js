import React from 'react';
import { Link } from 'react-router-dom';
import classes from './FormSelect.module.css';

const { previewForm } = classes;

const FormSelect = ({ title, id, description, pathway }) => {
    return (
        <Link to={pathway}>
            <div className={previewForm} key={id}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Link>
    );

};

export default FormSelect;