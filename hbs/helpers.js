const hbs = require ('hbs');


hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar',(texto)=>{
    let tmp = texto.split(' ');

    tmp.forEach((palabra, idx) => {
        tmp[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return tmp.join(" ")
})