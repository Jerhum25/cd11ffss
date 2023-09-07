import React from 'react';
import s from './style.module.scss'
import ProgrammeDetails from '../../components/ProgrammeDetails/ProgrammeDetails';

function Programme(props) {
    return (
        <div className={s.container}>
            <ProgrammeDetails/>
        </div>
    );
}

export default Programme;