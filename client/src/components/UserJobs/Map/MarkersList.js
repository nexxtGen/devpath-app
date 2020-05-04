import React from 'react';
import MapMarker from './MapMarker';
import MapJobMarker from './MapJobMarker';

const MarkersList = ({ jobs, companies }) => {
  return (
    <div>
      <div>
        {companies.map(company => (
          <MapMarker company={company} key={company._id} />
        ))}
      </div>
      <div>
        {jobs.map(job => (
          <MapJobMarker job={job} key={job._id} />
        ))}
      </div>
    </div>
  );
};

export default MarkersList;
