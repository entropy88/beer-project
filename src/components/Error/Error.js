
function Error({errors}) {
    console.log(errors)
  
    return (<>
    {errors.map(x=><p key={x}>{x}</p>)}
    </>
     
    );
  }
  
  export default Error;