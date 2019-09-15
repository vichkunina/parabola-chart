import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    Legend,
    ReferenceLine,
    Tooltip
} from 'recharts';

export const Plane = ({ chartLines, parabolaLines }) => 
    <ResponsiveContainer width={'40%'} height={600}>
        <LineChart data={chartLines}>
            <XAxis dataKey='name'/>
            <YAxis />
            <Tooltip />
            <ReferenceLine x={0} stroke="#000" />
            <ReferenceLine y={0} stroke="#000" />
            <CartesianGrid stroke="#b9e0ed" strokeDasharray="5 5"/>
            <Legend
                payload={parabolaLines.map(({ dataKey, color, value }) => ({
                    dataKey,
                    color,
                    value,
                }))}
            />
            {
                parabolaLines.map(({color, dataKey}, key) => 
                    <Line
                        key={key}
                        name={dataKey}
                        stroke={color}
                        dataKey={dataKey}
                        strokeWidth={3}
                    />)
            }
        </LineChart>
    </ResponsiveContainer>
