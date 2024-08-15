import React from 'react';
import './title.css'; 

function Title({ title, subtitle }) {
  return (
    <section className="hero">
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <div className="hero-buttons">
        <button>Button</button>
        <button>Button</button>
      </div>
    </section>
  );
}

export default Title;
