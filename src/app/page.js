'use client';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Main from './components/Main';
import { ProfileForm } from './components/Form';
import { ResultCard } from './components/ResultCard';
import CompatibilityBadge from './components/CompatibilityBadge';
import ComparisonTable from './components/ComparisonTable';
import ProgressBar from './components/ProgressBar';

import { useEffect, useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState({});
  const [resPresent, setResPresent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmitForm(data) {
    // loader starts
    setIsLoading(true);
    // setting state
    // setFormData(data);
    setResPresent(false);

    try {
      const res = await fetch('api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      // IMPORTANT: Only set these when the backend is truly done
      setResult(result);
      setResPresent(true);
    } catch (error) {
      console.error('Failed to fetch:', error);
    } finally {
      // Delay hiding the progress bar to allow completion animation
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }

  console.log(result);

  const {
    curBolt: boltDesc,
    curBoltProperty: boltProperty,
    limits,
    obtainedValues,
  } = result;
  console.log(boltDesc);
  console.log(limits);
  console.log(obtainedValues);

  return (
    <Main>
      {!resPresent && !isLoading && (
        <>
          <>
            <Hero />
            <ProfileForm onSubmitForm={handleSubmitForm} />
          </>
        </>
      )}

      {isLoading && <ProgressBar done={resPresent} />}

      {resPresent && !isLoading && (
        <>
          <ResultCard boltDesc={boltDesc} boltProperty={boltProperty} />
          <CompatibilityBadge />
          <ComparisonTable limits={limits} obtainedValues={obtainedValues} />
        </>
      )}

      {/* {resPresent ? (
        <>
          <ResultCard boltDesc={boltDesc} boltProperty={boltProperty} />
          <CompatibilityBadge />
          <ComparisonTable limits={limits} obtainedValues={obtainedValues} />
        </>
      ) : (
        <>
          <Hero />
          <ProfileForm onSubmitForm={handleSubmitForm} />
        </>
      )} */}
    </Main>
  );
}

// sample data
// const userData = {
//   plateThickness: 16,
//   externalLoad: 12000,
//   preLoad: 20000,
//   lateralLoad: 500,
//   engagedThreadLength: 8,
//   tensileStressArea: 58,
//   youngsModulus: 21000,
// };
// console.log(formData);
