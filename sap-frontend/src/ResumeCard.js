import React from 'react';
import './ResumeCard.css';

const ResumeCard = ({ name, job, skills, summary }) => {
  return (
    <div className="resume-card">
      <h3>{name}</h3>
      <p><strong>Job Category:</strong> {job}</p>
      <p><strong>Skills:</strong> {skills}</p>
      <p><strong>Summary:</strong> {summary}</p>
    </div>
  );
};

export default ResumeCard;
