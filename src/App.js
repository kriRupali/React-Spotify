import logo from "./logo.svg";
import "./App.css";
import Component1 from "./Spotifysecond/Component1";
import Comp2 from "./Spotifysecond/Component2";
import Component3 from "./Spotifysecond/Component3";
function App() {
  return (
    <>
      <div
        style={{ display: "flex", backgroundColor: "black", color: "white" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Component1 />
          <Comp2 />
        </div>
        <div style={{ height: "90vh", width: "100%" }}>
          <Component3 />
        </div>
      </div>
      {/* final section */}
      <section
        style={{
          background: "linear-gradient(#a7319e,#8b54ba,#6286e3)",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "5vw",
            color: "white",
          }}
        >
          <div>
            <div style={{ paddingBottom: "1vw", fontWeight: "bold" }}>
              PREVIEW OF SPOTIFY
            </div>
            <div style={{ fontWeight: "bold" }}>
              Sign up to get unlimited songs and podcasts with occassional ads.
              No credit card needed.
            </div>
          </div>
          <div style={{ padding: "2vw , 1vw", paddingTop: "1vw" }}>
            <button
              style={{
                padding: "1.1vw 1.8vw",
                borderRadius: "25px",
                fontSize: "1vw",
                fontWeight: "bold",
                border: "none",
              }}
            >
              Sign up free
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
