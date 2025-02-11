import { useState, useEffect, useMemo } from 'react';

const getMonthStartEnd = (year, month) => {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  return { startDate, endDate };
};

const getWeekDatesForMonth = (year, month) => {
  const { startDate, endDate } = getMonthStartEnd(year, month);

  const weeks = [];
  let currentWeek = [];

  // calculate the first week of the month (start from Sunday)
  const weekdayOfStartDate = startDate.getDay(); // Sunday: 0, Monday: 1, ....
  const firstDateOfWeek = new Date(startDate);
  firstDateOfWeek.setDate(startDate.getDate() - weekdayOfStartDate); // first Sunday of the week

  let currentDate = new Date(firstDateOfWeek);

  while (currentDate <= endDate || currentWeek.length > 0) {
    const fullDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1,
    ).padStart(2, 0)}-${String(currentDate.getDate()).padStart(2, 0)}`;

    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const weekday = currentDate.toLocaleDateString('en-US', {
      weekday: 'short',
    });
    const date = currentDate.getDate();

    currentWeek.push({ fullDate, month, weekday, date });

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return weeks;
};

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const useWeekDatesForMonth = () => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (
        now.getFullYear() !== today.getFullYear() ||
        now.getMonth() !== today.getMonth() ||
        now.getDate() !== today.getDate()
      ) {
        setToday(now);
      }
    }, 1000 * 60 * 60 * 2); // Kiểm tra mỗi 2 giờ

    return () => clearInterval(interval);
  }, []);

  const { year, month, title, currentDate } = useMemo(() => {
    return {
      year: today.getFullYear(),
      month: today.getMonth(),
      title: today.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      }),
      currentDate: `${today.getFullYear()}-${String(
        today.getMonth() + 1,
      ).padStart(2, 0)}-${String(today.getDate()).padStart(2, 0)}`,
    };
  }, [today]);

  // Chỉ tính lại `weeks` nếu `year` hoặc `month` thay đổi
  const weeks = useMemo(() => getWeekDatesForMonth(year, month), [year, month]);

  return { weeks, title, currentDate, weekdays };
};

export default useWeekDatesForMonth;
