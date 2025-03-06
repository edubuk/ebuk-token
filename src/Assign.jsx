import React, { useCallback } from 'react';
import { Tldraw } from 'tldraw';


const Timeline = () => {

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>My Timeline</h2>
      <div style={{ height: '500px', border: '1px solid #ccc' }}>
        <Tldraw />
      </div>
    </div>
  );
};

export default Timeline;
