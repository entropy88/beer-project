import styles from "./CreateRecord.module.css"

function CreateRecord() {
    return (
      <>
       <h1>This is the create record page</h1>
       <form id="beer_form" className={styles.createForm}>
       <label for="beerName">Марка:</label>
       <input type="text" id="beerName" name="beerName"></input>

       <label for="beerPicture">Изображение:</label>
       <input type="text" id="beerPicture" name="beerPicture"></input>

       <label for="beerTypes">Тип:</label>

<select name="beerTypes" id="beerTypes">
  <option value="ale">Тъмна</option>
  <option value="lager">Светла</option>
  <option value="weiss">Вайс</option>
 </select> 

 <label for="beerPackage">Опаковки:</label>
<article className="packaging">

    <article className="packaging_item">
 <input type="checkbox" id="standard_glass"></input>
  <label for="standard_glass">0.5l стъкло</label>
</article>

<article className="packaging_item">
 <input type="checkbox" id="small_glass"></input>
 <label for="small_glass">0.33l стъкло</label>
 </article>

 <article className="packaging_item">
 <input type="checkbox" id="standard_can"></input>
 <label for="standard_can">0.5l кен</label>
 </article>

 <article className="packaging_item">
 <input type="checkbox" id="small_can"></input>
 <label for="small_can">0.33l кен</label>
 </article>

 <article className="packaging_item">
 <input type="checkbox" id="small_galon"></input>
 <label for="small_galon">1l pvc</label>
 </article>

 <article className="packaging_item">
 <input type="checkbox" id="big_galon"></input>
 <label for="big_galon">2l pvc</label>
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
  
  export default CreateRecord;