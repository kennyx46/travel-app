import formatTime from './date';

it('formats time', () => {
    const timestamp = 1523596800;
    const expected = "07 : 20"

    const actual = formatTime(timestamp);

    expect(actual).toEqual(expected);
});
