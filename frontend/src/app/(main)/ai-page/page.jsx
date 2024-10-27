'use client'
import React from 'react'
import Image from 'next/image'
import { Robot } from 'lucide-react';

import { ArrowRight, CheckCircle, Brain, Database, ChartBar } from 'lucide-react'

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-[#6D28D9] pb-2">{children}</h2>
)

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-[#6D28D9] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const ProcessStep = ({ number, title, description }) => (
  <div className="flex items-start mb-6">
    <div className="bg-[#6D28D9] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
)

export default function AIDevelopment() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-[#6D28D9] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Artificial Intelligence Expertise</h1>
          <p className="text-xl max-w-2xl">Empowering intelligent solutions for a better tomorrow with QuickFinds</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <SectionTitle>Our AI Development Services</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain size={32} />}
              title="Machine Learning & Deep Learning"
              description="Develop predictive models and intelligent systems using TensorFlow, PyTorch, and scikit-learn."
            />
            <FeatureCard
               icon={<svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-robot"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M12 2v2" /><path d="M9 12v9" /><path d="M15 12v9" /><path d="M5 16l4 -2" /><path d="M15 14l4 2" /><path d="M9 18h6" /><path d="M10 8v.01" /><path d="M14 8v.01" /></svg>}
              title="Natural Language Processing"
              description="Create systems that understand and generate human language using NLTK, spaCy, and Hugging Face."
            />
            <FeatureCard
              icon={<Database size={32} />}
              title="Computer Vision"
              description="Implement visual data analysis and interpretation using OpenCV and TensorFlow for object detection and image classification."
            />
          </div>
        </section>

        <section className="mb-20">
          <SectionTitle>Technologies We Use</SectionTitle>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "TensorFlow", "PyTorch", "scikit-learn", "NLTK", "spaCy",
                "Hugging Face", "OpenCV", "Pandas", "NumPy", "Keras"
              ].map((tech, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle size={20} className="text-[#6D28D9] mr-2" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <SectionTitle>Our AI Development Process</SectionTitle>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ProcessStep
              number={1}
              title="Consultation & Strategy"
              description="We engage in comprehensive discussions to understand your specific challenges and objectives, crafting a clear AI strategy."
            />
            <ProcessStep
              number={2}
              title="Data Collection & Preparation"
              description="Gathering and preprocessing relevant data to ensure quality and relevance for effective model training and implementation."
            />
            <ProcessStep
              number={3}
              title="Model Development"
              description="Our data scientists and engineers collaborate to build, train, and validate machine learning models tailored to your needs."
            />
            <ProcessStep
              number={4}
              title="Integration & Deployment"
              description="Seamlessly integrating AI solutions into your existing systems, ensuring smooth functionality and user experience."
            />
            <ProcessStep
              number={5}
              title="Monitoring & Optimization"
              description="Continuous performance monitoring and refinement of models based on real-world data and feedback for optimal results."
            />
          </div>
        </section>

        <section className="mb-20">
          <SectionTitle>Industries We Serve</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ChartBar size={32} />}
              title="E-commerce"
              description="Enhancing personalization through recommendation systems and dynamic pricing strategies."
            />
            <FeatureCard
              icon={<ChartBar size={32} />}
              title="Healthcare"
              description="Developing predictive analytics tools for patient diagnosis and treatment planning."
            />
            <FeatureCard
              icon={<ChartBar size={32} />}
              title="Finance"
              description="Implementing fraud detection systems and risk assessment models to enhance security."
            />
          </div>
        </section>

        <section className="mb-20">
          <SectionTitle>Why Choose QuickFinds for AI Development?</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Expertise</h3>
              <ul className="space-y-2">
                {[
                  "Innovative AI solutions",
                  "Tailored approach for your business",
                  "Experienced AI engineers",
                  "Cost-effective excellence",
                  "Ongoing support and optimization"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle size={20} className="text-[#6D28D9] mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src="/ai1.jpg"
                alt="AI Interaction"
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#6D28D9] text-white p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Embrace the Future with AI?</h2>
          <p className="text-xl mb-8">Let QuickFinds lead you into the future of innovation with intelligent AI solutions that drive growth and enhance user experiences.</p>
          <a href='/#Contact Us' className="bg-white text-[#6D28D9] font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center">
            Get Started
            <ArrowRight className="ml-2" />
          </a>
        </section>
      </main>
    </div>
  )
}