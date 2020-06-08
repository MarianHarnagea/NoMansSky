import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PatchNotes from "./pages/PatchNotes";
import Buy from "./pages/Buy";
import About from "./pages/About";
import HelpCenter from "./pages/HelpCenter";
import ReleaseLog from "./pages/ReleaseLog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Agreements from "./pages/Agreements";
import Contact from "./pages/Contact";

// Components
import Header from "./components/navbar/Header";
import MobileNav from "./components/navbar/MobileNav";
import Footer from "./components/footer/Footer";

class App extends Component {
  state = {
    mobileNavOpen: false,
  };

  mobileNavClickHandeler = () => {
    this.setState((prevState) => {
      return { mobileNavOpen: !prevState.mobileNavOpen };
    });
  };

  linkCloseNavClickHandeler = () => {
    this.setState({ mobileNavOpen: false });
  };

  render() {
    let sideNav;

    if (this.state.mobileNavOpen) {
      sideNav = <MobileNav click={this.linkCloseNavClickHandeler} />;
    }
    return (
      <Router>
        <div className="App">
          <Header
            sideNavClickHandeler={this.mobileNavClickHandeler}
            click={this.linkCloseNavClickHandeler}
          />
          {sideNav}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/PatchNotes" component={PatchNotes} />
            <Route exact path="/Buy" component={Buy} />
            <Route exact path="/About" component={About} />
            <Route exact path="/HelpCenter" component={HelpCenter} />
            <Route exact path="/ReleaseLog" component={ReleaseLog} />
            <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
            <Route exact path="/Agreements" component={Agreements} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
