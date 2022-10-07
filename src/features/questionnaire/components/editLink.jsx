import React from 'react';
import { Edit } from 'lucide-react';
import { Link } from 'react-router-dom';

const EditLink = ({ option, id, index }) => {
  return (
    <div className="questLink">
      <p>
        <span>
          Fråga #{index} - {option}
        </span>
        <Link to={`/questionnaire/create/${id}`}>
          <Edit />
        </Link>
      </p>
    </div>
  );
};

export default EditLink;
