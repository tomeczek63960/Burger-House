const baseAnimationElements = document.querySelectorAll('.js--base-animation');
const menuItemImgs = document.querySelectorAll('.menu__content__item__img');
const menuItemHeadings = document.querySelectorAll('.menu__content__item__heading');
const footerMedia = document.querySelector('.page-footer__media');
const formControls = document.querySelectorAll('.contact__form-control, .contact__form__btn');
const heroImgAfter = CSSRulePlugin.getRule(".page-hero__content__img:after");

const animationProperties = (rest,stagger = 0, durationTime = 0.5) => ({
    duration:durationTime,
    opacity:0,
    stagger:stagger,
    ...rest,
}); 
const scrollAnimationProperty = ( rest, trigger, duration = 0.5, stagger = 0) => ({
    scrollTrigger:trigger,
    duration: duration,
    opacity:1,
    stagger:stagger,
    ...rest
});

// page hero animation
    const tl = gsap.timeline();

    tl.from(".page-logo", animationProperties( { x:-100 }, 0, 1 ))
        .from('.bars',  animationProperties({ x:-30 }, 0, 0.4),'-=.4') 
        .addLabel('before-nav')
        .from('.page-nav__delivery', animationProperties( { y:-30 }, 0, 0.4 ))
        .from('.page-nav__navbar__link', animationProperties( { x:-20 }, 0.1, 0.2 ))

        .from('.page-hero__content__description__text, .page-hero__content__description__heading, .page-hero__content__description__subheading', animationProperties( { y:40 }, 0.3, 0.7 ),'before-nav' )

        .from('.page-hero__content__img__center', animationProperties( { y:-45, ease:"back.out(1.7)" } ) ) 
        .from('.page-hero__content__img__left', animationProperties( { x:-40, ease:"back.out(1.7)" } ) )
        .from(".page-hero__content__img__right",animationProperties( { x:40, ease:"back.out(1.7)" } ) ) 
        .from('.page-hero__content__img__discount', animationProperties() )
        .from(heroImgAfter, animationProperties( {}, 0, 1.5 ) )


// scroll animation
    gsap.set('.js--base-animation',{
        opacity:0,
        y:50,
    });
    baseAnimationElements.forEach(element =>{
        ScrollTrigger.create({
            trigger: element,
            start: "top bottom",
            onEnter: () => {
                gsap.to(element,{
                    duration:1,
                    opacity:1,
                    y:0,
                })
            }
          });
    });
   
    gsap.to('.menu__item--large', scrollAnimationProperty( {scale:1, y:0},'.menu__item--large', 1 ));
    gsap.to('.menu__item--right', scrollAnimationProperty({ scale:1, y:0 }, '.menu__item--right', 1.5, 0.2 ) );
    gsap.to('.menu__btn', scrollAnimationProperty({ scaleX:1, y:0 }, '.menu__btn', 1) );

    menuItemImgs.forEach(item => {
        gsap.to(item, scrollAnimationProperty( { scale:1 }, item, 1 ) )
    });
    menuItemHeadings.forEach(item => {
        gsap.to([item ,'.menu__content__item__text, .menu__content__item__btn'], scrollAnimationProperty({ y:0, }, item, 1, 0.2 ) );
    });
    gsap.to('.story__slider__item-1 .story__slider__item__img', scrollAnimationProperty( { scale:1 }, '.story__slider__item-1', 1) );
    formControls.forEach(item =>{
        gsap.to(item, scrollAnimationProperty( { scale:1 } ,item,1 ));
    });
    gsap.to('.page-logo--white', scrollAnimationProperty( { },'.page-logo--white',1 ) );
    gsap.to(footerMedia.children, scrollAnimationProperty( { x:0 }, footerMedia, 1, 0.2  ) );