import React from "react";
import Logo from "../../../assets/images/logo.png";

//import Navbar2 from '../navbar/navbar2';
import Navbar2 from "../../navbar/navbar2";
export default function AppNavBar(props) {
  return (
    <header
      id="header"
      style={props.language === "ar" ? { transform: "rotateY(180deg)" } : null}
    >
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <a href="index.html" class="logo" style={{ margin: 0 }}>
              <img
                src={Logo}
                alt=""
                style={
                  props.language === "ar"
                    ? { transform: "rotateY(180deg)" }
                    : null
                }
              />
            </a>
            <a
              style={{
                "margin-right": "0px",
                "margin-top": "19px",
                "margin-left": "8px",
              }}
              class="language navbar-toggle collapsed"
              aria-expanded="false"
              href="/"
            >
              EN
            </a>
          </div>
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <Navbar2 {...props} style={{ float: "right" }} />
          </div>
        </div>
      </nav>
    </header>
  );
}
