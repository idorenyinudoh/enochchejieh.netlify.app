/* eslint-disable no-unused-vars */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const CozaStore = () => {
  const data = useStaticQuery(graphql`
    query CozaStore {
      cloudinaryMedia(id: { eq: "a8d50561-186f-526f-b1b4-6983a866d0eb" }) {
        secure_url
      }
    }
  `)

  const image = data.cloudinaryMedia.secure_url

  return <img className="picture" src={image} alt="CozaStore" />
}

export default CozaStore
