import React from 'react';
import s from './style.module.scss'
import PresentationAsso from '../../components/PresentationAsso/PresentationAsso';

function Association(props) {
    return (
        <div className={s.container}>
            <PresentationAsso/>
        </div>
    );
}

export default Association;