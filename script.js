const faqHeads = document.querySelectorAll(".faq .head");

faqHeads.forEach((faqHead) => {
    // Asignamos el evento click a cada .head
    faqHead.addEventListener("click", () => {
        // Obtenemos el padre del .head, es decir .faq
        const faq = faqHead.parentNode;
        // Obtenemos el elemento contiguo al .head, es decir .content
        const faqContent = faqHead.nextElementSibling;
        
        // toggle() permite quitar o asignar la clase "active" al .faq
        faq.classList.toggle("active");
        
        // Si faq tiene la clase "active" entonces asignas al .content una altura
        // esta altura es el alto del contenido que esta oculto + 30px
        if (faq.classList.contains("active")) {
            faqContent.style.height = (faqContent.scrollHeight + 30) + "px";
        } else {
            // caso contrario, tendrá una altura de 0px
            faqContent.style.height = "0px";
        }
    });
});

/*Form*/
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const successMessage = document.getElementById('success-message');
    console.log(document.getElementById('check').checked);
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Muestra el mensaje de éxito
        successMessage.classList.remove('hidden');

        // Limpia el formulario
        form.reset();
    });
});


document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('menu-toggle').checked = false;
    });
});
