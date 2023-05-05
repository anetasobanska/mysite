document.addEventListener('DOMContentLoaded', function () {

        gsap.from(
          '.list-item', {
          opacity: 0,
          scale: 0,
          ease: 'back',
          delay: 1,
          stagger: {
            amount: 0.3,
          },
        })

        gsap.from(
          '.about div',
          1.8,
          {
            x: 1900,
            duration: 1,
            ease: 'back',
            stagger: 0.1,
          }
        )

        gsap.from(
          '.project-description.one',
          {
            x: 1900,
            duration: 1.5,
            ease: 'bounce',
            scrollTrigger: {
              trigger: '.project-description.one',
              start: 'top center',
            }
          }
        )

        gsap.from(
          '.image_wrapper.one',
          {
            x: -1900,
            duration: 1.5,
            ease: 'bounce',
            scrollTrigger: {
              trigger: '.project-description.one',
              start: 'top center',
            }
          }
        )

        gsap.from(
          '.project-description.two',
          {
            x: -1900,
            duration: 1.5,
            ease: 'bounce',
            scrollTrigger: {
              trigger: '.project-description.two',
              start: 'top center',
            }
          }
        )

        gsap.from(
          '.image_wrapper.two',
          {
            x: 1900,
            duration: 1.5,
            ease: 'bounce',
            scrollTrigger: {
              trigger: '.project-description.two',
              start: 'top center',
            }
          }
        )

        gsap.from(
          '.project-description.three',
          {
            x: 1900,
            duration: 1.5,
            ease: 'bounce',
            scrollTrigger: {
              trigger: '.project-description.three',
              start: 'top center',
            }
          }
        )

        gsap.from(
          '.image_wrapper.three',
          {
            x: -1900,
            duration: 1.5,
            ease: 'bounce',
            scrollTrigger: {
              trigger: '.project-description.three',
              start: 'top center',
            }
          }
        )

        
})