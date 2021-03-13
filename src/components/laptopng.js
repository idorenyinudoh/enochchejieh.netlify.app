/* eslint-disable no-unused-vars */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const LaptopNg = () => {
  const data = useStaticQuery(graphql`
    query LaptopNg {
      cloudinaryMedia(id: { eq: "cf11575e-c5cb-5328-8201-65379a582055" }) {
        secure_url
      }
    }
  `)

  const image = data.cloudinaryMedia.secure_url

  return <img className="picture" src={image} alt="LaptopNg" />
}

export default LaptopNg
