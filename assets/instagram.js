const bstInstagram = document.querySelector('#bst-instagram')
document.addEventListener("shopify:section:load", function(event) {
    fetch('http://localhost:3333/instagram/')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            bstInstagram.innerHTML += 
                `<div class="item-bst">
                    <a href="${element.permalink}">
                        <img src="${element.media_url}" alt/>
                    </a>
                </div>`
        })
        const autoplay = $('#bst-instagram').data("autoplay");
        const speed = $('#bst-instagram').data("speed");
        const loop = $('#bst-instagram').data("loop");
        const arrows = $('#bst-instagram').data("arrows");
        const dots = $('#bst-instagram').data("dots");
        const rows = $('#bst-instagram').data("rows");
        const margin = $('#bst-instagram').data("margin");
        $('#bst-instagram').slick({
            infinite: loop,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: arrows,
            dots: dots,
            rows: rows,
            autoplay: autoplay,
            autoplaySpeed: speed,
        });
        $('.item-bst').css('padding-left',margin)
        $('.item-bst').css('padding-right',margin)
        
    })
    .then(result => {
       
    })
  });
