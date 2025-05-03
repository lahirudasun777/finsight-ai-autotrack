
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: May 3, 2025</p>
          
          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                At Finthory ("we," "us," or "our"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our financial management application and services (the "Service").
              </p>
              <p>
                We encourage you to read this Privacy Policy carefully to understand our practices regarding your personal data. By accessing or using Finthory, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p>We collect several types of information from and about users of our Service:</p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information: Name, email address, password, and other information you provide during registration</li>
                <li>Financial information: Bank account details, transaction history, and financial goals</li>
                <li>Communication data: Email and SMS metadata (when permitted) to analyze financial notifications</li>
                <li>Device information: IP address, browser type, operating system, and device identifiers</li>
                <li>Usage data: How you interact with our app, features you use, and time spent on various sections</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Automatically Collected Information</h3>
              <p>
                When you use our Service, we automatically collect information about your device and how you interact with our platform using cookies, web beacons, and similar technologies. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Log data (IP address, browser type, pages visited, time and date of visit)</li>
                <li>Device information (hardware model, operating system, unique device identifiers)</li>
                <li>Location information (if permitted by you)</li>
              </ul>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and maintaining our Service</li>
                <li>Creating personalized financial insights and recommendations</li>
                <li>Analyzing transaction patterns to offer more relevant features</li>
                <li>Training our AI models to improve transaction categorization and financial advice</li>
                <li>Sending notifications about account activity and financial alerts</li>
                <li>Improving and developing new features for our Service</li>
                <li>Detecting and preventing fraudulent activity</li>
                <li>Communicating with you about updates, security alerts, and support messages</li>
              </ul>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
              <p className="mt-4">
                Your data is stored on secure servers and protected by encryption both in transit and at rest. We regularly review our information collection, storage, and processing practices to guard against unauthorized access.
              </p>
              <p className="mt-4">
                While we strive to use commercially acceptable means to protect your personal data, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p>
                Finthory may use third-party services to facilitate our Service, perform Service-related functions, or assist us in analyzing how our Service is used. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
              <p className="mt-4">
                We may use third-party services for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email and SMS processing (to extract financial information with your permission)</li>
                <li>Authentication services</li>
                <li>Cloud hosting and storage</li>
                <li>Analytics providers</li>
                <li>Customer support tools</li>
                <li>Payment processors</li>
              </ul>
              <p className="mt-4">
                Each third-party service has its own privacy policy addressing how they use such information.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Cookies and Similar Technologies</h2>
              <p>
                Finthory uses cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              <p className="mt-4">
                We use cookies for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keeping you signed in</li>
                <li>Understanding how you use our Service</li>
                <li>Remembering your preferences</li>
                <li>Improving the overall user experience</li>
              </ul>
              <p className="mt-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal data, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> You can request copies of your personal data</li>
                <li><strong>Rectification:</strong> You can request that we correct any information you believe is inaccurate</li>
                <li><strong>Erasure:</strong> You can request that we erase your personal data, under certain conditions</li>
                <li><strong>Restriction:</strong> You can request that we restrict the processing of your personal data</li>
                <li><strong>Data portability:</strong> You can request that we transfer your data to another organization or directly to you</li>
                <li><strong>Objection:</strong> You can object to our processing of your personal data</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us using the contact information provided below. We will respond to your request within the timeframe required by applicable law.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">GDPR Compliance</h2>
              <p>
                For users in the European Economic Area (EEA), we process your personal data in accordance with the General Data Protection Regulation (GDPR). We serve as the data controller for the personal information you provide to us.
              </p>
              <p className="mt-4">
                The legal bases we rely on for processing your information include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your consent</li>
                <li>Performance of a contract with you</li>
                <li>Compliance with our legal obligations</li>
                <li>Our legitimate interests (which do not override your fundamental rights and freedoms)</li>
              </ul>
              <p className="mt-4">
                If you are in the EEA and have any concerns about how we process your data, you have the right to lodge a complaint with your local data protection authority.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">CCPA Compliance</h2>
              <p>
                If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights regarding your personal information. This section describes your CCPA rights and explains how to exercise them.
              </p>
              <p className="mt-4">
                Under CCPA, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Know what personal information we collect about you</li>
                <li>Request deletion of your personal information</li>
                <li>Access your personal information</li>
                <li>Request that we do not sell your personal information (note: we do not sell your personal information)</li>
                <li>Non-discrimination for exercising your rights</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the top of this Privacy Policy.
              </p>
              <p className="mt-4">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4">
                <p><strong>By email:</strong> privacy@finthory.com</p>
                <p><strong>By mail:</strong> Finthory Inc., 123 Finance Street, Suite 100, San Francisco, CA 94104</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
