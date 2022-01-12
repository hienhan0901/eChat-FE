import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard(props) {
  return (
    <>
      <div className="dashboardContainer">
        <nav className="dashboardNavBar">
          <span>Username |&nbsp;</span>
          <Link to="/login">Log Out</Link>
        </nav>
        <nav className="dashboardNav">
          <img className="dashboardNavImg" src="/icon1.png" alt="logo" />
          <div className="dashboardNavSearch">
            <input
              type="text"
              className="dashboardNavSearchBar"
              placeholder="Search"
            />
            <ul className="dashboardNavUl">
              <li>
                <Link to="/" replace>
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <img src="/user-icon.png" alt="user" width="32px" />
                    <div>John Smith </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="dashboardContent">
          <div className="dashboardChatTitle">
            <img src="/user-icon.png" alt="user" width="32px" />
            <span>Title</span>
          </div>
          <div className="dashboardChatZone">
          <div className="message">
              <span className="messageContent">
                asdasdasd a fasdfadsbfj asdsda fasd as as
              </span>
              <span className="messageInfo">111</span>
            </div>
            <div className="message mineMsg">
              <span className="messageContent">
                asdasdasd a fasdfadsbfj asdsda fasd as as
              </span>
              <span className="messageInfo">111</span>
            </div>
            <div className="message mineMsg">
              <span className="messageContent">
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                a djcsd sdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
              </span>
              <span className="messageInfo">111</span>
            </div><div className="message">
              <span className="messageContent">
                asdasdasd a fasdfadsbfj asdsda fasd as as
              </span>
              <span className="messageInfo">111</span>
            </div>
            <div className="message mineMsg">
              <span className="messageContent">
                asdasdasd a fasdfadsbfj asdsda fasd as as
              </span>
              <span className="messageInfo">111</span>
            </div>
            <div className="message mineMsg">
              <span className="messageContent">
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                a djcsd sdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
              </span>
              <span className="messageInfo">111</span>
            </div><div className="message">
              <span className="messageContent">
                asdasdasd a fasdfadsbfj asdsda fasd as as
              </span>
              <span className="messageInfo">111</span>
            </div>
            <div className="message mineMsg">
              <span className="messageContent">
                asdasdasd a fasdfadsbfj asdsda fasd as as
              </span>
              <span className="messageInfo">111</span>
            </div>
            <div className="message mineMsg">
              <span className="messageContent">
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                a djcsd sdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
              </span>
              <span className="messageInfo">111</span>
            </div><div className="message">
              <span className="messageContent">
              asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                a djcsd sdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
              </span>
              <span className="messageInfo">111</span>
            </div>
            <div className="message mineMsg">
              <span className="messageContent">
                asdasdasd a fasdfadsbfj asdsda fasd as as
              </span>
              <span className="messageInfo">111</span>
            </div>
            <div className="message mineMsg">
              <span className="messageContent">
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
                a djcsd sdasdasd a fasdfadsbfj asdsda fasd as as
                asdasdasd a fasdfadsbfj asdsda fasd as as
              </span>
              <span className="messageInfo">111</span>
            </div>

          </div>
          <div className="dashboardChat">
            <form className="dashboardChatForm">
              <input
                type="text"
                className="dashboardChatInput"
                placeholder="Aa"
              />
              <button className="dashboardChatButton">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
