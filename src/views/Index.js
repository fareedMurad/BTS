/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// import {animations} from '../animations/animations.js'
import Fade from "react-reveal/Fade";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import locale from "locale/locale.js";
import config from "../config.js";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: locale(),
    };
    console.log(this.state);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(e) {
    this.setState({ loc: locale(true) });
  }
  render() {
    const { loc } = this.state;
    return (
      <>
        <IndexNavbar
          fixed
          config={config}
          loc={this.state.loc}
          changeLanguage={this.changeLanguage}
        />
        <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
          <div className="container mx-auto items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
              <div className="pt-32 sm:pt-0">
                <h2 className="font-semibold text-4xl text-blueGray-600">
                  {loc.pitch.heading}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  {loc.pitch.details}{" "}
                </p>
                <div className="mt-12">
                  <a
                    href={config.login_url}
                    className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    target="_blank"
                  >
                    {loc.pitch.login}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Fade top>
            <img
              className={`absolute top-0 b-auto  ${
                document.getElementsByTagName("html")[0].getAttribute("dir") ===
                "ltr"
                  ? "right-0"
                  : "left-0"
              } pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px`}
              src={require("assets/img/pattern_react.png").default}
              alt="..."
            />
          </Fade>
        </section>
        <div id="features"></div>

        <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
          <div
            className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-100 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              {console.log('left',loc.left, 'right',loc.right)}
              <Fade left={loc?.left} right={loc?.right} >
                <div
                  className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
                  id="feature"
                >
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-500">
                    <div className="card-image rounded-t-lg">
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        className="w-full align-middle rounded-t-lg"
                      />
                    </div>
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-red-500 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl font-bold text-white">
                        {loc.features.sb_heading}
                      </h4>
                      <p className="text-md font-light mt-2 text-white">
                        {loc.features.sb_details}
                      </p>
                    </blockquote>
                  </div>
                </div>
              </Fade>

              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <Fade right={loc?.left} left={loc?.right} >
                      <div className="relative flex flex-col mt-4">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i className="fas fa-sitemap"></i>
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">
                            {loc.features.iptv_h}
                          </h6>
                          <p className="mb-4 text-blueGray-500">
                            {loc.features.iptv_d}
                          </p>
                        </div>
                      </div>
                    </Fade>
                    <Fade  right={loc?.left} left={loc?.right} delay={100}>
                      <div className="relative flex flex-col min-w-0">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i className="fas fa-drafting-compass"></i>
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">
                            {loc.features.app_game_h}
                          </h6>
                          <p className="mb-4 text-blueGray-500">
                            {loc.features.app_game_d}{" "}
                          </p>
                        </div>
                      </div>
                    </Fade>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <Fade right={loc?.left} left={loc?.right}  delay={200}>
                      <div className="relative flex flex-col min-w-0 mt-4">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i className="fas fa-newspaper"></i>
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">
                            {loc.features.multi_lang_h}{" "}
                          </h6>
                          <p className="mb-4 text-blueGray-500">
                            {loc.features.multi_lang_d}
                          </p>
                        </div>
                      </div>
                    </Fade>

                    <Fade right={loc?.left} left={loc?.right}  delay={300}>
                      <div className="relative flex flex-col min-w-0 mt-5">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i className="fas fa-file-alt"></i>
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">
                            {loc.features.his_integ_h}
                          </h6>
                          <p className="mb-4 text-blueGray-500">
                            {loc.features.his_integ_d}
                          </p>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Fade bottom>
            <div className="container mx-auto overflow-hidden pb-20">
              <div className="flex flex-wrap justify-center items-center">
                <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-sitemap text-xl"></i>
                  </div>
                  <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    {loc.admin_panel.heading}
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    {loc.admin_panel.details}
                  </p>
                </div>

                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
                  <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                    <img
                      alt="..."
                      src={
                        require("assets/img/component-info-card.png").default
                      }
                      className="w-full align-middle rounded absolute shadow-lg max-w-200-px z-3 left-145-px -top-29-px"
                    />
                    <img
                      alt="..."
                      src={
                        require("assets/img/component-profile-card.png").default
                      }
                      className="w-full align-middle rounded-lg absolute shadow-lg -top-155-px left-260-px max-w-210-px"
                    />
                    <img
                      alt="..."
                      src={require("assets/img/component-info-2.png").default}
                      className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <div className="container mx-auto px-4 pb-32 pt-48">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-file-alt text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                    {loc.medical.heading}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    {loc.medical.details}
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <Fade left={loc?.left} right={loc?.right} >
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                              <i className="fa fa-plus-square"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-blueGray-500">
                              {loc.medical.f1}
                            </h4>
                          </div>
                        </div>
                      </Fade>
                    </li>
                    <li className="py-2">
                      <Fade left={loc?.left} right={loc?.right}  delay={100}>
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                              <i className="fa fa-bath"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-blueGray-500">
                              {loc.medical.f2}
                            </h4>
                          </div>
                        </div>
                      </Fade>
                    </li>
                    <li className="py-2">
                      <Fade left={loc?.left} right={loc?.right}  delay={200}>
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                              <i className="fas fa-fingerprint"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-blueGray-500">
                              {loc.medical.f3}
                            </h4>
                          </div>
                        </div>
                      </Fade>
                    </li>
                    <li className="py-2">
                      <Fade left={loc?.left} right={loc?.right}  delay={300}>
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                              <i className="fa fa-user-md"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-blueGray-500">
                              {loc.medical.f4}
                            </h4>
                          </div>
                        </div>
                      </Fade>
                    </li>
                  </ul>
                </div>
              </div>

              <Fade right={loc?.left} left={loc?.right} >
                <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-xl"
                    style={{
                      transform:
                        "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                    }}
                    src={require("assets/img/bts.png").default}
                  />
                </div>
              </Fade>
            </div>
          </div>
          <div id="screenshots"></div>
          <div className="justify-center text-center flex flex-wrap mt-24">
            <div className="w-full md:w-6/12 px-12 md:px-4">
              <h2 className="font-semibold text-4xl">
                {loc.screenshots.heading}
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                {loc.screenshots.details}
              </p>
            </div>
          </div>
        </section>

        <section className="block relative z-1 bg-blueGray-600 user-interface-section">
          <div className="container mx-auto">
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4  -mt-24">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      {loc.screenshots.bst}
                    </h5>
                    <Link>
                      <Fade left={loc?.left} right={loc?.right}>
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg user-interface-screenshoot">
                          <div className="card-image">
                            <img
                              alt="..."
                              className="align-middle border-none max-w-full h-auto rounded-lg"
                              src={require("assets/img/bts.png").default}
                            />
                          </div>
                        </div>
                      </Fade>
                    </Link>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      {loc.screenshots.ns}
                    </h5>
                    <Link to="/landing">
                      <Fade bottom delay={100}>
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg user-interface-screenshoot">
                          <div className="card-image">
                            <img
                              alt="..."
                              className="align-middle border-none max-w-full h-auto rounded-lg"
                              src={require("assets/img/ns.png").default}
                            />
                          </div>
                        </div>
                      </Fade>
                    </Link>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      {loc.screenshots.ap}
                    </h5>
                    <Link>
                      <Fade right={loc?.left} left={loc?.right} delay={200}>
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg user-interface-screenshoot">
                          <div className="card-image">
                            <img
                              alt="..."
                              className="align-middle border-none max-w-full h-auto rounded-lg"
                              src={require("assets/img/aui.png").default}
                            />
                          </div>
                        </div>
                      </Fade>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0  left={loc?.left} right={loc?.right}-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div id="contact-us"></div>
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-32">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  {loc.contact_us.huu}
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  {loc.contact_us.details}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fa fa-map text-xl"></i>
                </div>
                <h6 className="text-lg mt-5 font-semibold text-white">
                  {loc.contact_us.address}
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  {loc.contact_us.address_d}
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fa fa-phone text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  {" "}
                  {loc.contact_us.phone}
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  {loc.contact_us.phone_d}
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fa fa-envelope text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  {" "}
                  {loc.contact_us.web}
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  {loc.contact_us.web_d}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-100 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      {loc.contact_us.demo_h}
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      {loc.contact_us.demo_d}
                    </p>

                    <div className="text-center mt-6">
                      <a
                        href="https://www.bitsarabia.com/contact-us/"
                        target="_blank"
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        {loc.contact_us.contact_form}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer loc={this.state.loc.footer} />
      </>
    );
  }
}
