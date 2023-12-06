import React, { useEffect, useState } from 'react';

function Index() { // Renamed to start with an uppercase letter
  const [message, setMessage] = useState("Loading");
  const [people, setPeople] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:5000/api/home")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setMessage(data.message);
      setPeople(data.people);
    });
  }, []);

  return (
    <div>
      <div>{message}</div>
      {people.map((person, index) => (
        <div key={index}>{person}</div>
      ))}
    </div>
  );
}

export default Index;
