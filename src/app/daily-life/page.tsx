"use client";

import { motion } from "framer-motion";
import { 
  FaHome,
  FaHeart,
  FaCalendarAlt,
  FaGamepad
} from "react-icons/fa";
import Image from "next/image";

export default function DailyLife() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16 max-w-6xl pt-24 md:pt-28">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-light text-[#1a1a1a] mb-6 tracking-tight">
            Daily Life with Edwards Syndrome
          </h1>
          <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto font-light">
            Understanding the Day-to-Day Experiences and Coping Strategies
          </p>
        </motion.div>

        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            <p className="text-[#666666] text-lg leading-relaxed mb-6">
              Living with Edwards Syndrome presents unique challenges that affect daily routines and activities. Each individual&apos;s experience is different, and families develop personalized approaches to manage daily life and ensure comfort and care.
            </p>
            <p className="text-[#666666] text-lg leading-relaxed">
              Understanding these daily experiences helps create better support systems and improve quality of life for individuals with Edwards Syndrome.
            </p>
          </div>
        </motion.section>

        {/* Image Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/awareness-ribbon.jpg"
                alt="Edwards Syndrome Awareness"
                fill
                className="object-cover bg-white"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                Supporting individuals with Edwards Syndrome
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/clinical-features-detailed.jpg"
                alt="Daily care and support needs"
                fill
                className="object-contain bg-white"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                Understanding daily care needs
              </div>
            </div>
          </div>
        </motion.section>

        {/* Daily Routine Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="bg-[#f8f9fa] rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <FaCalendarAlt className="text-[#FF6B6B] text-3xl" />
              <h2 className="text-3xl font-light text-[#1a1a1a]">Daily Routines</h2>
            </div>
            <p className="text-[#666666] text-lg leading-relaxed mb-8">
              A typical day involves carefully structured routines to address various needs:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Morning Care</h3>
                <ul className="space-y-3 text-[#666666]">
                  <li>• Gentle awakening and positioning</li>
                  <li>• Medication administration</li>
                  <li>• Feeding and nutrition care</li>
                  <li>• Personal hygiene assistance</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Daytime Activities</h3>
                <ul className="space-y-3 text-[#666666]">
                  <li>• Therapy sessions</li>
                  <li>• Rest periods</li>
                  <li>• Sensory activities</li>
                  <li>• Social interactions</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Comfort and Care Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-4 mb-4">
              <FaHeart className="text-[#4ECDC4] text-3xl" />
              <h2 className="text-3xl font-light text-[#1a1a1a]">Comfort and Care Strategies</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-[#FF6B6B] pl-4">
                  <h3 className="text-xl font-light mb-2">Physical Comfort</h3>
                  <ul className="space-y-2 text-[#666666]">
                    <li>• Proper positioning techniques</li>
                    <li>• Temperature regulation</li>
                    <li>• Gentle movement exercises</li>
                    <li>• Comfort holding positions</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-[#4ECDC4] pl-4">
                  <h3 className="text-xl font-light mb-2">Sensory Support</h3>
                  <ul className="space-y-2 text-[#666666]">
                    <li>• Calming environments</li>
                    <li>• Gentle music and sounds</li>
                    <li>• Soft lighting options</li>
                    <li>• Tactile stimulation</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-[#6C5CE7] pl-4">
                  <h3 className="text-xl font-light mb-2">Emotional Support</h3>
                  <ul className="space-y-2 text-[#666666]">
                    <li>• Regular interaction</li>
                    <li>• Familiar voices</li>
                    <li>• Gentle touch</li>
                    <li>• Consistent caregivers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Medical Care Imagery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/cardiac-imaging.jpg"
                alt="Medical care and monitoring"
                fill
                className="object-contain bg-white"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                Regular medical monitoring and care
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/genetic-testing.jpg"
                alt="Genetic testing and monitoring"
                fill
                className="object-contain bg-white"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                Ongoing medical assessment and care
              </div>
            </div>
          </div>
        </motion.section>

        {/* Activities and Engagement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className="bg-[#f8f9fa] rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <FaGamepad className="text-[#6C5CE7] text-3xl" />
              <h2 className="text-3xl font-light text-[#1a1a1a]">Activities and Engagement</h2>
            </div>
            <p className="text-[#666666] text-lg leading-relaxed mb-8">
              Engaging in appropriate activities helps promote development and enjoyment:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Sensory Activities</h3>
                <ul className="space-y-3 text-[#666666]">
                  <li>• Light and shadow play</li>
                  <li>• Music and sound activities</li>
                  <li>• Texture exploration</li>
                  <li>• Water therapy (when appropriate)</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Social Interaction</h3>
                <ul className="space-y-3 text-[#666666]">
                  <li>• Family bonding time</li>
                  <li>• Gentle play sessions</li>
                  <li>• Story time</li>
                  <li>• Music sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Adapting Environment Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-4 mb-4">
              <FaHome className="text-[#FF6B6B] text-3xl" />
              <h2 className="text-3xl font-light text-[#1a1a1a]">Creating Supportive Environments</h2>
            </div>
            <div className="space-y-8">
              <div className="bg-[#f8f9fa] p-6 rounded-xl">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Home Adaptations</h3>
                <ul className="space-y-3 text-[#666666]">
                  <li>• Specialized bedding and positioning equipment</li>
                  <li>• Temperature-controlled environments</li>
                  <li>• Proper lighting arrangements</li>
                  <li>• Easy access to medical supplies</li>
                </ul>
              </div>
              <div className="bg-[#f8f9fa] p-6 rounded-xl">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Safety Considerations</h3>
                <ul className="space-y-3 text-[#666666]">
                  <li>• Monitoring equipment setup</li>
                  <li>• Emergency response plans</li>
                  <li>• Safe positioning tools</li>
                  <li>• Medical equipment organization</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Educational Note */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">Educational Project Notice</h2>
            <p className="text-[#666666] max-w-2xl mx-auto mb-4">
              This information about daily life with Edwards Syndrome is part of an educational project. Each individual&apos;s experience is unique, and care approaches should be personalized under professional guidance.
            </p>
            <p className="text-[#666666] max-w-2xl mx-auto">
              For specific advice about daily care and management, please consult with healthcare providers who can provide personalized recommendations.
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
} 