import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                <img src="/images/3.jpg" alt="" className="postImage" />
                <span className="postUserName">Dinusha Edirisinghe </span>
                <span className="postTime">five mins ago</span>
                </div>
            </div>
                <div className="postCenter"></div>
                <div className="postCaption">
                    Hello, I am BlackSwan..
                </div>
                <img src="/images/3.jpg" alt="" className="postedImage" />
                </div>
                    <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/images/like.png" alt="" className="readactionPic" />
                        <img src="/images/heart.png" alt="" className="readactionPic" />
                        <img src="/images/haha.png" alt="" className="readactionPic" />
                        <span className="likeCount">BlackSwan and 220 others</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="commentCount">
                            20 comments
                        </span>
                    </div>
                </div>
            </div>
    
  )
}
