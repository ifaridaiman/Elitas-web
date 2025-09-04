import React from "react";
import Image from "next/image";

const MeetDoctor = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Section */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-5xl font-bold text-amber-900 mb-2">Head of Clinic</h2>
                        </div>
                        
                        <div className="space-y-4 text-amber-800">
                            <p className="text-lg leading-relaxed">
                                With a background in medicine and a passion for patient-centered care, I graduated from Crimea State Medical 
                                University in Ukraine in 2009. After completing two years of housemanship at Tuanku Ja'afar Seremban Hospital, I 
                                gained extensive experience as a medical officer in cardiothoracic surgery at Serdang Hospital, specializing in cardiac 
                                bypass procedures for 3 years. I then transitioned to emergency medicine at Gleneagles Kuala Lumpur Hospital, 
                                where I served for nearly three years, then Pantai hospital Kuala Lumpur and latest in Prince Court Medical Centre 
                                for the past 6 years while setting up my own practice which is Elitas Clinic.
                            </p>
                            
                            <p className="text-lg leading-relaxed">
                                At Elitas Clinic, we pride ourselves on offering comprehensive medical and health consultations. Our unique 
                                treatment planning approach prioritizes patient information and education, ensuring that every individual receives 
                                personalized care tailored to their needs. We believe in the importance of ongoing communication and follow-up, 
                                fostering long-term relationships with our patients. Our team consists of dedicated and enthusiastic young doctors, 
                                each with extensive experience in primary health services gained from working in various medical centers. Together, 
                                we strive to deliver quality healthcare that empowers our patients and supports their health journey.
                            </p>
                        </div>
                    </div>
                    
                    {/* Image Section */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="bg-white p-6 rounded-2xl shadow-xl">
                                <div className="relative w-80 h-96 rounded-xl overflow-hidden">
                                    <Image
                                        src="/assets/staff/drEniza-elitasHQ.png"
                                        alt="Dr. Nik Nur Eniza"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="text-center mt-4">
                                    <h3 className="text-2xl font-bold text-amber-900">Dr Nik Nur Eniza</h3>
                                    <p className="text-amber-700 font-medium">Medical Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeetDoctor;