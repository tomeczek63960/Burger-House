(function(){

    const pagination = document.querySelector('.story__slider__pagination');
    
    const paginationActiveClass = 'story__slider__pagination__item--active'
    const paginationItemClass = 'story__slider__pagination__item'
    
    pagination.addEventListener('click',(e)=>{
        const target = e.target;
    
        if(!target.className.includes(paginationItemClass)) return;
    
            [...pagination.children].forEach(item =>{
                item.classList.remove( paginationActiveClass );
            });
            target.classList.add( paginationActiveClass );
    
            const slidIndex = parseInt(target.dataset.slide);
            const prevActiveSliderItem = document.querySelector('.story__slider__item--active');
            if(prevActiveSliderItem.className.includes(`story__slider__item-${slidIndex}`) ) return;
    
            prevActiveSliderItem.classList.remove('story__slider__item--active');
    
            const currentActiveSlid = document.querySelector(`.story__slider__item-${slidIndex}`);
            currentActiveSlid.classList.add('story__slider__item--active');
    
    });

}());