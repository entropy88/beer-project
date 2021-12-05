function registerFormValidation(record, repeatPassword){
    const errors=[];
   
    if (record.username.length<5){
        errors.push("Потребителското име трябва да е поне 5 символа!");
    }
    if (record.password.length<5){
        errors.push("Паролата трябва да е поне 5 символа!");
    }

    if(record.password!==repeatPassword){
        errors.push("Паролите не съвпадат")
    }

    const emailPattern=new RegExp (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig);
    if (!emailPattern.test(record.email)){
        errors.push("Невалиден имейл!")
    }  

    return errors;    
}

export default registerFormValidation;