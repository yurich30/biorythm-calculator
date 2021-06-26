import React from 'react'
import { Line, LineChart, ResponsiveContainer, XAxis } from "recharts"

const BiorythmChart = () => {

    const data = [
        {date: '2021-06-26', physical: 0.9, emotional: 0.5, intellectual: 1},
        {date: '2021-06-27', physical: -0.9, emotional: 0.25, intellectual: 0},
        {date: '2021-06-28', physical: 0.45, emotional: 0.9, intellectual: -1},
    ]

    return(
        <ResponsiveContainer width='100%' height={200}>
            <LineChart data={data}>
                <XAxis dataKey='date'/>
                <Line dataKey="physical" stroke='blue'/>
                <Line dataKey='emotional' stroke= 'red'/>
                <Line dataKey='intellectual' stroke='green'/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default BiorythmChart