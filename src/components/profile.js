import * as React from "react";

const Profile = (props) => {
  const avatarStyle = {
    /* Rounded border */
    borderRadius: "50%",
    /* Size */
    height: "100px",
    width: "100px",
  };

  const avatarImageStyle = {
    /* Size */
    height: "100px",
    width: "100px",
    borderRadius: "50%",
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr 200px",
        justifyItems: "start",
        alignContent: "start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          margin: "20px",
          padding: "10px",
          backgroundColor: "white",
          height: "100%",
        }}
      >
        <div style={avatarStyle}>
          <img
            style={avatarImageStyle}
            src="https://2.gravatar.com/avatar/ed73d6805d156de87b36f2adb6fdeda5?s=400&d=mm"
          ></img>
        </div>
        <div style={{ margin: "20px" }}>윤선생 blog</div>
        <div
          style={{
            margin: "10px",
            borderRadius: "10%",
            backgroundColor: "lightgray",
            color: "white",
            width: "90%",
            height: "50px",
            verticalAlign: "middle",
          }}
        >
          어쩌다보니 개발자
        </div>
        <div style={{ margin: "10px" }}>소셜1</div>
        <div style={{ margin: "10px" }}>소셜2</div>
      </div>
      {props.children}

      <div>
        <div style={{ margin: "10px" }}>소셜1</div>
        <div style={{ margin: "10px" }}>소셜2</div>
      </div>
    </div>
  );
};

export default Profile;
