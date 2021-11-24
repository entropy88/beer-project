
function Error({errors}) {
    console.log(errors)
  
    return (<>
    {errors.map(x=><p>{x}</p>)}
    </>
     
    );
  }
  
  export default Error;