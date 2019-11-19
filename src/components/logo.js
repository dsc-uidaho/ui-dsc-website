import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// const Logo = () => (
//     <StaticQuery
//         query={graphql`
//       query {
//         logo: file(relativePath: { eq: "google_developers_logomark_color.png" }) {
//           childImageSharp {
//             resize(width: 100, height: 100) {
//                 src
//             }
//           }
//         }
//       }
//     `}
//         render={data =>
//             <img src={data.logo.childImageSharp.resize.src}
//                 alt="" />
//         }
//     />
// );

const Logo = () => (
    <svg className="h-20 w-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><path d="M46.36 96.68L77 79a15.06 15.06 0 10-15.09-26.09L9 83.45z" fill="#ea4335" /><path d="M69.43 142.11A15.07 15.07 0 0077 114L24.07 83.45A15.06 15.06 0 009 109.54l52.9 30.54a15 15 0 007.53 2.03z" fill="#4285f4" /><path d="M122.05 142.11a15 15 0 007.52-2l52.9-30.54-36.88-13.52L114.5 114a15.07 15.07 0 007.55 28.12z" fill="#fbbc04" /><path d="M174.92 111.56a15.06 15.06 0 007.55-28.11l-52.9-30.54A15.06 15.06 0 00114.5 79l52.9 30.54a15 15 0 007.52 2.02z" fill="#0f9d58" /></svg>

)

export default Logo;