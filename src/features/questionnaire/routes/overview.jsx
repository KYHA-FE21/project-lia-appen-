import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/quest.scss';
import Btn from '../components/btn';

const Overview = () => {
  const { id } = useParams();
  // API call to get any pre questions based on this application id
  // If existing questions, render these below

  return (
    <div className="questContainer">
      <div className="questOverviewContent">
        <div className="overviewUpperContent">
          <div className="overviewTextcontet">
            <div>
              <h1>Application form</h1>
              <p>
                With our own application-form creation tool, you can easily create verification questionnaires for your
                ad. Each applicant is then assigned this form during their application process.
              </p>
            </div>
          </div>
          <Link to={`/questionnaire/create/${id}`}>
            <Btn title="ADD QUESTION" />
          </Link>
          <div className="overviewListContent">
            <h2>0/5 questions</h2>
          </div>
        </div>
        <div className="overviewLowerContent">
          <Link to="/company/edit">
            <Btn title="RETURN" />
          </Link>
          <Link to="/profile">
            <Btn title="CONTINUE" disabled={true} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;
