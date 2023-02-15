import React from "react";
import { LogoNavbar } from "../components/Navs";
import { Container, Tabs, Tab } from "react-bootstrap";
import { LoginForm, SignupForm } from "../components/Forms";

function Login(props) {
  return (
    <div className="vh-100 bg-black">
      <LogoNavbar />
      <main className="p-5">
        <Container className="p-3 bg-light rounded">
          <Tabs
            defaultActiveKey="login"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="login" title="Login">
              <LoginForm />
            </Tab>
            <Tab eventKey="signup" title="Sign Up">
              <SignupForm />
            </Tab>
          </Tabs>
        </Container>
      </main>
    </div>
  );
}

export default Login;
