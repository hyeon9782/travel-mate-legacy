import React, { useState } from 'react';
import { searchGoogleMap } from '../../apis/google';

function MapSearch() {
  const [input, setInput] = useState('');
  const [places, setPlaces] = useState([]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await searchGoogleMap(input)

    console.log(res.data)
    setPlaces(res.data)
    
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     setPlaces(data.results);
    //   })
    //   .catch(error => console.log(error));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {places.map(place => (
          <li key={place.place_id}>{place.name} - {place.formatted_address}</li>
        ))}
      </ul>
    </div>
  );
}

export default MapSearch;
