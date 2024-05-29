import { TableForArtifacts } from "@/components";
import styles from "./Artifacts.module.scss";

const Artifacts = () => {
  return(
    <div className={styles.content}>
      <TableForArtifacts />
    </div>
  )
}

export default Artifacts
