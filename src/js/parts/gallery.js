function gallery() {

    let galleryContent= document.querySelector('.gallery_content'),
        galleryItem = document.querySelectorAll('.gallery_item'),
        gallImg = document.querySelectorAll('.gall_img');

    galleryItem.forEach(function(item){
        item.addEventListener('click', function(event){
            let target = event.target,
                itemChild= item.lastChild;

            event.preventDefault();
                if(target == itemChild.lastChild){
                    let src=target.getAttribute("src"),
                        divPopGal = document.createElement('div'),
                        divGalBack = document.createElement('div'),
                        imgGal = document.createElement('img');

                    divPopGal.classList.add('popup-gallery');
                    divGalBack.classList.add('gallery-bg');
                    imgGal.classList.add('gallery-img');

                    document.body.appendChild(divPopGal);
                    // divPopGal.appendChild(divGalBack);
                    divPopGal.appendChild(imgGal);

                    let arrSrc = src.split("/");
                    imgGal.setAttribute("src","img/our_works/big_img/"+arrSrc[arrSrc.length-1]+"");

                    divPopGal.style.cssText ="position: fixed;\
                    top: 0px;\
                    left: 0px;\
                    height:100%;\
                    width:100%;\
                    background-color:rgba(0,0,0,.75);\
                    display: flex;\
                    align-items: center\
                    justify-content: center\
                    ";

                    imgGal.style.cssText ="position: relative;\
                    margin:auto auto;\
                    z-index:2;\
                    max-height:94%;\
                    max-width:94%;\
                    ";


                    divPopGal.addEventListener('click',function(event){
                        let target = event.target;
                        // console.log('hello');
                        // console.log(target);
                        // console.log(divGalBack);
                        if( target== divPopGal){
                            console.log('no');
                            divPopGal.style.display="none";
                        }
                    });
                }
                
        });
    });

}

module.exports = gallery;