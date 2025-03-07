import type { Day, Month, Year } from "~/types/calendar";

export function generateYear(year: number): Year {
  const months: Month[] = [];
  
  for (let month = 1; month <= 12; month++) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const days: Day[] = [];
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push({
        date: new Date(year, month - 1, day + 1).toISOString().split('T')[0],
        number: day,
      });
    }
    
    months.push({
      title: new Intl.DateTimeFormat('nl-NL', {month: 'long', year: 'numeric'}).format(firstDay.setDate(firstDay.getDate() - 1)),
      days,
    });
  }
  
  return { value: year, months };
}
