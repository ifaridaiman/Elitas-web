'use client'
import React from "react"
import Button from "@/components/ui/Button"
import { Calendar, Phone } from "lucide-react"
import { useRouter } from "next/navigation"

const CtaFooter = () => {
    const router = useRouter();

    return (
        <section className="py-20 bg-healthcare-primary text-white">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8" data-aos="fade-up">
                <h2 className="text-4xl font-bold mb-6">
                    Ready to Take Care of Your Health?
                </h2>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                    {`Don't wait to prioritize your wellbeing. Book an appointment today or contact us
                    for more information about our comprehensive healthcare services.`}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
                    <Button
                        title="Book Appointment"
                        className="bg-healthcare-primary text-healthcare-primary hover:bg-gray-100 rounded-healthcare"
                        onClick={() => {
                            router.push("/branches");
                        }}
                        size="lg"
                        leftIcon={<Calendar className="h-5 w-5 mr-2" />}
                    />

                    <Button
                        title="Whatsapp Us"
                        className="bg-healthcare-primary text-healthcare-primary hover:bg-gray-100 rounded-healthcare"
                        onClick={() => {
                            router.push("/branches");
                        }}
                        size="lg"
                        leftIcon={<Phone className="h-5 w-5 mr-2" />}
                    />


                </div>

                <div className="mt-8 text-sm opacity-75" data-aos="fade-up" data-aos-delay="400">
                    <p>Emergency? Call 999 | General Inquiries: +1 (555) 123-4567</p>
                </div>
            </div>
        </section>
    )
}

export default CtaFooter