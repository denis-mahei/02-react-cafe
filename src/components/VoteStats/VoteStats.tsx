import styles from "./VoteStats.module.css";
import type { Votes } from "../../types/votes.ts";

interface VoteStatsProps extends Votes {
  total: number;
}

const VoteStats = ({ good, neutral, bad, total }: VoteStatsProps) => {
  const positiveRate = total ? Math.round((good / total) * 100) : 0;

  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{total}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
};
export default VoteStats;
