"use client";

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbarblock = () => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Navigation handlers
    const handleNavigation = (path) => {
        router.push(path);
    };

    const navItems = [
        {
            name: "Dashboard",
            link: "/dashboard",
            onClick: () => handleNavigation("/dashboard")
        },
        {
            name: "Courses",
            link: "/courses",
            onClick: () => handleNavigation("/courses")
        },
        {
            name: "Training",
            link: "/training",
            onClick: () => handleNavigation("/training")
        },
        {
            name: "About us",
            link: "/about-us",
            onClick: () => handleNavigation("/about-us")
        }
    ];

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems 
                        items={navItems} 
                        onItemClick={(item) => {
                            if (item.onClick) {
                                item.onClick();
                            }
                        }}
                    />
                    <div className="flex items-center gap-4">
                        <NavbarButton variant="secondary">
                            Level-10
                        </NavbarButton>
                        <NavbarButton variant="gradient" className={'rounded-4xl w-9 h-9 flex justify-center items-center'}>
                            Al
                        </NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <button
                                key={`mobile-link-${idx}`}
                                onClick={() => {
                                    if (item.onClick) {
                                        item.onClick();
                                    }
                                    setIsMobileMenuOpen(false);
                                }}
                                className="relative text-neutral-600 dark:text-neutral-300 text-left w-full"
                            >
                                <span className="block">{item.name}</span>
                            </button>
                        ))}

                        <div className="flex w-full flex-col gap-4">
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="secondary"
                                className="w-full"
                            >
                                Login
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Book a call
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}

export default Navbarblock;