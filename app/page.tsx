import { Metadata } from 'next'
import MedicalExpert from './components/MedicalExpert'

export const metadata: Metadata = {
  title: 'Medical Expert — 24/7 AI Medical Assistant | Ailydian',
  description: 'AI-powered health consultation. Multi-model diagnostic support, medical analysis, emergency triage. 500K+ consultations, 50+ specialties.',
  keywords: 'medical ai, ai doctor, health advisor ai, medical diagnosis ai, medical expert, lydian medical',
  openGraph: {
    title: 'Medical Expert — 24/7 AI Medical Assistant | Health Consultation',
    description: 'AI-powered health consultation. Multi-model diagnostic support, medical analysis, emergency triage. 500K+ consultations, 50+ specialties.',
    url: 'https://medical.ailydian.com',
    siteName: 'Ailydian Medical Expert',
    images: [
      {
        url: '/og-images/medical-expert.jpg',
        width: 1200,
        height: 630,
        alt: 'Ailydian Medical Expert',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Expert — 24/7 AI Medical Assistant',
    description: 'AI-powered health consultation. Multi-model diagnostic support, medical analysis, emergency triage.',
    images: ['/og-images/medical-expert.jpg'],
  },
  alternates: {
    canonical: 'https://medical.ailydian.com',
  },
}

export default function Home() {
  return <MedicalExpert />
}
