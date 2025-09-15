import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import type { Votes } from "../../types/votes.ts";

import css from "./App.module.css";
import VoteStats from "../VoteStats/VoteStats.tsx";
import Notification from "../Notification/Notification.tsx";

const initVotes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [votes, setVotes] = useState<Votes>(initVotes);

  const handleVote = (type: keyof Votes) => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes(initVotes);
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={!!totalVotes}
      />
      {totalVotes > 0 ? (
        <VoteStats {...votes} total={totalVotes} />
      ) : (
        <Notification />
      )}
    </div>
  );
};
export default App;
