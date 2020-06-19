import React from "react";
import "../styles/home.scss";
import HeroLogo from "../images/home-imgs/home-logo.png";
import BGSection3 from "../images/home-imgs/bg-section-4.jpg";
import BGSection4 from "../images/home-imgs/bg-section-3.jpg";
import BGSection5 from "../images/home-imgs/bg-section-5.jpg";
import BGSection6 from "../images/home-imgs/bg-section-6.jpg";
import PurchaseButtons from "../components/body/purchase-buttons/PurchaseButtons";

function Home() {
  return (
    <div className="home-page-content">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-logo">
            <img src={HeroLogo} alt="Logo"></img>
          </div>
          <div className="purchase-container">
            <div className="purchase-content">
              <h1>Buy Now</h1>
              <h3>On Sale Now On XBOX ONE, PC AND PS4</h3>
            </div>
            <PurchaseButtons />
          </div>
        </div>
      </div>
      <section className="futures-list pt-3 pb-3">
        <div className="container">
          <div className="row d-lg-flex justify-content-around">
            <div className="col-12 col-md-6 col-lg-2 text-center">
              <h1>Infiite</h1>
              <p>Entire galaxies lie waiting to be discovered.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-2 text-center">
              <h1>Story</h1>
              <p>
                Experience infinite freedom, or uncover the secrets of the
                universe with more than 30 hours of story.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-2 text-center">
              <h1>Multiplayer</h1>
              <p>
                Dogfight, race exocraft, build colonies, explore, trade, fight
                and survive together.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-2 text-center">
              <h1>VR</h1>
              <p>
                The entire game playable in virtual reality for a more immersive
                experience.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-2 text-center">
              <h1>Beyond</h1>
              <p>
                Our 2.0 update adds even more depth and features and brings all
                the strands of No Man’s Sky into a cohesive whole.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-content bg-section-3 pt-3 ">
        <div>
          <div className="row">
            <div className="col-12 col-lg-5 text-content p-5 ml-auto">
              <h2>Explore</h2>
              <h3>In an infinite universe</h3>
              <p>
                Be the first to land on beautiful, unknown planets teeming with
                life. Survive hazardous environments, where alien civilizations
                seek their fortune and outlaws take it by force.
              </p>
            </div>
            <div className="col-12 col-lg-6 d-lg-none">
              <img alt="" src={BGSection3}></img>
            </div>
          </div>
        </div>
      </section>
      <section className="home-content bg-section-4 pt-3 ">
        <div>
          <div className="row">
            <div className="col-12 col-lg-5 text-content p-5 ">
              <h2>Build</h2>
              <h3>Base building, anywhere, on any planet</h3>
              <p>
                Team up to build anything from small outposts to complex
                multi-planet colonies. Farm for resources, hire helpers, or
                build a mobile base in your freighter.
              </p>
            </div>
            <div className="col-12 col-lg-6 d-lg-none">
              <img alt="" src={BGSection4}></img>
            </div>
          </div>
        </div>
      </section>
      <section className="home-content bg-section-5 pt-3 ">
        <div>
          <div className="row">
            <div className="col-12 col-lg-5 text-content p-5 ml-auto">
              <h2>Multiplayer</h2>
              <h3>Explore, Build and Survive Together</h3>
              <p>
                Experience up to 32 player multiplayer when you summon the
                social hub, the Space Anomaly, from anywhere in the universe.
                Form a group, go on inter-galactic missions together or visit
                each other’s bases
              </p>
            </div>
            <div className="col-12 col-lg-6 d-lg-none">
              <img alt="" src={BGSection5}></img>
            </div>
          </div>
        </div>
      </section>
      <section className="home-content bg-section-6 pt-3 ">
        <div>
          <div className="row">
            <div className="col-12 col-lg-5 text-content p-5 ">
              <h2>Community</h2>
              <h3>Join the intergalactic neighbourhood</h3>
              <p>
                Join one of the thriving community Galactic Hubs, where you and
                like-minded travellers can create a new frontier.
              </p>
            </div>
            <div className="col-12 col-lg-6 d-lg-none">
              <img alt="" src={BGSection6}></img>
            </div>
          </div>
        </div>
      </section>
      <section className="home-content futures-list pt-3 ">
        <div>
          <div className="row">
            <div className="col-12 col-lg-5 text-content p-5 ml-auto ">
              <h2>Evolving</h2>
              <h3>No Man’s Sky represents a constantly growing experience</h3>
              <p>
                No Man’s Sky is continuously evolving with major updates which
                grow and expand the universe with new ways to play.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
