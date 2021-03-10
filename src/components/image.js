/* eslint-disable no-unused-vars */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryImage {
      cloudinaryMedia(id: { eq: "7a98cff9-4fb8-54d7-ba87-ed13ea3185c8" }) {
        secure_url
      }
    }
  `)

  const image = data.cloudinaryMedia.secure_url

  return <img className="picture" src={image} alt="Enoch Chejieh" />
}

export default ProfileImage
