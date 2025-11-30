import { NavLink } from "@/app/constants/types";
import Link from "next/link";

export interface SubMenuProps {
    items: NavLink[];
}

export function SubMenu({ items }: SubMenuProps) {
    return (
        <div className="absolute top-full left-0 bg-[#FDF3E7] shadow-lg rounded-md py-2 z-20 min-w-[200px] border border-[#F07E2D]/20">
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-[#F07E2D] hover:bg-[#F07E2D]/10 transition-colors duration-200"
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
}
