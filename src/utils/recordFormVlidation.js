function recordFormValidation(record){
    const errors=[];
    if(record.title.length<3){
        errors.push("Марката трябва да е повече от 3 символа!")
    }

    const urlPattern=new RegExp (/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig);
    if(!urlPattern.test(record.imgUrl)){
        errors.push("Невалиден линк!")
    }

    console.log(record.rating[0].value);

    if(!record.rating || record.rating[0].value<1){
        errors.push("Невалиден рейтинг!")
    }

    if(!record.alcVol || record.alcVol<=0){
        errors.push("Невалидно алкохолно съдържание!")
    }

    return errors;
    
}

export default recordFormValidation;