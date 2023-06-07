import React from 'react';

const AboutUrl = () => {
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>About Url Shortener</h2>
      <p style={descriptionStyle}>
        The UrlShortener is a web application that allows you to shorten long URLs into shorter, more manageable links.
        It provides a convenient way to share links with others, especially when dealing with lengthy URLs that can be
        difficult to remember or type correctly.
      </p>
      <p style={descriptionStyle}>
        With UrlShortener, you can simply enter your long URL, and it will generate a unique shortened URL for you.
        When someone clicks on the shortened URL, they will be redirected to the original long URL.
      </p>
      <div style={imageContainerStyle}>
        <img src='https://shorturlbot.com/wp-content/uploads/2022/03/ShortURL_Bot_TeamsLogo.png' alt="About Url" style={imageStyle} />
      </div>
    </div>
  );
};

const containerStyle = {
  background: '#E6E6FA',
  padding: '20px',
};

const headerStyle = {
  textAlign: 'center',
  color: '#333',
  margin: '0px 0px 20px',
};

const descriptionStyle = {
  marginBottom: '16px',
  fontSize: '16px',
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
};

export default AboutUrl;
