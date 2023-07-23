import React, { useEffect, useState } from "react";
import axios from "axios";
import xml2js from "xml2js";
import "./floater.css";

const FloatingAd = () => {
  const [adData, setAdData] = useState(null);

  useEffect(() => {
    // Fetch the ad data from the provided URL
    axios
      .get("https://www.videosprofitnetwork.com/watch.xml?key=2ffb7e8ff6e03599fc706e57006f5a55")
      .then((response) => { 
        // Parse the XML response to extract the video URL
        xml2js.parseString(response.data, (err, result) => {
          if (!err) {
            const videoUrl = result.video.source[0];
            setAdData(videoUrl);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching ad data:", error);
      });
  }, []);

  const handleClose = () => {
    setAdData(null);
  };

  return (
    adData && (
      <div className="floating-ad">
        <div className="ad-content">
          <video controls>
            <source src={adData} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <button className="close-button" onClick={handleClose}>
          X
        </button>
      </div>
    )
  );
};

export default FloatingAd;
