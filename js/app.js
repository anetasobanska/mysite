document.addEventListener('DOMContentLoaded', function () {

        gsap.from('.list-item', {
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
            duration: 0.8,
            ease: 'back',
            stagger: 0.1,
            // repeat: -1,
          },
          '-=1.5'
        )
})