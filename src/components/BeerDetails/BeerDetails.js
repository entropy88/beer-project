
function BeerDetails({beer}) {

  const packages=JSON.parse(beer.packages[0])
  console.log(packages)
    
  
    return (
    <>
    <article>
     <p>{beer.title}</p>
    
     </article>
     </>
    );
  }
  
  export default BeerDetails;