gsap.registerPlugin(ScrollTrigger);

let mountains = gsap.timeline();

ScrollTrigger.create({
    animation: mountains,
    start: "top top",
    end: "bottom bottom",
    trigger: ".scrollBox",
    scrub: 1,
});
mountains.fromTo(
    "#mn6",
    {
        y: 100,
    },
    {
        y: 0,
    },
    0
);
mountains.fromTo(
    "#mn5",
    {
        y: 120,
    },
    {
        y: 0,
    },
    0
);
mountains.fromTo(
    "#mn4",
    {
        y: 140,
    },
    {
        y: 0,
    },
    0
);
mountains.fromTo(
    "#mn3",
    {
        y: 160,
    },
    {
        y: 0,
    },
    0
);
mountains.fromTo(
    "#mn2",
    {
        y: 180,
    },
    {
        y: 0,
    },
    0
);
mountains.fromTo(
    "#mn1",
    {
        y: 200,
    },
    {
        y: 0,
    },
    0
);

mountains.fromTo(
    ".wave",
    {
        y: 200,
    },
    {
        y: 0,
    },
    0
);

mountains.fromTo(".bird", { x: 250, y: 250 }, { x: 0, y: 0 }, 0);

mountains.fromTo("#sun", { y: -200 }, { y: 0 }, 0);
