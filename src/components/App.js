import 'bulma/css/bulma.min.css';
import React from 'react';
import ContactInfo from './ContactInfo';
import Education from './Education';
import Experience from './Experience';
import General from './General';
import Skills from './Skills';

const App = () => {
  return (
    <div className='container is-fluid' style={{ marginTop: 20 }}>
      <div className='columns'>
        <div className='column is-one-third'>
            <ContactInfo />
        </div>
        <div className='column is-two-thirds'>
          <General />
          <Experience /> 
          <Education />
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default App;