import React from 'react'
import { useSelector } from 'react-redux'

const SocialMedia_Post_2 = () => {
    const socialMediaPost = useSelector((state) => state.socialMediaPost)
  return (
    <div>
        <h2>
            Welcome to SocialMedia_Post_2
        </h2>
        <ul>
          {socialMediaPost.map((post)=>{
            return <li>{post}</li>
          })}
        </ul>
    </div>
  )
}

export default SocialMedia_Post_2