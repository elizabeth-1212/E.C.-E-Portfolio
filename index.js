

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_hgre0ni',
            'template_4m21yr6',
            event.target,
            'pU-TiVS8GqxtDsVdb'  
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";        
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert{
            "The email service is temporarily unavailable. Please contact me directly at elizabethcommon12@gmail.com"
        };
    })
}

