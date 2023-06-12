const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const images = [
    { id: "8gVv6nxq6gY", name: 'IMG_4394.jpg', width: 2976 , height: 3479 },
    { id: "RkBTPqPEGDo", name: 'IMG_4396.jpg', width: 2811 , height: 2905 },
    { id: "Dhmn6ete6g8", name: 'IMG_4395.jpg', width: 3922 , height: 2902 },
    { id: "KG3TyFi0iTU", name: 'IMG_4398.jpg', width: 3918 , height: 2302 },
    { id: "Jztmx9yqjBw", name: 'IMG_4399.jpg', width: 3024 , height: 4032 },
    { id: "-heLWtuAN3c", name: 'IMG_4400.jpg', width: 4032 , height: 3024 },
    { id: "Yizrl9N_eDA", name: 'IMG_4397.jpg', width: 3843 , height: 2698 },
    { id: "xOigCUcFdA8", name: 'IMG_4401.jpg', width: 3778 , height: 2710 },
    { id: "ALrCdq-ui_Q", name: 'IMG_4405.jpg', width: 2978 , height: 3757 },
    { id: "twukN12EN7c", name: 'IMG_4409.jpg', width: 3866 , height: 2247 },
    { id: "9UjEyzA6pP4", name: 'IMG_4410.jpg', width: 2931 , height: 3262 },
    { id: "sEXGgun3ZiE", name: 'Screenshot1.png', width: 988 , height: 1640 },
    { id: "1azAjl8FTnU", name: 'IMG_4402.jpg', width: 2815 , height: 827 },
];

const photos = images.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: `https://etios-2014.s3.amazonaws.com/images/${photo.name}`,
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: `https://etios-2014.s3.amazonaws.com/images/${photo.name}`,
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
