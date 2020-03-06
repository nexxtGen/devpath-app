import React from 'react';
import MapMarker from './MapMarker';

const MarkersList = ({ companies }) => {
  return (
    <div>
      {companies.map(company => (
        <MapMarker company={company} key={company._id} />
      ))}
    </div>
  );
};

export default MarkersList;
