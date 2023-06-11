import React from 'react';
import urlImg from './img/ShortUrlImg.png';

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
        <img src={urlImg} alt="About Url" style={imageStyle} />
      </div>
      <p style={descriptionStyle}>
        Our Url Shortener service provides a simple and convenient way to create shortened URLs. Just enter
        your long URL, and we will generate a unique shortened link for you.
      </p>
      <p style={descriptionStyle}>
        Whether you need to share links on social media, send them via email, or use them in any other way,
        Url Shortener makes it quick and easy.
      </p>
      <p style={descriptionStyle}>
        A URL shortener, also known as a link shortener, seems like a simple tool, but it is a service that can have a dramatic impact on your marketing efforts.
        Link shorteners work by transforming any long URL into a shorter, more readable link. When a user clicks the shortened version, they’re automatically forwarded to the destination URL.
      </p>
      <p style={descriptionStyle}>
        Think of a short URL as a more descriptive and memorable nickname for your long webpage address. You can, for example, use a short URL like bit.ly/CelebrateBitly so people will have a good idea about where your link will lead before they click it.
        If you’re contributing content to the online world, you need a URL shortener.
      </p>
    </div>
  );
};

const containerStyle = {
  background: '#E6E6FA',
  borderRadius: '34px',
  padding: '20px',
  maxWidth: '1400px',
  margin: '40px auto',
  fontFamily: 'Roboto, sans-serif',
  marginBottom: '40px',
};

const headerStyle = {
  textAlign: 'center',
  color: '#333',
  margin: '0 0 20px',
  fontSize: '32px',
};

const descriptionStyle = {
  marginBottom: '16px',
  fontSize: '22px',
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
};

export default AboutUrl;
