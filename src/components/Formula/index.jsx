import React from 'react';
import { cn } from '@bem-react/classname';
import './index.css';

const cnFormula = cn('Formula')

export const Formula = ({ currentLine }) => {
    return (
        <div className={cnFormula()}>
            <div>
                <span className={cnFormula('Header')}>Вид функции</span>
                <div className={cnFormula('Expression')}><i>y = kx<sup>2</sup></i></div>
            </div>
            <div>
                <span className={cnFormula('Header')}>Формула с коэффициентами</span>
                <div className={cnFormula('Expression')}><i>{currentLine}</i></div>
            </div>
        </div>
    )
};