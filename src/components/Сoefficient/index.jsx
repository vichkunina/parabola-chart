import React from 'react';
import { cn } from '@bem-react/classname';
import './index.css';
import { PlaneButtons } from '../PlaneButtons';

const cnFormulaEditor = cn('FormulaEditor')

export class Сoefficient extends React.Component { 
    render() {
        const { onSubmit,
            clearFields,
            handleChange,
            terms
        } = this.props;

        return (<form className={cnFormulaEditor()} onSubmit={onSubmit}>
            <h3 className={cnFormulaEditor('Header')}>Введите значение коэффициентов</h3>
            <div>
                y = <input
                    value={this.props.terms.a}
                    id={1}
                    className={cnFormulaEditor('CoefficientInput')}
                    onChange={handleChange}
                />x<sup>2</sup> + <input
                    value={terms.b}
                    id={2}
                    className={cnFormulaEditor('CoefficientInput')}
                    onChange={handleChange}
                />x+ 
                <input
                    value={terms.c}
                    id={3}
                    className={cnFormulaEditor('CoefficientInput')}
                    onChange={handleChange}
                />
            </div>
            <PlaneButtons clearFields={clearFields}/>
        </form>);
    }
}
    