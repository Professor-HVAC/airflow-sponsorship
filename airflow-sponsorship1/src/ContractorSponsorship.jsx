import React from "react";
import { Card, CardContent } from "./components/ui/card";

const ContractorSponsorship = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contractor Sponsorship</h1>
        <p className="text-lg text-gray-600 mb-8">
          Partner with Airflow Mechanical to train and sponsor the next generation of HVAC talent.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Workforce Access</h2>
            <p className="text-gray-600">
              Gain access to our pool of vetted, trained, and motivated HVAC students ready to work.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Sponsorship Tiers</h2>
            <p className="text-gray-600">
              Choose from multiple tiers that match your hiring and training needs. Start small or scale up.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Buyout Option</h2>
            <p className="text-gray-600">
              Hire without risk—contractors can opt for a full-time buyout if a student becomes an ideal fit.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Mentorship Culture</h2>
            <p className="text-gray-600">
              Help shape and mentor the next generation while filling your team with dependable talent.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContractorSponsorship;
