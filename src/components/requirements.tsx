import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

interface FormData {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('API_ENDPOINT');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const { register, handleSubmit, reset, formState: { errors }, trigger } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      setLoading(true);
      await axios.post('API_ENDPOINT', data);
      reset();
      fetchRequirements();
    } catch (err) {
      setError('Failed to add requirement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="requirementName" className="block text-sm font-medium text-gray-700">Requirement Name</label>
          <input
            type="text"
            id="requirementName"
            placeholder="Enter requirement name"
            {...register('requirementName', { required: true })}
            className={clsx(
              'mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500',
              errors.requirementName && 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
            )}
          />
        </div>
        <div>
          <label htmlFor="requirementDescription" className="block text-sm font-medium text-gray-700">Requirement Description</label>
          <textarea
            id="requirementDescription"
            placeholder="Enter requirement description"
            {...register('requirementDescription', { required: true })}
            rows={4}
            className={clsx(
              'mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500',
              errors.requirementDescription && 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
            )}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={clsx(
            'inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
            loading && 'opacity-50 cursor-not-allowed'
          )}
        >
          {loading ? 'Loading...' : 'Add Requirement'}
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Requirements List</h3>
        {!loading && requirements.length === 0 && (
          <p>No requirements found.</p>
        )}
        {requirements.map(requirement => (
          <div key={requirement.id} className="border-b pb-4 mt-4">
            <h4 className="text-lg font-medium">{requirement.name}</h4>
            <p>{requirement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

interface FormData {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('API_ENDPOINT');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const { register, handleSubmit, reset, formState: { errors }, trigger } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      setLoading(true);
      await axios.post('API_ENDPOINT', data);
      reset();
      fetchRequirements();
    } catch (err) {
      setError('Failed to add requirement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="requirementName" className="block text-sm font-medium text-gray-700">Requirement Name</label>
          <input
            type="text"
            id="requirementName"
            placeholder="Enter requirement name"
            {...register('requirementName', { required: true })}
            className={clsx(
              'mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500',
              errors.requirementName && 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
            )}
          />
        </div>
        <div>
          <label htmlFor="requirementDescription" className="block text-sm font-medium text-gray-700">Requirement Description</label>
          <textarea
            id="requirementDescription"
            placeholder="Enter requirement description"
            {...register('requirementDescription', { required: true })}
            rows={4}
            className={clsx(
              'mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500',
              errors.requirementDescription && 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
            )}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={clsx(
            'inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
            loading && 'opacity-50 cursor-not-allowed'
          )}
        >
          {loading ? 'Loading...' : 'Add Requirement'}
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Requirements List</h3>
        {!loading && requirements.length === 0 && (
          <p>No requirements found.</p>
        )}
        {requirements.map(requirement => (
          <div key={requirement.id} className="border-b pb-4 mt-4">
            <h4 className="text-lg font-medium">{requirement.name}</h4>
            <p>{requirement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GatherRequirements;