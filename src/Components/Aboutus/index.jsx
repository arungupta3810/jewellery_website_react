import './style.scss'
import React from 'react'
import Section from '../Common/Section'
import { AimOutlined } from '@ant-design/icons'
import { Card, Carousel } from 'antd'
import Lottie from 'react-lottie';
import * as animationCraft from '../../Assets/Lottie/Craftsmanship.json'
import * as animationSustain from '../../Assets/Lottie/Sustainability.json'
import * as animationSatisfation from '../../Assets/Lottie/Customer-Satisfaction.json'
import * as animationInnovation from '../../Assets/Lottie/Creativity.json'
import * as animationAuthenticity from '../../Assets/Lottie/Authenticity.json'

const Aboutus = () => {
    const defaultOptions = (id) => {
        let animationData;
        switch (id) {
            case 1:
                animationData = animationSatisfation;
                break;
            case 2:
                animationData = animationSustain;
                break;
            case 3:
                animationData = animationCraft;
                break;
            case 4:
                animationData = animationInnovation;
                break;
            case 5:
            default:
                animationData = animationAuthenticity; 
        }
        return {
            loop: true,
            autoplay: true, 
            animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
    };

    const values = [
      {
          id: 1,
          text: "Customer Satisfaction",
          lottie: defaultOptions(1),
          para: "Your happiness is our greatest reward."
      },
      {
          id: 2,
          text: "Sustainability",
          lottie: defaultOptions(2),
          para: "We believe in responsible sourcing and eco-friendly practices."
      },
      {
          id: 3,
          text: "Craftsmanship",
          lottie: defaultOptions(3),
          para: "We take pride in our attention to detail and expert artistry."
      },
      {
          id: 4,
          text: "Innovation",
          lottie: defaultOptions(4),
          para: "We continuously evolve to bring fresh and inspiring designs."
      },
      {
          id: 5,
          text: "Authenticity",
          lottie: defaultOptions(5),
          para: "Every piece is crafted with genuine materials and love."
      },
    ]

    const screenSize = window?.innerWidth

  return (
    <Section className='aboutus'>
        <h1>About Us</h1>
        <h3>Our Story</h3>
        <p>At [Your Brand Name], our journey began with a passion for exquisite craftsmanship and a desire to redefine elegance in the world of jewelry. Founded in [Year], we set out to create timeless pieces that not only enhance beauty but also tell a story. Every piece we design reflects a perfect blend of tradition and modernity, ensuring that our customers receive jewelry that is both meaningful and enduring.</p>
        <h3>Our Vision</h3>
        <p>To be a globally recognized jewelry brand that symbolizes elegance, authenticity, and timeless craftsmanship. We aim to create jewelry that celebrates life's special moments and becomes an integral part of our customers' most cherished memories.</p>
        <h3>Our Mission</h3>
        <ul >
            <li><AimOutlined />{' '}To craft high-quality, elegant, and unique jewelry pieces that reflect individual style.</li>
            <li><AimOutlined />{' '}To embrace innovation while preserving traditional artistry.</li>
            <li><AimOutlined />{' '}To ensure ethical sourcing of materials and promote sustainable practices.</li>
            <li><AimOutlined />{' '}To provide an exceptional shopping experience with unmatched customer service.</li>
        </ul>
        <h3>Our Values</h3>
        <div className="card-wrapper">
        {values?.map(e=>
        <Card className='card'>
        <Lottie options={e?.lottie}
            height={150}
            width={150}
              />
            <h3>{e?.text}</h3>
            <span>{e?.para}</span>
        </Card>)}
        </div>
    </Section>
  )
}

export default Aboutus