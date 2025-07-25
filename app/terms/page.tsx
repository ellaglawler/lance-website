import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Lance AI Collections Agent | Legal Terms & Conditions',
  description: 'Read Lance\'s Terms of Service for our AI collections agent platform. Understand your rights, responsibilities, and the terms governing your use of our freelancer payment recovery tools.',
  keywords: [
    'lance terms of service',
    'lance legal terms',
    'AI collections terms',
    'freelancer payment terms',
    'lance user agreement',
    'payment recovery terms',
    'lance platform terms',
    'AI collections legal',
    'freelancer business terms',
    'lance service agreement',
    'payment automation terms',
    'lance terms and conditions',
    'AI collections user agreement',
    'freelancer payment legal',
    'lance platform agreement',
    'payment recovery legal terms',
    'lance business terms',
    'AI collections conditions',
    'freelancer payment terms of service',
    'lance legal agreement'
  ],
  openGraph: {
    title: 'Terms of Service - Lance AI Collections Agent',
    description: 'Read Lance\'s Terms of Service for our AI collections agent platform. Understand your rights and responsibilities.',
    type: 'website',
    url: 'https://lanceos.ai/terms',
    siteName: 'Lance',
    images: [
      {
        url: '/images/lance-logo.png',
        width: 1200,
        height: 630,
        alt: 'Lance Terms of Service - Legal Terms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - Lance AI Collections Agent',
    description: 'Read Lance\'s Terms of Service for our AI collections agent platform.',
    images: ['/images/lance-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://lanceos.ai/terms',
  },
  authors: [{ name: 'Lance Team' }],
  category: 'Legal',
  other: {
    'application-name': 'Lance',
    'apple-mobile-web-app-title': 'Lance Terms',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#0B0F19',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#0B0F19',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function TermsPage() {
  return (
    <main className="pb-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-primary/10 to-background pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl mb-8 text-muted-foreground">
              The terms and conditions for using Lance
            </p>
          </div>
        </div>
      </div>

      {/* Terms of Service Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg prose-gray dark:prose-invert">
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Lance: Terms of Service</h2>
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>

            <p className="mb-6">
              These Terms of Service ("Terms") govern your use of the Lance platform. By accessing or using Lance, 
              you agree to these Terms.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">1. Scope of Service</h3>
            <p className="mb-6">
              Lance is a software tool that assists freelancers in managing invoices, client communications, 
              and related tasks. You remain solely responsible for your business decisions and communications 
              with your clients.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">2. Not a Collection Agency or Legal Advisor</h3>
            <p className="mb-6">
              Lance is <strong>not</strong> a third-party debt collection agency, nor does it provide legal advice. 
              You control and direct all communications sent to your clients through Lance. We provide templates 
              and automation to support your decisions.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">3. User Responsibilities</h3>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Use Lance only for lawful purposes</li>
              <li>Ensure that any communications sent through Lance comply with applicable laws and your client contracts</li>
              <li>Not use Lance to harass or threaten clients</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 mt-8">4. Subscription & Fees</h3>
            <p className="mb-6">
              Lance is offered on a subscription basis. Fees, billing terms, and cancellation policies are 
              detailed at our pricing page.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">5. Intellectual Property</h3>
            <p className="mb-6">
              All rights in the Lance platform, including content, templates, and trademarks, are owned by Lance. 
              You may not copy, modify, or distribute any part of Lance without our written consent.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">6. Disclaimers & Limitation of Liability</h3>
            <p className="mb-6">
              Lance is provided "as is" and "as available." We do not guarantee the recovery of payments or 
              specific outcomes. To the fullest extent permitted by law, we disclaim all liability for indirect 
              or consequential damages.
            </p>

            <h3 className="text-xl font-semibold mb-4 mt-8">7. Termination</h3>
            <p className="mb-6">
              We may suspend or terminate your access if you violate these Terms or use Lance in a manner 
              that harms others or our platform.
            </p>

            <div className="border-t pt-6 mt-8">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-6">
                If you have questions about these Terms or our Privacy Policy, please contact us at{" "}
                <a 
                  href="mailto:legal@lanceos.ai" 
                  className="text-primary hover:underline"
                >
                  legal@lanceos.ai
                </a>
                .
              </p>
            </div>

            <div className="border-t pt-6 mt-8">
              <p className="text-center text-lg font-medium">
                <strong>Thank you for choosing Lance — Polite. Persistent. Paid.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 