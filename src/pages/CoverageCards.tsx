import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCoverageCards } from '../services/api';
import { CoverageCard } from '../types/api';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CoverageCards = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const { data: cards, isLoading, error } = useQuery({
    queryKey: ['coverageCards'],
    queryFn: getCoverageCards
  });

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500">Error loading coverage cards</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Coverage Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards?.map((card: CoverageCard) => (
          <div key={card.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold mb-2">{card.name}</h2>
              <button
                onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                className="text-gray-500 hover:text-gray-700"
              >
                {expandedCard === card.id ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">Section: {card.section}</p>
              <p className="text-gray-600">Category: {card.category}</p>
              <p className="text-gray-600">Domain: {card.domain}</p>
            </div>
            {expandedCard === card.id && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="font-semibold mb-2">Details</h3>
                <p className="text-gray-600 mb-2"><span className="font-medium">Aim:</span> {card.aim}</p>
                <p className="text-gray-600 mb-2"><span className="font-medium">Description:</span> {card.description}</p>
                <p className="text-gray-600 mb-2"><span className="font-medium">Signification:</span> {card.signification}</p>
                <p className="text-gray-600"><span className="font-medium">Calcul:</span> {card.calcul}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoverageCards;