//template_4m21yr6
//service_hgre0ni
//pU-TiVS8GqxtDsVdb


function contact(event){
    event.preventDefault();
    emailjs
        .sendForm(
            'service_hgre0ni',
            'template_4m21yr6',
            event.target,
            'pU-TiVS8GqxtDsVdb'
        ).then(() => {
            console.log('this worked1');
        })

}