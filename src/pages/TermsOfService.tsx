import Layout from "@/components/layout/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">Last updated: March 26, 2026</p>

            <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>By accessing or using the Nexith AI Academy website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

            <h2 className="text-2xl font-semibold text-foreground">2. Services</h2>
            <p>Nexith AI Academy provides online AI education programs, including courses, workshops, and mentorship. We reserve the right to modify, suspend, or discontinue any part of our services at any time.</p>

            <h2 className="text-2xl font-semibold text-foreground">3. User Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information when creating an account.</p>

            <h2 className="text-2xl font-semibold text-foreground">4. Intellectual Property</h2>
            <p>All course content, materials, logos, and branding are the intellectual property of Nexith AI Academy. You may not reproduce, distribute, or create derivative works without written permission.</p>

            <h2 className="text-2xl font-semibold text-foreground">5. Payment & Refunds</h2>
            <p>Scholarship recipients receive free access to programs. For paid enrollments, fees are due before course commencement. Refund requests must be submitted within 7 days of enrollment and before completing more than 20% of the course.</p>

            <h2 className="text-2xl font-semibold text-foreground">6. Code of Conduct</h2>
            <p>Users must engage respectfully with instructors and peers. Harassment, plagiarism, or sharing of course materials without authorization will result in immediate account termination.</p>

            <h2 className="text-2xl font-semibold text-foreground">7. Limitation of Liability</h2>
            <p>Nexith AI Academy shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by you for the specific service in question.</p>

            <h2 className="text-2xl font-semibold text-foreground">8. Changes to Terms</h2>
            <p>We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the revised terms.</p>

            <h2 className="text-2xl font-semibold text-foreground">9. Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:info@nexith.ai" className="text-primary hover:underline">info@nexith.ai</a>.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
