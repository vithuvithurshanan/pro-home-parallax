import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | All Pro Home Improvements" },
      { name: "description", content: "Terms and Conditions for All Pro Home Improvements." }
    ]
  }),
  component: TermsConditions,
});

function TermsConditions() {
  return (
    <div className="font-sans text-brand-secondary selection:bg-brand-primary/30 min-h-screen bg-brand-muted pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 bg-white p-8 md:p-16 border border-brand-secondary/10 shadow-sm">
        <span className="text-sm font-bold text-brand-primary uppercase tracking-widest block mb-2">Legal Documentation</span>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4 text-brand-secondary">Terms & Conditions</h1>
        <p className="text-sm text-brand-secondary/60 mb-8 border-b border-brand-secondary/10 pb-4">
          Effective Date: 19 January 2025 | Last Updated: 9 July 2026
        </p>

        <div className="prose max-w-none space-y-8 text-brand-secondary/80 leading-relaxed">
          <p>
            Welcome to All Pro Home Improvements. By accessing this website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
          </p>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">1. Business Identity</h2>
            <p>
              These Terms and Conditions govern your use of the services provided by All Pro Home Improvements, located at 9950 County Rd, Clarence, Buffalo, NY 14032. Contact: <a href="tel:716-710-0002" className="text-brand-primary hover:underline">716-710-0002</a> | <a href="mailto:allprohomebuffalo@gmail.com" className="text-brand-primary hover:underline">allprohomebuffalo@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">2. Age Requirement (18+)</h2>
            <p>
              By using this website or engaging our services, you confirm that you are at least 18 years of age. Our services and any SMS communications are not directed to individuals under 18.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">3. Terminology</h2>
            <p>
              "Client," "You," and "Your" refers to the person using this website. "The Company," "We," "Our," and "Us" refers to All Pro Home Improvements.
            </p>
          </section>

          <section className="bg-brand-muted/50 p-6 border-l-4 border-brand-primary">
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">4. SMS Messaging Terms of Service</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-brand-secondary mb-1">4a. Programme Description & Message Types</h3>
                <p>By providing your phone number via our contact forms and opting in, you agree to receive text messages from All Pro Home Improvements. Messages may include:</p>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Free quote confirmations and scheduling notifications</li>
                  <li>Appointment reminders and project status updates</li>
                  <li>Customer support and service follow-up communications</li>
                  <li>Seasonal service announcements related to our home improvement and contracting services</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-brand-secondary mb-1">4b. Message Frequency</h3>
                <p>Message frequency varies based on your service activity and interactions with us. You may receive up to 4–8 messages per month. Frequency may increase during active service periods.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-brand-secondary mb-1">4c. Message & Data Rates</h3>
                <p>Standard SMS rates may apply for messages sent to you from us and from you to us. Charges are determined by your mobile network provider and your individual tariff. All Pro Home Improvements is not responsible for any carrier charges.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-brand-secondary mb-1">4d. How to Opt Out (STOP)</h3>
                <p>You can opt out of receiving SMS messages at any time by replying STOP to any message we send. After opting out, you will receive a one-time confirmation message and will no longer receive SMS messages from us unless you re-enrol.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-brand-secondary mb-1">4e. How to Get Help (HELP)</h3>
                <p>For help with our SMS programme, reply HELP to any message or contact us:</p>
                <ul className="list-none pl-0 mt-1 space-y-1">
                  <li>Phone: <a href="tel:716-710-0002" className="text-brand-primary hover:underline">716-710-0002</a></li>
                  <li>Email: <a href="mailto:allprohomebuffalo@gmail.com" className="text-brand-primary hover:underline">allprohomebuffalo@gmail.com</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-brand-secondary mb-1">4f. Network Liability Disclaimer</h3>
                <p>Mobile networks are not liable for delayed or undelivered messages. All Pro Home Improvements cannot guarantee delivery of SMS messages. Delivery may be subject to your mobile network's capability and coverage area.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">5. Cookies</h2>
            <p>
              We use cookies to improve user experience and website functionality. Essential cookies are used to remember your preferences. Analytics cookies are only set with your explicit consent. See our <Link to="/privacy-policy" className="text-brand-primary hover:underline font-semibold">Privacy Policy</Link> for more details.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">6. Intellectual Property & Licence</h2>
            <p>
              Unless otherwise stated, All Pro Home Improvements owns the intellectual property rights for all content on this website. You may not copy, reproduce, republish, sell, or redistribute any material without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">7. User Content</h2>
            <p>
              All Pro Home Improvements reserves the right to monitor and remove any user-generated content submitted to our platforms that is inappropriate, offensive, or in breach of these terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">8. Content Liability</h2>
            <p>
              We are not responsible for content that appears on external websites linking to ours. You agree to defend and protect All Pro Home Improvements against any claims arising from your website or digital properties that link to us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">9. Disclaimer</h2>
            <p>
              To the maximum extent permitted by applicable law, All Pro Home Improvements excludes all warranties, representations, and conditions relating to our website and services. We are not liable for any loss or damage (including, without limitation, loss of business, profits, or revenue) arising from use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">10. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised "Last Updated" date. Continued use of our website or services constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="bg-brand-muted p-6 border border-brand-secondary/10">
            <h2 className="font-display text-xl font-bold text-brand-secondary mb-3">11. Contact Information</h2>
            <p className="mb-1">For questions about these Terms and Conditions, please contact us:</p>
            <ul className="list-none pl-0 space-y-1">
              <li><strong>Company:</strong> All Pro Home Improvements</li>
              <li><strong>Address:</strong> 9950 County Rd, Clarence, Buffalo, NY 14032</li>
              <li><strong>Phone:</strong> <a href="tel:716-710-0002" className="text-brand-primary hover:underline">716-710-0002</a></li>
              <li><strong>Email:</strong> <a href="mailto:allprohomebuffalo@gmail.com" className="text-brand-primary hover:underline">allprohomebuffalo@gmail.com</a></li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-secondary/10 text-center">
          <Link to="/" className="text-brand-primary font-bold uppercase tracking-wider text-sm hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
