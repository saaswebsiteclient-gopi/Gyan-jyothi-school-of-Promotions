import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DriverCalculator } from './components/DriverCalculator';
import { BookingForm } from './components/BookingForm';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkflowSection } from './components/WorkflowSection';
import { StoreSection } from './components/StoreSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { ConsultationType } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedConsultationType, setSelectedConsultationType] = useState<ConsultationType>('Numerology Consultation');
  const [selectedDob, setSelectedDob] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (type: ConsultationType) => {
    setSelectedConsultationType(type);
    scrollToSection('book-appointment');
  };

  const handleSelectNumberForBooking = (dob: string, driverNumber: number) => {
    setSelectedDob(dob);
    setSelectedConsultationType('Vedic Numerology');
    scrollToSection('book-appointment');
  };

  return (
    <div className="min-h-screen bg-[#07130e] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      {/* Main Header with HOME | ABOUT US | SERVICES | BOOK APPOINTMENT | STORE | CONTACT US */}
      <Header
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      <main className="flex-grow pb-14 sm:pb-0">
        {/* Hero Section with exact required headline: "Discover Your Numbers. Book Your Numerology Consultation." */}
        <section id="home">
          <Hero
            onBookClick={() => scrollToSection('book-appointment')}
            onExploreClick={() => scrollToSection('services')}
          />
        </section>

        {/* Interactive Vedic Driver & Conductor Number Calculator */}
        <DriverCalculator
          onSelectNumberForBooking={handleSelectNumberForBooking}
        />

        {/* Primary Appointment Booking Form (Highest Priority) */}
        <BookingForm
          initialType={selectedConsultationType}
          initialDob={selectedDob}
        />

        {/* About Gyan Jyothi School & Founder Gopinath D S */}
        <AboutSection
          onBookClick={() => scrollToSection('book-appointment')}
        />

        {/* Services Section with all 8 Consultation Offerings */}
        <ServicesSection
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* 4-Step Follow-Up Workflow */}
        <WorkflowSection />

        {/* 7 Sacred Items Store with Enquire on WhatsApp */}
        <StoreSection />

        {/* Contact Section & Owner Details */}
        <ContactSection
          onBookClick={() => scrollToSection('book-appointment')}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Persistent Floating Mobile Action Bar */}
      <FloatingMobileBar
        onBookClick={() => scrollToSection('book-appointment')}
      />
    </div>
  );
}
