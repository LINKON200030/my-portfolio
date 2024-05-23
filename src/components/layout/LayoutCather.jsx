import React from 'react';
import NavBar from "@/components/layout/navBar.jsx";
import Footer from "@/components/layout/footer.jsx";

const Layout = (props) => {
    return (
        <>
            <NavBar/>
            {props.children}
            <Footer/>

        </>
    );
};

export default Layout;
