import React from "react";

const HistoryMission = () => {

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-healthcare-primary">Our History</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Founded over a decade ago, Elitas Clinic began with a simple yet powerful vision:
                            to make quality healthcare accessible and personalized for every patient. What started
                            as a single clinic has grown into a network of five modern healthcare facilities.
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Throughout our journey, we've remained committed to our founding principles of
                            excellence, compassion, and innovation. Our growth reflects the trust our patients
                            place in us and our dedication to expanding access to comprehensive healthcare services.
                        </p>
                    </div>
                    <div className="bg-healthcare-secondary p-8 rounded-healthcare">
                        <h3 className="text-2xl font-bold text-healthcare-primary mb-4">Our Mission</h3>
                        <blockquote className="text-lg text-foreground/80 italic leading-relaxed">
                            "Providing reliable, patient-first care by combining medical expertise with
                            genuine compassion. We strive to be your trusted healthcare partner, supporting
                            your wellness journey with personalized attention and advanced medical solutions."
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default HistoryMission;
