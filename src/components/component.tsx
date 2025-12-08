import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  features: Feature[];
}

interface Feature {
  id: number;
  title: string;
  details: string;
}

interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>({ isLoading: true });
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    axios.get<BusinessSpec>('https://api.example.com/business-spec')
      .then(response => {
        setBusinessSpec(response.data);
        setLoadingState({ isLoading: false });
      })
      .catch(error => {
        console.error('Error fetching business specification:', error);
        setLoadingState({ isLoading: true, error: 'Failed to load data' });
      });
  }, []);

  if (loadingState.isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (loadingState.error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>{loadingState.error}</p>
      </div>
    );
  }

  const renderFeature = (feature: Feature, index: number) => (
    <div key={index} className={clsx('bg-white rounded-lg p-4 mb-4', isMobile ? 'w-full' : 'w-1/2')}>
      <h3 className="text-xl font-bold">{feature.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: feature.details }} />
    </div>
  );

  return (
    <section aria-labelledby="business-spec-title" tabIndex={0} role="region">
      <header className="mb-6">
        <h2 id="business-spec-title" className="text-3xl font-bold">{businessSpec?.name}</h2>
        <p className="mt-2 text-gray-700">{businessSpec?.description}</p>
      </header>
      <div className={clsx('grid gap-4', isMobile ? 'grid-cols-1' : 'grid-cols-2')}>
        {businessSpec?.features.map(renderFeature)}
      </div>
    </section>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  features: Feature[];
}

interface Feature {
  id: number;
  title: string;
  details: string;
}

interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>({ isLoading: true });
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    axios.get<BusinessSpec>('https://api.example.com/business-spec')
      .then(response => {
        setBusinessSpec(response.data);
        setLoadingState({ isLoading: false });
      })
      .catch(error => {
        console.error('Error fetching business specification:', error);
        setLoadingState({ isLoading: true, error: 'Failed to load data' });
      });
  }, []);

  if (loadingState.isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (loadingState.error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>{loadingState.error}</p>
      </div>
    );
  }

  const renderFeature = (feature: Feature, index: number) => (
    <div key={index} className={clsx('bg-white rounded-lg p-4 mb-4', isMobile ? 'w-full' : 'w-1/2')}>
      <h3 className="text-xl font-bold">{feature.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: feature.details }} />
    </div>
  );

  return (
    <section aria-labelledby="business-spec-title" tabIndex={0} role="region">
      <header className="mb-6">
        <h2 id="business-spec-title" className="text-3xl font-bold">{businessSpec?.name}</h2>
        <p className="mt-2 text-gray-700">{businessSpec?.description}</p>
      </header>
      <div className={clsx('grid gap-4', isMobile ? 'grid-cols-1' : 'grid-cols-2')}>
        {businessSpec?.features.map(renderFeature)}
      </div>
    </section>
  );
};

export default CreateBusinessSpecification;