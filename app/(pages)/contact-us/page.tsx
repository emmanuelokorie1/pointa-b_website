"use client";

import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import FAQ from './FAQ';
import YourDeliveries from '../(Home)/YourDeliveries';
import Footer from '@/components/layouts/Footer';

export default function ContactUsPage() {
  return (
    <main className="bg-white">
      <ContactHero />
      <ContactForm />
      <FAQ />

      {/* Your Deliveries App Download Section */}
      <YourDeliveries />

      {/* Footer */}
      <Footer />
    </main>
  )
}