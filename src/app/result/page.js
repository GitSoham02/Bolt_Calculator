'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ResultCard } from '../components/ResultCard';
import CompatibilityBadge from '../components/CompatibilityBadge';
import ComparisonTable from '../components/ComparisonTable';
import { useResult } from '../context/ResultContext';
import { useEffect } from 'react';

export default function ResultPage() {
  const router = useRouter();
  const { result, clearResult } = useResult();

  useEffect(() => {
    // Redirect to input if no result
    if (!result) {
      router.push('/input');
    }
  }, [result, router]);

  if (!result) return null;

  const {
    curBolt: boltDesc,
    curBoltProperty: boltProperty,
    limits,
    obtainedValues,
  } = result;

  function handleBackToForm() {
    clearResult();
    router.push('/input');
  }

  return (
    <div className="flex flex-col gap-6">
      <ResultCard boltDesc={boltDesc} boltProperty={boltProperty} />
      <CompatibilityBadge />
      <ComparisonTable limits={limits} obtainedValues={obtainedValues} />
      <div className="flex justify-center">
        <Button onClick={handleBackToForm} className="mt-6">
          Calculate Another Bolt
        </Button>
      </div>
    </div>
  );
}
