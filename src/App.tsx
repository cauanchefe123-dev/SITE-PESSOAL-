/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrainingPillarsSection } from './components/TrainingPillarsSection';
import { MarqueeRibbon } from './components/MarqueeRibbon';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { VideoModal } from './components/VideoModal';

import {
  initialProfile,
  bjjServices,
} from './data/bjjData';
import { ProfessorProfile, BJJService } from './types/bjj';

export default function App() {
  const [profile] = useState<ProfessorProfile>(initialProfile);
  const [selectedService, setSelectedService] = useState<BJJService | null>(null);
  const [bookingService, setBookingService] = useState<string>('Personal Fight VIP (Particular)');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleBookClass = (serviceTitle?: string) => {
    if (serviceTitle) {
      setBookingService(serviceTitle);
    }
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-emerald-600 selection:text-white">
      {/* Top Header */}
      <Header profile={profile} />

      {/* Main Sections */}
      <main className="flex-1 pb-16">
        {/* Hero */}
        <Hero
          profile={profile}
          onOpenBooking={() => handleBookClass('Personal Fight VIP (Particular)')}
          onOpenCurriculum={() => {}}
          onOpenVideo={() => setIsVideoOpen(true)}
        />

        {/* Training Pillars Section */}
        <TrainingPillarsSection
          profile={profile}
          onBookClass={handleBookClass}
        />

        {/* Marquee Banner */}
        <MarqueeRibbon />

        {/* About & Lineage */}
        <AboutSection
          profile={profile}
          onOpenCurriculum={() => setIsCurriculumOpen(true)}
        />

        {/* Services & Personal Fight */}
        <ServicesSection
          services={bjjServices}
          profile={profile}
          onSelectService={(service) => setSelectedService(service)}
          onBookClass={handleBookClass}
        />

        {/* FAQ */}
        <FaqSection profile={profile} />

        {/* Contact & Booking Form */}
        <ContactSection
          profile={profile}
          initialInterest={bookingService}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onOpenCurriculum={() => {}}
      />

      {/* Persistent Bottom Bar (Aula Particular & WhatsApp Direto) */}
      <MobileQuickBar
        profile={profile}
        onOpenBooking={() => handleBookClass('Personal Fight VIP (Particular)')}
      />

      {/* Modals */}
      <ServiceDetailModal
        service={selectedService}
        profile={profile}
        onClose={() => setSelectedService(null)}
        onBookClass={handleBookClass}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}
