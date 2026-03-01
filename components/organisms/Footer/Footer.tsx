'use client';

import React from 'react';
import { Logo } from '@/components/atoms/Logo';
import { FooterLink } from '@/components/atoms/FooterLink';
import { SocialIcon } from '@/components/atoms/SocialIcon';
import { FooterColumn } from '@/components/molecules/FooterColumn';
import { NewsletterForm } from '@/components/molecules/NewsletterForm';
import { Button } from '@/components/atoms/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3D4F5C] relative" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      {/* Wavy Top Border - Multiple flowing curves */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ transform: 'translateY(-99%)' }}>
        <svg
          className="w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="#3D4F5C"
          style={{ height: '80px', minHeight: '80px' }}
        >
          <path d="M0,60 Q360,20 720,60 T1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* CTA Section */}
      <div className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-14 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1900px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left max-w-2xl leading-tight px-2 sm:px-0">
              Partner with Hexaloop to build innovative digital solutions and grow your business.
            </h2>
            <div className="flex-shrink-0">
              <Button href="/hire" variant="primary">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-600"></div>
      </div>

      {/* Footer Content */}
      <div className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1900px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold">Hexaloop</h3>
              </div>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>© 2016-{new Date().getFullYear()} Hexaloop.</p>
                <p>All rights reserved.</p>
                <p className="text-xs text-gray-500 mt-2">9+ Years of Excellence | 100+ Projects | 100+ Clients</p>
              </div>
              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                <SocialIcon
                  href="#"
                  label="Twitter"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  }
                />
                <SocialIcon
                  href="#"
                  label="Facebook"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  }
                />
                <SocialIcon
                  href="#"
                  label="Dribbble"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                    </svg>
                  }
                />
                <SocialIcon
                  href="#"
                  label="Instagram"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  }
                />
                <SocialIcon
                  href="#"
                  label="YouTube"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  }
                />
              </div>
            </div>

            {/* Get in Touch Column */}
            <FooterColumn title="Get in Touch">
              <address className="space-y-3 text-gray-400 text-sm md:text-base not-italic" itemScope itemType="https://schema.org/PostalAddress">
                <p itemProp="streetAddress">309, Bansiwala Tower,</p>
                <p>Agrasen Square,</p>
                <p><span itemProp="addressLocality">Indore</span> (<span itemProp="addressRegion">M.P.</span>) <span itemProp="addressCountry">India</span> - <span itemProp="postalCode">452001</span></p>
                <p className="pt-3"><a href="mailto:work@hexaloop.com" className="hover:text-[#5EBEEB] transition-colors" itemProp="email">work@hexaloop.com</a></p>
                <p><a href="tel:+918871171445" className="hover:text-[#5EBEEB] transition-colors" itemProp="telephone">+91-887 117 1445</a></p>
              </address>
            </FooterColumn>

            {/* Learn More Column */}
            <FooterColumn title="Learn More">
              <nav aria-label="Footer navigation" className="space-y-2">
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/services">Our Services</FooterLink>
                <FooterLink href="/projects">Projects</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
                <FooterLink href="/hire">Hire Us</FooterLink>
              </nav>
            </FooterColumn>

            {/* Newsletter Column */}
            <FooterColumn title="Our Newsletter">
              <div className="space-y-4">
                <p className="text-gray-400 text-sm md:text-base">
                  Subscribe to our newsletter to get our news & deals delivered to you.
                </p>
                <NewsletterForm />
              </div>
            </FooterColumn>
          </div>
        </div>
      </div>
    </footer>
  );
};
