import styles from "./FAQ.module.scss";
import { Question } from "@/components";

const FAQ = () => {
  const questions = [
    "Что такое Брусника?",
    "Как сделать что-то?",
    "Как узнать что-то?",
    "Где прочитать то-то?"
  ]

  return(
    <div className={styles.content}>
      <h1>Часто задаваемые вопросы</h1>
      <div className={styles.questions}>
        {questions.map((question, index) => (
          <Question key={index} text={question} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
