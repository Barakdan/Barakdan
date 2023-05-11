import React from 'react';

const ContactInfo = () => {
  return (
    <div className='card-header-padding'>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder Img' />
        </figure>
      </div>
      <div className='card-header' style={{fontSize: 18, fontWeight: 'bold', justifyContent: 'center', textDecoration: 'underline'}}>Contact Info</div>
      <div className='card-content'>
        <p className='title is-size-6'>Daniel Stoller</p>
        Email: Danielbarakstoller@gmail.com <br/>
        Phone: 053-221-5223 <br/>
        Address: Ha'ari 14, Tel-Aviv <br/>
        <a href='https://www.linkedin.com/in/dan-stoller-a238801ab/' target='_blank' rel='noreferrer'>LinkedIn Page</a>
      </div>
    </div>
  )
};

export default ContactInfo;