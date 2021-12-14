import React from 'react';

// const person1 = {
//   id: 1,
//   name: 'Alex',
// };
// const person2 = { ...person1 };
// const arr = [...people];

const List = ({ people, children }) => {
  return (
    <>
      {people?.map((person) => {
        return <Card {...person} />;
      })}
      {children}
    </>
  );
};

const Card = ({ id, name, age, image }) => {
  return (
    <article key={id} className='person'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default List;
