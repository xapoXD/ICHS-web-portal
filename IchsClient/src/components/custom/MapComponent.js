import React, { useState, useEffect } from 'react';
import './MapModel.css'; // Import your CSS file for styling
import { ReactComponent as CzechRepublicMap } from './cz.svg';

const getColor = (value) => {
  return value === true ? '#0FCEA0' : '#D25C5C'; // green : red 
};

const MapComponent = ({ serverResponse }) => {
  const [regionColors, setRegionColors] = useState({});

  // Update region colors whenever serverResponse changes
  useEffect(() => {
    const updatedColors = {};
    Object.keys(serverResponse).forEach((regionId) => {
      const { value } = serverResponse[regionId];
      updatedColors[regionId] = getColor(value);
    });
    setRegionColors(updatedColors);
  }, [serverResponse]); // Include serverResponse in dependency array

  return (
    <div>
      <div>
        <CzechRepublicMap className="czech-map" />
      </div>

      {/* Use inline styles to dynamically set fill colors */}
      <style jsx="true">{`
        .czech-map #CZ10 {
          fill: ${regionColors["CZ10"] || 'gray'};
        }
        .czech-map #CZ63 {
          fill: ${regionColors["CZ63"] || 'gray'};
        }
        .czech-map #CZ52 {
          fill: ${regionColors["CZ52"] || 'gray'};
        }
        .czech-map #CZ42 {
          fill: ${regionColors["CZ42"] || 'gray'};
        }
        .czech-map #CZ31 {
          fill: ${regionColors["CZ31"] || 'gray'};
        }
        .czech-map #CZ64 {
          fill: ${regionColors["CZ64"] || 'gray'};
        }
        .czech-map #CZ41 {
          fill: ${regionColors["CZ41"] || 'gray'};
        }
        .czech-map #CZ51 {
          fill: ${regionColors["CZ51"] || 'gray'};
        }
        .czech-map #CZ80 {
          fill: ${regionColors["CZ80"] || 'gray'};
        }
        .czech-map #CZ71 {
          fill: ${regionColors["CZ71"] || 'gray'};
        }
        .czech-map #CZ53 {
          fill: ${regionColors["CZ53"] || 'gray'};
        }
        .czech-map #CZ32 {
          fill: ${regionColors["CZ32"] || 'gray'};
        }
        .czech-map #CZ20 {
          fill: ${regionColors["CZ20"] || 'gray'};
        }
        .czech-map #CZ72 {
          fill: ${regionColors["CZ72"] || 'gray'};
        }
      `}</style>
    </div>
  );
};

export default MapComponent;
