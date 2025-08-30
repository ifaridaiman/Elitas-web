const ServeSOP = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-healthcare-primary mb-4">
                        How We Serve You
                    </h2>
                    <p className="text-xl text-foreground/70">
                        Our streamlined process ensures you receive the best care from consultation to follow-up.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-healthcare-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                            1
                        </div>
                        <h3 className="text-lg font-semibold text-healthcare-primary mb-2">Consultation</h3>
                        <p className="text-foreground/70">Initial assessment and discussion of your health concerns</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-healthcare-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                            2
                        </div>
                        <h3 className="text-lg font-semibold text-healthcare-primary mb-2">Diagnosis</h3>
                        <p className="text-foreground/70">Comprehensive evaluation using advanced diagnostic tools</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-healthcare-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                            3
                        </div>
                        <h3 className="text-lg font-semibold text-healthcare-primary mb-2">Treatment</h3>
                        <p className="text-foreground/70">Personalized treatment plan tailored to your specific needs</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-healthcare-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                            4
                        </div>
                        <h3 className="text-lg font-semibold text-healthcare-primary mb-2">Follow-up</h3>
                        <p className="text-foreground/70">Ongoing support and monitoring for optimal outcomes</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServeSOP