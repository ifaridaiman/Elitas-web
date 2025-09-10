'use client'
import { MessageCircle, Phone, MapPin, Mail, Clock } from "lucide-react";
import React from "react";
import Link from "next/link";
import Button from "../ui/Button";
import globalData from "@/contents/global.json";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Footer = () => {

    const router = useRouter();
    return (
        <footer className="bg-healthcare-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Clinic Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-auto h-auto bg-white rounded-healthcare flex items-center justify-center px-3 py-2 ">
                                <Image src="/assets/logo.svg" width="30" height="30" alt="logo-elitas" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">{globalData.footer.clinicInfo.name}</h3>
                                <p className="text-sm opacity-90">{globalData.footer.clinicInfo.tagline}</p>
                            </div>
                        </div>
                        <p className="text-sm opacity-90 leading-relaxed">
                            {globalData.footer.clinicInfo.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {globalData.footer.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.link} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            {globalData.footer.services.map((service, index) => (
                                <li key={index}>
                                    <Link href={service.link} className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 flex-shrink-0" />
                                <span className="text-sm">{globalData.footer.contactInfo.phone}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 flex-shrink-0" />
                                <span className="text-sm">{globalData.footer.contactInfo.email}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-4 w-4 flex-shrink-0" />
                                <span className="text-sm">{globalData.footer.contactInfo.address}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Clock className="h-4 w-4 flex-shrink-0" />
                                <span className="text-sm">{globalData.footer.contactInfo.hours}</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Button
                                title="Book an Appointment"
                                onClick={() => { router.push('/contact-us') }}
                                size="sm"
                                className="bg-healthcare-warm text-healthcare-primary hover:bg-gray-100 rounded-healthcare"
                                rightIcon={<MessageCircle className="h-5 w-5" />}
                            />

                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-8 pt-8 text-center">
                    <p className="text-sm opacity-90">
                        © {new Date().getFullYear()} {globalData.footer.clinicInfo.name}. All rights reserved. | 
                        {globalData.footer.legalLinks.map((link, index) => (
                            <span key={index}>
                                <Link href={link.link} className="text-white hover:underline">{link.title}</Link>
                                {index < globalData.footer.legalLinks.length - 1 && ' | '}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;