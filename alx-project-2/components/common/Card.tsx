import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg shadow p-4 mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
