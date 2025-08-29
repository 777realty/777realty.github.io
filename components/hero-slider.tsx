'use client';

import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HeroSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Slider {...settings} className="w-full">
        <div className="flex flex-col justify-center items-center px-4 text-center">
          <h5 className="text-hero-h5 font-light uppercase tracking-widest mb-4">Welcome to</h5>
          <h1 className="text-hero-h1-xs sm:text-hero-h1-sm md:text-hero-h1 font-light mb-4">
            777 Real Estate<br className="sm:hidden" /> & Investments
          </h1>
          <p className="text-sm italic">Search our exclusive listings.</p>
          <div className="space-y-1 mt-4">
            <p className="text-sm">Dawn Olson | CA DRE# 00944676</p>
            <p className="text-sm">Jeff Biebuyck | CA DRE# 01883921</p>
          </div>
          <Link
            href="/search"
            className="inline-block border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors mt-6"
          >
            SEARCH ALL HOMES
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center px-4 text-center">
          <h5 className="text-hero-h5 font-light uppercase tracking-widest mb-4">Premier Real Estate Agents in</h5>
          <h1 className="text-hero-h1-xs sm:text-hero-h1-sm md:text-hero-h1 font-light max-w-3xl mb-4">
            Greater Los Angeles<br />
            San Fernando & Conejo<br />
            Ojai Valley & Malibu
          </h1>
          <p className="text-sm italic">Search our exclusive listings.</p>
          <div className="space-y-1 mt-4">
            <p className="text-sm">Dawn Olson | CA DRE# 00944676</p>
            <p className="text-sm">Jeff Biebuyck | CA DRE# 01883921</p>
          </div>
          <Link
            href="/search"
            className="inline-block border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors mt-6"
          >
            SEARCH ALL HOMES
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center px-4 text-center">
          <h5 className="text-hero-h5 font-light uppercase tracking-widest mb-4">Technology + Marketing =</h5>
          <h1 className="text-hero-h1-xs sm:text-hero-h1-sm md:text-hero-h1 font-light mb-4">Results</h1>
          <p className="text-sm italic">Search our exclusive listings.</p>
          <div className="space-y-1 mt-4">
            <p className="text-sm">Dawn Olson | CA DRE# 00944676</p>
            <p className="text-sm">Jeff Biebuyck | CA DRE# 01883921</p>
          </div>
          <Link
            href="/search"
            className="inline-block border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors mt-6"
          >
            SEARCH ALL HOMES
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center px-4 text-center">
          <h5 className="text-hero-h5 font-light uppercase tracking-widest mb-4">Global</h5>
          <h1 className="text-hero-h1-xs sm:text-hero-h1-sm md:text-hero-h1 font-light mb-4">Marketing Expertise</h1>
          <p className="text-sm italic">Search our exclusive listings.</p>
          <div className="space-y-1 mt-4">
            <p className="text-sm">Dawn Olson | CA DRE# 00944676</p>
            <p className="text-sm">Jeff Biebuyck | CA DRE# 01883921</p>
          </div>
          <Link
            href="/search"
            className="inline-block border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors mt-6"
          >
            SEARCH ALL HOMES
          </Link>
        </div>
      </Slider>
    </div>
  );
}
