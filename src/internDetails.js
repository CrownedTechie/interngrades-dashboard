import React from "react";

class InternBox extends React.Component {
  render() {
    const { intern } = this.props;

    return (
      <div className="intern box">
        <div className="profile-top">
          <div className="circle"></div>
          <p className="intern-name">{intern.name}</p>
        </div>
        <div className="profile-bottom">
          <div className="col">
            <p>GENDER</p>
            <p>{intern.gender}</p>
          </div>
          <div className="col">
            <p>COURSE</p>
            <p>{intern.course}</p>
          </div>
          <div className="col">
            <p>GRADE</p>
            <p>{intern.grade}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default InternBox;
