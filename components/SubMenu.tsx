import { NavLink } from "@/app/constants/types";
import Link from "next/link";

export interface SubMenuProps {
    items: NavLink[];
}

export function SubMenu({ items }: SubMenuProps) {
    return (
        <div className="absolute top-full left-0 bg-[#FFFFF0] shadow-lg rounded-md py-2 z-20 min-w-[200px] border border-[#FFD700]/20">
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-[#800000] hover:bg-[#FFD700]/10 transition-colors duration-200"
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
}
