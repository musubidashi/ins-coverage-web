import axios from 'axios';
import { CoverageCard } from '../types/api';

const api = axios.create({
  baseURL: 'http://localhost:8480'
});

export const getCoverageCards = async (): Promise<CoverageCard[]> => {
  const response = await api.get('/api/coverage-cards');
  return response.data;
};