import styles from "./CreateRecord.module.css";
import { useState } from "react";
import * as beerService from "../../services/beer";
import { useContext } from "react/cjs/react.development";
import {AuthContext} from "../../Contexts/AuthContext";

import Error from "../Error/Error";
import { useNavigate } from 'react-router-dom';

function CreateRecord() {
 
  // const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const {user} =useContext(AuthContext);

  // function onErrors(err){
  //   setErrors(errors.concat(err));
  //   console.log('error pushed',err)
  //  console.log(errors)
  // }


  const onBeerCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let title = formData.get('beerName');   
    let imgUrl = formData.get('beerPicture');
    let type = formData.get('beerTypes');
    let country=formData.get('beerOrigin');
    let alcVol=formData.get('alcoholicContent');

   //validation
    // if (title.length<3){
    //   onErrors("Title must be atleast 3 characters!")
    // }

    // const urlPattern=new RegExp (/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/);

    // if (!urlPattern.test(imgUrl)){
    //   onErrors("Please use valid url")
    // }

    // console.log(errors)
    
//     if (errors.length<1){    

    beerService.create({
      ownerId:user._id,
       title,      
        imgUrl,
        type,
        country,
        alcVol,
         //dummy
       packages:[0.5],
       rating: [3]


    })
        .then(result => { 
          console.log(result._id+ "new");
          //HMMMM...
          navigate('/');     
        })
      } 
  // }


    return (
      <>
       <form id="beer_form" className={styles.createForm}  onSubmit={onBeerCreate} method="POST">
       <label className={styles.createLabel}  htmlFor="beerName">Марка:</label>
       <input className={styles.createInput} type="text" id="beerName" name="beerName"></input>
       <label className={styles.createLabel} htmlFor="beerPicture">Изображение:</label>
       <input  className={styles.createInput} type="text" id="beerPicture" name="beerPicture"></input>
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

          <label className={styles.createLabel} htmlFor="beerPackage">Опаковки:</label>
          <article className={styles.packaging}>

              <article className={styles.packaging_item}>
          <input type="checkbox" id="standard_glass"></input>
            <label htmlFor="standard_glass">0.5l стъкло</label>
          </article>

          <article className={styles.packaging_item}>
          <input type="checkbox" id="small_glass"></input>
          <label htmlFor="small_glass">0.33l стъкло</label>
          </article>

          <article className={styles.packaging_item}>
          <input type="checkbox" id="standard_can"></input>
          <label htmlFor="standard_can">0.5l кен</label>
          </article>

          <article className={styles.packaging_item}>
          <input type="checkbox" id="small_can"></input>
          <label htmlFor="small_can">0.33l кен</label>
          </article>

          <article className={styles.packaging_item}>
          <input type="checkbox" id="small_galon"></input>
          <label htmlFor="small_galon">1l pvc</label>
          </article>

          <article className={styles.packaging_item}>
          <input type="checkbox" id="big_galon"></input>
          <label htmlFor="big_galon">2l pvc</label>
          </article>

          </article>

          <article className={styles.stars}>
          <span><i className="fas fa-beer"></i></span>
          <span><i className="fas fa-beer"></i></span>
          <span><i className="fas fa-beer"></i></span>
          </article>

          <button type="submit" id="submitBeer">Запази</button>

       </form>

       {/* {errors.length>0?<Error errors={errors}/>:<p>it's all good</p>} */}
      </>
    );
  }
  
  export default CreateRecord;