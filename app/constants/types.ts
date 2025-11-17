export interface NavLink {
    href: string;
    label: string;
    submenu?: NavLink[];
}

export interface NavLinks {
    topRow: NavLink[];
    bottomRow: NavLink[];
}

export interface GalleryImage {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
}