import { DD_MM_YYYY } from '@/app/constants/const';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const useFormattedDate = () => {
  const formatDate = (date: string | Date) => {
    try {
      const parsedDate = new Date(date)
      if (isNaN(parsedDate.getTime())) {
        throw new Error('Недействительная дата')
      }
      return format(parsedDate, DD_MM_YYYY, { locale: ru })
    } catch (error) {
      console.error('Неверное значение даты:', date)
      return 'Недействительная дата'
    }
  }

  return { formatDate }
}

export default useFormattedDate
