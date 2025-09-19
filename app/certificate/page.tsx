'use client';

import { useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import { certificatesData } from '@/data/certificates';
import Image from 'next/image';

export default function CertificatePage() {
  const [selectedCertificate, setSelectedCertificate] = useState(certificatesData[0]);
  const [filter, setFilter] = useState('all');

  // Filter certificates based on issuer
  const filteredCertificates = filter === 'all' 
    ? certificatesData 
    : certificatesData.filter(cert => cert.issuer.toLowerCase().includes(filter));

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      
      <main className="flex-grow pt-24">
        {/* Page Title */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center">My Certificates</h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-4">
            
            {/* Filter Controls */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-[#2AF5D2] text-black'
                    : 'bg-black text-gray-200 border border-[#078f7a] hover:bg-[#078f7a]'
                }`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'coursera'
                    ? 'bg-[#2AF5D2] text-black'
                    : 'bg-black text-gray-200 border border-[#078f7a] hover:bg-[#078f7a]'
                }`}
                onClick={() => setFilter('coursera')}
              >
                Coursera
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'aws'
                    ? 'bg-[#2AF5D2] text-black'
                    : 'bg-black text-gray-200 border border-[#078f7a] hover:bg-[#078f7a]'
                }`}
                onClick={() => setFilter('aws')}
              >
                AWS
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'udemy'
                    ? 'bg-[#2AF5D2] text-black'
                    : 'bg-black text-gray-200 border border-[#078f7a] hover:bg-[#078f7a]'
                }`}
                onClick={() => setFilter('udemy')}
              >
                Udemy
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'hackerrank'
                    ? 'bg-[#2AF5D2] text-black'
                    : 'bg-black text-gray-200 border border-[#078f7a] hover:bg-[#078f7a]'
                }`}
                onClick={() => setFilter('hackerrank')}
              >
                HackerRank
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Certificates Grid */}
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCertificates.map((cert) => (
                    <div 
                      key={cert.id} 
                      className={`bg-black rounded-xl shadow-md overflow-hidden border cursor-pointer transition-all ${
                        selectedCertificate.id === cert.id 
                          ? 'ring-2 ring-[#2AF5D2] border-[#2AF5D2]' 
                          : 'border-[#078f7a] hover:border-[#18c9a8]'
                      }`}
                      onClick={() => setSelectedCertificate(cert)}
                    >
                      <div className="h-48 overflow-hidden">
                        <Image 
                          src={cert.image} 
                          alt={cert.title} 
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                        <p className="text-[#2AF5D2] font-medium mb-2">{cert.issuer}</p>
                        <p className="text-sm text-gray-400">{cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate Detail */}
              <div className="lg:w-1/3">
                <div className="bg-black rounded-xl shadow-md p-6 border border-[#078f7a] sticky top-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Certificate Details</h3>
                  
                  {selectedCertificate && (
                    <>
                      <div className="mb-6">
                        <Image 
                          src={selectedCertificate.image} 
                          alt={selectedCertificate.title} 
                          width={400}
                          height={300}
                          className="w-full rounded-lg"
                        />
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-2">{selectedCertificate.title}</h4>
                      <p className="text-[#2AF5D2] font-medium mb-3">{selectedCertificate.issuer}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Issue Date:</span>
                          <span className="font-medium">{selectedCertificate.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Credential ID:</span>
                          <span className="font-medium">{selectedCertificate.credentialId}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6">{selectedCertificate.description}</p>
                      
                      <a 
                        href={selectedCertificate.link} 
                        className="inline-block w-full text-center px-4 py-2 bg-[#2AF5D2] text-black rounded-lg hover:bg-[#18c9a8] transition-colors"
                      >
                        View Credential
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        </main>

      <Footer />
    </div>
  );
}