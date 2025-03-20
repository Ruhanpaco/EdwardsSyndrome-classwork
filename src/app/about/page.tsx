"use client";

import { motion } from "framer-motion";
import { 
  FaDna, 
  FaHeartbeat, 
  FaBrain, 
  FaStethoscope, 
  FaMicroscope,
  FaLungs,
  FaBone,
  FaEye
} from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";
import Image from "next/image";

export default function About() {
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
            Edwards Syndrome
          </h1>
          <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto font-light">
            A Comprehensive Guide to Understanding Trisomy 18
          </p>
        </motion.div>

        {/* Genetic Basis Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="bg-[#f8f9fa] rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <FaDna className="text-[#FF6B6B] text-3xl" />
              <h2 className="text-3xl font-light text-[#1a1a1a]">What is the Genetic Basis?</h2>
            </div>
            <div className="space-y-6 text-[#666666] text-lg leading-relaxed">
              <p>
                Edwards syndrome occurs due to the presence of an extra copy of chromosome 18, resulting in three copies instead of the normal two. This condition, first identified by Edwards and colleagues in 1960, is the second most common autosomal trisomy after Down syndrome.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/assets/chromosome-18-detailed.jpg"
                    alt="Detailed view of chromosome 18"
                    fill
                    className="object-contain bg-white"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                    Detailed structure of chromosome 18
                  </div>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/assets/trisomy-18-formation.jpg"
                    alt="Formation of Trisomy 18"
                    fill
                    className="object-contain bg-white"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                    Formation process of Trisomy 18
                  </div>
                </div>
              </div>
              <p>
                The extra chromosome typically results from a random error during the formation of reproductive cells (eggs or sperm), a process called nondisjunction. This error is more common as maternal age increases.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8 bg-white p-6 rounded-xl">
                <div className="text-center">
                  <h3 className="font-medium text-[#1a1a1a] mb-2">Full Trisomy 18</h3>
                  <p className="text-sm">Occurs in 94-95% of cases. All cells contain three copies of chromosome 18.</p>
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-[#1a1a1a] mb-2">Mosaic Trisomy 18</h3>
                  <p className="text-sm">Found in 5-10% of cases. Some cells have three copies, others have two.</p>
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-[#1a1a1a] mb-2">Partial Trisomy 18</h3>
                  <p className="text-sm">Rare (2% of cases). Only a segment of chromosome 18 is present in three copies.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Chromosomal Abnormality Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-4 mb-6">
              <FaMicroscope className="text-[#4ECDC4] text-3xl" />
              <h2 className="text-3xl font-light text-[#1a1a1a]">How Does This Chromosomal Abnormality Occur?</h2>
            </div>
            <div className="space-y-6 text-[#666666] text-lg leading-relaxed">
              <p>
                The chromosomal abnormality typically occurs as a result of nondisjunction during cell division (meiosis). This means that chromosome pairs fail to separate properly during the formation of reproductive cells.
              </p>
              <ul className="space-y-4 list-disc pl-6">
                <li>Most cases are not inherited and occur as random events during egg or sperm cell formation</li>
                <li>The risk increases with maternal age</li>
                <li>The extra chromosome is usually of maternal origin</li>
                <li>In rare cases of partial trisomy 18, the condition can be inherited from a parent carrying a balanced translocation</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Primary Symptoms and Signs Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-[#f8f9fa] rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <FaStethoscope className="text-[#FF6B6B] text-3xl" />
              <h2 className="text-3xl font-light text-[#1a1a1a]">Primary Symptoms and Signs</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/assets/clinical-features-detailed.jpg"
                  alt="Detailed clinical features of Edwards Syndrome"
                  fill
                  className="object-contain bg-white"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                  Clinical features and characteristics
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/assets/organ-systems-affected.jpg"
                  alt="Organ systems affected by Edwards Syndrome"
                  fill
                  className="object-contain bg-white"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                  Major organ systems affected
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <FaHeartbeat className="text-[#FF6B6B] text-2xl" />
                    <h3 className="text-xl font-light text-[#1a1a1a]">Cardiovascular</h3>
                  </div>
                  <ul className="space-y-2 text-[#666666]">
                    <li>• Heart defects (present in &gt;90% of cases)</li>
                    <li>• Ventricular septal defects</li>
                    <li>• Patent ductus arteriosus</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <FaBrain className="text-[#4ECDC4] text-2xl" />
                    <h3 className="text-xl font-light text-[#1a1a1a]">Neurological</h3>
                  </div>
                  <ul className="space-y-2 text-[#666666]">
                    <li>• Small head size (microcephaly)</li>
                    <li>• Developmental delays</li>
                    <li>• Feeding difficulties</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <FaLungs className="text-[#6C5CE7] text-2xl" />
                    <h3 className="text-xl font-light text-[#1a1a1a]">Respiratory</h3>
                  </div>
                  <ul className="space-y-2 text-[#666666]">
                    <li>• Breathing difficulties</li>
                    <li>• Underdeveloped lungs</li>
                    <li>• Apnea episodes</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <FaBone className="text-[#FF6B6B] text-2xl" />
                    <h3 className="text-xl font-light text-[#1a1a1a]">Physical Features</h3>
                  </div>
                  <ul className="space-y-2 text-[#666666]">
                    <li>• Low birth weight</li>
                    <li>• Clenched fists with overlapping fingers</li>
                    <li>• Small jaw (micrognathia)</li>
                    <li>• Rocker-bottom feet</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <GiKidneys className="text-[#4ECDC4] text-2xl" />
                    <h3 className="text-xl font-light text-[#1a1a1a]">Internal Organs</h3>
                  </div>
                  <ul className="space-y-2 text-[#666666]">
                    <li>• Kidney malformations</li>
                    <li>• Gastrointestinal issues</li>
                    <li>• Feeding and digestive problems</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <FaEye className="text-[#6C5CE7] text-2xl" />
                    <h3 className="text-xl font-light text-[#1a1a1a]">Sensory</h3>
                  </div>
                  <ul className="space-y-2 text-[#666666]">
                    <li>• Vision abnormalities</li>
                    <li>• Hearing impairments</li>
                    <li>• Small, malformed ears</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>


      </main>
    </div>
  );
}