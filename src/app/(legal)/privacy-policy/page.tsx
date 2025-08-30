import React from 'react';
import privacyPolicyData from '@/contents/privacy-policy.json';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-healthcare-warm py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-healthcare-primary mb-2">
              {privacyPolicyData.title}
            </h1>
            <p className="text-sm text-gray-600">
              Last Updated: {privacyPolicyData.lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              {privacyPolicyData.introduction}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {privacyPolicyData.sections.map((section) => (
              <div key={section.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h2 className="text-xl font-semibold text-healthcare-primary mb-4">
                  {section.title}
                </h2>
                
                {section.content && (
                  <p className="text-gray-700 mb-4">
                    {section.content}
                  </p>
                )}

                {section.items && (
                  <div className="space-y-3">
                    {section.items.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-healthcare-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div className="text-gray-700">
                          {typeof item === 'string' ? (
                            <span>{item}</span>
                          ) : (
                            <span>
                              <strong>{item.type}:</strong> {item.description}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.note && (
                  <p className="text-gray-600 italic mt-4">
                    {section.note}
                  </p>
                )}

                {section.contactInfo && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="space-y-1 text-gray-700">
                      <p className="font-semibold">{section.contactInfo.clinicName}</p>
                      <p>{section.contactInfo.address}</p>
                      <p>{section.contactInfo.phone}</p>
                      <p>{section.contactInfo.email}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;