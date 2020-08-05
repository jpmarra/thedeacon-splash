import React, { Component } from "react";
import SweetScroll from "sweet-scroll";
import BurgerMenu from "./components/BurgerMenu";
import BookNow from "./components/BookNow";
import Splash from "./components/Splash.js";
import ContentModule from "./components/ContentModule";
import About from "./components/About";
import History from "./components/History";
import Map from "./components/Map";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Dictionary from "./dictionary";
import {
    ToastsContainer,
    ToastsContainerPosition,
    ToastsStore
} from "react-toasts";
import "normalize.css";
import "./styles/index.scss";

class App extends Component {
    constructor() {
        super();
        this.state = {
            burgerOpen: false,
            windowSize: "large",
            isModalOpen: false
        };

        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.sweetScroll = new SweetScroll();
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        if (window.innerWidth < 900) {
            this.setState({ windowSize: "small" });
        } else if (window.innerWidth > 900 && window.innerWidth < 1250) {
            this.setState({ windowSize: "medium" });
        } else if (window.innerWidth > 1250) {
            this.setState({ windowSize: "large" });
        }
    }

    handleScroll(element) {
        this.sweetScroll.to(element);
        this.setState({ burgerOpen: false });
    }

    handleBurgerChange(state) {
        this.setState({ burgerOpen: state.isOpen });
    }

    fadeInOpacity(range, start) {
        const currentY = Math.round(Math.abs(window.scrollY));
        const end = start + range;

        return currentY < end ? (currentY - start) / (end - start) : 1;
    }

    fadeOutOpacity(range) {
        const currentY = Math.round(Math.abs(window.scrollY));

        return currentY < range ? (range - currentY) / range : 0;
    }

    render() {
        return (
            <>
                {this.state.isModalOpen && (
                    <Modal
                        handleModalToggle={() =>
                            this.setState({ isModalOpen: false })
                        }
                    />
                )}
                <div id="App">
                    {this.state.windowSize === "small" ? (
                        <BurgerMenu
                            pageWrapId={"page-wrap"}
                            outerContainerId={"App"}
                            handleScroll={this.handleScroll.bind(this)}
                            onStateChange={this.handleBurgerChange.bind(this)}
                            isOpen={this.state.burgerOpen}
                        />
                    ) : null}
                    <div id="page-wrap" className="deacon">
                        <Splash
                            handleScroll={this.handleScroll.bind(this)}
                            fadeOutOpacity={this.fadeOutOpacity.bind(this)}
                        />
                        <div className="deacon-splash__content-container">
                            {Dictionary.contentModules.map((content, idx) => (
                                <ContentModule
                                    key={idx}
                                    title={content.title}
                                    copy={content.copy}
                                    image={content.image}
                                    imageDescriptor={content.imageDescriptor}
                                    orientation={content.orientation}
                                />
                            ))}
                            <div className="deacon-splash__outro">
                                <span>{Dictionary.splashOutro}</span>
                            </div>
                        </div>
                        <About />
                        <History
                            title={Dictionary.history.title}
                            copy={Dictionary.history.copy}
                            windowSize={this.state.windowSize}
                            image={
                                this.state.windowSize === "medium"
                                    ? Dictionary.history.wideImage
                                    : Dictionary.history.image
                            }
                            imageDescriptor={Dictionary.history.imageDescriptor}
                        />
                        <Map />
                        <Contact />
                        <Footer />
                        <BookNow
                            fadeInOpacity={this.fadeInOpacity.bind(this)}
                        />
                    </div>
                    <ToastsContainer
                        lightBackground
                        className="toast-style"
                        store={ToastsStore}
                        position={ToastsContainerPosition.BOTTOM_CENTER}
                    />
                </div>
            </>
        );
    }
}

export default App;
