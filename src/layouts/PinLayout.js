import React from 'react';
import { tutoriais } from '../tutoriais';

import Pin from './Pin';

function PinterestLayout() {
    const sizes = ['small', 'medium', 'large']
    return (
        <div style={styles.pin_container}>
          {tutoriais.map(tutorial => {
            const size = sizes[Math.floor(sizes.length * Math.random())]; 
            return (
              <Pin key={tutorial._id} size={size} tutorial={tutorial}/>
            )
          })}
        </div>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 330px)',
        gridAutoRows: '10px',
        justifyContent: 'center',
        // backgroundColor: 'black'
    }
}

export default PinterestLayout;