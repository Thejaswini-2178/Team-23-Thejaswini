import React from 'react'
import { useSelector } from 'react-redux'

const SocialMedia_Post_2 = () => {
    const socialMediaPost = useSelector((state) => state.socialMediaPost)
  return (
    <div>
        <h2>
            welcome to SocialMedia_Post_2
        </h2>
    </div>
  )
}

export default SocialMedia_Post_2