import React from "react";
interface SupportiveStaffProps {
    description: string
}
const SupportiveStaff = ({description}: SupportiveStaffProps) => {
    return (
        <section className="py-20 bg-healthcare-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-healthcare-primary mb-6">Our Supportive Team</h2>
                <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    )
}

export default SupportiveStaff;