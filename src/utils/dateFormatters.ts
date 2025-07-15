
import { format, parseISO, isValid } from 'date-fns';

/**
 * Formats a date string (YYYY-MM-DD) to DD/MM format
 */
export const formatDate = (dateString: string): string => {
  try {
    if (!dateString) return '';
    
    // Handle different date formats
    let date: Date;
    
    if (dateString.includes('-')) {
      // Format: YYYY-MM-DD or YYYY-MM-DD HH:mm:ss
      date = parseISO(dateString.split(' ')[0]);
    } else if (dateString.includes('/')) {
      // Format: DD/MM/YYYY
      const [day, month, year] = dateString.split('/');
      date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    } else {
      return dateString;
    }
    
    if (!isValid(date)) {
      return dateString;
    }
    
    return format(date, 'dd/MM');
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

/**
 * Formats a time string (HH:mm:ss) to HH:mm format
 */
export const formatTime = (timeString: string): string => {
  try {
    if (!timeString) return '';
    
    // Remove seconds if present (HH:mm:ss -> HH:mm)
    if (timeString.includes(':')) {
      const parts = timeString.split(':');
      return `${parts[0]}:${parts[1]}`;
    }
    
    return timeString;
  } catch (error) {
    console.error('Error formatting time:', error);
    return timeString;
  }
};
