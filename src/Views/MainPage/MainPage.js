import React from "react";
import HeroSlider from "../../components/HeroSlider";
import ProductsList from "../../components/ProductsList";
import MainLayout from "../../Layouts/MainLayout";

const MainPage = () => {
    return (
        <MainLayout>
            <HeroSlider />
            <ProductsList />
        </MainLayout>
    );
};

export default MainPage;
