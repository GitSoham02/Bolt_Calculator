'use client';

import { useRouter } from 'next/navigation';
import Hero from '../components/Hero';
import { ProfileForm } from '../components/Form';
import ProgressBar from '../components/ProgressBar';
import { useResult } from '../context/ResultContext';
import { useState } from 'react';

export default function InputPage() {
  const router = useRouter();
  const { setResult, setIsLoading, isLoading } = useResult();
  const [formData, setFormData] = useState({});

  async function handleSubmitForm(data) {
    setIsLoading(true);
    setFormData(data);

    try {
      const res = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setResult(result);

      // Navigate to results page after a slight delay
      setTimeout(() => {
        router.push('/result');
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Failed to fetch:', error);
      setIsLoading(false);
    }
  }

  return (
    <>
      {!isLoading && (
        <>
          <Hero />
          <ProfileForm onSubmitForm={handleSubmitForm} />
        </>
      )}
      {isLoading && <ProgressBar done={false} />}
    </>
  );
}
