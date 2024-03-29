import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import FollowingPage from "./views/FollowingPage/FollowingPage";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import EditProductPage from "./views/EditProductPage/EditProductPage";
import MyPage from "./views/MyPage/MyPage";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div
        style={{
          minHeight: "calc(100vh - 80px)",
          padding: "138px 10% 0 10%",
        }}
      >
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route
            exact
            path="/following"
            component={Auth(FollowingPage, true)}
          />
          <Route exact path="/mypage" component={Auth(MyPage, true)} />
          <Route
            exact
            path="/product/upload"
            component={Auth(UploadProductPage, true)}
          />
          <Route
            exact
            path="/product/:productId"
            component={Auth(DetailProductPage, null)}
          />
          <Route
            exact
            path="/productEdit/:productId"
            component={Auth(EditProductPage, true)}
          />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
