import dayjs from "dayjs"

const calculateBiorythm = (birthDate, targetDate, cycle) => {
    const birthDay = dayjs(birthDate).startOf('day')
    const targetDay = dayjs(targetDate).startOf('day')
    const diff = targetDay.diff(birthDate, 'days')
    return  Math.sin(2 * Math.PI * diff / cycle)
}

export const calculateBiorythms = (birthDate, targetDate) => {
    return {
        physical: calculateBiorythm(birthDate, targetDate, 23),
        emotional: calculateBiorythm(birthDate, targetDate, 28),
        intellectual: calculateBiorythm(birthDate, targetDate, 33),
    }
}