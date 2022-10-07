import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/quest.scss';
import Btn from '../components/btn';
import EditLink from '../components/editLink';

const Overview = () => {
  const { id } = useParams();
  // API call to get any pre questions based on this application id
  // If existing questions, render these below

  // Mock
  const questions = [{ id: '2', option: '3 svarsalternativ' }];

  return (
    <div className="questContainer">
      <div className="questContent">
        <div className="overviewUpperContent">
          <div className="overviewTextcontet">
            <div>
              <h1>Annons formulär</h1>
              <p>
                Med vårt verktyg för att skapa ansökningsformulär kan du enkelt skapa verifieringsfrågor för din annons.
                Varje sökande tilldelas sedan detta formulär under sin ansökningsprocess.
              </p>
            </div>
          </div>
          <Link to={`/questionnaire/create/${id}`}>
            <Btn title="LÄGG TILL" />
          </Link>
          <div className="overviewListContent">
            <h2>1/5 frågor</h2>
            {questions.map((item, i) => (
              <EditLink key={item.id + i} option={item.option} id={item.id} index={i} />
            ))}
          </div>
        </div>
        <div className="overviewLowerContent">
          <Link to="/company/edit">
            <Btn title="TILLBAKA" />
          </Link>
          <Link to="/profile">
            <Btn title="FORTSÄTT" disabled={true} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;
