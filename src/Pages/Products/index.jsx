import React, { useEffect } from 'react'
import Section from '../../Components/Common/Section'
import CustomTab from '../../Components/CustomTab'
import { ScrollToTop } from '../../Components/CommonHelper/helperFunction'
import ProductCommonTab from '../../Components/ProductCommonTab'

const Products = () => {
  useEffect(()=>{
    ScrollToTop('instant')
  },[])
  return (
    <Section className={'products'}>
      <h1>Keep shopping for Jwellery</h1>
      <ProductCommonTab />
    </Section>
  )
}

export default Products