import React from "react";
// import "./Component3.css"
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Untitled from "./Assets/Untitled.jpg";
import second from "./Assets/second.jpg";
import third from "./Assets/third.jpg";
import fourth from "./Assets/fourth.jpg";
import fifth from "./Assets/fifth.jpg";
import sixth from "./Assets/sixth.jpg";
import seventh from "./Assets/seventh.jpg";
import eighth from "./Assets/eighth.jpg";
import nineth from "./Assets/nineth.jpg";
import tenth from "./Assets/tenth.jpg";
import eleventh from "./Assets/eleventh.jpg";
import twelve from "./Assets/twelve.jpg";
import thirteen from "./Assets/thirteen.jpg";
import fourteen from "./Assets/fourteen.jpg";
import last from "./Assets/last.jpg";
import tophits from "./Assets/tophits.jpg";
import viva from "./Assets/viva.jpg";
import { BsAlignBottom } from "react-icons/bs";
import { CgPlayButtonO } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { PiCopyrightThin } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";

const Component3 = () => {
  return (
    <>
      <section>
        <article
          style={{
            display: "flex",
            gap: "60vw",
            padding: "1.5vw 0",
            backgroundColor: "#121212",
          }}
        >
          <div style={{ display: "flex", padding: "0vw 1.5vw", gap: "1vw" }}>
            <div>
              <MdArrowBackIos />
            </div>
            <div>
              <MdArrowForwardIos />
            </div>
          </div>
          <div style={{ display: "flex", gap: "1vw" }}>
            <button
              style={{
                padding: "1.3vh 2vw",
                borderRadius: "20px",
                fontWeight: "bold",
                fontSize: "1vw",
                color: "white",
                backgroundColor: "black",
                border: "none",
              }}
            >
              Sign Up
            </button>
            <button
              style={{
                padding: "1.3vh 1.8vw",
                borderRadius: "20px",
                fontWeight: "bold",
                fontSize: "1vw",
                color: "black",
                backgroundColor: "white",
                border: "none",
              }}
            >
              Login
            </button>
          </div>
        </article>
        {/* section 2 */}
        <div style={{ overflowY: "scroll" }}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1.6vw 1.5vw",
                backgroundColor: "#242424",
              }}
            >
              <div style={{ fontSize: "1.5vw", fontWeight: "bold" }}>Focus</div>
              <div>Show all</div>
            </div>

            {/* cards section starts */}
            {/* section3 */}

            <article
              style={{
                height: "65vh",
                width: "100%",
                backgroundColor: "#121212",
                overflowY: "scroll",
                borderRadius: "15px",
              }}
            >
              {/* first */}
              <div
                style={{
                  display: "flex",
                  gap: "1vw",
                  // overflowY: "scroll",
                  flexWrap: "wrap",
                  width: "100%",
                  paddingBottom: "1.2vw",
                }}
              >
                {/* first card */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={Untitled} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>

                {/* second */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={second} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>
                {/* third */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={third} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>
                {/* fouth */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={fourth} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>
                {/* fifth */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={fifth} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>
                {/* sixth */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={sixth} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>
              </div>

              {/* section 4 */}
              <div
                className="showw"
                style={{
                  backgroundColor: "#121212",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "4vh 1vw",
                }}
              >
                <div style={{ fontSize: "1.5vw", fontWeight: "bold" }}>
                  Spotify Playlist
                </div>
                <div style={{ fontWeight: "bold" }}>Show all</div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1vw",
                  // overflowY: "scroll",
                  flexWrap: "wrap",
                  width: "100%",
                  paddingTop: "1.2vw",
                }}
              >
                {/* viva card */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={viva} alt="" height={150} width={150} />

                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>
                {/* seven card */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={seventh} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>

                {/* eighth card */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={eighth} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>

                {/* nineth card */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={nineth} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>
                {/* tenth card */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={tenth} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>

                {/* tophits card */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={tophits} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>
              </div>
              {/* section 5 */}
              <div
                style={{
                  backgroundColor: "#121212",
                  padding: "4vh 1vw",
                }}
              >
                <div style={{ fontSize: "1.5vw", fontWeight: "bold" }}>
                  Sound of india
                </div>
              </div>
              {/* section 6 again card section */}

              <div
                style={{
                  display: "flex",
                  gap: "1vw",
                  flexWrap: "wrap",
                  width: "100%",
                  paddingTop: "1.2vw",
                }}
              >
                {/* eleventh card */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={eleventh} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>

                {/* twelve card */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={twelve} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>

                {/* thirteen card */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={thirteen} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>

                {/* fourteen card */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={fourteen} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>

                {/* last card */}
                <div
                  className="first"
                  style={{
                    border: "1px solid #2b2b2b",
                    height: "33vh",
                    width: "10vw",
                    padding: "15px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={last} alt="" height={150} width={150} />
                    <CgPlayButtonO
                      size={26}
                      className="icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "90px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ color: "white" }}>
                    <div style={{ fontWeight: "bold", textAlign: "center" }}>
                      {" "}
                      Instrmental Study
                    </div>
                    <div style={{ fontSize: "1vw", textAlign: "center" }}>
                      Focus with soft study....
                    </div>
                  </div>
                </div>
              </div>
              {/* FOOTER */}
              <footer>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8vw 1.5vw",
                  }}
                >
                  <div style={{ display: "flex", gap: "1.6vw" }}>
                    <ul style={{ listStyleType: "none", gap: "1vw" }}>
                      <li style={{ fontWeight: "bold" }}>Company</li>
                      <li>About</li>
                      <li>Jobs</li>
                      <li>For the records</li>
                    </ul>
                    <ul style={{ listStyleType: "none" }}>
                      <li style={{ fontWeight: "bold" }}>Community</li>
                      <li>For Artists</li>
                      <li>Developers</li>
                      <li>Advertising</li>
                      <li>Investors</li>
                      <li>Vendors</li>
                    </ul>
                    <ul style={{ listStyleType: "none" }}>
                      <li style={{ fontWeight: "bold" }}>Useful links</li>
                      <li>Support</li>
                      <li>Free Mobile App</li>
                    </ul>
                  </div>
                  <div>
                    <ul
                      style={{
                        listStyleType: "none",
                        display: "flex",
                        gap: "1.3vw",
                        fontSize: "1vw",
                      }}
                    >
                      <li>
                        <FaInstagram />
                      </li>
                      <li>
                        <AiOutlineTwitter />
                      </li>
                      <li>
                        <CiFacebook />
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  style={{
                    borderBottom: "5px solid #242424",
                    padding: "0px 5vw",
                  }}
                />
                <div style={{ fontWeight: "lighter", padding: "2vw 2vw" }}>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <PiCopyrightThin />
                      2023 Spotify AB
                    </li>
                  </ul>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Component3;
