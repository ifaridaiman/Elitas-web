'use client'
import { MessageCircle, Phone, MapPin, Mail, Clock } from "lucide-react";
import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

const Footer = () => {
    return (
        <footer className="bg-healthcare-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Clinic Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-white rounded-healthcare flex items-center justify-center">
                                <span className="text-healthcare-primary font-bold">E</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Elitas Clinic</h3>
                                <p className="text-sm opacity-90">Your Health, Our Priority</p>
                            </div>
                        </div>
                        <p className="text-sm opacity-90 leading-relaxed">
                            Providing reliable, patient-first healthcare with modern facilities
                            and experienced medical professionals across multiple locations.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about-us" className="text-sm opacity-90 hover:opacity-100 transition-opacity">About Us</Link></li>
                            <li><Link href="/services" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Our Services</Link></li>
                            <li><Link href="/branches" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Find Locations</Link></li>
                            <li><Link href="/contact-us" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            <li><Link href="/services/general-health" className="text-sm opacity-90 hover:opacity-100 transition-opacity">General Health</Link></li>
                            <li><Link href="/services/aesthetic-treatments" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Aesthetic Treatments</Link></li>
                            <li><Link href="/services/womens-wellness" className="text-sm opacity-90 hover:opacity-100 transition-opacity">{`Women's Wellness`}</Link></li>
                            <li><Link href="/services/health-screening" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Health Screening</Link></li>
                            <li><Link href="/services/dermatology" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Dermatology</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 flex-shrink-0" />
                                <span className="text-sm">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 flex-shrink-0" />
                                <span className="text-sm">info@elitasclinic.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-4 w-4 flex-shrink-0" />
                                <span className="text-sm">Multiple Locations</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Clock className="h-4 w-4 flex-shrink-0" />
                                <span className="text-sm">Mon-Fri: 8AM-6PM</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Button
                                title="Book an Appointment"
                                onClick={() => { }}
                                size="lg"
                                className="bg-white text-healthcare-primary hover:bg-gray-100 rounded-healthcare"
                                rightIcon={<MessageCircle className="h-5 w-5" />}
                            />

                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-8 pt-8 text-center">
                    <p className="text-sm opacity-90">
                        © {new Date().getFullYear()} Elitas Clinic. All rights reserved. | <Link href="/privacy-policy" className="text-white hover:underline">Privacy Policy</Link> | <Link href="/terms-of-service" className="text-white hover:underline">Terms of Service</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;