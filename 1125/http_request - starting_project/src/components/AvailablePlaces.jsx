import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import ErrorComp from './ErrorComp.jsx';
import {sortPlacesByDistance} from '../loc.js';
import { fetchPlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPlaces() {
      setIsLoading(true);

      try {
        const data = await fetchPlaces("places");
        setAvailablePlaces(data);
      } catch(err){
        setError({
          message: err.message || "Could not fetch places",
        });
      } finally{
        setIsLoading(false);
      }
    }

    getPlaces();
  }, []);

  if (error) {
    return <ErrorComp title="An error occured!" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      loadingText="Loading places data..."
      isLoading={isLoading}
      onSelectPlace={onSelectPlace}
    />
  );
}
