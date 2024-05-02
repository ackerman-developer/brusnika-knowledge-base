import styles from "./Question.module.scss";
import { ArrowDownIcon } from "@/assets";

type QuestionProps = {
  text: string;
}

const Question = ({ text }: QuestionProps) => {
  return (
    <div className={styles.question}>
      <h1>{text}</h1>
      <ArrowDownIcon/>
    </div>
  )
}

export default Question
