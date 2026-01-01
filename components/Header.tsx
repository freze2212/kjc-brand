"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Đóng modal menu khi nhấn ESC hoặc click ngoài overlay
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Click overlay to close
  const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm w-full">
      <nav className="w-full" aria-label="Main navigation">
        {/* Responsive padding: very little on mobile, normal on desktop */}
        <div className="flex items-center justify-between h-[84px] px-2 sm:px-4 lg:px-8 w-full lg:w-10/12 lg:mx-auto">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center flex-shrink-0 h-[84px]"
            aria-label="Trang chủ"
          >
            <Image
              src="/logo.webp"
              alt="KJC Logo"
              width={200}
              height={84}
              className="h-[56px] w-auto object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {NAV_ITEMS.map((item, index) => {
              const isActive = pathname === item.href;
              const isAfterBlog = index === 3; // Index của BLOG là 3
              
              return (
                <div key={item.href} className="flex items-center">
                  <Link
                    href={item.href}
                    className={`font-bold uppercase transition-colors duration-200 whitespace-nowrap px-2 ${
                      isActive
                        ? "text-[#ff8f00]"
                        : "text-[rgba(0,39,91,1)] hover:text-[#3B82F6]"
                    }`}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '122%',
                      letterSpacing: '-0.04em',
                      textTransform: 'uppercase',
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA Button - link to https://xx88a1.com */}
            <Link
              href="https://xx88a1.com"
              className="hidden lg:block flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/btn-join.webp"
                alt="Tham gia ngay"
                width={189}
                height={44}
                className="w-[189px] h-[44px] object-contain hover:opacity-90 transition-opacity duration-200"
              />
            </Link>
            {/* Mobile Menu Button - Navbar Image */}
            <button
              className="lg:hidden p-2 focus:outline-none transition-transform duration-200 hover:scale-105"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Image
                src="/navbar.webp"
                alt="Menu"
                width={40}
                height={40}
                className={`w-10 h-10 object-contain transition-opacity duration-200 ${
                  isMobileMenuOpen ? 'opacity-70' : 'opacity-100'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Modal */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-[999] flex items-start justify-end"
            style={{
              background: "rgba(13, 22, 33, 0.6)",
              backdropFilter: "blur(2px)"
            }}
            onClick={handleOverlayClick}
            aria-modal="true"
            role="dialog"
          >
            {/* Slide-in menu from right */}
            <div
              className="w-[86vw] max-w-[280px] sm:max-w-[392px] h-full bg-gradient-to-b from-[#FF861D] to-[#FF6B00] shadow-lg relative animate-[slideIn_0.3s_ease] flex flex-col"
              tabIndex={0}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/70 hover:bg-white transition duration-150 outline-none z-10"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Đóng menu"
                autoFocus
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M5 5L19 19M19 5L5 19" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <div className="flex flex-col pt-16 px-2 sm:px-4 flex-1">
                <div className="flex flex-col space-y-1">
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = pathname === item.href;
                    const isAfterBlog = index === 3;
                    
                    return (
                      <div key={item.href} className="relative">
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-6 py-4 font-bold uppercase rounded-lg transition-all duration-200 ${
                            isActive
                              ? "text-[#ff8f00] bg-white/20 shadow-md"
                              : "text-white hover:bg-white/15 hover:shadow-sm"
                          }`}
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            fontSize: '16px',
                            lineHeight: '122%',
                            letterSpacing: '-0.04em',
                            textTransform: 'uppercase',
                          }}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                        {/* Dashed line sau BLOG trong mobile */}
                        {isAfterBlog && (
                          <div className="mx-6 my-3 h-px border-t border-dashed border-white/30"></div>
                        )}
                      </div>
                    );
                  })}
                  {/* Mobile CTA Button */}
                  <div className="pt-4 mt-2">
                    {/* Gắn link khác cho mobile (mb) và pc */}
                    <a
                      href="https://53333.com"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block md:hidden"
                    >
                      <Image
                        src="/btn-join.webp"
                        alt="Tham gia ngay"
                        width={189}
                        height={44}
                        className="object-contain mx-auto"
                      />
                    </a>
                    <a
                      href="https://xx88a1.com"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block hidden md:block"
                    >
                      <Image
                        src="/btn-join.webp"
                        alt="Tham gia ngay"
                        width={189}
                        height={44}
                        className="object-contain mx-auto"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <style jsx global>{`
              @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0.4; }
                to { transform: translateX(0); opacity: 1; }
              }
            `}</style>
          </div>
        )}
      </nav>
    </header>
  );
}
