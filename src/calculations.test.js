import { calculateBiorythms } from "./calculations";

it('Calculate the physical biorythm', () => {
    const {physical} = calculateBiorythms('1995-01-01', '2020-02-18')
    expect(physical).toBeCloseTo(0.5196)
})
it('Calculate the emotional biorythm', () => {
    const {emotional} = calculateBiorythms('1995-01-01', '2020-02-18')
    expect(emotional).toBeCloseTo(-0.9010)
})
it('Calculate the intellectual biorythm', () => {
    const {intellectual} = calculateBiorythms('1995-01-01', '2020-02-18')
    expect(intellectual ).toBeCloseTo(0.8146)
})