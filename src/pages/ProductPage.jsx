import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import "react-multi-carousel/lib/styles.css"
import "./ProductPage.css"
import { fetchProductDetails } from "../services/productService"
import Button from "../components/Button"
// import { data } from "../dummyData"
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import Loading from "../components/Loading"

const ProductPage = () => {
  const [data, setData] = useState(null)
  console.log(data)
  useEffect(() => {
    getProductDetails()
  }, [])
  const getProductDetails = () => {
    fetchProductDetails().then(res => {
      setData(res)
    })
  }

  return (
    <>
      {data ? (
        <div className="container">
          <div className="main-body-container">
            <div className="image-container">
              <img src={data[3].image} alt="product-img" />
            </div>
            <div className="details-container">
              <div className="product-title-container">{data[3].title}</div>
              <div className="price-container">
                <div className="price">
                  {data[3].price}
                  <span>₹</span>
                </div>
                <div className="add-cart-button">
                  <Button name="Add to Cart" />
                </div>
                <div className="ratings">
                  <ReactStars
                    count={5}
                    value={data[3].rating.rate}
                    isHalf={true}
                    size={24}
                    activeColor="#ffd700"
                  />
                  ({data[3].rating.count})
                </div>
              </div>
              <div className="desc-container">
                <p>{data[3].description}</p>
              </div>
            </div>
            <div className="carousal-container">
              <div className="carousal-main-container">
                <Carousel showIndicators={false} showThumbs={false}>
                  {data.map((item, index) => (
                    <div className="carousal-item-container">
                      <img className="carousal-img" src={item.image} />
                      <p className="legend">{item.title}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
          <div className="footer-container">
            <img className="social-media-icons" src={instagram} alt="instagram" />
            <img className="social-media-icons" src={twitter} alt="twitter" />
            <img className="social-media-icons" src={linkedin} alt="linkedin" />
          </div>
        </div>
      ) : (
        <Loading/>
      )}
    </>
  )
}

export default ProductPage
