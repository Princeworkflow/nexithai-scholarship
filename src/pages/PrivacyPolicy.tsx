import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">Last updated: March 26, 2026</p>

            <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
            <p>We collect information you provide directly, including your name, email address, phone number, and educational background when you apply for programs or create an account. We also collect usage data such as pages visited and interaction patterns.</p>

            <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p>We use your information to provide and improve our educational services, communicate with you about programs and opportunities, process scholarship applications, and personalize your learning experience.</p>

            <h2 className="text-2xl font-semibold text-foreground">3. Data Sharing</h2>
            <p>We do not sell your personal information. We may share data with trusted service providers who assist in operating our platform, and with partners for scholarship and employment opportunities, only with your consent.</p>

            <h2 className="text-2xl font-semibold text-foreground">4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-semibold text-foreground">5. Cookies & Tracking</h2>
            <p>We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookie preferences through your browser settings.</p>

            <h2 className="text-2xl font-semibold text-foreground">6. Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time by contacting us or using the unsubscribe link in our emails.</p>

            <h2 className="text-2xl font-semibold text-foreground">7. Children's Privacy</h2>
            <p>Our services are intended for individuals aged 16 and above. We do not knowingly collect personal information from children under 16 without parental consent.</p>

            <h2 className="text-2xl font-semibold text-foreground">8. Changes to This Policy</h2>
            <p>We may update this privacy policy periodically. We will notify you of significant changes via email or through our platform.</p>

            <h2 className="text-2xl font-semibold text-foreground">9. Contact</h2>
            <p>For privacy-related inquiries, contact us at <a href="mailto:info@nexith.ai" className="text-primary hover:underline">info@nexith.ai</a>.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
