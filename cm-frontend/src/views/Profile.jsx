import React from "react";
import { Link, renderMatches } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
export default function Profile() {
  return (
    <div className="row">
      <div className="col-3">
        Side Menu
        <Link to="/home">Back</Link>
      </div>
      <div className="col-9">
        Profile Details
        <div>
          <img
            src={require("../logo.svg")}
            style={{
              width: "70px",
              height: "70px",
              border: "2px solid black",
              borderRadius: "50%",
            }}
            alt="Image"
          ></img>
        </div>
        <div style={{ marginLeft: "130px", marginTop: "-70px" }}>
          <h5>Pradeep Maurya</h5>
          <h6 style={{ color: "gray" }}>Student</h6>
          <h6 style={{ color: "gray" }}>Branch B</h6>
          <div style={{ color: "gray", marginTop: "30px" }}>
            <h6>Email</h6>
            <h6>Level</h6>
            <h6>Address</h6>
            <h6>Phone</h6>
          </div>
          <div style={{ marginTop: "-108px", marginLeft: "130px" }}>
            <h6>Pradeep Maurya</h6>
            <h6>class 6</h6>
            <h6>Lucknow,up,India</h6>
            <h6>1234567890</h6>
          </div>
        </div>
        <div>
          <button
            style={{
              marginLeft: "450px",
              borderRadius: "25px",
              padding: "10px 25px",
              fontSize: "15px",
            }}
          >
            Verify
          </button>
        </div>
        <div style={{ marginTop: "-250px", marginLeft: "450px" }}>
          <button
            style={{
              padding: "5px",
              borderRadius: "25px",
            }}
          >
            <BsPencil style={{ marginRight: "65px" }} />
            <h6
              style={{
                fontSize: "20px",
                color: "white",
                marginTop: "-22px",
                paddingLeft: "10px",
              }}
            >
              Edit
            </h6>
          </button>
        </div>
        <hr
          style={{
            width: "75%",
            height: "2px",
            borderWidth: "5",
            marginTop: "220px",
            color: "black",
            backgroundColor: "black",
          }}
        />
        <h5>Education</h5>
        <div style={{ marginTop: "150px" }}>
          <div style={{ marginTop: "-180px", marginLeft: "550px" }}>
            <button
              style={{
                padding: "5px",
                borderRadius: "25px",
              }}
            >
              <BsPencil style={{ marginRight: "65px" }} />
              <h6
                style={{
                  fontSize: "20px",
                  color: "white",
                  marginTop: "-22px",
                  paddingLeft: "10px",
                }}
              >
                Edit
              </h6>
            </button>
          </div>
          <div>
            <img
              src={require("../logo.svg")}
              style={{
                width: "90px",
                height: "90px",
                margin: "5px",
                border: "2px solid black",
                // borderRadius: "50%",
              }}
              alt="Image"
            ></img>
            <div style={{ marginLeft: "180px", marginTop: "-100px" }}>
              <h5>College Name iii</h5>
              <div style={{ color: "gray" }}>
                <h6>Computer Science</h6>
                <h6>2021 - Present</h6>
                <h6>Address: </h6>
              </div>
            </div>
            <hr
              style={{
                width: "75%",
                height: "2px",
                borderWidth: "5",
                color: "black",
                backgroundColor: "black",
              }}
            />
          </div>
          <div>
            <img
              src={require("../logo.svg")}
              style={{
                width: "90px",
                height: "90px",
                margin: "5px",
                border: "2px solid black",
                // borderRadius: "50%",
              }}
              alt="Image"
            ></img>
            <div style={{ marginLeft: "180px", marginTop: "-100px" }}>
              <h5>College Name ii</h5>
              <div style={{ color: "gray" }}>
                <h6>Computer Science</h6>
                <h6>2021 - Present</h6>
                <h6>Address: </h6>
              </div>
            </div>
            <hr
              style={{
                width: "75%",
                height: "2px",
                borderWidth: "5",
                color: "black",
                backgroundColor: "black",
              }}
            />
          </div>

          <div>
            <img
              src={require("../logo.svg")}
              style={{
                width: "90px",
                height: "90px",
                margin: "5px",
                border: "2px solid black",
                // borderRadius: "50%",
              }}
              alt="Image"
            ></img>
            <div style={{ marginLeft: "180px", marginTop: "-100px" }}>
              <h5>College Name i</h5>
              <div style={{ color: "gray" }}>
                <h6>Computer Science</h6>
                <h6>2021 - Present</h6>
                <h6>Address: </h6>
              </div>
            </div>
            <hr
              style={{
                width: "75%",
                height: "2px",
                borderWidth: "5",
                color: "black",
                backgroundColor: "black",
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src={require("../logo.svg")}
              style={{
                width: "70px",
                height: "70px",
                border: "2px solid black",
                borderRadius: "50%",
              }}
              alt="Image"
            ></img>
          </div>
          <div style={{ marginLeft: "130px", marginTop: "-70px" }}>
            <h5>Reviewer Name(Student)</h5>
            <div style={{ width: "600px" }}>
              <h6 style={{ color: "gray" }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                am et sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </h6>
            </div>
            <hr
              style={{
                width: "75%",
                height: "2px",
                borderWidth: "5",
                color: "black",
                backgroundColor: "black",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
