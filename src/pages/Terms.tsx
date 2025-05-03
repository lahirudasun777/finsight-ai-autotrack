
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: May 3, 2025</p>
          
          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Welcome to Finthory ("we," "our," or "us"). By accessing or using our financial management application and services (the "Service"), you agree to be bound by these Terms of Service (the "Terms").
              </p>
              <p className="mt-4">
                Please read these Terms carefully before using our Service. If you do not agree to these Terms, you must not access or use Finthory.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
              <p>
                You must be at least 18 years old to use the Service. By using Finthory, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>You are at least 18 years of age;</li>
                <li>You have the legal capacity to enter into these Terms;</li>
                <li>You are not prohibited from using the Service under applicable laws;</li>
                <li>You will use the Service only for lawful purposes and in accordance with these Terms.</li>
              </ul>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">3. Account Registration and Security</h2>
              <p>
                To use certain features of our Service, you may need to create an account. When you register for an account, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide accurate, current, and complete information;</li>
                <li>Maintain and promptly update your account information;</li>
                <li>Keep your account credentials confidential;</li>
                <li>Be responsible for all activities that occur under your account;</li>
                <li>Notify us immediately if you discover or suspect any security breach related to your account.</li>
              </ul>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">4. Use of Services</h2>
              <p>
                Finthory provides financial tracking and management tools. By using our Service, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Use the Service only for your personal, non-commercial use unless otherwise specified in a separate agreement;</li>
                <li>Provide accurate financial information when using the Service;</li>
                <li>Not rely solely on Finthory for critical financial decisions without independent verification;</li>
                <li>Not use the Service for any illegal or unauthorized purpose;</li>
                <li>Comply with all applicable laws and regulations when using the Service.</li>
              </ul>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">5. Prohibited Activities</h2>
              <p>
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Use the Service in any way that could disable, overburden, damage, or impair the Service;</li>
                <li>Use any robot, spider, crawler, scraper, or other automated means to access the Service;</li>
                <li>Attempt to reverse engineer any portion of the Service;</li>
                <li>Try to gain unauthorized access to any part of the Service, other accounts, or systems connected to the Service;</li>
                <li>Use the Service to infringe on the intellectual property rights of others;</li>
                <li>Use the Service to transmit malware, viruses, or any code of a destructive nature;</li>
                <li>Resell, duplicate, copy, or exploit any part of the Service without express written permission.</li>
              </ul>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">6. Service Availability and Updates</h2>
              <p>
                We strive to provide uninterrupted Service, but we do not guarantee that the Service will be available at all times. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Temporarily suspend the Service for maintenance, updates, or other reasons;</li>
                <li>Modify or discontinue any feature of the Service at our sole discretion;</li>
                <li>Update the Service to improve functionality, address security issues, or comply with legal requirements;</li>
                <li>Limit or restrict access to certain features based on account type or subscription status.</li>
              </ul>
              <p className="mt-4">
                We will make reasonable efforts to provide notice of significant changes or planned downtime, but cannot guarantee advance notification in all circumstances.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
              <p>
                All rights, title, and interest in and to the Service, including all content, features, functionality, design, code, and materials (collectively, "Content"), are owned by Finthory or our licensors and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="mt-4">
                You are granted a limited, non-exclusive, non-transferable license to use the Service for its intended purpose. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any Content;</li>
                <li>Use any illustrations, photographs, video sequences, or audio sequences from the Service without our express written consent;</li>
                <li>Delete or alter any copyright, trademark, or other proprietary notices from the Content.</li>
              </ul>
              <p className="mt-4">
                The Finthory name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Finthory or its affiliates. You may not use such marks without our prior written permission.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Finthory is not responsible for any financial losses or damages resulting from your use of or inability to use the Service;</li>
                <li>We provide the Service "as is" and "as available" without warranties of any kind, either express or implied;</li>
                <li>We do not guarantee the accuracy, timeliness, completeness, or reliability of any financial information provided through the Service;</li>
                <li>We are not responsible for any decisions you make based on information provided by the Service;</li>
                <li>Our liability for any claim arising from or related to these Terms or the Service is limited to the amount you have paid for the Service in the 12 months preceding the claim.</li>
              </ul>
              <p className="mt-4">
                Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for certain damages. Accordingly, some of the above limitations and disclaimers may not apply to you.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including if you breach these Terms.
              </p>
              <p className="mt-4">
                You may terminate your account at any time by following the instructions on the Service or by contacting us.
              </p>
              <p className="mt-4">
                Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Your right to use the Service will immediately cease;</li>
                <li>We may delete your account information and content, although some information may be retained as required by law;</li>
                <li>Sections of these Terms that by their nature should survive termination will remain in effect.</li>
              </ul>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
              <p>
                We may revise these Terms from time to time. We will provide notice of any material changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Posting an update on our website;</li>
                <li>Sending an email to the address associated with your account;</li>
                <li>Displaying a notice when you access the Service.</li>
              </ul>
              <p className="mt-4">
                Your continued use of the Service after any changes to the Terms constitutes your acceptance of the revised Terms.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the state of California, without regard to its conflict of law principles.
              </p>
              <p className="mt-4">
                Any dispute arising from or relating to these Terms or your use of the Service shall be resolved exclusively through final and binding arbitration, under the rules of the American Arbitration Association, in San Francisco, California. You agree to submit to the personal jurisdiction of the courts located within San Francisco County, California for the purpose of enforcing these Terms.
              </p>
              <p className="mt-4">
                Any claim must be brought on an individual basis and not as part of a class action.
              </p>
            </section>
            
            <Separator className="my-6" />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p>
                If you have any questions or concerns about these Terms, please contact us:
              </p>
              <div className="mt-4">
                <p><strong>By email:</strong> legal@finthory.com</p>
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

export default Terms;
