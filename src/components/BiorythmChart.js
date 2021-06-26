import dayjs from 'dayjs'
import React from 'react'
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis } from "recharts"
import { calculateBiorythmSeries } from '../calculations'

const formatDate = (isoString) => {
    return dayjs(isoString).format('D MMM')
}

const BiorythmChart = ({userDateOfBirth, targetDate }) => {

    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString()
    const biorythmsData = calculateBiorythmSeries(userDateOfBirth, startDate, 31)
        .map((item) => ({ ...item, date: formatDate(item.date)}))

    return(
        <ResponsiveContainer width='100%' height={200}>
            <LineChart data={biorythmsData}>
                <XAxis dataKey='date' ticks={[biorythmsData[3].date, biorythmsData[15].date, biorythmsData[27].date]}/>
                <CartesianGrid vertical={false} strokeDasharray='3 3'/>
                <ReferenceLine x={biorythmsData[15].date} />
                <Line type='natural' dot={false} dataKey='physical' stroke='blue'/>
                <Line type='natural' dot={false} dataKey='emotional' stroke= 'red'/>
                <Line type='natural' dot={false} dataKey='intellectual' stroke='green'/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default BiorythmChart