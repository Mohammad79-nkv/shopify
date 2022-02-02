import ProductPerLoader from "./ProductPerLoader";

const PreLoaderWrapper = () => {
  const productLoader = new Array(20);
  
  const arr = []
  for(let i = 0; i < productLoader.length; i++){
      arr.push(i)
  }
  return arr.map((_,index) => <ProductPerLoader key={index}/>);
};

export default PreLoaderWrapper;
