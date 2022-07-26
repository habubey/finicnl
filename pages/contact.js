import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import ContactInfo from '@/components/Contact/ContactInfo';
import GoogleMap from '@/components/Contact/GoogleMap';
import ContactForm from '@/components/Contact/ContactForm';
import NavbarStyleSix from "@/components/_App/NavbarStyleSix";

const Contact = () => {
    return (
        <>
                             <NavbarStyleSix />


            <PageBanner pageTitle="Contact Us" />

            <ContactInfo />

            <GoogleMap />

            <ContactForm />
           
            <Footer />
        </>
    )
}

export default Contact;