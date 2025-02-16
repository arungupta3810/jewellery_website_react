import React, { useState, useEffect, useRef } from 'react'
import './style.scss'
import Banner from "../Banner/index"
import ProductCard from '../Common/ProductCard';
import ProductCommonTab from '../ProductCommonTab';

const CustomTab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabsRef = useRef([]);
  const handleTabClick = (index) => {
    setActiveTab(index); 
    const element = document.querySelector(`#content${index}`)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the content
      }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport
    tabsRef.current.forEach((tab, index) => {
      const contentElement = document.querySelector(`#content${index + 1}`);
      if (contentElement) {
        const { top, bottom } = contentElement.getBoundingClientRect();
        if (top <= scrollPosition && bottom >= scrollPosition) {
          setActiveTab(index + 1); // Update active tab based on scroll position
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const tabsList = [
    {
        id: 1,
        tabName: "Rings",
        content: <ProductCommonTab />
    },
    {
        id: 2,
        tabName: "Neckalace",
        content: "neckalace"
    },
    {
        id: 3,
        tabName: "tana",
        content: "Tana"
    },
  ]

  return (
    <div className="tab">
        <div className="tab-header">
            {tabsList?.map(e=>
            <div className={`tabs ${activeTab === e?.id ? "active" : null}`} onClick={() => handleTabClick(e?.id)} 
            ref={el => tabsRef.current[e.id - 1] = el}>
                {e?.tabName}
            </div>)}
        </div>
        <div className="tab-body">
            {tabsList?.map(e=>
            <div className='tab-content' id={`content${e?.id}`}>
                {e?.content}
            </div>
        )}
        </div>   
    </div>
  )
}

export default CustomTab