import { DD_MM_YYYY } from '@/app/constants/const'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const useFormattedDate = () => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return format(date, DD_MM_YYYY, { locale: ru })
  }

  return { formatDate }
}

export default useFormattedDate
