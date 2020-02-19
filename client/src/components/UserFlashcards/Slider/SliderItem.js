import React from 'react';
import './styles.css';

const SliderItem = ({ index, url }) => {
  return (
    <div>
      <div className='romb' style={{ backgroundImage: `url('${url}')` }}>
        <div className='triangle1'></div>
        <div className='triangle2'></div>
      </div>
      <button
        style={{
          height: '42px',
          width: '260px',
          transform: 'translate(-50px, -4px)',
          backgroundImage:
            'linear-gradient(-45deg, rgba(211,219,226,1) 0%, rgba(232,232,232,1) 42%, rgba(230,235,239,1) 58%, rgba(207,212,214,1) 100%)',
          border: 'none',
          color: 'black'
        }}
      >
        Przycisk nr:{index}
      </button>
    </div>
  );
};

const aa =
  'linear-gradient(-45deg, rgba(237,247,255,1) 0%, rgba(219,241,255,1) 42%, rgba(219,238,255,1) 57%, rgba(232,239,247,1) 100%)';
const lekkiniebieski =
  'linear-gradient(-45deg, rgba(181,225,255,1) 0%,rgba(41,137,216,1) 49%,rgba(32,124,202,1) 52%,rgba(201,233,255,1) 100%)';
export default SliderItem;
