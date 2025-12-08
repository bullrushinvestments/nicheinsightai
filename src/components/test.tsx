import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST_MUTATION } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests

interface Test {
  id: string;
  name: string;
  description: string;
}

interface CreateTestVariables {
  name: string;
  description?: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Test>();

  const [createTestMutation] = useMutation<CreateTestVariables>(CREATE_TEST_MUTATION);

  const onSubmit = async (data: Test) => {
    try {
      setLoading(true);
      await createTestMutation({ variables: data });
      reset();
    } catch (error) {
      console.error('Failed to create test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Test Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            aria-label="Test name input"
            className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <p className="text-red-600 text-xs mt-2">{errors.name?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            {...register('description')}
            aria-label="Test description input"
            rows={3}
            className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          aria-label="Create test button"
          className={`inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${
            loading ? 'bg-gray-300' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          }`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST_MUTATION } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests

interface Test {
  id: string;
  name: string;
  description: string;
}

interface CreateTestVariables {
  name: string;
  description?: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Test>();

  const [createTestMutation] = useMutation<CreateTestVariables>(CREATE_TEST_MUTATION);

  const onSubmit = async (data: Test) => {
    try {
      setLoading(true);
      await createTestMutation({ variables: data });
      reset();
    } catch (error) {
      console.error('Failed to create test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Test Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            aria-label="Test name input"
            className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <p className="text-red-600 text-xs mt-2">{errors.name?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            {...register('description')}
            aria-label="Test description input"
            rows={3}
            className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          aria-label="Create test button"
          className={`inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${
            loading ? 'bg-gray-300' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          }`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;