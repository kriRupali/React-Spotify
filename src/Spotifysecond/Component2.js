import React from "react";
import { BiLibrary } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";

const Comp2 = () => {
  return (
    <section
      style={{
        // height: "90vh",
        width: "35vh",
        backgroundColor: "black",
        color: "white",
        border: "10px solid black",
      }}
  >

    {/* first */}
        
        <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#121212",
        padding:"1vw 1vw",borderTopRightRadius:"15px", borderTopLeftRadius:"15px"
    }}>
           <div style={{display:"flex",gap:"1vw"}}>
           <div style={{fontSize:"1vw",fontWeight:"bold"}}>
           <BiLibrary  />
           </div>
           <div style={{ fontWeight: "lighter",
            fontSize: "20px",
            paddingBottom: "1vw",
            overflow: "visible",}}
           >Your Library</div>
           </div>
           <div style={{fontSize:"1.5vw",fontWeight:"bold"}}>+</div>
        </div>
    

      {/* scrolling section */}
      <div style={{height:"25vh",overflowY:"scroll"}}>
        <div
          style={{
            padding: "2vw 1vw",
            backgroundColor: "#242424",
            borderRadius: "15px",
          }}
        >
            {/* first */}
          <div>
            <p style={{ fontWeight: "bold", paddingBottom: "0.5vw" }}>
              Create your first playlist
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "lighter",
                paddingBottom: "0.5vw",
              }}
            >
              it;s easy, we'll help you
            </p>
            <button
              className="firstbtn"
             style={{padding:"0.6vw 1vw",borderRadius:"25px",fontSize:"1vw",fontWeight:"bold"}}
              
            >
              Create playlist
            </button>
          </div>
        </div>

        {/* second */}

        <div style={{height:"25vh",
        // overflowY:"scroll",
        }}>
        <div
          style={{
            padding: "0.5vw 1vw",
            backgroundColor: "#242424",
            borderRadius: "15px",
            // paddingTop:"1vw"
            borderTop:"1vw solid black"
          }}
        >
          <div>
            <p style={{ fontWeight: "bold", paddingBottom: "0.5vw" }}>
              Let's find some podcasts to follow
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "lighter",
                paddingBottom: "0.5vw",
              }}
            >
                we'll keep you updated on new episodes
            </p>
            <button
              className="firstbtn"
             style={{padding:"0.6vw 1vw",borderRadius:"25px",fontSize:"1vw",fontWeight:"bold"}}
              
            >
              browse podcasts
            </button>
          </div>
        </div>
        </div>



      </div>
      {/* third */}
      <div style={{ backgroundColor: "#121212",
       height: "26vh" ,
       borderBottomRightRadius:"15px",
       borderBottonLeftRadius:"15px",}}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "0.6vw",
            flexWrap: "wrap",
            listStyleType: "none",
            fontSize: "14px",
            fontWeight: "lighter",
            padding: "1.2vw 0.6vw",
          }}
        >
          <li>Legal</li>
          <li>Privacy Center</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>About Ads</li>
          <li>Accessibility</li>
          <li>Cookies</li>
        </ul>
        <div>
          <button
            className="thirdbtn"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px white",
              padding:"0.5vw 2vw",
              borderRadius:"25px",
              border:"0.5px solid white"
            }}
          >
          <BsGlobe />
            English
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comp2;
