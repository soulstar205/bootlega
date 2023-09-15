import React from 'react';

const linkStyle = {
  color: 'lightpink',
  fontWeight: 'bold',
  padding: '8px 12px',
  textDecoration: 'none',
  borderRadius: '4px',
};

const text = <p>Click here to monetize your social media</p>
const link = 'https://www.highcpmrevenuegate.com/hggh0aab?key=d7b7885e384f79bec78470ecb806a159'

const ExternalLink = () => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
      {text}
    </a>
  );
};

export default ExternalLink;
