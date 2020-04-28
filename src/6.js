module.exports = (schedules) => {
  const map = [
    0, 0, // 00:00 - 00:30   index 0, 1
    0, 0, // 01:00 - 01:30   index 2, 3
    0, 0, // 02:00 - 02:30   index 4, 5
    0, 0, // 03:00 - 03:30   index 6, 7
    0, 0, // 04:00 - 04:30   index 8, 9
    0, 0, // 05:00 - 05:30   index 10, 11
    0, 0, // 06:00 - 06:30   index 12, 13
    0, 0, // 07:00 - 07:30   index 14, 15
    0, 0, // 08:00 - 08:30   index 16, 17
    0, 0, // 09:00 - 09:30   index 18, 19
    0, 0, // 10:00 - 10:30   index 20, 21
    0, 0, // 11:00 - 11:30   index 22, 23

    0, 0, // 12:00 - 12:30   index 24, 25
    0, 0, // 13:00 - 13:30   index 26, 27
    0, 0, // 14:00 - 14:30   index 28, 29
    0, 0, // 15:00 - 15:30   index 30, 31
    0, 0, // 16:00 - 16:30   index 32, 33
    0, 0, // 17:00 - 17:30   index 34, 35
    0, 0, // 18:00 - 18:30   index 36, 37
    0, 0, // 19:00 - 19:30   index 38, 39
    0, 0, // 20:00 - 20:30   index 40, 41
    0, 0, // 21:00 - 21:30   index 42, 43
    0, 0, // 22:00 - 22:30   index 44, 45
    0, 0, // 23:00 - 23:30   index 46, 47
  ];

  schedules.forEach((schedule) => {
    const [hour1, half1] = schedule[0].split(':');
    const [hour2, half2] = schedule[1].split(':');

    const startIndex = 2 * hour1 + (half1 === '30' ? 1 : 0);
    const endIndex = 2 * hour2 + (half2 === '30' ? 1 : 0);

    for (let i = startIndex; i <= endIndex; i += 1) {
      map[i] += 1;
    }
  });

  return Math.max(...map);
};
