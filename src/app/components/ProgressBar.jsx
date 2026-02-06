'use client';

import { useEffect, useState } from 'react';
import { Field, FieldLabel } from '@/components/ui/field';
import { Progress } from '@/components/ui/progress';

function ProgressBar({ done }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    async function runProgress() {
      if (done) {
        // Backend finished → force completion
        setProgress(100);

        // Hide after short delay
        const hideTimer = setTimeout(() => {
          setVisible(false);
        }, 500);

        return () => clearTimeout(hideTimer);
      }
    }

    // Fake progress timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 93) return prev; // stop at 90%
        return prev + 1;
      });
    }, 80);
    runProgress();
    return () => clearInterval(interval);
  }, [done]);

  if (!visible) return null;

  return (
    <Field className="w-full max-w-full sm:max-w-sm px-4 sm:px-0">
      <FieldLabel htmlFor="progress-upload">
        <span>Calculation progress</span>
        <span className="ml-auto">{progress}%</span>
      </FieldLabel>
      <Progress value={progress} id="progress-upload" />
    </Field>
  );
}

export default ProgressBar;
