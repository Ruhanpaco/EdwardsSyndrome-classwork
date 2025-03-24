"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  FaDna, 
  FaSearch,
  FaUserMd
} from "react-icons/fa";

export default function Home() {
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
            Understanding Edwards Syndrome
          </h1>
          <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto font-light">
            Providing support, resources, and information for families affected by Trisomy 18
          </p>
        </motion.div>

        {/* Key Statistics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
              <FaDna className="text-[#FF6B6B] text-4xl mb-4" />
              <h3 className="text-2xl font-light mb-2">Second Most Common</h3>
              <p className="text-[#666666]">Autosomal trisomy after Down syndrome</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
              <FaSearch className="text-[#4ECDC4] text-4xl mb-4" />
              <h3 className="text-2xl font-light mb-2">1 in 5,000</h3>
              <p className="text-[#666666]">Live births affected worldwide</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
              <FaUserMd className="text-[#6C5CE7] text-4xl mb-4" />
              <h3 className="text-2xl font-light mb-2">Comprehensive Care</h3>
              <p className="text-[#666666]">Multidisciplinary medical support</p>
            </div>
          </div>
        </motion.section>

        {/* Quick Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-[#f8f9fa] rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-light text-[#1a1a1a] mb-8">What is Edwards Syndrome?</h2>
            <div className="space-y-6 text-[#666666] text-lg leading-relaxed">
              <p>
                Edwards syndrome (Trisomy 18) is a genetic condition caused by the presence of an extra copy of chromosome 18. First identified in 1960, it affects multiple systems of the body and requires specialized medical care and support.
              </p>
              <p>
                The prevalence varies globally, with estimates ranging from 1 in 3,600 to 1 in 10,000 live births. While approximately 1 in 2,500 pregnancies are affected, many result in miscarriage or stillbirth. The risk increases with maternal age, similar to other chromosomal disorders.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Types</h3>
                  <ul className="space-y-3">
                    <li>• Full Trisomy 18 (94-95% of cases)</li>
                    <li>• Mosaic Trisomy 18 (5-10% of cases)</li>
                    <li>• Partial Trisomy 18 (2% of cases)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Key Characteristics</h3>
                  <ul className="space-y-3">
                    <li>• Affects multiple organ systems</li>
                    <li>• Requires specialized medical care</li>
                    <li>• Varies in severity between individuals</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl mt-8">
                <h3 className="text-xl font-light mb-4 text-[#1a1a1a]">Understanding Edwards Syndrome</h3>
                <p className="text-[#666666] mb-4">
                  Edwards Syndrome occurs when cell division fails during the formation of reproductive cells, resulting in an extra copy of chromosome 18 in a person's cells. While most cases happen randomly, the risk increases with maternal age.
                </p>
                <p className="text-[#666666]">
                  Full Trisomy 18 affects every cell in the body, while Mosaic Trisomy 18 affects only some cells, potentially resulting in milder symptoms. In rare cases, Partial Trisomy 18 occurs when only a segment of chromosome 18 is duplicated, which may be inherited from a parent carrying a balanced translocation.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Image Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/chromosomal-comparison.jpg"
                alt="Karyotype showing three copies of chromosome 18"
                fill
                className="object-contain bg-white"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                Karyotype showing trisomy of chromosome 18
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/chromosome-18-structure.jpg"
                alt="Detailed structure of chromosome 18"
                fill
                className="object-contain bg-white"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                Structure of chromosome 18
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/clinical-features-detailed.jpg"
                alt="Common clinical features of Edwards Syndrome"
                fill
                className="object-contain bg-white"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                Clinical features of Edwards Syndrome
              </div>
            </div>
          </div>
        </motion.section>
      </main>

    </div>
  );
}
