import React, { Component } from "react";

import { Plane } from '../Plane';
import { Formula } from '../Formula';
import { Сoefficient } from '../Сoefficient';

import './index.css';
import { cn } from '@bem-react/classname';

const cnChart = cn('Chart');

const defaultParabolaLines = {
    dataKey: 'y = x²',
    color: '#b0d2a8',
    value: <div>y = x<sup>2</sup></div>
};

export default class Parabola extends Component {
    state = {
        terms: {
            a: 1,
            b: 0,
            c: 0
        },
        chartLines: this.getDefaultLines(),
        parabolaLines: [defaultParabolaLines],
    };

    handleChange = event => {
        let { id, value } = event.target;
        id = Number(id);

        const inputValuesId = {
            1: 'a',
            2: 'b',
            3: 'c',
        };

        if(/[0-9\.\-]+$|^\s*$/.test(value)) {
            this.setState({
                terms: {
                    ...this.state.terms,
                    [inputValuesId[id]]: value
                }
            });
        }
    }

    getDefaultLines() {
        let defaultLines = [];
    
        for (let i = -10; i <= 10; i++) {
            defaultLines.push({
                "name": i,
                "y = x²": Math.pow(i, 2)
            })
        }
    
        return defaultLines;
    }

    getRandomHex = () =>
        `#${[0,0,0]
            .map(() => (
                '00' + (~~(Math.random() * 256)).toString(16)
            ).
            slice(-2))
            .join('')}5c`

    handleSubmit = event => {
        event.preventDefault();

        const { terms,
            chartLines,
            parabolaLines
        } = this.state;
        const lines = [];
        const currentFormula = this.getCurrentLine();
        const { a, b, c } = terms;
        
        for (let i = -10, index = 0; i <= 10; i++) {
            let chartLine = chartLines[index];

            chartLine[currentFormula] = Number(a) * Math.pow(i, 2)
                + Number(b) * i + Number(c);
                lines.push(chartLine);
            index++;
        }
        
        let color = this.getRandomHex();
        
        parabolaLines.push({
            dataKey: currentFormula,
            color,
            value: currentFormula
        });

        this.setState({
            chartLines: lines,
            parabolaLines
        })
    }

    clearFields = () => {
        this.setState({
            terms: {
                a: 1,
                b: 0, 
                c: 0
            },
            chartLines: this.getDefaultLines(),
            parabolaLines: [defaultParabolaLines],
        });
    };

    getCurrentLine() {
        const coefficients = Object.values(this.state.terms);
        const suffixes = ['x² ', 'x ', ''];
        const operators = coefficients.map(term => term < 0 ? '- ' : '+ ');
        const tokens = ['y = '];
        
        suffixes.map((suffix, i) => {
            const term = Math.abs(coefficients[i]);
            const operator = operators[i];

            if (term) {
                (operator.includes('-') || i) && tokens.push(operator);
                tokens.push(term);
                tokens.push(suffix);
            }
        });
       
        return tokens.join('').trim();
    }

    render() {
        const {
            chartLines,
            parabolaLines,
            terms
        } = this.state;

        return (
            <div className={cnChart()}>
                <Plane
                    chartLines={chartLines}
                    parabolaLines={parabolaLines}
                />
                <div className={cnChart('Formula')}>
                    <Formula currentLine={this.getCurrentLine()} />
                    <Сoefficient
                        terms={terms}
                        clearFields={this.clearFields}
                        onSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                    />
                </div>
            </div>
        )
    }
};
