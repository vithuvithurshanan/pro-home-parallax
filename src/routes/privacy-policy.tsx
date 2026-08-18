import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | All Pro Home Improvements" },
      { name: "description", content: "Privacy Policy for All Pro Home Improvements." }
    ]
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="font-sans text-brand-secondary selection:bg-brand-primary/30 min-h-screen bg-brand-muted pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 bg-white p-8 md:p-16 border border-brand-secondary/10 shadow-sm">
        <span className="text-sm font-bold text-brand-primary uppercase tracking-widest block mb-2">Legal Documentation</span>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4 text-brand-secondary">Privacy Policy</h1>
        <p className="text-sm text-brand-secondary/60 mb-8 border-b border-brand-secondary/10 pb-4">
          Effective Date: 19 January 2025 | Last Updated: 9 July 2026
        </p>

        <div className="prose max-w-none space-y-8 text-brand-secondary/80 leading-relaxed">
          <p>
            All Pro Home Improvements ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following categories of personal information when you contact us, request a quote, submit a web form, or use our services:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full name</li>
              <li>Mailing or service address / postcode</li>
              <li>Email address</li>
              <li>Phone number (including mobile number)</li>
              <li>Service request details and project descriptions</li>
              <li>Communication history and preferences</li>
            </ul>
          </section>

          <section className="bg-brand-muted/50 p-6 border-l-4 border-brand-primary">
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">2. SMS / Text Message Communications</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-brand-secondary mb-1">2a. How We Collect Your Mobile Number</h3>
                <p>We collect your mobile phone number when you voluntarily provide it through our website contact forms, phone calls, or other direct communication channels. By providing your mobile number and opting in via our contact form, you expressly consent to receive SMS (text message) communications from All Pro Home Improvements.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-brand-secondary mb-1">2b. Types of Messages We Send</h3>
                <p>By opting in, you may receive text messages from All Pro Home Improvements, including:</p>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Free quote confirmations and appointment reminders</li>
                  <li>Project status updates and scheduling notifications</li>
                  <li>Customer support and follow-up communications</li>
                  <li>Seasonal service announcements related to our home improvement and contracting services</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-brand-secondary mb-1">2c. Message Frequency</h3>
                <p>Message frequency varies based on your interactions with us, ongoing service needs, and active enquiries. You may receive up to 4–8 messages per month depending on your service activity.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-brand-secondary mb-1">2d. Message & Data Rates</h3>
                <p>Standard SMS rates may apply depending on your mobile carrier and tariff. All Pro Home Improvements is not responsible for any charges incurred from your mobile network provider.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-brand-secondary mb-1">2e. How to Opt Out (STOP)</h3>
                <p>You may cancel SMS messages at any time by replying STOP to any text message you receive from us. After opting out, you will receive one final confirmation message and will no longer receive SMS communications from All Pro Home Improvements unless you re-enrol.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-brand-secondary mb-1">2f. How to Get Help (HELP)</h3>
                <p>For help with our SMS communications, reply HELP to any message, or contact us directly at:</p>
                <ul className="list-none pl-0 mt-1 space-y-1">
                  <li>Phone: <a href="tel:716-710-0002" className="text-brand-primary hover:underline">716-710-0002</a></li>
                  <li>Email: <a href="mailto:allprohomebuffalo@gmail.com" className="text-brand-primary hover:underline">allprohomebuffalo@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">3. Mobile Information & SMS Consent — No Third-Party Sharing</h2>
            <p className="mb-2">
              No mobile information (including your mobile phone number and SMS opt-in consent data) will be shared with third parties or affiliates for marketing or promotional purposes.
            </p>
            <p>
              All other categories of personal data exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">4. How We Use Your Information</h2>
            <p className="mb-2">We use the personal information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and manage home improvement and contracting services</li>
              <li>Respond to enquiries and service requests</li>
              <li>Schedule appointments and send reminders</li>
              <li>Send service-related communications (with your consent)</li>
              <li>Improve our website and service quality</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to improve website functionality, analyse traffic, and enhance user experience. Cookies do not store sensitive personal information. By continuing to use this website you consent to our use of essential cookies. Analytics cookies are only used with your explicit consent via our cookie consent banner.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">6. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical security measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">7. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, or as required by applicable law. Quote request data is retained for a maximum of 2 years from submission. When your data is no longer needed, we securely delete or anonymise it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">8. Your Privacy Rights</h2>
            <p className="mb-2">Under UK GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal data.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (including your mobile number and any SMS consent record).</li>
              <li><strong>Opt-Out of SMS:</strong> Reply STOP to any text message at any time.</li>
              <li><strong>Restriction:</strong> Request that we restrict processing of your personal data in certain circumstances.</li>
              <li><strong>Portability:</strong> Request your data in a structured, machine-readable format.</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at <a href="mailto:allprohomebuffalo@gmail.com" className="text-brand-primary hover:underline">allprohomebuffalo@gmail.com</a> or call <a href="tel:716-710-0002" className="text-brand-primary hover:underline">716-710-0002</a>. You also have the right to lodge a complaint with the <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Information Commissioner's Office (ICO)</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-brand-secondary mb-3">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised "Last Updated" date. Continued use of our website or services after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section className="bg-brand-muted p-6 border border-brand-secondary/10">
            <h2 className="font-display text-xl font-bold text-brand-secondary mb-3">10. Contact Information</h2>
            <p className="mb-1">If you have questions or concerns about this Privacy Policy, please contact us:</p>
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
