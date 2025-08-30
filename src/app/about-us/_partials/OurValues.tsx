import React from "react";

type Value = {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface OurValuesProps {
    values: Value[];
}

const OurValues = ({ values }: OurValuesProps) => {
    return (
        <section className="py-20 bg-healthcare-warm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-healthcare-primary mb-4">Our Values</h2>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                        The principles that guide everything we do and shape how we care for our patients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="text-center">
                            <div className="w-20 h-20 bg-healthcare-primary rounded-healthcare flex items-center justify-center mx-auto mb-6">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-healthcare-primary mb-4">{value.title}</h3>
                            <p className="text-foreground/80 leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurValues;