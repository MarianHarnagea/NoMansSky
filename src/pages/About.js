import React from "react";
import "../styles/about.scss";
import HeadingBorderCenter from "../images/Buy-Imgs/heading-border-center.png";
import ReactPlayer from "react-player";
import ESRB from "../images/About-Imgs/ESRB-FantasyViolence.png";

function About() {
  return (
    <div className="about-page-content">
      <div className="container about-content pb-5">
        <div className="header text-center pt-5 pb-5">
          <h1>About</h1>
          <img alt="" src={HeadingBorderCenter}></img>
        </div>

        <div className="section-content">
          <p>
            No Man’s Sky is a game about exploration and survival in an infinite
            procedurally generated galaxy, available on PS4, PC, and Xbox One.
          </p>
          <div className="media-content responsive-media">
            <ReactPlayer
              className="player"
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=xpcoO7bTV48"
            />
          </div>
        </div>

        <div className="section-content">
          <h2>No Man’s Sky is a truly open universe</h2>
          <img alt="" src={HeadingBorderCenter}></img>
          <p>
            Whether a distant mountain or a planet hanging low on the horizon,
            you can go there. You can fly seamlessly from the surface of a
            planet to another, and every star in the sky is a sun that you can
            visit.
          </p>
          <p>
            Where you’ll go and how fast you’ll make your way through this
            universe is up to you. It’s yours for the taking.
          </p>
          <div className="media-content responsive-media">
            <ReactPlayer
              className="player"
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=WQhSP82uhY4"
            />
          </div>
        </div>

        <div className="section-content">
          <h2>Exploration is seeing things no one has ever seen before</h2>
          <img alt="" src={HeadingBorderCenter}></img>
          <p>
            Explore uncharted solar systems and catalogue unique new forms of
            life. Every planet’s landscape is different from the next, and
            populated by species never before encountered.
          </p>
          <p>
            Find ancient artefacts that could reveal the secrets behind the
            universe.
          </p>
          <p>
            Choose whether to share your discoveries with other players. They’re
            exploring the same vast universe in parallel; perhaps you’ll make
            your mark on their worlds as well as your own.
          </p>

          <div className="media-content responsive-media">
            <ReactPlayer
              className="player"
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=MZO40WBNA60"
            />
          </div>
        </div>

        <div className="section-content">
          <h2>Survive on a dangerous frontier</h2>
          <img alt="" src={HeadingBorderCenter}></img>

          <p>
            Every solar system, planet, ocean and cave is filled with danger,
            and you are vulnerable.
          </p>
          <p>
            Your ship and suit are fragile, and every encounter can test your
            skills to the limit. From dogfighting in space to firstperson combat
            on a planet’s surface, you will face foes ready to overwhelm you.
          </p>
          <p>
            And one mistake could see you lose everything. In No Man’s Sky,
            every victory and every defeat has lasting consequences.
          </p>
          <div className="media-content responsive-media">
            <ReactPlayer
              className="player"
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=RRpDn5qPp3s"
            />
          </div>
        </div>

        <div className="section-content">
          <h2>Build for an epic journey</h2>
          <img alt="" src={HeadingBorderCenter}></img>
          <p>
            Whether you want to explore and see things never before discovered,
            or directly set course for the centre of the galaxy, how you play No
            Man’s Sky is up to you.
          </p>
          <p>
            But you cannot take your voyage lightly. You’ll need to prepare.
          </p>
          <p>
            Collect precious resources on the surfaces of planets and trade them
            for the ships, suits and equipment that will take you to your
            destiny in the stars.
          </p>
        </div>

        <div className="galery text-center">
          <h2>Screenshots</h2>
          <img alt="" src={HeadingBorderCenter}></img>
        </div>

        <div className="section-content">
          <h2>Community</h2>
          <img alt="" src={HeadingBorderCenter}></img>

          <p>
            If you want to discuss the game, consider visiting{" "}
            <a href="/about">No Man’s Sky’s subreddit</a>, and we also have an{" "}
            <a href="/about">official Facebook paget</a>.
          </p>
        </div>

        <div className="section-content">
          <h2>The team</h2>
          <img alt="" src={HeadingBorderCenter}></img>
          <p>
            No Man’s Sky is being developed by <a href="/about"> Hello Games</a>
            , a tiny indie studio in Guildford, UK. We previously made the Joe
            Danger series, but now we’re casting our eyes to the heavens.{" "}
            <a href="/about">Find out more about us here</a>.
          </p>
        </div>

        <div className="section-content pt-5">
          <img alt="" src={ESRB}></img>
        </div>
      </div>
    </div>
  );
}

export default About;
