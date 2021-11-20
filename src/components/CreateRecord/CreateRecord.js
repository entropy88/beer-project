import styles from "./CreateRecord.module.css"

function CreateRecord() {


  const onBeerCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let title = formData.get('beerName');
    let imgUrl = formData.get('beerPicture');
    let alcVol=formData.get('alcoholicContent');

    const newBeer={
      title,imgUrl,alcVol
    }

    console.log(newBeer)



}

    return (
      <>
       <form id="beer_form" className={styles.createForm}  onSubmit={onBeerCreate} method="POST">
       <label className={styles.createLabel}  for="beerName">Марка:</label>
       <input className={styles.createInput} type="text" id="beerName" name="beerName"></input>

       <label className={styles.createLabel} for="beerPicture">Изображение:</label>
       <input  className={styles.createInput} type="text" id="beerPicture" name="beerPicture"></input>



       <label className={styles.createLabel} for="beerTypes">Тип:</label>

<select className={styles.createSelect} name="beerTypes" id="beerTypes">
  <option value="ale">Тъмна</option>
  <option value="lager">Светла</option>
  <option value="weiss">Вайс</option>
 </select> 

 <label className={styles.createLabel} for="beerOrigin">Произход:</label>
 <select className={styles.createSelect} name="beerOrigin" id="beerOrigin">
  <option value="local">България</option>
  <option value="foreign">Внос</option>
 </select> 

 <label className={styles.createLabel} for="alcoholicContent">Алкохолно съдържание:</label>
 <input className={styles.createInput} type="number" name="alcoholicContent" id="alcoholicContent" min="0" step="0.1" max="10"></input>

 <label className={styles.createLabel} for="beerPackage">Опаковки:</label>
<article className={styles.packaging}>

    <article className={styles.packaging_item}>
 <input type="checkbox" id="standard_glass"></input>
  <label for="standard_glass">0.5l стъкло</label>
</article>

<article className={styles.packaging_item}>
 <input type="checkbox" id="small_glass"></input>
 <label for="small_glass">0.33l стъкло</label>
 </article>

 <article className={styles.packaging_item}>
 <input type="checkbox" id="standard_can"></input>
 <label for="standard_can">0.5l кен</label>
 </article>

 <article className={styles.packaging_item}>
 <input type="checkbox" id="small_can"></input>
 <label for="small_can">0.33l кен</label>
 </article>

 <article className={styles.packaging_item}>
 <input type="checkbox" id="small_galon"></input>
 <label for="small_galon">1l pvc</label>
 </article>

 <article className={styles.packaging_item}>
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