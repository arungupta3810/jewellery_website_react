import React from 'react'
import PrimaryButton from '../Button'
import { Col } from 'antd'
import './style.scss'

const ProductCard = () => {
    const products =[
        {
            id: 1,
            imageUrl : "https://unniyarcha.com/cdn/shop/files/Gold-Plated-Silver-Kundan-Lotus-Cuff-Unniyarcha-Jewellery-173324735.jpg?v=1725511660&width=1000",
            price: "Rs. 3,999.00",
            description: "Gold Plated Silver Kundan set ..."
        },
        {
            id: 2,
            imageUrl : "https://unniyarcha.com/cdn/shop/files/Gold-Plated-Silver-Kundan-Lotus-Cuff-Unniyarcha-Jewellery-173324735.jpg?v=1725511660&width=1000",
            price: "Rs. 3,999.00",
            description: "Gold Plated Silver Kundan..."
        },
        {
            id: 3,
            imageUrl : "https://unniyarcha.com/cdn/shop/files/Gold-Plated-Silver-Kundan-Lotus-Cuff-Unniyarcha-Jewellery-173324735.jpg?v=1725511660&width=1000",
            price: "Rs. 3,999.00",
            description: "Gold Plated Silver Kundan..."
        },
        {
            id: 4,
            imageUrl : "https://unniyarcha.com/cdn/shop/files/Gold-Plated-Silver-Kundan-Lotus-Cuff-Unniyarcha-Jewellery-173324735.jpg?v=1725511660&width=1000",
            price: "Rs. 3,999.00",
            description: "Gold Plated Silver Kundan..."
        },
        {
            id: 5,
            imageUrl : "https://unniyarcha.com/cdn/shop/files/Gold-Plated-Silver-Kundan-Lotus-Cuff-Unniyarcha-Jewellery-173324735.jpg?v=1725511660&width=1000",
            price: "Rs. 3,999.00",
            description: "Gold Plated Silver Kundan set ..."
        },
        {
            id: 6,
            imageUrl : "https://unniyarcha.com/cdn/shop/files/Gold-Plated-Silver-Kundan-Lotus-Cuff-Unniyarcha-Jewellery-173324735.jpg?v=1725511660&width=1000",
            price: "Rs. 3,999.00",
            description: "Gold Plated Silver Kundan..."
        },
        {
            id: 7,
            imageUrl : "https://unniyarcha.com/cdn/shop/files/Gold-Plated-Silver-Kundan-Lotus-Cuff-Unniyarcha-Jewellery-173324735.jpg?v=1725511660&width=1000",
            price: "Rs. 3,999.00",
            description: "Gold Plated Silver Kundan..."
        },
        {
            id: 8,
            imageUrl : "https://unniyarcha.com/cdn/shop/files/Gold-Plated-Silver-Kundan-Lotus-Cuff-Unniyarcha-Jewellery-173324735.jpg?v=1725511660&width=1000",
            price: "Rs. 3,999.00",
            description: "Gold Plated Silver Kundan..."
        },
    ]
  return products?.map(({id,imageUrl,price,description,bestPrice})=>
    <Col md={6} xs={12}>
    <div className='productcard' key={id}>
        <div className="img-wrapper">
        <img alt='jwellery' src={imageUrl} />
        </div>
        <div className="content">
            <span className='price'>{price}</span>
            <span>{bestPrice}</span>
            <span>{description}</span>
        </div>
        <PrimaryButton name={'Add To Cart'} className={'checkout'} />
    </div>
    </Col>
  )
}

export default ProductCard