import dayjs from "dayjs"

const calculateBiorythm = (birthDate, targetDate, cycle) => {
    const birthDay = dayjs(birthDate).startOf('day')
    const targetDay = dayjs(targetDate).startOf('day')
    const diff = targetDay.diff(birthDate, 'days')
    return  Math.sin(2 * Math.PI * diff / cycle)
}

export const calculateBiorythms = (birthDate, targetDate) => {
    return {
        date: targetDate,
        physical: calculateBiorythm(birthDate, targetDate, 23),
        emotional: calculateBiorythm(birthDate, targetDate, 28),
        intellectual: calculateBiorythm(birthDate, targetDate, 33),
    }
}

export const calculateBiorythmSeries = (birthDate, startDate, size) => {
    const series = []
    const startDay = dayjs(startDate).startOf('day')
    for(let i = 0; i < size; i++){
        const targetDate = startDay.add(i, 'days').toISOString()
        series.push(calculateBiorythms(birthDate, targetDate))  
    }
    return series
}