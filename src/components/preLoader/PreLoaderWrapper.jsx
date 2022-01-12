import ProductPerLoader from "./ProductPerLoader";

const PreLoaderWrapper = () => {
  const productLoader = new Array(20);
  
  const arr = []
  for(let i = 0; i < productLoader.length; i++){
      arr.push(i)
  }
  console.log(productLoader)
  return arr.map(() => <ProductPerLoader />);
};

export default PreLoaderWrapper;
