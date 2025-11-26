'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Ourteam from "./Ourteam";
// ...existing code...

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-6 inset-x-0 max-w-6xl mx-auto px-4 z-40", className)}
    >
        <Menu setActive={setActive}>
            {/* Flex wrapper adds spacing between items; adjust gap-6 as needed */}
            <div className="flex items-center gap-9">
                <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home">
                </MenuItem>
                </Link>

                <Link href={"/about"}>
                <MenuItem setActive={setActive} active={active} item="About Us" />
                </Link>

                <Link href={"/our-team"}>
                <MenuItem setActive={setActive} active={active} item="Our Team" />
                </Link>

                <Link href={"/practice-areas"}>
                <MenuItem setActive={setActive} active={active} item="Practice Areas" />
                </Link>

                <Link href="/resources">
                <MenuItem setActive={setActive} active={active} item="Resources" />
                </Link>

                <Link href="/clients">
                <MenuItem setActive={setActive} active={active} item="Clients/Retainers" />
                </Link>

                <Link href="/retainers">
                <MenuItem setActive={setActive} active={active} item="Careers" />
                </Link>

                
                <Link href={"/contact"}>
                <MenuItem setActive={setActive} active={active} item="Contact Us">
                </MenuItem>
                </Link>
            </div>
        </Menu>
    </div>
  )
}

export default Navbar
