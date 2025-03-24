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
              <div className="bg-white p-6 rounded-xl mt-8">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Why Does This Happen?</h3>
                <p className="text-[#666666]">
                  During normal cell division (meiosis), chromosomes separate to form reproductive cells with the correct number of chromosomes. In Edwards Syndrome, nondisjunction occurs when chromosome 18 fails to separate properly. This results in a reproductive cell with an extra copy of chromosome 18, which is then passed to the developing embryo. This genetic mechanism is similar to other trisomy conditions but affects different chromosomes.
                </p>
              </div>
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

        {/* Diagnosis and Prognosis Section - New */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-4 mb-6">
              <FaStethoscope className="text-[#4ECDC4] text-3xl" />
              <h2 className="text-3xl font-light text-[#1a1a1a]">Diagnosis and Prognosis</h2>
            </div>
            <div className="space-y-6 text-[#666666] text-lg leading-relaxed">
              <p>
                Edwards Syndrome can be diagnosed during pregnancy through screening and diagnostic tests. Initial screening may include maternal serum screening, non-invasive prenatal testing (NIPT), and ultrasound examinations that might reveal characteristic features.
              </p>
              <p>
                Definitive prenatal diagnosis requires invasive procedures such as chorionic villus sampling (CVS) or amniocentesis, which can confirm the presence of the extra chromosome through karyotyping, FISH, or chromosomal microarray analysis.
              </p>
              <p>
                The prognosis for babies with Edwards Syndrome varies based on several factors:
              </p>
              <ul className="space-y-4 list-disc pl-6">
                <li>Approximately 50% of babies with full Trisomy 18 do not survive beyond the first week</li>
                <li>About 5-10% of children with full Trisomy 18 survive beyond their first year</li>
                <li>Individuals with mosaic or partial Trisomy 18 may have better outcomes, with some living into their teens or twenties</li>
                <li>The severity of cardiac and respiratory issues significantly impacts survival</li>
              </ul>
              <div className="bg-white p-6 rounded-xl mt-8">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Signs That May Lead to Diagnosis</h3>
                <p className="text-[#666666] mb-4">
                  During pregnancy, several ultrasound markers may raise suspicion of Edwards Syndrome, including:
                </p>
                <ul className="space-y-2 text-[#666666]">
                  <li>• Intrauterine growth restriction</li>
                  <li>• Polyhydramnios (excess amniotic fluid)</li>
                  <li>• Abnormalities of the heart, brain, or other organs</li>
                  <li>• Clenched fists visible on ultrasound</li>
                  <li>• Single umbilical artery (instead of two)</li>
                </ul>
                <p className="text-[#666666] mt-4">
                  After birth, the diagnosis is typically confirmed through a blood test that analyzes chromosomes (karyotype) to identify the extra chromosome 18.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}