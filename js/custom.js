new fullpage('#content', {
    scrollOverflow: false,
    css3: false,
    afterLoad: (origin, destination, direction) => {
        destination.index === 0 && mainVisualTimelime();
    },
});

function mainVisualTimelime() {
    const tl = gsap.timeline();

    const fn = document.querySelectorAll('.m>div');

    fn.forEach((navi, num) => {
        tl.to(`#v0${num + 1}`, {
            motionPath: {
                path: `#p0${num + 1}`,
                align: `#p0${num + 1}`,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,

            },
            duration: 3,
            delay: 0.5 * num,
        })
    })




}