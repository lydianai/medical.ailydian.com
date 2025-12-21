import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Here you would integrate with your actual Medical AI backend
    // For now, we'll call the backend API
    const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:3100'

    const response = await fetch(`${backendUrl}/api/medical-expert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-lydian-auth-token': process.env.MEDICAL_API_TOKEN || 'development-token'
      },
      body: JSON.stringify({
        action: 'DIFFERENTIAL_DIAGNOSIS',
        data: {
          symptoms: [message],
          patientData: {
            userId: 'web-user',
            patientId: 'anonymous'
          }
        }
      })
    })

    if (!response.ok) {
      throw new Error('Backend API error')
    }

    const data = await response.json()

    return NextResponse.json({
      success: true,
      response: formatMedicalResponse(data),
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Medical Chat API Error:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: 'Unable to process your medical query at this time.'
      },
      { status: 500 }
    )
  }
}

function formatMedicalResponse(data: any): string {
  if (!data || !data.result) {
    return 'I apologize, but I could not generate a medical response at this time. Please try again or rephrase your question.'
  }

  const result = data.result

  if (result.diagnoses && Array.isArray(result.diagnoses)) {
    let response = '🏥 **Medical Analysis Results:**\n\n'

    response += '**Possible Diagnoses:**\n'
    result.diagnoses.slice(0, 3).forEach((diagnosis: any, index: number) => {
      response += `${index + 1}. **${diagnosis.condition}** (${Math.round(diagnosis.probability * 100)}% probability)\n`
      response += `   - ICD-10: ${diagnosis.icd10}\n`
      response += `   - Reasoning: ${diagnosis.reasoning}\n\n`
    })

    if (result.urgencyLevel) {
      response += `\n**Urgency Level:** ${result.urgencyLevel}\n`
    }

    response += '\n⚠️ **Important Disclaimer:** This is AI-generated information for educational purposes only. Always consult with qualified healthcare professionals for medical advice, diagnosis, or treatment.'

    return response
  }

  return 'Thank you for your question. I am analyzing your symptoms. Please provide more details for a better assessment.'
}
