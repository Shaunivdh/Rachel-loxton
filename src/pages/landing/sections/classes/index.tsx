import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './style.css';
import classesData from '../../../../data/classes.json';
import closeIcon from '../../../../assets/images/close.png';
import backArrow from '../../../../assets/images/close-left-arrow.png';
import image1 from '../../../../assets/images/classes/image1.jpg';


function ClassesSection() {
  const images = [
    'image1.jpg',
    'image1.jpg',
    'image1.jpg',
    'image1.jpg',
  ];

  const [portfolioItem, setPortfolioItem] = useState<number>(0);
  const [openPortfolio, setOpenPortfolio] = useState<number>(0);

  const handleOpenItem = (num: number) => {
    // Handle opening a specific item here
  };

  const handleCloseItem = () => {
    setPortfolioItem(0);
  };

  const handleOpenPopup = (num: number) => {
    setOpenPortfolio(num);
  };

  const handleClosePopup = () => {
    setOpenPortfolio(0);
  };

  return (
    <section id="classes" className="section">
      <h2 className="title">{classesData.title}</h2>
      <div className="section-des">{classesData.description}</div>

      <div id="classes-wrapper" className="relative block-right">
        {portfolioItem === 0 ? (
          <div className="grid" id="classes-grid">
            <div className="grid-sizer"></div>
            {/* Loop through the first three items in the JSON data */}
            {classesData.portfolioItems.slice(0, 3).map((item, i: number) => (
              <div
                key={'port-item-' + i}
                className={'grid-item element-item ' + item.gridSize}
              >
                <a
                  className="item-link"
                  onClick={() => {
                    if (item?.action?.type === 'item' && typeof item?.action?.number === 'number') {
                      handleOpenItem(item.action.number);
                    } else if (item?.action?.type === 'popup' && typeof item?.action?.number === 'number') {
                      handleOpenPopup(item.action.number);
                    }
                  }}
                >
                  <img src={images[i]} alt="portfolio image" />
                  <div className="classes-text-holder">
                    <div className="classes-text-wrapper">
                      <p className="classes-text">{item.description.text}</p>
                      <p className="classes-cat">{item.description.caption}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          // Render different components or content based on portfolioItem
          <div className="classes-load-content-holder">
            <div className="close-icon" role="button" onClick={handleCloseItem}>
              <img src={backArrow} alt="back arrow" />
            </div>
            {/* Render different components or content based on portfolioItem */}
          </div>
        )}
      </div>
      {/* Popups portfolio items */}
      <Popup
        open={openPortfolio !== 0}
        closeOnDocumentClick
        onClose={handleClosePopup}
        modal
      >
        <div className="my-popup">
          <div className="close-popup-btn" role="button" onClick={handleClosePopup}>
            <img src={closeIcon} alt="close icon" />
          </div>
          {/* Render different components or content based on openPortfolio */}
        </div>
      </Popup>
    </section>
  );
}

export default ClassesSection;
