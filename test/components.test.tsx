import React from 'react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { SectionHeader } from '../src/components/ui/SectionHeader';
import { EnquiryForm } from '../src/components/enquiry/EnquiryForm';

describe('UI Components', () => {
  it('renders SectionHeader with title and badge', () => {
    render(
      <SectionHeader
        badge="Test Badge"
        title="Test Section Title"
        subtitle="Test section subtitle description"
      />
    );

    expect(screen.getByText('Test Badge')).toBeInTheDocument();
    expect(screen.getByText('Test Section Title')).toBeInTheDocument();
    expect(screen.getByText('Test section subtitle description')).toBeInTheDocument();
  });

  it('renders EnquiryForm with required input fields', () => {
    render(<EnquiryForm />);

    expect(screen.getByLabelText(/Student Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Student Class/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit Enquiry/i })).toBeInTheDocument();
  });
});
