import React from 'react';
import { cn } from '@bem-react/classname';
import './index.css';

const cnFormulaButtons = cn('FormulaEditor')

export const PlaneButtons = ({ cleanFields }) =>
    <div className={cnFormulaButtons('Buttons')}>
        <input
            className={cnFormulaButtons('Button')}
            type="submit"
            value="Рисовать"
        />
        <button className={cnFormulaButtons('Button')} onClick={() => cleanFields()}>
            Очистить
        </button>
    </div>
