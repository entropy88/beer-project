import styles from "./UpdateRecord.module.css";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from "react/cjs/react.development";
import {AuthContext} from "../../Contexts/AuthContext";
import * as beerService from "../../services/beer"; 

import Error from "../Error/Error";
import { useNavigate } from 'react-router-dom';

function UpdateRecord() {

  const {user} =useContext(AuthContext);
  const [beer, setBeer] = useState({});
  const { beerId } = useParams();
  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();

  function getRating(arr){
    const valuesArr=arr.map(x=>x.value);
    const sum = valuesArr.reduce(function(a, b){
        return a + b;
        }, 0);
    const average= Math.round(sum/arr.length);
    return average;        
}

  useEffect(() => {
      async function fetchData(){
    let beerResult = await beerService.getOne(beerId);
    setBeer(beerResult);
    setRating(getRating(beerResult.rating))
      }
      fetchData()
}, [beerId]);
 

const onBeerUpdate = (e) => {
  e.preventDefault();
  let formData = new FormData(e.currentTarget);

  let title = formData.get('beerName');   
  let imgUrl = formData.get('beerPicture');
  let type = formData.get('beerTypes');
  let country=formData.get('beerOrigin');
  let alcVol=formData.get('alcoholicContent');  

    // const urlPattern=new RegExp (/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/);
    // if (!urlPattern.test(imgUrl)){
    //   console.log("Please use valid url")
    // }

  const updatedBeer=Object.assign(beer);
  updatedBeer.title=title;
  updatedBeer.imgUrl=imgUrl;
  updatedBeer.type=type;
  updatedBeer.country=country;
  updatedBeer.alcVol=alcVol;

  //update rating
  const indexOfRecordToUpdate=beer.rating.findIndex(x=>x.userRated==user._id);
  const newRating={userRated:user._id,value:rating}
  const copyRating=[...beer.rating]
  const removedOld=copyRating.splice(indexOfRecordToUpdate,1)
  copyRating.push(newRating);
  updatedBeer.rating=copyRating;
    
  beerService.updateBeer(beerId, updatedBeer)
    .then(result=>console.log(result))
     navigate('/');    
} 

const ratingButtons=(
  <div className={styles.rating}>
  {[...Array(5)].map((star, index) => {
  index += 1;
  return (
  <button 
  type="button"
  key={index}
  className={  index <= (hover || rating) ? styles.on : styles.off }
  onClick={function(){
  setRating(index);
  }}
  onMouseEnter={() => setHover(index)}
  onMouseLeave={() => setHover(rating)}
  >
  <span>&#127866;</span>
  </button>
  );
  })}

</div>
)

    return (
  <>
    <form id="beer_form" className={styles.createForm}  onSubmit={onBeerUpdate} method="POST">
       <label className={styles.createLabel}  htmlFor="beerName">Марка:</label>
       <input className={styles.createInput} type="text" id="beerName" name="beerName"
       defaultValue={beer.title}></input>

       <label className={styles.createLabel} htmlFor="beerPicture">Изображение:</label>
       <input  className={styles.createInput} type="text" id="beerPicture" name="beerPicture"
       defaultValue={beer.imgUrl}></input>

      <label className={styles.createLabel} htmlFor="beerTypes">Тип:</label>
      <select className={styles.createSelect} name="beerTypes" id="beerTypes"
      defaultValue={beer.type}>
        <option value="Тъмна">Тъмна</option>
        <option value="Светла">Светла</option>
        <option value="Вайс">Вайс</option>
       </select> 

      <label className={styles.createLabel} htmlFor="beerOrigin">Произход:</label>
      <select className={styles.createSelect} name="beerOrigin" id="beerOrigin"
      defaultValue={beer.country}>
        <option value="България">България</option>
        <option value="Внос">Внос</option>
      </select> 

      <label className={styles.createLabel} htmlFor="alcoholicContent">Алкохолно съдържание:</label>
      <input className={styles.createInput} type="number" name="alcoholicContent" id="alcoholicContent" min="0" step="0.1" max="10"
      defaultValue={beer.alcVol}></input>

      {ratingButtons}

      <button type="submit" id="submitBeer">Запази</button>
    </form>     
  </>
    );
  }
  
  export default UpdateRecord;