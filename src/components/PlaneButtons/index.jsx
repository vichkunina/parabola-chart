import React from 'react';
import { cn } from '@bem-react/classname';
import './index.css';

const cnFormulaButtons = cn('FormulaEditor')

export const PlaneButtons = ({ clearFields }) =>
    <div className={cnFormulaButtons('Buttons')}>
        <button
            className={cnFormulaButtons('Button')}
            type="submit"
        >Рисовать</button>
        <button type="reset" className={cnFormulaButtons('Button')} onClick={() => clearFields()}>
            Очистить
        </button>
    </div>
