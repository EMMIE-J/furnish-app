import { Handshake, HeadsetIcon, PenIcon, SofaIcon } from "lucide-react";
// import { heroBg } from "../assets";

const K = {
    NAVLINKS: [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about-us"
        },
        {
            name: "Collection",
            path: "/collection"
        },
        {
            name: "Blog",
            path: "/blog"
        },
        {
            name: "Contact",
            path: "/contact-us"
        },

    ],

    SERVICES: [

        {
            title: "Amazing Deals",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            icon: <Handshake />,
            bgColor: "#F5EBEB",
            iconBg: "#DB4557",
        },

        {
            title: "Quality Furniture",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            icon: <SofaIcon />,
            bgColor: "#DCEBDD",
            iconBg: "#DB4557",
        },

        {
            title: "Modern Design",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            icon: <PenIcon />,
            bgColor: "#F5EFD8",
            iconBg: "#DB4557",
        },

        {
            title: "Best Support",
            description: "Far far away, behind the word mountains, far from the countries Vokalia.",
            icon: <HeadsetIcon />,
            bgColor: "#D1B54A",
            iconBg: "#DB4557",
        },
    ],
    // ABOUT: [
    //     {
    //         text: "About Me",
    //         img: heroBg,
    //         width: 25%
    //     },

    //     {
    //         img: heroBg,
    //         width: 25%
    //     },
    // ]
};

export default K