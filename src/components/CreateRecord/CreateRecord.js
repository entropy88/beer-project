import styles from "./CreateRecord.module.css";
import { useState } from "react";
import * as beerService from "../../services/beer";
import { useContext } from "react/cjs/react.development";
import {AuthContext} from "../../Contexts/AuthContext";

import recordFormValidation  from "../../utils/recordFormVlidation"

import Error from "../Error/Error";
import { useNavigate } from 'react-router-dom';

function CreateRecord() {
 
  const navigate = useNavigate();
  const {user} =useContext(AuthContext);  
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [errors, setErrors]=useState([]); 

  const onBeerCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let title = formData.get('beerName');   
    let imgUrl = formData.get('beerPicture');
    let type = formData.get('beerTypes');
    let country=formData.get('beerOrigin');
    let alcVol=formData.get('alcoholicContent');

  const newRecord={  
      ownerId:user._id,
      title,      
      imgUrl,
      type,
      country,
      alcVol,     
      rating: [{userRated:user._id, value:rating}]     
  }  
  setErrors([...recordFormValidation(newRecord)]);
  console.log(errors)
    
    if (errors.length<1){    

    beerService.create(newRecord)
        .then(result => { 
          navigate('/');     
        })
      } 
    }

    return (
      <>
    <form id="beer_form" className={styles.createForm}  onSubmit={onBeerCreate} method="POST">
       <label className={styles.createLabel}  htmlFor="beerName">Марка:</label>
       <input className={styles.createInput} type="text" id="beerName" required name="beerName"></input>
       <label className={styles.createLabel} htmlFor="beerPicture">Изображение:</label>
       <input  className={styles.createInput} type="text" id="beerPicture" required name="beerPicture"></input>
       <label className={styles.createLabel} htmlFor="beerTypes">Тип:</label>

      <select className={styles.createSelect} name="beerTypes" id="beerTypes">
        <option value="Тъмна">Тъмна</option>
        <option value="Светла">Светла</option>
        <option value="Вайс">Вайс</option>
      </select> 

      <label className={styles.createLabel} htmlFor="beerOrigin">Произход:</label>
      <select className={styles.createSelect} name="beerOrigin" id="beerOrigin">
        <option value="България">България</option>
        <option value="Внос">Внос</option>
      </select> 

      <label className={styles.createLabel} htmlFor="alcoholicContent">Алкохолно съдържание:</label>
      <input className={styles.createInput} type="number" name="alcoholicContent" id="alcoholicContent" min="0" step="0.1" max="10"></input>
          
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
      {errors.length>0?<Error errors={errors}/>:""}
      <button type="submit" id="submitBeer">Запази</button>

    </form>
    </>
    );
  }
  
  export default CreateRecord;