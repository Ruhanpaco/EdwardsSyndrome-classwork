"use client";

import { motion } from "framer-motion";
import { 
  FaHandHoldingHeart, 
  FaUserMd, 
  FaBookMedical
} from "react-icons/fa";

export default function Support() {
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
            Living with Edwards Syndrome
          </h1>
          <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto font-light">
            Understanding Care, Treatments, and Support for Individuals with Trisomy 18
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
              While there is no known cure for Edwards Syndrome, various treatments and therapies can help manage symptoms and improve quality of life. The type and intensity of treatment often depends on the specific form of trisomy (full, mosaic, or partial) and the individual's unique medical needs.
            </p>
            <p className="text-[#666666] text-lg leading-relaxed">
              Treatment approaches are highly individualized and focus on providing supportive care to address specific health challenges and enhance daily living.
            </p>
          </div>
        </motion.section>

        {/* Treatments and Therapies Section - New */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="bg-[#f8f9fa] rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <FaUserMd className="text-[#FF6B6B] text-3xl" />
              <h2 className="text-3xl font-light text-[#1a1a1a]">Common Treatments & Therapies</h2>
            </div>
            <p className="text-[#666666] text-lg leading-relaxed mb-8">
              Treatment for Edwards Syndrome typically involves a comprehensive approach addressing various medical conditions and developmental needs:
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Cardiac Care</h3>
                <ul className="space-y-3 text-[#666666]">
                  <li>• Management of heart defects (present in &gt;90% of cases)</li>
                  <li>• Treatment for ventricular septal defects</li>
                  <li>• Monitoring of patent ductus arteriosus</li>
                  <li>• Cardiac medication when appropriate</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Respiratory Support</h3>
                <ul className="space-y-3 text-[#666666]">
                  <li>• Oxygen therapy for breathing difficulties</li>
                  <li>• Management of apnea episodes</li>
                  <li>• Treatment for pulmonary hypertension</li>
                  <li>• Support for underdeveloped lungs</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Gastrointestinal Care</h3>
                <ul className="space-y-3 text-[#666666]">
                  <li>• Feeding assistance and nutritional support</li>
                  <li>• Management of reflux and feeding difficulties</li>
                  <li>• Treatment for gastrointestinal abnormalities</li>
                  <li>• Special feeding techniques and equipment</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Neurological Care</h3>
                <ul className="space-y-3 text-[#666666]">
                  <li>• Seizure management with medications</li>
                  <li>• Monitoring of muscle tone issues</li>
                  <li>• Treatment for developmental delays</li>
                  <li>• Support for neurological complications</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Specialized Therapies Section - New */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-4 mb-4">
              <FaHandHoldingHeart className="text-[#4ECDC4] text-3xl" />
              <h2 className="text-3xl font-light text-[#1a1a1a]">Specialized Therapy Programs</h2>
            </div>
            <p className="text-[#666666] text-lg leading-relaxed mb-8">
              Various therapeutic interventions can help improve function and quality of life:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-[#FF6B6B] pl-4">
                  <h3 className="text-xl font-light mb-2">Physical Therapy</h3>
                  <p className="text-[#666666]">
                    • Muscle strength improvement
                    • Movement assistance
                    • Position training
                    • Motor skill development
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-[#4ECDC4] pl-4">
                  <h3 className="text-xl font-light mb-2">Occupational Therapy</h3>
                  <p className="text-[#666666]">
                    • Daily living skills
                    • Adaptive techniques
                    • Sensory integration
                    • Activity modification
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-[#6C5CE7] pl-4">
                  <h3 className="text-xl font-light mb-2">Speech & Feeding Therapy</h3>
                  <p className="text-[#666666]">
                    • Feeding techniques
                    • Swallowing support
                    • Communication aids
                    • Oral motor exercises
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Daily Care Management Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className="bg-[#f8f9fa] rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <FaBookMedical className="text-[#6C5CE7] text-3xl" />
              <h2 className="text-3xl font-light text-[#1a1a1a]">Daily Care Management</h2>
            </div>
            <p className="text-[#666666] text-lg leading-relaxed mb-8">
              Effective daily care involves coordinating various treatments and therapies while ensuring comfort:
            </p>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Regular Monitoring</h3>
                <ul className="space-y-3 text-[#666666]">
                  <li>• Vital signs and oxygen levels</li>
                  <li>• Feeding and nutrition intake</li>
                  <li>• Growth and development tracking</li>
                  <li>• Response to treatments</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Comfort Measures</h3>
                <ul className="space-y-3 text-[#666666]">
                  <li>• Pain management techniques</li>
                  <li>• Positioning and support</li>
                  <li>• Environmental adaptations</li>
                  <li>• Sleep positioning aids</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Educational Note */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">Educational Project Notice</h2>
            <p className="text-[#666666] max-w-2xl mx-auto mb-4">
              This information about treatments and therapies is part of an educational project about Edwards Syndrome. Treatment needs vary significantly between individuals, and all medical decisions should be made under professional guidance.
            </p>
            <p className="text-[#666666] max-w-2xl mx-auto">
              The information provided here is for educational purposes only. Always consult healthcare providers for specific medical advice and treatment plans.
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
} 