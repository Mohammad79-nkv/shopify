import React from "react"
import ContentLoader from "react-content-loader"

const FilterPreLoader = (props) => (
  <ContentLoader 
    speed={3}
    width={693}
    height={90}
    viewBox="0 20 693 90"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    
    <rect x="0" y="17" rx="0" ry="0" width="54" height="38" /> 
    <rect x="63" y="17" rx="0" ry="0" width="140" height="38" /> 
    <rect x="212" y="17" rx="0" ry="0" width="111" height="38" /> 
    <rect x="332" y="17" rx="0" ry="0" width="162" height="38" /> 
    <rect x="503" y="17" rx="0" ry="0" width="190" height="38" /> 

  </ContentLoader>
)

export default FilterPreLoader

