import React from "react";
import "../styles/releaselogs.scss";
import HeadingBorderCenter from "../images/Buy-Imgs/heading-border-center.png";
import ReadMoreBtn from "../components/body/release-logs-comp/ReadMoreBtn";
import Pc from "../components/body/release-logs-comp/Pc";
import Ps4 from "../components/body/release-logs-comp/Ps4";
import XboxOne from "../components/body/release-logs-comp/XboxOne";
import { Link } from "react-router-dom";

function ReleaseLog() {
  return (
    <div className="release-logs-page-content">
      <div className="container header text-center pt-5 pb-5">
        <h1>Release Logs</h1>
        <img src={HeadingBorderCenter}></img>
      </div>

      <div className="container release-logs-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Exo mech patch 2.42</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.42 improves Pc performace and contains some gameplay
                    and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Exo mech patch 2.41</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.41 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="log-bg-exo col-12">
              <div className="log-cover pt-5 pb-5 pl-3 pr-3">
                <Link to="/PatchNotes">
                  <div className="log-title mb-5">
                    <h1>Exo mech</h1>
                  </div>
                  <div className="d-flex mb-4">
                    <Pc />
                    <Ps4 />
                    <XboxOne />
                  </div>
                  <div className="log-preview mb-4">
                    <p>
                      Soar and stomp across the landscape with the Exo Mech
                      update. Introducing a fully controllable mechanical
                      walker, new Exocraft technologies, improvements to base
                      building, and much more.
                    </p>
                  </div>
                  <div className="mb-4">
                    <ReadMoreBtn />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Living ship patch 2.34</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    This hotfix addresses a PC issue which began to occur
                    recently, and fixes a crash seen most often in the Space
                    Anomaly.
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Living ship patch 2.33</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.33 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Living ship patch 2.32</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.32 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Living ship patch 2.31</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.31 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="log-bg-living-ship col-12">
              <div className="log-cover pt-5 pb-5 pl-3 pr-3">
                <Link>
                  <div className="log-title mb-5">
                    <h1>Living ship</h1>
                  </div>
                  <div className="d-flex mb-4">
                    <Pc />
                    <Ps4 />
                    <XboxOne />
                  </div>
                  <div className="log-preview mb-4">
                    <p>
                      Explore space from a different perspective with the Living
                      Ship update. Introducing a new class of biological ship, a
                      new story mission, mysterious space encounters, space NPCs
                      and more.
                    </p>
                  </div>
                  <div className="mb-4">
                    <ReadMoreBtn />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Synthesis patch 2.27</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>Patch 2.33 includes a few minor gameplay fixes</p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Synthesis patch 2.26</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.26 is a small update to support some upcoming
                    Quicksilver shop items. Read on for more information
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Synthesis patch 2.25</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.33 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Synthesis patch 2.24</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.32 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Synthesis patch 2.23</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.31 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="log-bg-synthesis col-12">
              <div className="log-cover pt-5 pb-5 pl-3 pr-3">
                <Link>
                  <div className="log-title mb-5">
                    <h1>Synthesis</h1>
                  </div>
                  <div className="d-flex mb-4">
                    <Pc />
                    <Ps4 />
                    <XboxOne />
                  </div>
                  <div className="log-preview mb-4">
                    <p>
                      Explore space from a different perspective with the Living
                      Ship update. roducing a new class of biological ship, a
                      new story mission, mysterious space encounters, space NPCs
                      and more.
                    </p>
                  </div>
                  <div className="mb-4">
                    <ReadMoreBtn />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="row mt-5 mb-5">
            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Beyond patch 2.16</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>Patch 2.16 includes a few minor gameplay fixes</p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Synthesis patch 2.15</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.15 is a small update to support some upcoming
                    Quicksilver shop items. Read on for more information
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Synthesis patch 2.14</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.14 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Synthesis patch 2.13</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.13 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Synthesis patch 2.11</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.11 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Synthesis patch 2.10</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.10 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Synthesis patch 2.09</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.09 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Synthesis patch 2.08</h1>
                </div>
                <div className="d-flex mb-4">
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.08 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Synthesis patch 2.07</h1>
                </div>
                <div className="d-flex mb-4">
                  <Ps4 />
                  <XboxOne />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.07 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 pt-5 pb-5">
              <Link>
                <div className="log-title mb-5">
                  <h1>Synthesis patch 2.06</h1>
                </div>
                <div className="d-flex mb-4">
                  <Pc />
                </div>
                <div className="log-preview mb-4">
                  <p>
                    Patch 2.06 includes a number of gameplay and stability fixes
                  </p>
                </div>
                <div className="mb-4">
                  <ReadMoreBtn />
                </div>
              </Link>
            </div>

            <div className="log-bg-beyond col-12">
              <div className="log-cover pt-5 pb-5 pl-3 pr-3">
                <Link>
                  <div className="log-title mb-5">
                    <h1>Beyond</h1>
                  </div>
                  <div className="d-flex mb-4">
                    <Pc />
                    <Ps4 />
                    <XboxOne />
                  </div>
                  <div className="log-preview mb-4">
                    <p>
                      Explore space from a different perspective with the Living
                      Ship update. roducing a new class of biological ship, a
                      new story mission, mysterious space encounters, space NPCs
                      and more.
                    </p>
                  </div>
                  <div className="mb-4">
                    <ReadMoreBtn />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReleaseLog;
