import styles from './TableForFormulas.module.scss'
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

const TableForFormulas = () => {
  const formula = `\\( \\frac{d}{dx}\\int_{a}^{x}f(t)dt = f(x) \\)`

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
          <tr>
            <td>Для расчета бетона</td>
            <td><Latex>{formula}</Latex></td>
            <td>Краткое описание формулы для расчета бетона...</td>
          </tr>
          <tr>
            <td>Для расчета бетона</td>
            <td><Latex>{formula}</Latex></td>
            <td>Краткое описание формулы для расчета бетона...</td>
          </tr>
          <tr>
            <td>Для расчета бетона</td>
            <td><Latex>{formula}</Latex></td>
            <td>Краткое описание формулы для расчета бетона...</td>
          </tr>
          <tr>
            <td>Для расчета бетона</td>
            <td><Latex>{formula}</Latex></td>
            <td>Краткое описание формулы для расчета бетона...</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default TableForFormulas
