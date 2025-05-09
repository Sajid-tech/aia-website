import React from 'react';
import { Link } from 'react-router-dom';
import shapeImg from '../../assets/img/course/ed-item-shape.png';
import RightArrowThin from '../SVG/RightArrowThin';

const SingleCourse = (props) => {
  const {
    itemClass,
    title,
    description,
    btnText = 'View Course',
    titleStyle = {},
    descriptionStyle = {}
  } = props;

  return (
    <div 
      className={itemClass ? itemClass : 'it-course-item ed-course-style-2'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <div 
        className="it-course-content p-relative"
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '0px',
          boxSizing: 'border-box'
        }}
      >
        {/* Title */}
        <h4 
          className="it-course-title pb-15"
          style={{
            margin: '0 0 1rem 0',
            flexShrink: 0,
            ...titleStyle
          }}
        >
          <Link to="#">{title}</Link>
        </h4>
        
        {/* Description */}
        <div 
          className="it-course-info pb-15 mb-30"
          style={{
            flex: 1,
            marginBottom: '1rem',
            overflow: 'hidden',
            ...descriptionStyle
          }}
        >
          <span>{description}</span>
        </div>
        
        {/* Button */}
        <div style={{ marginTop: 'auto', flexShrink: 0 }}>
          <div className="ed-course-price-box">
            <Link className="ed-course-btn" to="#">
              {btnText}
              <RightArrowThin />
            </Link>
          </div>
        </div>
        
        <div className="ed-course-shape">
          <img src={shapeImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;