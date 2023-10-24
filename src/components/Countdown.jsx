import React from 'react'

export default function Countdown() {
 
    function calculateTimeDifference(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
    
        if (start > end) {
            return "The start date is after the end date.";
        }
    
        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        let days = end.getDate() - start.getDate();
        let hours = end.getHours() - start.getHours();
        let minutes = end.getMinutes() - start.getMinutes();
    
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
    
        if (hours < 0) {
            hours += 24;
            days--;
        }
    
        if (days < 0) {
            days += new Date(start.getFullYear(), start.getMonth() + 1, 0).getDate();
            months--;
        }
    
        if (months < 0) {
            months += 12;
            years--;
        }
    
        return ${years} year(s), ${months} month(s), ${days} day(s), ${hours} hour(s), and ${minutes} minute(s);
    }
    
    const startDate = '10/06/2023 14:30';
    const endDate = '10/06/2024 16:45';
    
    console.log(calculateTimeDifference(startDate, endDate));
  
    return (
    <div>Countdown</div>
  )
}