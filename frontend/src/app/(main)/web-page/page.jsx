import React from 'react'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Code, Globe, Layers, Zap } from 'lucide-react'

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-[#3B82F6] pb-2">{children}</h2>
)

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-[#3B82F6] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const ProcessStep = ({ number, title, description }) => (
  <div className="flex items-start mb-6">
    <div className="bg-[#3B82F6] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
)

export default function WebDevelopment() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-[#3B82F6] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Web Development Expertise</h1>
          <p className="text-xl max-w-2xl">Driving success through dynamic websites with QuickFinds</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <SectionTitle>Our Web Development Services</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code size={32} />}
              title="Custom Website Development"
              description="Tailored web applications designed to meet your specific business needs and user requirements."
            />
            <FeatureCard
              icon={<Layers size={32} />}
              title="Responsive UI/UX Design"
              description="Intuitive and engaging user interfaces that provide seamless experiences across all devices and screen sizes."
            />
            <FeatureCard
              icon={<Zap size={32} />}
              title="Performance Optimization"
              description="Ensuring your website loads quickly and runs smoothly, enhancing user experience and SEO rankings."
            />
          </div>
        </section>

        <section className="mb-20">
          <SectionTitle>Technologies We Use</SectionTitle>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "React", "Next.js", "Node.js", "Express", "MongoDB",
                "Tailwind CSS", "TypeScript", "GraphQL", "AWS", "Docker"
              ].map((tech, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle size={20} className="text-[#3B82F6] mr-2" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <SectionTitle>Our Development Process</SectionTitle>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ProcessStep
              number={1}
              title="Consultation & Strategy"
              description="We start by understanding your unique challenges and goals, mapping out a clear path forward for your web project."
            />
            <ProcessStep
              number={2}
              title="Design & Prototyping"
              description="Creating interactive prototypes to visualize the solution before full-scale development begins, ensuring alignment with your vision."
            />
            <ProcessStep
              number={3}
              title="Development & Coding"
              description="Our expert team brings your website to life using the latest web development frameworks and best practices."
            />
            <ProcessStep
              number={4}
              title="Testing & Quality Assurance"
              description="Rigorous testing across multiple devices and browsers to ensure performance, security, and usability."
            />
            <ProcessStep
              number={5}
              title="Launch & Ongoing Support"
              description="We handle the deployment process and provide continuous support to keep your website running smoothly and up-to-date."
            />
          </div>
        </section>

        <section className="mb-20">
          <SectionTitle>Why Choose QuickFinds for Web Development?</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Expertise</h3>
              <ul className="space-y-2">
                {[
                  "Years of web development experience",
                  "Skilled in the latest web technologies",
                  "Focus on scalable and maintainable code",
                  "Commitment to delivering high-quality solutions"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle size={20} className="text-[#3B82F6] mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src="/web1.jpeg"
                alt="Web Development Workspace"
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#3B82F6] text-white p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dynamic Website?</h2>
          <p className="text-xl mb-8">Let&apos;s create something remarkable together. Get in touch with us today to start your web development journey!</p>
          <a href='/#Contact Us' className="bg-white text-[#3B82F6] font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center">
            Get Started
            <ArrowRight className="ml-2" />
          </a>
        </section>
      </main>
    </div>
  )
}