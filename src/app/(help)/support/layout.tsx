import React from 'react';
import GlobalNavbarComponent from "@/components/UI/Nav/GlobalNavbarComponent";
import FooterClientComponent from "@/components/UI/Footer/Footer";

const SupportLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <GlobalNavbarComponent/>
                {children}
            <FooterClientComponent/>
        </>
    );
};

export default SupportLayout;