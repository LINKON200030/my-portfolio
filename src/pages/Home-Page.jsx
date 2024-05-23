import React from 'react';
import Layout from "@/components/layout/LayoutCather.jsx";
import HeroMain from "@/components/HeroSection/HeroMain.jsx";
import AboutMain from "@/components/AboutSection/AboutMain.jsx";
import SkillsMain from "@/components/SkillsSection/SkillsMain.jsx";
import ServiceMain from "@/components/ServiceSection/ServiceMain.jsx";
import QualificationMain from "@/components/QualificationSection/QualificationMain.jsx";
import TestimonialMain from "@/components/Testimonial Section/TestimonialMain.jsx";
import ContactMain from "@/components/ContactSection/ContactMain.jsx";
import ProjectProtfolioMain from "@/components/ProtfolioSection/ProjectProtfolioMain.jsx";

const HomePage = () => {
    return (
       <Layout>
           <HeroMain/>
           <AboutMain/>
           <SkillsMain/>
           <ServiceMain/>
           <QualificationMain/>
           <ProjectProtfolioMain/>
           <TestimonialMain/>
           <ContactMain/>

       </Layout>
    );
};

export default HomePage;
