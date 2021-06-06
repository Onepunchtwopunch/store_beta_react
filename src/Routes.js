import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Views/MainPage/MainPage";
import ProductCreatePage from "./Views/ProductCreatePage/ProductCreatePage";
import ProductDetailPage from "./Views/ProductDetailPage/ProductDetailPage";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={MainPage} exact />
                <Route
                    path="/products/create"
                    component={ProductCreatePage}
                    exact
                />
                <Route
                    path="/products/:id"
                    component={ProductDetailPage}
                    exact
                />
            </Switch>
        </Router>
    );
};

export default Routes;
