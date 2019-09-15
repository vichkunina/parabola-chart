import React from 'react';
import { cn } from '@bem-react/classname';
import './index.css';
import { PlaneButtons } from '../PlaneButtons';

const cnFormulaEditor = cn('FormulaEditor')

export const Cofficient = ({ onSubmit, changeCofficient, cleanFields }) =>
    <form className={cnFormulaEditor()} onSubmit={onSubmit}>
        <h2 className={cnFormulaEditor('Header')}>Введите значение коэффициентов</h2>
        <div>
            y = <input
                id={1}
                className={cnFormulaEditor('CoefficientInput')}
                defaultValue={1}
                onBlur={changeCofficient}
            />x<sup>2</sup> + <input
                id={2}
                className={cnFormulaEditor('CoefficientInput')}
                defaultValue={0}
                onBlur={changeCofficient}
            />x+ 
            <input
                id={3}
                className={cnFormulaEditor('CoefficientInput')}
                defaultValue={0}
                onBlur={changeCofficient}
            />
        </div>
        <PlaneButtons cleanFields={cleanFields}/>
    </form>
