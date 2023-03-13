import React from 'react'
import "./rightPane.css"

export default function RightPane() {
  return (
    <div className = 'rightPaneBox'>
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponsered">Sponsered</span>
          <img src="/images/ad.jpg" alt="" className="adImage" />
          <span className="adText">
          Hurry, Book Your ticket now!!
          </span>
        </div>
        <div className="birthdayContainer">
          <img src="/images/bday.png" alt="" className="birthdayImage" />
          <span className="birthdaytext"><b>Nimasha Udawela</b> and <b>2 others</b> celebrating birthday today..!
          </span>
        </div>
        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/person.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Dark Hamilton</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/person.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Dark Hamilton</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/person.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Dark Hamilton</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/person.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Dark Hamilton</span>
          </li>
        </div>
      </div>
      </div>
  )
}
