import React from 'react';

export default function ChefProfile({ name, specialty, experience, imgSrc }) {
  return (
    <div className='chef-card'>
      <img src={imgSrc} alt={name} className='chef-img' />
      <h3>{name}</h3>
      <p><strong>Specialty:</strong> {specialty}</p>
      <p><strong>Experience:</strong> {experience}</p>
    </div>
  );
}
