const slide = document.querySelector('.slide-container img');
const selectedColor = document.getElementById('selected-color-out');
const selectedSize  = document.getElementById('selected-size-out');
const colors = document.querySelectorAll('.form-group-color input')
const sizes = document.querySelectorAll('.form-group-size input')
const btn = document.getElementById('btn-add-to-cart');
const thumbnails = document.querySelectorAll('.slide-thumbnails-container img');

function changeImg(img, newImgPath, newAltText){
    img.src = newImgPath;
    img.alt = newAltText;
}

colors.forEach((color)=>{
    color.addEventListener('click', function(){
        var currentColor = selectedColor.innerText.toLowerCase();
        var temp = selectedColor.innerText;
        selectedColor.innerText = color.nextElementSibling.innerText;
        btn.style.backgroundColor = color.value;
        changeImg(slide, slide.src.replace(currentColor,color.value),slide.alt.replace(temp,color.nextElementSibling.innerText));
        thumbnails.forEach((thumbnail=>{
            changeImg(thumbnail, thumbnail.src.replace(currentColor,color.value),thumbnail.alt.replace(temp,color.nextElementSibling.innerText));
            thumbnail.parentElement.href = thumbnail.src.replace(currentColor,color.value);
        }));
    });
});

sizes.forEach((size)=>{
    size.addEventListener('click', function(){
        selectedSize.innerText = size.nextElementSibling.innerText[0];
        btn.style.backgroundColor = selectedColor.innerText;
        btn.removeAttribute("disabled");
        btn.value ="Add to Cart";
    });
});

thumbnails.forEach((thumbnail)=>{
    thumbnail.addEventListener('click', function(){
        changeImg(slide, thumbnail.src, thumbnail.alt);
    });
    thumbnail.addEventListener('mouseover', function(){
        changeImg(slide, thumbnail.src, thumbnail.alt);
    });
});



