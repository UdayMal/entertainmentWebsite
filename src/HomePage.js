import React from 'react';
import './HomePage.css';
// import Layer13 from 'D:/entertainmentWebsite/entertainment-live/src/Layer 13.png' ;
// import Layer12 from 'D:/entertainmentWebsite/entertainment-live/src/Layer 12.png';
// import Layer10 from 'D:/entertainmentWebsite/entertainment-live/src/Layer 10.png' ;
// import Layer17 from 'D:/entertainmentWebsite/entertainment-live/src/Layer 17.png' ;

import Layer13 from "./assets/Layer 13.png"
import Layer12 from "./assets/Layer 12.png"
import Layer10 from "./assets/Layer 10.png"
import Layer17 from "./assets/Layer 17.png"

import Layer14 from "./assets/Layer 14.png"
import Layer19 from "./assets/Layer 19.png"
import Layer20 from "./assets/Layer 20.png"
import Layer21 from "./assets/Layer 21.png"


const cardData = [
  {
    title: "RINGTONE",
    description: "We bring you the latest in entertainment & information services, right on your phone. From the latest of Bollywood to the futuristic applications, get it all here!",
    buttonText: "View All",
    imgSrc: Layer13 // replace with actual image URL
  },
  {
    title: "WALLPAPER",
    description: "We bring you the latest in entertainment & information services, right on your phone. From the latest of Bollywood to the futuristic applications, get it all here!",
    buttonText: "View All",
    imgSrc: Layer12 // replace with actual image URL
  },
  {
    title: "GAMES",
    description: "We bring you the latest in entertainment & information services, right on your phone. From the latest of Bollywood to the futuristic applications, get it all here!",
    buttonText: "View All",
    imgSrc: Layer10  // replace with actual image URL
  }
];

const Card = ({ title, description, buttonText, imgSrc }) => (
  <div className="card">
    <img src={imgSrc} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <button>{buttonText}</button>
  </div>
);

const HomePage = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="date">Thursday, Sep 03, 2009 </div>
        <div className="login">
          <a href="#">Login</a> | <a href="#">Our Blog</a>
        </div>
        <h1>Entertainment Live</h1>
        <nav>
          <ul>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">On-Demand</a></li>
            <li><a href="#">Expert Advice</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">StarSpeak</a></li>
            <li><a href="#">Offers & Promos</a></li>
            <li><a href="#">Take a Break</a></li>
          </ul>
        </nav>
       
        <div className='search1'>
        <div className="search">
          <input type="text" placeholder="Search Keyword" />
          {/* <button>Search</button> */}
          
        </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <img src={Layer14} alt="Entertainment Live" />
          <div className="hero-text">
            <h2>Make your mobile the most happening destination with Entertainment Live!</h2>
            <p>We bring you the latest in entertainment & information services, right on your phone. From the latest of Bollywood to the futuristic applications, get it all here!</p>
            <button>Read More</button>
          </div>
        

        <section className="latest-articles">
          <h3>Latest Articles</h3>
          <ul>
            <li><a href="#">News Headline dummy text - Lifestyle tips</a></li>
            <li><a href="#">We bring you the latest in entertainment</a></li>
            <li><a href="#">Entertainment & information services</a></li>
            <li><a href="#">Right on your phone</a></li>
            <li><a href="#">We bring you the latest</a></li>
            <li><a href="#">Entertainment & information services</a></li>
            <li><a href="#">Right on your phone</a></li>
          </ul>
        </section>
        </section>

        <div className="container1">
          <div className="latest-videos">
            <h3>Latest Videos</h3>
            
            <div className="video">
              <img src={Layer19} alt="Video thumbnail" />
              <div className="video-info">
                <h4>R.I.P. PETROLHEADS</h4>
                <p>Meet the Audi R8 V12 TDI concept</p>
              </div>
            </div>
            <div className="video">
              <img src={Layer20} alt="Video thumbnail" />
              <div className="video-info">
                <h4>STRING MASTER</h4>
                <p>Electric Ganesha Land</p>
              </div>
            </div>
            <div className="video">
              <img src={Layer21} alt="Video thumbnail" />
              <div className="video-info">
                <h4>NAUTICAL STYLE</h4>
                <p>For that lazy afternoon on the yacht</p>
              </div>
            </div>
            <div className="video">
              <img src={Layer19} alt="Video thumbnail" />
              <div className="video-info">
                <h4>R.I.P. Petrolheads</h4>
                <p>Meet the Audi R8 V12 TDI concept</p>
              </div>
            </div>
          </div>

          <div className="latest-poll">
            <h3>Latest Poll</h3>
            <p>What is your favourite genre of music?</p><br />
            <form>
              <label>
                <input type="radio" name="music" value="pop" /> Pop
              </label>
              <label>
                <input type="radio" name="music" value="rnb" /> R&B
              </label>
              <label>
                <input type="radio" name="music" value="rock" /> Rock
              </label>
              <label>
                <input type="radio" name="music" value="classical" /> Classical
              </label>
              <label>
                <input type="radio" name="music" value="other" /> Other
              </label>
              <div className="button-container">
                <button className="button">Vote</button>
                <button className="button">Result</button>
              </div>
            </form>
          </div>
        </div>

        {/* New section for Ringtones, Wallpapers, and Games */}
        <section className="entertainment-services">
          {/* <h2>Entertainment Services</h2> */}
          <div className="card-container">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                imgSrc={card.imgSrc}
              />
            ))}
          </div>
        </section>

      </main>
      <footer className="footer">
        <nav>
          <ul>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">On-Demand</a></li>
            <li><a href="#">Expert Advice</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">StarSpeak</a></li>
            <li><a href="#">Offers & Promos</a></li>
            <li><a href="#">Take a Break</a></li>
          </ul>
        </nav>
        </footer>
        <div className="footer-bottom">
           <h1>Entertainment Live </h1> <h4>© Copyright 2009. Created by psdfreebies.com</h4> 
        </div>
      
    </div>
  );
};

export default HomePage;

