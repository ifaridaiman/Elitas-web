import React from "react";
import Image from "next/image";

type Doctors = {
    name: string;
    specialty: string;
    qualifications: string;
    bio: string;
    image?: string;
}
interface MeetDoctorProps {
    doctors: Doctors[];
}

const MeetDoctor = ({ doctors }: MeetDoctorProps) => {

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-healthcare-primary mb-4">Meet Our Founder</h2>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                        Our experienced medical team is dedicated to providing you with the highest quality care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="bg-card border border-healthcare-secondary rounded-healthcare p-6 text-center shadow-healthcare">
                            <div className="w-24 h-24 bg-healthcare-warm rounded-full flex items-center justify-center mx-auto mb-6">
                                {doctor.image ? (
                                    <Image width={200} height={200}  src={doctor.image} alt={doctor.name} className="w-full h-full object-cover rounded-full" />
                                ) : (
                                    <span className="text-3xl font-bold text-healthcare-primary">
                                        {doctor.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-healthcare-primary mb-2">{doctor.name}</h3>
                            <div className="text-healthcare-accent font-medium mb-2">{doctor.specialty}</div>
                            <div className="text-sm text-foreground/60 mb-4">{doctor.qualifications}</div>
                            <p className="text-foreground/80 leading-relaxed">{doctor.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MeetDoctor;