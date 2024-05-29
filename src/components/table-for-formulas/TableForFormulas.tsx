import styles from './TableForFormulas.module.scss'
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { getFormulas } from '@/store/formulas-data/formulas-data.selectors';
import { useEffect } from 'react';
import { fetchFormulas } from '@/store/formulas-data/api-action';

const TableForFormulas = () => {
  const dispatch = useAppDispatch()
  const formulas = useAppSelector(getFormulas)

  useEffect(() => {
    dispatch(fetchFormulas())
  }, [dispatch])

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Название</th>
            <th>Формула</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          {formulas.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td><Latex>{`\\( ${item.content} \\)`}</Latex></td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TableForFormulas
