import { sortPlacesByDistance } from "./loc.js";

export async function fetchPlaces(endPoint) {
    const response = await fetch(`http://localhost:3000/${endPoint}`);
    const responseData = await response.json();

    if (!response.ok){
      throw new Error(response.status + " - Failed to fetch places");
    }

    const sortedPlaces = sortPlacesByDistance(responseData.places, 47.522376, 19.0620703);

    return sortedPlaces;
}