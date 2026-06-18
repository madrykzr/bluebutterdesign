"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/site";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close menus on navigation
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/5 bg-cream/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 py-3 md:h-28 md:px-6 md:py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Bluebutter Design, home">
          <Image
            src="/logo.png"
            alt="Bluebutter Design logo"
            width={260}
            height={72}
            priority
            className="h-12 w-auto object-contain md:h-14"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  aria-expanded={servicesOpen}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 font-heading text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-bluegrey-dark"
                      : "text-charcoal/80 hover:text-bluegrey-dark"
                  }`}
                >
                  {item.label}
                  <svg
                    className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full w-56 rounded-2xl border border-charcoal/5 bg-white p-2 shadow-lift"
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block rounded-xl px-4 py-2.5 text-sm transition-colors hover:bg-butter/30 ${
                              isActive(child.href)
                                ? "font-medium text-bluegrey-dark"
                                : "text-charcoal/80"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-4 py-2 font-heading text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-bluegrey-dark"
                      : "text-charcoal/80 hover:text-bluegrey-dark"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Right: WhatsApp + hamburger */}
        <div className="flex items-center gap-2">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-bluegrey px-4 py-2 font-heading text-sm font-medium text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-bluegrey-dark sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-butter/40 lg:hidden"
          >
            <div className="relative h-4 w-5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-0 block h-0.5 w-5 rounded bg-current"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute left-0 top-[7px] block h-0.5 w-5 rounded bg-current"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-[14px] block h-0.5 w-5 rounded bg-current"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-charcoal/5 bg-cream lg:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-xl px-4 py-3 font-heading font-medium ${
                      isActive(item.href) ? "bg-butter/30 text-bluegrey-dark" : "text-charcoal"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-4 space-y-1 border-l-2 border-butter pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block rounded-xl px-4 py-2.5 text-sm ${
                              isActive(child.href)
                                ? "font-medium text-bluegrey-dark"
                                : "text-charcoal/70"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-bluegrey px-4 py-3 font-heading font-medium text-white"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
