import React from "react";
interface HeaderPageProps {
    title: string;
    description: string;
}

const HeaderPage = ({title, description}: HeaderPageProps) => {
    return (
        <section className="py-20 bg-healthcare-warm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold text-healthcare-primary mb-6">
                        {title}
                    </h1>
                    <p className="text-xl text-foreground/80 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HeaderPage;