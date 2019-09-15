import React, { Component } from "react";

import { Plane } from '../Plane';
import { Formula } from '../Formula';
import { Cofficient } from '../Cofficient';

import './index.css';
import { cn } from '@bem-react/classname';

const cnChart = cn('Chart');

export default class Parabola extends Component {
    state = {
        leadingCofficient: 1,
        cofficient: 0,
        freeTerm: 0,
        chartLines: this.getDefaultLines(),
        parabolaLines: this.getDefaultParabolaLines()
    };

    getDefaultLines() {
        let defaultLines = [];
    
        for (let i = -10; i <= 10; i++) {
            defaultLines.push({
                'name': i,
                'y = x²': Math.pow(i, 2)
            })
        }
    
        return defaultLines;
    }
    
    getDefaultParabolaLines() {
        return [{
            dataKey: 'y = x²',
            color: '#b0d2a8',
            value: <div>y = x<sup>2</sup></div>
        }];
    }

    changeCofficient = e => {
        const { value, id } = e.target;

        if(id == 1) {
            this.setState({
                'leadingCofficient': value,
            });
        } else if (id == 2) {
            this.setState({
                'cofficient': value,
            });
        } else {
            this.setState({
                'freeTerm': value,
            });
        }
    };

    getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        color += '5c';

        return color;
    };

    handleSubmit = data => {
        data.preventDefault();

        const { chartLines, parabolaLines } = this.state;
        const { cofficient, leadingCofficient, freeTerm } = this.state;
        const lines = [];
        const currentFormula = this.getCurrentLine(leadingCofficient, cofficient, freeTerm);

        for (let i = -10, j = 0; i <= 10; i++) {
            let item = chartLines[j];
            item[currentFormula] = Number(leadingCofficient) * Math.pow(i, 2)
                + Number(cofficient) * i + Number(freeTerm);
                lines.push(item);
            j++;
        }
        
        let color = this.getRandomColor();
        
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

    cleanFields = () => {
        this.setState({
            leadingCofficient: 1,
            cofficient: 0,
            freeTerm: 0,
            chartLines: this.getDefaultLines(),
            parabolaLines: this.getDefaultParabolaLines(),
        });
    };

    getCurrentLine = (...coffecients) => {
        let resultFormula = 'y = ';
        let [leadingCofficient, coffecient, freeTerm] = coffecients;
        leadingCofficient = Number(leadingCofficient);

        coffecient = Number(coffecient);
        freeTerm = Number(freeTerm);

        if(!leadingCofficient && !coffecient && !freeTerm) {
            return resultFormula += '0'
        }

        if(leadingCofficient) {
            resultFormula += leadingCofficient !== 1 ? `${leadingCofficient}x² ` : 'x² ';
        }

        if(coffecient) {
            resultFormula += `+ ${coffecient}x`;
        }

        if(freeTerm) {
            resultFormula += ` + ${freeTerm}`;
        }

        return resultFormula;
    }

    render() {
        const { cofficient,
            leadingCofficient,
            freeTerm,
            chartLines,
            parabolaLines,
        } = this.state;

        return (
            <div className={cnChart()}>
                <Plane
                    chartLines={chartLines}
                    parabolaLines={parabolaLines}
                />
                <div className={cnChart('Formula')}>
                    <Formula currentLine={this.getCurrentLine(leadingCofficient, cofficient, freeTerm)} />
                    <Cofficient
                        cleanFields={this.cleanFields}
                        onSubmit={this.handleSubmit}
                        changeCofficient={this.changeCofficient}  
                    />
                </div>
            </div>
        )
    }
};
