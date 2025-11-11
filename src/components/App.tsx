import { useState } from 'react';
import MemberCard from './MemberCard';

const teamMembers = [
  { id: 1, name: 'Sourav' },
  { id: 2, name: 'Deoraj' },
  { id: 3, name: 'Deepesh' },
  { id: 4, name: 'Priya' },
];

const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState(Array(teamMembers.length).fill(0));

  const increaseFeedback = (index: number) => {
    console.log('increaseFeedback called for index', index); // debug
    const newCounts = [...feedbackCounts];
    newCounts[index] += 1;
    setFeedbackCounts(newCounts);
  };

  const resetAllFeedback = () => {
    setFeedbackCounts(Array(teamMembers.length).fill(0));
  };

  return (
    <div>
      <h1>Team Feedback Board</h1>
      <div>
        {teamMembers.map((member, index) => (
          <MemberCard
            key={member.id}
            name={member.name}
            feedbackCount={feedbackCounts[index]}
            onIncrease={() => increaseFeedback(index)}
          />
        ))}
      </div>
      <button type="button" onClick={resetAllFeedback}>Reset All</button>
    </div>
  );
};

export default App;