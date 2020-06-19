import React from "react";
import "../styles/patchnotes.scss";
import ReactPlayer from "react-player";
import PurchaseButtons from "../components/body/purchase-buttons/PurchaseButtons";

// Images
import HeroBanner from "../images/Patch-Notes-Imgs/patchnotes-banner.png";
import Minotaur from "../images/Patch-Notes-Imgs/minotaur.png";
import Minotaur1 from "../images/Patch-Notes-Imgs/minotaur-1.jpg";
import Minotaur2 from "../images/Patch-Notes-Imgs/minotaur-2.jpg";
import Minotaur3 from "../images/Patch-Notes-Imgs/minotaur-3.jpg";
import VR from "../images/Patch-Notes-Imgs/beyond-vr.png";
import HeadingBorderCenter from "../images/Patch-Notes-Imgs/heading-border-center.png";
import ImgPatch4 from "../images/Patch-Notes-Imgs/expanded-exploration.png";
import Img2Patch4 from "../images/Patch-Notes-Imgs/expanded-exploration-1.jpg";
import Img3Patch4 from "../images/Patch-Notes-Imgs/expanded-exploration-2.jpg";
import TopBgPatch4 from "../images/Patch-Notes-Imgs/top-bg-patch-4.jpg";
import ImgPatch5 from "../images/Patch-Notes-Imgs/new-exocraft.jpg";
import ImgPatch6 from "../images/Patch-Notes-Imgs/img-patch-6.jpg";
import Img2Patch6 from "../images/Patch-Notes-Imgs/bottom-bg-patch-6.jpg";
import ImgPatch7 from "../images/Patch-Notes-Imgs/exocraft-decals.jpg";
import Img2Patch7 from "../images/Patch-Notes-Imgs/exocraft-decals-2.png";

function PatchNotes() {
  return (
    <div>
      <div className="patch-notes-hero">
        <div className="hero-banner">
          <img alt="" src={HeroBanner}></img>
        </div>
      </div>

      <div className="main-bg-patch-1">
        <div className="patch-1">
          <div className="container pt-4 pb-4">
            <div className="text-content">
              <h1>EXO MECH: INTRODUCING UPDATE 2.4</h1>

              <img alt="" src={HeadingBorderCenter}></img>
              <p>
                Soar and stomp across the landscape with the{" "}
                <span>Exo Mech </span>
                update. Introducing a fully controllable mechanical walker, new
                Exocraft technologies, improvements to base building, and much
                more.
              </p>
            </div>

            <div className="media-content responsive-media">
              <ReactPlayer
                className="player"
                width="100%"
                height="100%"
                url="https://www.youtube.com/watch?v=yZ8m9cxFKNo"
              />
            </div>

            <div className="purchase-content">
              <h1>Buy Now On</h1>
              <PurchaseButtons />
            </div>
          </div>
        </div>
      </div>

      <div className="main-bg-patch-2">
        <div className="patch-2 ">
          <div className="container pt-4 pb-4">
            <div className="text-content">
              <h1>THE MINOTAUR</h1>

              <img alt="" src={HeadingBorderCenter}></img>
              <p>
                The Minotaur Heavy Exocraft Hybrid is an
                <span> all-new way to explore planets.</span> This advanced
                mechanical walker dominates the landscape and offers unique new
                technologies.
              </p>
            </div>

            <div className="media-content">
              <img alt="" src={Minotaur}></img>
            </div>

            <div className="media-content mt-4">
              <div className="row">
                <div className="col-6 col-md-4">
                  <img alt="" src={Minotaur1}></img>
                </div>
                <div className="col-6 col-md-4">
                  <img alt="" src={Minotaur2}></img>
                </div>
                <div className="col-6 col-md-4 mt-4 mt-md-0 ml-auto mr-auto">
                  <img alt="" src={Minotaur3}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-bg-patch-3">
        <div className="patch-3 ">
          <div className="container pt-4 pb-4">
            <div className="text-content">
              <h1>IMMERSIVE COCKPIT</h1>

              <img alt="" src={HeadingBorderCenter}></img>
              <p>
                Power your way through storms in the unique and compact interior
                of your new Minotaur mechanical walker. Steer, stride and leap
                from the atmospheric perspective of a mech pilot, and examine
                extra planetary data readouts in full 360° in VR.
              </p>
            </div>

            <div className="media-content mt-4">
              <img style={{ maxWidth: 700 }} src={VR} alt=""></img>
            </div>
          </div>
        </div>
      </div>

      <div className="main-bg-patch-4">
        <div className="media-content">
          <img alt="" src={TopBgPatch4}></img>
        </div>
        <div className="patch-4 ">
          <div className="container pt-4 pb-4">
            <div className="text-content">
              <h1>EXPANDED EXPLORATION ABILITIES</h1>

              <img alt="" src={HeadingBorderCenter}></img>
              <p>
                The Minotaur is <span>immune to all planetary hazards</span> and
                is able to <span>directly collect valuable materials</span>,
                keeping its pilot safe at all times.
              </p>
            </div>

            <div className="media-content mt-4">
              <img src={ImgPatch4} alt=""></img>
            </div>
            <div className="media-content mt-4">
              <img src={Img2Patch4} alt=""></img>
            </div>
            <div className="text-content">
              <p>
                The Minotaur’s mining laser can be upgraded to a{" "}
                <span>Terrain Manipulator</span>, allowing it to bore directly
                through the earth.
              </p>
            </div>
            <div className="media-content mt-4">
              <img src={Img3Patch4} alt=""></img>
            </div>
          </div>
        </div>
      </div>

      <div className="main-bg-patch-5">
        <div className="patch-5 ">
          <div className="container pt-4 pb-4">
            <div className="text-content">
              <h1>NEW EXOCRAFT TECHNOLOGIES</h1>

              <img alt="" src={HeadingBorderCenter}></img>
              <p>
                Exocraft can now be upgraded with <span>solar panels </span>
                to recharge their engines during daylight.
              </p>
            </div>

            <div className="media-content mt-4">
              <img src={ImgPatch5} alt=""></img>
            </div>
          </div>
        </div>
      </div>

      <div className="main-bg-patch-6">
        <div className="patch-6 ">
          <div className="container pt-4 pb-4">
            <div className="text-content">
              <h1>IMPROVED EXOCRAFT SCANNING</h1>

              <img alt="" src={HeadingBorderCenter}></img>
              <p>
                All Exocraft equipped with the Signal Booster necessary to
                perform scans will now find that their scan
                <span> reveals all nearby points of interest</span>, pointing
                the way to objects usually found only through use of the
                Analysis Visor..
              </p>
            </div>

            <div className="media-content mt-4">
              <img src={ImgPatch6} alt=""></img>
            </div>
          </div>
        </div>
        <div className="media-content">
          <img src={Img2Patch6} alt=""></img>
        </div>
      </div>

      <div className="main-bg-patch-7">
        <div className="patch-7 ">
          <div className="container pt-4 pb-4">
            <div className="text-content">
              <h1>NEW EXOCRAFT DECALS</h1>

              <img alt="" src={HeadingBorderCenter}></img>
              <p>
                Players who have unlocked decals from the Quicksilver Companion
                Robot can now use these exotic decals to{" "}
                <span>customise their Exocraft</span>.
              </p>
            </div>

            <div className="media-content mt-4">
              <img src={ImgPatch7} alt=""></img>
            </div>
            <div className="media-content mt-4">
              <img src={Img2Patch7} alt=""></img>
            </div>
          </div>
        </div>
      </div>

      <div className="patch-notes-main-bg">
        <div className="patch-notes-inner-bg">
          <div className="container">
            <div className="purchase-content">
              <h1>Buy Now On</h1>
              <PurchaseButtons />
            </div>

            <div className="text-content mt-5">
              <h1>NEW EXOCRAFT DECALS</h1>

              <img alt="" src={HeadingBorderCenter}></img>
            </div>

            <div className="patch-notes-content pl-2 pl-lg-4 mt-5">
              <h3>The Minotaur</h3>
              <ul>
                <li>
                  Added a new planetary Exocraft, the Minotaur Heavy Exosuit
                  Hybrid.
                </li>
                <li>
                  Acquire the plans for the Minotaur Geobay at the Construction
                  Research Station aboard the Space Anomaly.{" "}
                </li>
                <li>
                  The Minotaur allows exploration in even the most extreme
                  environments, with a unique hazard protection upgrade that
                  keeps the pilot safe from environmental damage.
                </li>
                <li>
                  The Minotaur comes with its own set of upgrades and
                  technologies.
                </li>
                <li>
                  Blueprints are available to purchase from Iteration: Perses on
                  the Space Anomaly.
                </li>
                <li>
                  Upgrade Modules can be found at the Exocraft Technology
                  Merchant at your local Space Station.
                </li>
                <li>
                  Other specialist Minotaur abilities include the ability to
                  upgrade its mining laser with Terrain Manipulation
                  capabilities, and the ability to collect or harvest rare
                  planetary resources such as Storm Crystals without leaving the
                  safety of the cabin.
                </li>
              </ul>
            </div>

            <div className="patch-notes-content pl-2 pl-lg-4 mt-5">
              <h3>Exocraft Hazard Changes</h3>
              <ul>
                <li>
                  Exocraft no-longer grant immunity to planetary hazards by
                  default. External environmental conditions will now drain the
                  player’s hazard protection, though at a reduced rate from on
                  planet.
                </li>
                <li>
                  Specialist technologies have been made available at Iteration:
                  Perses on the Space Anomaly that allow Exocraft to be upgraded
                  to prevent environmental damage
                </li>
              </ul>
            </div>

            <div className="patch-notes-content pl-2 pl-lg-4 mt-5">
              <h3>New Exocraft Technologies</h3>
              <ul>
                <li>
                  Perses now also offers the Icarus Fuel System, an Exocraft
                  upgrade that recharges the engine during daylight.{" "}
                </li>
                <li>
                  The Exocraft Scanner has been improved. Performing a standard
                  scan will now reveal all nearby points of interest – i.e. all
                  those that would be revealed by using the Analysis Visor.
                </li>
                <li>
                  Added an Orbital Exocraft Materialiser. This is a new
                  freighter module that will allow all Exocraft to be summoned
                  while the freighter is in-system.
                </li>
              </ul>
            </div>

            <div className="patch-notes-content pl-2 pl-lg-4 mt-5">
              <h3>Exocraft Quality of Life and Other Fixes </h3>
              <ul>
                <li>Added new decal options to Exocraft customisation. </li>
                <li>
                  Exocraft cockpits now match the customisation of their
                  exterior.
                </li>
                <li>
                  Improved the light cast by the headlights of all Exocraft.
                </li>
                <li>
                  Increased the base speed of the Roamer, Nomad and Pilgrim
                  exocraft.
                </li>
                <li>
                  Tweaked a number of Exocraft cameras to improve visibility.
                </li>
                <li>
                  Increased the speed and acceleration of the Nautilon
                  submarine, and tweaked its camera positioning.{" "}
                </li>
                <li>
                  Fixed an issue that caused the Exocraft fuel efficiency stat
                  not to increase fuel efficiency.
                </li>
                <li>
                  Fixed an issue that caused the Exocraft speedometer to flash
                  during a storm.
                </li>
                <li>
                  Fixed an issue that prevented items in the Exocraft inventory
                  from being available for crafting.{" "}
                </li>
                <li>Added a coordinates readout to the Exocraft HUD data.</li>
                <li>
                  Reduced the blueprint and construction cost of some Geobay
                  blueprints.
                </li>
                <li>
                  Fixed an issue that caused the Exocraft mining laser to be
                  ineffective when used on minable objects.{" "}
                </li>
                <li>
                  Fixed an issue that caused Exocraft to turn invisible when
                  saving and charting at a waypoint.
                </li>
                <li>
                  Fixed an issue where Exocraft could sometimes fall through
                  planetary terrain.
                </li>
              </ul>
            </div>

            <div className="patch-notes-content pl-2 pl-lg-4 mt-5">
              <h3>Graphical Improvements and Options </h3>
              <ul>
                <li>
                  GTAO: improved performance by avoiding oversampling on distant
                  objects.
                </li>
                <li>
                  GTAO: modified attenuation heuristic to avoid over-darkening
                  of thin objects, particularly noticeable on grass.
                </li>
                <li>
                  GTAO: modified reprojection filter to improve AO temporal
                  stability. This reduces flickering on moving objects,
                  particularly noticeable on grass.
                </li>
                <li>
                  3D rendering resolution can be now scaled as a factor of the
                  window resolution. This means UI can render at a higher
                  resolution to the 3D game view, offering more options for
                  improving performance while keeping UI crisp. Additionally,
                  the in-game resolution may be scaled larger than the actual
                  screen resolution, allowing for greater image quality than
                  possible when rendering at the monitor’s native resolution.
                </li>
              </ul>
            </div>

            <div className="patch-notes-content pl-2 pl-lg-4 mt-5">
              <h3>Base Building Quality of Life</h3>
              <ul>
                <li>
                  Added a new base part, the Electrical Cloaking Unit. This can
                  be placed to hide power lines when outside of build mode.
                </li>
                <li>
                  Added the ability for console players not using VR to disable
                  local base complexity limits (PC players could already adjust
                  the Base Quality setting). This may come at a performance cost
                  when viewing large, player-made, structures.
                </li>
                <li>
                  Added a Quick Menu option to immediately return to the Space
                  Anomaly when visiting a featured base.{" "}
                </li>
                <li>
                  Fixed an issue that caused incorrect planet information to be
                  displayed when previewing bases in a different galaxy.
                </li>
                <li>
                  Fixed an issue that could cause players to become stuck when
                  warping to a featured base if the base computer had not loaded
                  in time.
                </li>
                <li>
                  Fixed a number of soft locks that could occur when interacting
                  with base parts that were outside the local complexity limit.
                </li>
              </ul>
            </div>

            <div className="patch-notes-content pl-2 pl-lg-4 mt-5">
              <h3>Bug Fixes</h3>
              <ul>
                <li>
                  Fixed an issue that prevented AI ships from ever landing on
                  player-owned landing pads.
                </li>
                <li>
                  Fixed an issue with the transition to a new galaxy that caused
                  it to be entirely white.
                </li>
                <li>
                  Fixed an issue that prevented the Blaze Javelin from being
                  cycled while cooling down.
                </li>
                <li>
                  Increased the distance at which damaged frigate icons are
                  displayed on the ship HUD and compass.{" "}
                </li>
                <li>
                  Added a timeout sequence to the start of Nexus missions to
                  discourage players from going AFK on board the Anomaly after
                  readying up.
                </li>
                <li>
                  Extended the time during which weekend missions are active to
                  9AM GMT on Mondays.
                </li>
                <li>
                  Added some additional graphic warnings when low on hazard
                  protection or life support.
                </li>
                <li>
                  Fixed an issue that caused diplomatic frigates to award units
                  as a substance rather than directly.{" "}
                </li>
                <li>
                  Fixed an issue with the trails on certain Royal ships not
                  lining up correctly with their engines.{" "}
                </li>
                <li>
                  Fixed a number of graphical glitches that could occur when
                  warping in a starship.
                </li>
                <li>
                  Fixed a graphical issue that affected the Bytebeat envelope
                  rendering on console.
                </li>
                <li>
                  Improved the readability of the currency readout when browsing
                  tech trees.
                </li>
                <li>
                  Added a recovery fix for players who lost their Void Egg after
                  they come back through the Portal at the end of the final
                  Starbirth quest.
                </li>
                <li>Fixed a rare crash in the lighting system.</li>
                <li>
                  Fixed an issue where Armoured Clams could be destroyed with
                  the Terrain Manipulator.
                </li>
                <li>
                  Fixed an issue where player models could sometimes inherit
                  their scale from ships or Exocraft.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatchNotes;
