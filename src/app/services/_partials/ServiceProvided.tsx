import ServiceCard from "@/components/ui/ServiceCard";

interface Services {
    title: string;
    description: string;
    icon?: string;
    href?: string;
}

interface ServiceCardProps {
    services: Services[]
}


const ServiceProvided = ({ services }: ServiceCardProps) => {
    return (
        <section className="py-20 bg-service">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-healthcare-primary mb-4">
                        Featured Services
                    </h2>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                        Our core medical specialties designed to address your health needs with precision and care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index}>
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceProvided