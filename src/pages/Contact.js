import React from "react";
import HeadingBorderCenter from "../images/Buy-Imgs/heading-border-center.png";
import "../styles/contact.scss";

export default function Contact() {
  return (
    <div className="contact-page-content">
      <div className="container header text-center pt-5 pb-5">
        <h1>Contact</h1>
        <img src={HeadingBorderCenter}></img>
      </div>

      <div className="container contact-content pl-3 pr-3">
        <div className="contact">
          <p>
            No Man’s Sky is being developed by{" "}
            <a href="helogames.org">Hello Games</a>, a tiny indie studio based
            in Guildford, UK. We previously made the{" "}
            <a href="helogames.org">Joe Danger series</a> on consoles, PC and
            iOS.
          </p>
        </div>

        <div className="contact">
          <h2>Community</h2>
          <p>
            If you’d like to discuss the game, consider visiting{" "}
            <a href="https://www.reddit.com/r/NoMansSkyTheGame/">
              No Man’s Sky’s subreddit
            </a>{" "}
            , or via{" "}
            <a href="https://www.facebook.com/NoMansSky">
              our official Facebook page
            </a>
            .
          </p>
        </div>

        <div className="contact">
          <h2>Support</h2>
          <p>
            If you need to report a bug/issue, or would like to request support,
            head over to our{" "}
            <a href="https://hellogames.zendesk.com/hc/en-us">Help Centre</a>.
            If you have a payment related issue, please get in touch with your
            supplier at point of sale.
          </p>
        </div>

        <div className="contact">
          <h2>Email</h2>
          <p>
            If you want to get in touch generally, send us an email at
            <a href="helogames.org"> hello@hellogames.co.uk</a> .
            hello@hellogames.co.uk. We don’t have much time to write back, but
            we read every message. We especially love amazing fan art and
            stories.
          </p>
        </div>
      </div>
    </div>
  );
}
