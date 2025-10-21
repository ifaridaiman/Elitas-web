import React from "react";
import {Phone, Mail} from 'lucide-react'

const QuickInfo = () => {

    return (
        <section className="py-12 bg-healthcare-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <Phone className="h-8 w-8 mb-3" />
                        <h3 className="text-lg font-semibold mb-2">Main Line</h3>
                        <p className="opacity-90">Elitas KL: +60 11 1300 1410</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Phone className="h-8 w-8 mb-3" />
                        <h3 className="text-lg font-semibold mb-2">Other Branch Line</h3>
                        <p className="opacity-90">Elitas Cheras: +60 12 882 0937</p>
                        <p className="opacity-90">Elitas Binjai: +60 10 861 8505</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Mail className="h-8 w-8 mb-3" />
                        <h3 className="text-lg font-semibold mb-2">General Inquiries</h3>
                        <p className="opacity-90">elitasclinic@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuickInfo