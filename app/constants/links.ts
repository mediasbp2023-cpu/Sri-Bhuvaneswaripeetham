import { NavLinks } from "./types";

export const navLinks: NavLinks = {
    topRow: [
        { href: "/contact", label: "Contact" },
        { href: "/arjita-sevas", label: "Arjita Sevas" },
        { href: "/volunteer", label: "Volunteer" },
        { href: "/contribute", label: "Donate" },
    ],
    bottomRow: [
        {
            href: "/alayam",
            label: "Alayam",
            submenu: [
                { href: "/alayam/peetha-aavirbhavam", label: "Peetha Aavirbhavam" },
                { href: "/alayam/naga-kshetram", label: "Naga Kshetram" },
                { href: "/alayam/sb-aalayam", label: "SB Aalayam" },
                { href: "/alayam/rudra-mandalam", label: "Rudra Mandalam" },
                { href: "/alayam/upa-aalayas", label: "Upa Aalayas" },
                { href: "/alayam/annual-calendar", label: "Annual Calendar" },
            ],
        },
        {
            href: "/aashramam",
            label: "Ashramam",
            submenu: [
                { href: "/ashramam/history", label: "History" },
                { href: "/ashramam/album", label: "Album" },
            ],
        },
        {
            href: "/anugraham",
            label: "Anugraham",
            submenu: [
                { href: "/anugraham/dharmaraksha", label: "Dharmaraksha" },
                { href: "/anugraham/adhyatmik", label: "Adhyatmik" },
                { href: "/anugraham/samajik", label: "Samajik" },
            ],
        },
        {
            href: "/guru-parampara",
            label: "Guru Parampara",
            submenu: [
                { href: "/guru-parampara/scss", label: "SCSS" },
                { href: "/guru-parampara/ssbs", label: "SSBS" },
                { href: "/guru-parampara/scbs", label: "SCBS" },
                { href: "/guru-parampara/sadhanandha", label: "sadhanandha" },
                { href: "/guru-parampara/spbs", label: "SPBS" },
                { href: "/guru-parampara/ssbs2", label: "SSBS2" },
                { href: "/guru-parampara/skbs", label: "SKBS" },
            ],
        },
        {
            href: "/mahapadayatra",
            label: "Mahapadayatra",
            submenu: [
                { href: "/mahapadayatra", label: "Overview" },
                { href: "/mahapadayatra/timeline", label: "Timeline" },
                { href: "/mahapadayatra/stories", label: "Stories" },
                { href: "/mahapadayatra/gallery", label: "Gallery" },
            ],
        },
        {
            href: "/services",
            label: "Services",
            submenu: [
                { href: "/services/arsha-vigyana", label: "ArshaVigyana" },
                { href: "/services/dharma-seva", label: "DharmaSeva" },
                { href: "/services/dharma-radham", label: "DharmaRadham" },
                { href: "/services/annadana-seva", label: "Annadana Seva" },
                { href: "/services/samajika-seva", label: "SamajikaSeva" },
                { href: "/services/swasthya-seva", label: "Swasthya Seva" },
                { href: "/services/yatri-nivas-yati-nivas", label: "Yatri Nivas / Yati Nivas" },
                { href: "/services/library", label: "Library" },
                { href: "/services/csr-info", label: "CSR Info" },
            ],
        },
        {
            href: "/temple-renovation",
            label: "Temple Renovation",
            submenu: [
                { href: "/temple-renovation", label: "Overview" },
                { href: "/temple-renovation/projects", label: "Projects" },
                { href: "/donate", label: "Donate" },
                { href: "/temple-renovation/progress", label: "Progress" },
            ],
        },
        {
            href: "/media",
            label: "Media",
            submenu: [
                { href: "/media/resources", label: "Resources" },
                { href: "/media/album", label: "Album" },
                { href: "/media/publications", label: "Publications" },
                { href: "/media/links", label: "Links" },
            ],
        },
        {
            href: "/collaborations",
            label: "Collaborations",
            submenu: [
                { href: "/collaborations/ttd", label: "TTD" },
                { href: "/collaborations/ssf", label: "SSF" },
            ],
        },
    ],
};

