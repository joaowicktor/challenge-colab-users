import React from 'react';
import Avatar from 'react-avatar';
import { User } from '../../store/users/types';

import './styles.css';

interface CardProps {
  data: User;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="card">
      <Avatar name={data.name} maxInitials={2} round size="50" />
      <div className="card-info">
        <h1 className="card-title">{data.name}</h1>
        <p className="card-subtitle">{data.email}</p>
      </div>
    </div>
  );
};

export default Card;
