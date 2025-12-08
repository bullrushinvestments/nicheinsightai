import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extended matchers like toHaveBeenCalledWith
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseExternalData = require('./externalDependency').useExternalData;

  beforeEach(() => {
    mockUseExternalData.mockClear();
  });

  test('renders without crashing', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/design architecture/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    mockUseExternalData.mockReturnValue({ data: null, isLoading: true });
    render(<DesignArchitectureComponent />);

    const loadingIndicator = screen.getByRole('status');
    expect(loadingIndicator).toHaveTextContent(/loading/i);
  });

  test('displays error message when fetching data fails', async () => {
    mockUseExternalData.mockReturnValue({ data: null, isLoading: false, error: new Error('Failed to fetch') });
    render(<DesignArchitectureComponent />);

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toHaveTextContent(/failed to fetch/i);
  });

  test('handles user interaction with design elements', () => {
    mockUseExternalData.mockReturnValue({ data: { designs: ['design1', 'design2'] }, isLoading: false });
    render(<DesignArchitectureComponent />);

    const designElement = screen.getByRole('button', { name: /select design/i });
    fireEvent.click(designElement);
    expect(mockUseExternalData).toHaveBeenCalled();
  });

  test('ensures accessibility features are implemented correctly', () => {
    mockUseExternalData.mockReturnValue({ data: { designs: ['design1', 'design2'] }, isLoading: false });
    render(<DesignArchitectureComponent />);

    const designElement = screen.getByRole('button', { name: /select design/i });
    expect(designElement).toBeVisible();
    expect(designElement).toHaveAttribute('aria-label');
  });

  test('validates edge cases such as empty data array', () => {
    mockUseExternalData.mockReturnValue({ data: { designs: [] }, isLoading: false });
    render(<DesignArchitectureComponent />);

    const noItemsMessage = screen.getByText(/no available designs/i);
    expect(noItemsMessage).toBeInTheDocument();
  });

  test('mocks external dependencies correctly', () => {
    mockUseExternalData.mockImplementation(() => ({ data: null, isLoading: true }));
    render(<DesignArchitectureComponent />);
    
    expect(mockUseExternalData).toHaveBeenCalled();
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extended matchers like toHaveBeenCalledWith
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockUseExternalData = require('./externalDependency').useExternalData;

  beforeEach(() => {
    mockUseExternalData.mockClear();
  });

  test('renders without crashing', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/design architecture/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    mockUseExternalData.mockReturnValue({ data: null, isLoading: true });
    render(<DesignArchitectureComponent />);

    const loadingIndicator = screen.getByRole('status');
    expect(loadingIndicator).toHaveTextContent(/loading/i);
  });

  test('displays error message when fetching data fails', async () => {
    mockUseExternalData.mockReturnValue({ data: null, isLoading: false, error: new Error('Failed to fetch') });
    render(<DesignArchitectureComponent />);

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toHaveTextContent(/failed to fetch/i);
  });

  test('handles user interaction with design elements', () => {
    mockUseExternalData.mockReturnValue({ data: { designs: ['design1', 'design2'] }, isLoading: false });
    render(<DesignArchitectureComponent />);

    const designElement = screen.getByRole('button', { name: /select design/i });
    fireEvent.click(designElement);
    expect(mockUseExternalData).toHaveBeenCalled();
  });

  test('ensures accessibility features are implemented correctly', () => {
    mockUseExternalData.mockReturnValue({ data: { designs: ['design1', 'design2'] }, isLoading: false });
    render(<DesignArchitectureComponent />);

    const designElement = screen.getByRole('button', { name: /select design/i });
    expect(designElement).toBeVisible();
    expect(designElement).toHaveAttribute('aria-label');
  });

  test('validates edge cases such as empty data array', () => {
    mockUseExternalData.mockReturnValue({ data: { designs: [] }, isLoading: false });
    render(<DesignArchitectureComponent />);

    const noItemsMessage = screen.getByText(/no available designs/i);
    expect(noItemsMessage).toBeInTheDocument();
  });

  test('mocks external dependencies correctly', () => {
    mockUseExternalData.mockImplementation(() => ({ data: null, isLoading: true }));
    render(<DesignArchitectureComponent />);
    
    expect(mockUseExternalData).toHaveBeenCalled();
  });
});