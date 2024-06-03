/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image';
import HeroSection from './HeroSection';

export default function HomePage() {

  const test = "Web Developer"
  return (
    <main className="min-h-screen flex  flex-col">
      <HeroSection />
      <div className='w-full h-screen'>
          jsryh
      </div>
    </main>
  );
}
