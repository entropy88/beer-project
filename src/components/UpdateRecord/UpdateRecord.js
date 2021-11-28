import styles from "./UpdateRecord.module.css";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as beerService from '../../services/beer';

import Error from "../Error/Error";
import { useNavigate } from 'react-router-dom';

function UpdateRecord() {

    const [beer, setBeer] = useState({});
    const { beerId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
      async function fetchData(){
    let beerResult = await beerService.getOne(beerId);
    setBeer(beerResult);
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
  

    const urlPattern=new RegExp (/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/);
    if (!urlPattern.test(imgUrl)){
      console.log("Please use valid url")
    }

    const updatedBeer={
        title,      
        imgUrl,
        type,
        country,
        alcVol,
         //dummy
       packages:"[0.5, 1]",
       rating: "[3]"
    }
    const requestBody={
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBeer)
    }
     
 
 console.log(requestBody)
} 



    return (
      <>
       <form id="beer_form" className={styles.createForm}  onSubmit={()=>onBeerUpdate} method="PUT">
       <label className={styles.createLabel}  htmlFor="beerName">Марка:</label>
       <input className={styles.createInput} type="text" id="beerName" name="beerName"
       value={beer.title}></input>

       <label className={styles.createLabel} htmlFor="beerPicture">Изображение:</label>
       <input  className={styles.createInput} type="text" id="beerPicture" name="beerPicture"
       value={beer.imgUrl}></input>



       <label className={styles.createLabel} htmlFor="beerTypes">Тип:</label>

<select className={styles.createSelect} name="beerTypes" id="beerTypes"
 value={beer.type}>
  <option value="ale">Тъмна</option>
  <option value="lager">Светла</option>
  <option value="weiss">Вайс</option>
 </select> 

 <label className={styles.createLabel} htmlFor="beerOrigin">Произход:</label>
 <select className={styles.createSelect} name="beerOrigin" id="beerOrigin"
 value={beer.country}>
  <option value="България">България</option>
  <option value="Внос">Внос</option>
 </select> 

 <label className={styles.createLabel} htmlFor="alcoholicContent">Алкохолно съдържание:</label>
 <input className={styles.createInput} type="number" name="alcoholicContent" id="alcoholicContent" min="0" step="0.1" max="10"
 value={beer.alcVol}></input>

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

     
      </>
    );
  }
  
  export default UpdateRecord;