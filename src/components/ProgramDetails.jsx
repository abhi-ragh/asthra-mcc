import React from 'react';
import { useParams } from 'react-router-dom';

const ProgramDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Program {id} Details</h1>
      <p>Description, rules, and regulations...</p>
      <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer">
        Register Here
      </a>
    </div>
  );
};

export default ProgramDetails;