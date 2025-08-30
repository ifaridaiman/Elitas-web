import { CheckCircle, Award, Users } from "lucide-react";

type whyChooseUs = {
    reason: string;
}

interface ChooseUsProps {
    whyChooseUs: whyChooseUs[];
}

const ChooseUs = ({whyChooseUs}: ChooseUsProps) => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-healthcare-primary mb-6">Why Choose Elitas Clinic?</h2>
                        <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                            We're more than just a healthcare provider – we're your partners in wellness.
                            Here's what sets us apart in delivering exceptional patient care.
                        </p>
                        <ul className="space-y-4">
                            {whyChooseUs.map((reason, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                                    <span className="text-foreground/80">{reason.reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-card border border-healthcare-secondary rounded-healthcare p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <Award className="h-8 w-8 text-healthcare-primary" />
                                <h3 className="text-xl font-bold text-healthcare-primary">Quality Recognition</h3>
                            </div>
                            <p className="text-foreground/80">
                                Accredited facilities meeting the highest standards of medical care and patient safety.
                            </p>
                        </div>
                        <div className="bg-card border border-healthcare-secondary rounded-healthcare p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <Users className="h-8 w-8 text-healthcare-primary" />
                                <h3 className="text-xl font-bold text-healthcare-primary">Patient-Centered Care</h3>
                            </div>
                            <p className="text-foreground/80">
                                Every treatment plan is tailored to your individual needs, preferences, and health goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUs;
