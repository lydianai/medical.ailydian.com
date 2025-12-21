import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, data } = body

    const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:3100'

    let endpoint = ''
    switch (action) {
      case 'SOAP_NOTES':
        endpoint = '/api/medical/medical-nlp/soap-notes-generation'
        break
      case 'ICD10_CODING':
        endpoint = '/api/medical/medical-nlp/icd10-coding'
        break
      case 'CLINICAL_NER':
        endpoint = '/api/medical/medical-nlp/clinical-ner'
        break
      case 'RADIOLOGY_ANALYSIS':
        endpoint = '/api/medical/medical-nlp/radiology-report-analysis'
        break
      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        )
    }

    const response = await fetch(`${backendUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-lydian-auth-token': process.env.MEDICAL_API_TOKEN || 'development-token'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Backend API error')
    }

    const result = await response.json()

    return NextResponse.json(result)

  } catch (error) {
    console.error('Medical NLP API Error:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error'
      },
      { status: 500 }
    )
  }
}
