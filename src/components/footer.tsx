"use client"

export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] py-8 border-t border-gray-100">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center">
        <p className="text-[#666666] mb-2">
          Educational Resource for Biology Class Project
        </p>
        <p className="text-[#666666] mb-4">
          American School of Kosovo
        </p>
        <div className="text-sm text-[#666666]">
          <p>Created by: Ruhan Pacolli</p>
          <p className="mt-1">© 2025 Biology Class Project</p>
        </div>
        <div className="mt-4 text-xs text-[#666666]">
          <p>This website was created as an educational resource for a biology class project.</p>
          <p>All medical information should be verified with healthcare professionals.</p>
        </div>
      </div>
    </div>
  </footer>
  );
}