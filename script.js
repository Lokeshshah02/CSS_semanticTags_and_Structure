document.addEventListener('DOMContentLoaded', function(){
    const readMoreLinks = document.querySelectorAll('.read-more')

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event){
            event.preventDefault();
            alert('Read more Clicked, but not available')
        })
    })
})