import React from "react"
import ContentLoader from "react-content-loader"

const ProductPerLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={300}
    height={407}
    viewBox="0 0 300 407"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{margin: "1rem"}}
    {...props}
  >
    
    <rect x="0" y="0" rx="10" ry="10" width="300" height="407" style={{margin: "1rem"}}/> 
  </ContentLoader>
)

export default ProductPerLoader

