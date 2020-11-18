'use strict';


document.addEventListener("DOMContentLoaded", function() {

    // SVG IE11 support
    svg4everybody();

    $('.nav-toggle').on("click", function (e) {
        e.preventDefault();
        $('.page').toggleClass('nav-open');
    });

    $('.header__nav--item').on("click", function (e) {
        e.preventDefault();
        $('.page').removeClass('nav-open');

    });

    

    var scroll = new SmoothScroll('a[href*="#"]' , {
        speed: 1500,
        speedAsDuration: true,
        header: '[data-scroll-header]',
    });


    

    gsap.registerPlugin(ScrollTrigger);
    var state = '';
    function animations() {
        fixedHeader()
        var newState = state;
        if (innerWidth >= 1230) {
            newState = "big";
        } else {
            newState = "small";
        }

        if (newState !== state) {
            if (newState === "big") {

                const beforeImg = document.createElement('img')
                beforeImg.src = 'img/top_media-before.svg'
                var width = document.querySelector('.top_media').style.width;
                var height = document.querySelector('.top_media').style.height;
                beforeImg.style.position = "absolute";
                if (innerWidth < 1800 && innerWidth >= 1230) {
                    beforeImg.style.width = '1271px'

                } else if (innerWidth < 1230) {
                    beforeImg.style.display = 'none'
                } else {
                    beforeImg.style.width = width;
                    beforeImg.style.height = height;
                    beforeImg.style.top = 0;
                }
                window.addEventListener('resize', () => {
                    if (innerWidth < 1800 && innerWidth >= 1230) {
                        beforeImg.style.width = '1271px'
    
                    } else if (innerWidth < 1230) {
                        beforeImg.style.display = 'none'
                    } else {
                        beforeImg.style.width = width;
                        beforeImg.style.height = height;
                        beforeImg.style.top = 0;
                    }
                })

                document.querySelector('.primary__media--wrap').prepend(beforeImg)

                var tl = new gsap.timeline();
                const mediaImg = document.querySelector('.top_media')
                tl.from(mediaImg, 4, {opacity: 0}, 1).to(mediaImg, 2, {opacity: 0.9}, 2)
                var repeatLight = new gsap.timeline()
                setTimeout(() => {
                   repeatLight.to(mediaImg, 2, {opacity: 0.6, repeat: -1, yoyo: true, ease: Linear.easeNone})
                }, 4000)


                gsap.to(mediaImg, {opacity: 1, scrollTrigger: '.solution', onComplete: () => {
                    repeatLight.pause();
                }})

                

                document.querySelector('.line-05').style.height = 0;
                document.querySelector('.line-04').style.height = 0;
                document.querySelector('.line-05').style.width = 0;
                document.querySelector('.line-02').style.height = 0;
                document.querySelector('.line-02').style.width = 0;
                document.querySelector('.line-10').style.height = 0;
                document.querySelector('.line-13').style.height = 0;
                document.querySelector('.line-13').style.width = 0;
                document.querySelector('.line-15').style.height = 0;
                document.querySelector('.line-11').style.width = 0;
                document.querySelector('.line-18').style.width = 0;
                document.querySelector('.line-18').style.height = 0;
                document.querySelector('.line-17').style.width = 0;
                document.querySelector('.line-17').style.height = 0;
                document.querySelector('.line-20').style.width = 0;
                document.querySelector('.line-24').style.width = 0;
                document.querySelector('.line-26').style.width = 0;
                document.querySelector('.line-19').style.height = 0;
                document.querySelector('.line-23').style.height = 0;
                document.querySelector('.line-25').style.height = 0;
                document.querySelector('.line-27').style.height = 0;
                document.querySelector('.line-31').style.height = 0;
                document.querySelector('.line-28').style.height = 0;
                document.querySelector('.line-33').style.width = 0;
                document.querySelector('.line-27').style.width = 0;
                document.querySelector('.line-30').style.width = 0;
                document.querySelector('.line-31').style.width = 0;
                document.querySelector('.line-32').style.height = 0;

                document.querySelector('.line-24').style.height = 0;
                document.querySelector('.line-26').style.height = 0;
                gsap.to(CSSRulePlugin.getRule('.line-10::after'), {width: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-10::after'), {height: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-10::before'), {width: 0, duration: 0})

                gsap.to(CSSRulePlugin.getRule('.line-13::after'), {width: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-13::after'), {height: 0, duration: 0})

                gsap.to(CSSRulePlugin.getRule('.line-15::after'), {height: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-15::after'), {width: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-15::before'), {width: 0, duration: 0})

                gsap.to(CSSRulePlugin.getRule('.line-18::after'), {width: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-18::after'), {height: 0, duration: 0})

                gsap.to(CSSRulePlugin.getRule('.line-20::after'), {height: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-20::after'), {height: 0, duration: 0})

                gsap.to(CSSRulePlugin.getRule('.line-24::after'), {height: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-24::after'), {width: 0, duration: 0})

                gsap.to(CSSRulePlugin.getRule('.line-26::after'), {width: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-26::after'), {height: 0, duration: 0})

                gsap.to(CSSRulePlugin.getRule('.line-31::after'), {height: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-31::after'), {width: 0, duration: 0})

                gsap.to(CSSRulePlugin.getRule('.line-33::after'), {width: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-33::after'), {height: 0, duration: 0})

                gsap.to(CSSRulePlugin.getRule('.line-23::after'), {height: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-23::after'), {width: 0, duration: 0})

                gsap.to(CSSRulePlugin.getRule('.line-25::after'), {width: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-25::after'), {height: 0, duration: 0})

                gsap.to(CSSRulePlugin.getRule('.line-27:before'), {width: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-27:before'), {height: 0, duration: 0})

                gsap.to(CSSRulePlugin.getRule('.line-27:after'), {height: 0, duration: 0})
                gsap.to(CSSRulePlugin.getRule('.line-27:after'), {width: 0, duration: 0})


                gsap.to('.loading', {opacity: 1, visibility: 'visible', duration: 1})

                document.getElementById('body').classList.remove('loading')

                gsap.fromTo('.primary__bg', {height: 0, overflow: 'hidden'}, {height: 'auto', ease: "slow",duration: 2})
                gsap.from(['.primary__button', '.btn-scroll', '.header__logo'], {opacity: 0, duration: 1})
                gsap.from(['.header', '.line:after', '.line:before'], {opacity: 0, duration: 3})
                gsap.from('.primary__media--wrap', {transform: 'translateX(50px)', duration: 2})
                gsap.from('.primary__text', {y: -100, duration: 1, ease: "power3.out"})
                gsap.from('.primary__header', {y: 45, duration: 1, ease: "power3.out"})

                gsap.from('.technologies__header', {scrollTrigger:'.technologies__content', y: 45, duration: 1, ease: "slow(0.7, 0.7, false)"})
                gsap.from('.technologies__text', {scrollTrigger:'.technologies__content', y: -100, duration: 1, ease: "slow(0.7, 0.7, false)"})
                gsap.from('.solution__header', {scrollTrigger:'.solution__content', y: 45, duration: 1, ease: "slow(0.7, 0.7, false)"})
                gsap.from('.solution__text', {scrollTrigger:'.solution__content', y: -100, duration: 1, ease: "slow(0.7, 0.7, false)"})
                gsap.from('.mirage__header', {scrollTrigger:'.mirage__wrap', y: 45, duration: 1, ease: "slow(0.7, 0.7, false)"})
                gsap.from('.mirage__text', {scrollTrigger:'.mirage__wrap', y: -100, duration: 1, ease: "slow(0.7, 0.7, false)"})

                gsap.from('.community__header', {scrollTrigger:'.community__header', y: 45, duration: 1, ease: "slow(0.7, 0.7, false)"})
                gsap.from('.community__text', {scrollTrigger:'.community__header', y: -100, duration: 1, ease: "slow(0.7, 0.7, false)", onComplete: () => {
                    gsap.to('.line-19', {height: '1730px', duration: 6, ease: 'slow(0.7, 0.7, false', onComplete: () => {
                        gsap.to('.line-20', {width: '50px', duration: .5, ease: 'slow(0.7, 0.7, false)', onComplete: () => {
                            gsap.to(CSSRulePlugin.getRule('.line-20::after'), {height: '7px', width: '7px', duration: 0, ease: 'slow(0.7, 0.7, false)'})
                        }})
                    }})
    
                    gsap.to('.line-17', {height: '807px', duration: 1.5, ease: 'slow(0.7, 0.7, false', onComplete: () => {
                        gsap.to('.line-18', {width: '587px', duration: .5, ease: 'slow(0.7, 0.7, false', onComplete: () => {
                            gsap.to('.line-18', {height: '82px', duration: .5, ease: 'slow(0.7, 0.7, false', onComplete: () => {
                                gsap.to(CSSRulePlugin.getRule('.line-18::after'), {height: '7px', width: '7px', duration: 0, ease: 'slow(0.7, 0.7, false)'})
                            }})
                        }})
                        gsap.to('.line-17', {width: '20px', duration: 0})
                    }})



                    gsap.to('.line-22', {width: '592px', duration: 1, ease: 'slow(0.7, 0.7, false', onComplete: () => {
                        gsap.to('.line-21', {width: '18px', duration: 1, ease: 'slow(0.7, 0.7, false'})
                        gsap.to(CSSRulePlugin.getRule('.line-22::after'), {height: '7px', width: '7px', duration: 0, ease: 'slow(0.7, 0.7, false)'})        
                        gsap.to('.line-21', {height: '517px', duration: 1, ease: 'slow(0.7, 0.7, false', onComplete: () => {
                            gsap.to(CSSRulePlugin.getRule('.line-21::after'), {height: '7px', width: '7px', duration: 0, ease: 'slow(0.7, 0.7, false)'})
                        }})
        
                    }})

    
                }})


                gsap.from('.build__header', {scrollTrigger:'.build__content', y: 45, duration: 1, ease: "slow(0.7, 0.7, false)"})
                gsap.from('.build__text', {scrollTrigger:'.build__content', y: -100, duration: 1, ease: "slow(0.7, 0.7, false)"})
                gsap.from('.enterprise__header', {scrollTrigger:'.enterprise__text', y: 45, duration: 1, ease: "slow(0.7, 0.7, false)"})
                gsap.from('.enterprise__text', {scrollTrigger:'.enterprise__text', y: -100, duration: 1, ease: "slow(0.7, 0.7, false)", onComplete: () => {
                    gsap.to(CSSRulePlugin.getRule('.line-23::after'), {height: '7px', width: '7px', duration: 0.5, onComplete: () => {
                        gsap.to('.line-23', {height: '380px', duration: 1, ease: 'slow(0.7, 0.7, false', onComplete: () => {
                            gsap.to('.line-24', {width: '667px', height: '10px', duration: 1})
                            gsap.to(CSSRulePlugin.getRule('.line-24::after'), {height: '7px', width: '7px', duration: 0, ease: 'slow(0.7, 0.7, false)'})
                        }})
                    }})

                    gsap.to(CSSRulePlugin.getRule('.line-25::after'), {height: '7px', width: '7px', duration: 0.5, onComplete: () => {
                        gsap.to('.line-25', {height: '740px', duration: 1.5, ease: 'slow(0.7, 0.7, false', onComplete: () => {
                            gsap.to('.line-26', {width: '75px', height: '10px', duration: 1})
                            gsap.to(CSSRulePlugin.getRule('.line-26::after'), {height: '7px', width: '7px', duration: 0, ease: 'slow(0.7, 0.7, false)'})
                        }})
                    }})

                    gsap.to(CSSRulePlugin.getRule('.line-27::before'), {height: '7px', width: '7px', duration: 0.5, onComplete: () => {
                        gsap.to('.line-27', {height: '1189px', duration: 3, ease: 'slow(0.7, 0.7, false', onComplete: () => {
                            gsap.to('.line-27', {width: '40px', duration: 1})
                            gsap.to(CSSRulePlugin.getRule('.line-27::after'), {height: '7px', width: '7px', duration: 0, ease: 'slow(0.7, 0.7, false)'})
                        }})
                    }})

                }})
                gsap.from('.reach__header', {scrollTrigger:'.reach__content', y: 45, duration: 1, ease: "slow(0.7, 0.7, false)"})
                gsap.from('.reach__text', {scrollTrigger:'.reach__content', y: -100, duration: 1, ease: "slow(0.7, 0.7, false)"})
                gsap.from('.touch__content--header', {scrollTrigger:'.touch__content', y: 45, duration: 1, ease: "slow(0.7, 0.7, false)"})
                gsap.from('.touch__content--text', {scrollTrigger:'.touch__content', y: -100, duration: 1, ease: "slow(0.7, 0.7, false)"})

                gsap.from('.technologies__list li:nth-child(2)', {scrollTrigger:'.technologies__list li:nth-child(2)', y: -80, duration: 2, ease: "slow(0.7, 0.7, false"})
                gsap.from('.technologies__list li:nth-child(3)', {scrollTrigger:'.technologies__list li:nth-child(2)', y: -80, duration: 2, ease: "slow(0.7, 0.7, false"})
                gsap.from('.technologies__bottom', {scrollTrigger:'.technologies__list:nth-child(2)', y: -160, duration: 2, ease: "slow(0.7, 0.7, false"})

                gsap.from('.mirage__list li:nth-child(1)', {scrollTrigger:'.mirage__list li:nth-child(1)', y: 60, duration: 1, ease: "slow(0.7, 0.7, false"})
                gsap.from('.mirage__list li:nth-child(2)', {scrollTrigger:'.mirage__list li:nth-child(2)', y: 60, duration: 1, ease: "slow(0.7, 0.7, false"})
                gsap.from('.mirage__list li:nth-child(3)', {scrollTrigger:'.mirage__list li:nth-child(3)', y: 60, duration: 1, ease: "slow(0.7, 0.7, false"})
                gsap.from('.mirage__list li:nth-child(4)', {scrollTrigger:'.mirage__list li:nth-child(4)', y: 60, duration: 1, ease: "slow(0.7, 0.7, false"})
                gsap.from('.mirage__list li:nth-child(5)', {scrollTrigger:'.mirage__list li:nth-child(5)', y: 60, duration: 1, ease: "slow(0.7, 0.7, false"})
                gsap.from('.mirage__list li:nth-child(6)', {scrollTrigger:'.mirage__list li:nth-child(6)', y: 60, duration: 1, ease: "slow(0.7, 0.7, false"})



                gsap.from('.community__list li:nth-child(1)', {scrollTrigger:'.community__list li:nth-child(2)', y: 30, duration: 1})
                gsap.from('.community__list li:nth-child(2)', {scrollTrigger:'.community__list li:nth-child(2)', y: -10, duration: 1})
                gsap.from('.community__list li:nth-child(3)', {scrollTrigger:'.community__list li:nth-child(2)', y: -50, duration: 1})

                gsap.from('.build__list--icon', {scrollTrigger:'.build__list--icon', y: 20, duration: 1, ease: "slow(0.7, 0.7, false"})
                gsap.from('.build__list--text', {scrollTrigger:'.build__list--text', y: -20, duration: 1, ease: "slow(0.7, 0.7, false"})

                gsap.from('.enterprise__list li:nth-child(1)', {scrollTrigger:'.enterprise__list li:nth-child(2)', y: 30, duration: 1})
                gsap.from('.enterprise__list li:nth-child(2)', {scrollTrigger:'.enterprise__list li:nth-child(2)', y: -10, duration: 1})
                gsap.from('.enterprise__list li:nth-child(3)', {scrollTrigger:'.enterprise__list li:nth-child(2)', y: -50, duration: 1})

                gsap.from('.savings__item--content strong', {scrollTrigger:'.savings__grid', y: 30, duration: 1, ease: "slow(0.7, 0.7, false"})
                gsap.from('.savings__item--content span', {scrollTrigger:'.savings__grid', y: -30, duration: 1, ease: "slow(0.7, 0.7, false"})

                gsap.from('.savings__header', {scrollTrigger:'.savings__grid', y: -30, duration: 2, ease: "slow(0.7, 0.7, false"})

                gsap.from('.target__item--elem', {scrollTrigger:'.target__item--elem', y: -50, duration: 1, ease: "slow(0.7, 0.7, false"})

                gsap.from('.touch', {scrollTrigger:'.touch', y: 100, duration: 1, ease: "slow(0.7, 0.7, false"})
                gsap.from('.mirage__bg', {scrollTrigger:'.mirage__text', y: -75, duration: 2, ease: "slow(0.7, 0.7, false"})


                gsap.from('.footer__wrap', {scrollTrigger:'.footer__wrap', y: -75, duration: 1, ease: "slow(0.7, 0.7, false"})


                gsap.from('.footer__pattern img', {y: -90, scrollTrigger:'.touch__form--text', duration: 1.5, ease: "slow(0.7, 0.7, false"})
                gsap.from('.build__pattern img', {y: -65, scrollTrigger:'.build__header', duration: 1.5, ease: "slow(0.7, 0.7, false"})
                // lines animation

                gsap.fromTo('.line-08', {height: '0'},{height: '162px', duration: 1, onComplete: () => {
                    gsap.fromTo(CSSRulePlugin.getRule('.line-08::before'), {width: 0, height: 0}, {width: '10px', height: '10px', duration: 0})
                    gsap.fromTo('.line-09', {width: '0', height: 0}, {width: '597px', height: '105px', duration: 0})
                
                     gsap.fromTo(CSSRulePlugin.getRule('.line-09::after'), {width: 0, height: 0}, {width: '7px', height: '7px', duration: 0})
                }})

                

               

                gsap.from('.line-06', {height: 0, duration: 3, ease: 'slow(0.7, 0.7, false)'})

                gsap.from('.line-03', {height: 0, duration: 3, ease: 'slow(0.7, 0.7, false)'})

                gsap.from('.line-01', {height: 0, duration: 3, ease: 'slow(0.7, 0.7, false)'})

                gsap.fromTo('.line-07', {width: '0px'}, {width: '413px', duration: 1, ease: 'slow(0.7, 0.7, false', scrollTrigger: '.technologies__list', onComplete: () => {
                    gsap.to(CSSRulePlugin.getRule('.line-07::after'), {height: '7px', width: '7px', duration: 0, ease: 'slow(0.7, 0.7, false)'})

                }})
                


                gsap.fromTo('.line-04', {width: '0'}, {width: '1296px', duration: 2, ease: 'slow(0.7, 0.7, false', scrollTrigger: '.technologies__bottom--title', onComplete: line5})

                gsap.to('.line-02', {width: '627px', duration: 1, ease: 'slow(0.7, 0.7, false', scrollTrigger: '.solution__text', onComplete: line2})

                gsap.to('.line-15', {height: '344px', duration: 1, ease: 'slow(0.7, 0.7, false', scrollTrigger: '.mirage__header', onComplete: line15})

                gsap.to('.line-11', {width: '368px', duration: 1, ease: 'slow(0.7, 0.7, false', scrollTrigger: '.mirage__header', onComplete: () => {
                    gsap.to(CSSRulePlugin.getRule('.line-11::after'), {height: '7px', width: '7px', duration: 0, ease: 'slow(0.7, 0.7, false)'})

                }})

                gsap.to('.line-13', {width: '753px', duration: 1, ease: 'slow(0.7, 0.7, false', scrollTrigger: '.mirage__header', onComplete: () => {
                    gsap.to('.line-13', {height: '30px', duration: .5, ease: 'slow(0.7, 0.7, false', scrollTrigger: '.mirage__header'})
                    gsap.to(CSSRulePlugin.getRule('.line-13::after'), {height: '7px', width: '7px', duration: 0, ease: 'slow(0.7, 0.7, false)'})
                }})

                gsap.to('.line-28', {height: '917px', duration: 1, ease: 'slow(0.7, 0.7, false', scrollTrigger: '.savings__item--third', onComplete: () => {
                    gsap.to('.line-30', {width: '1235px', duration: 1, onComplete: () => {
                        gsap.to('.line-31', {height: '108px', duration: 1});
                        gsap.to('.line-31', {width: '12px', duration: 1});
                        gsap.to(CSSRulePlugin.getRule('.line-31::after'), {height: '7px', width: '7px', duration: 0, ease: 'slow(0.7, 0.7, false)'})

                    }})
                    gsap.to(CSSRulePlugin.getRule('.line-27::after'), {height: '7px', width: '7px', duration: 0, ease: 'slow(0.7, 0.7, false)'})
                }})

                gsap.to('.line-32', {height: '1450px', duration: 3, ease: 'slow(0.7, 0.7, false', scrollTrigger: '.target__item--header', onComplete: () => {
                    gsap.to('.line-33', {width: '12px', duration: 1})
                    gsap.to(CSSRulePlugin.getRule('.line-33::after'), {height: '7px', width: '7px', duration: 0, ease: 'slow(0.7, 0.7, false)'})
                }})

                
                // lines animation end

            } else {

                
                document.getElementById('body').classList.remove('loading')
            }
        }
        state = newState;
    }
    document.addEventListener("resize", animations);
    setTimeout(animations, 300)
  
    

    var header = document.querySelector(".header");
    var logoWrapper = document.querySelector('.header__logo--image')
    var logoImg = document.querySelector('.header__logo--image img')
    var sticky = header.offsetTop;
    var logoWrapperHeight = logoWrapper.style.height
    function fixedHeader() {
            if (window.pageYOffset > sticky) {
                header.style.position = 'fixed';
                header.style.backgroundColor = '#360A6F';
                header.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)'
                header.style.padding = '6px 0';
                gsap.to(logoWrapper, {height: '40px', duration: .3, ease: 'ease'})
                if (innerWidth > 1024) {
                    logoImg.src = 'img/logo-menu.svg'
                    logoWrapper.style.display = 'block'
                } else {
                    logoWrapper.style.display = 'none'
                }
            } else {
                header.style.position = 'absolute'
                header.style.backgroundColor = 'transparent'
                header.style.padding = '46px 0'
                logoImg.src = 'img/logo.svg'
                logoWrapper.style.display = 'block'
                gsap.to(logoWrapper, {height: logoWrapperHeight, duration: .3, ease: 'ease'})
                header.style.boxShadow = 'none'
            }
    }

    window.onscroll = () => fixedHeader();
    window.addEventListener("resize", fixedHeader)



    function line5 () {
        gsap.to('.line-05', {height: '175px', duration: .5, ease: 'slow(0.7, 0.7, false)', onComplete: () => {gsap.to('.line-05', {width: '15px', duration: 0.5,  ease: 'slow(0.7, 0.7, false)'})
        gsap.to('.line-04', {height: '15px', duration: .5, ease: 'slow(0.7, 0.7, false)'})
    }})
        gsap.to(CSSRulePlugin.getRule('.line-05::after'), {width: '7px', height: '7px'})
    }

    function line2() {
        gsap.to('.line-02', {height: '150px', duration: 1, ease: 'slow(0.7, 0.7, false)'})
        gsap.to(CSSRulePlugin.getRule('.line-10::after'), {width: '7px', height: '7px'})
        gsap.to(CSSRulePlugin.getRule('.line-10::before'), {width: '22px', duration: 1})
        gsap.to('.line-10', {height: '1216px', duration: 2, ease: 'slow(0.7, 0.7, false'})
        
    }
    function line15() {
        gsap.to(CSSRulePlugin.getRule('.line-15::before'), {width: '45px', duration: .5})
        gsap.to(CSSRulePlugin.getRule('.line-15::after'), {width: '7px', height: '7px'})
    }



    var formButton = document.getElementById('form-submit');

    formButton.addEventListener('click', () => {
        console.log('111')
        document.querySelector('.modal').style.transform = 'scale(1)'
    })

    document.querySelector('.close-btn').addEventListener('click', () => {
        document.querySelector('.modal').style.transform = 'scale(0)'
    })


});
