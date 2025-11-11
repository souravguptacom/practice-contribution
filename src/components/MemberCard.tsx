import React from 'react';

interface MemberCardProps {
  name: string;
  feedbackCount: number;
  onIncrease: () => void;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, feedbackCount, onIncrease }) => {
  return (
    <div className="member-card" style={{ border: '1px solid #ccc', padding: 12, margin: 8 }}>
      <h3>{name}</h3>
      <p>Feedback: {feedbackCount}</p>
      <button type="button" onClick={onIncrease}>Increase</button>
    </div>
  );
};

export default MemberCard;