import { NextRequest, NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/schema';
import { sendEnquiryEmail } from '@/lib/resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parseResult = enquirySchema.safeParse(body);

    if (!parseResult.success) {
      const formattedErrors = parseResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: 'Please correct the highlighted errors.',
          errors: formattedErrors,
        },
        { status: 400 }
      );
    }

    const result = await sendEnquiryEmail(parseResult.data);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.error || 'Failed to dispatch enquiry email. Please try again or WhatsApp us directly.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your enquiry has been received. Our academic counsellor will contact you shortly.',
        isMock: result.isMock,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API /api/enquiry error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected server error occurred. Please try WhatsApp or calling us directly.',
      },
      { status: 500 }
    );
  }
}
