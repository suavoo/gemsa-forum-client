import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Thread.css";
import ThreadHeader from "./ThreadHeader";
import ThreadCategory from "./ThreadCategory";
import ThreadTitle from "./ThreadTitle";
import ThreadModel from "../../../models/Thread";
import { getThreadById } from "../../../services/DataService";
import Nav from "../../areas/Nav";
//import ThreadBody from "./ThreadBody";
//import ThreadResponsesBuilder from "./ThreadResponsesBuilder";
//import ThreadPointsBar from "../../points/ThreadPointsBar";

const Thread = () => {
  const [thread, setThread] = useState<ThreadModel | undefined>();
  const { id } = useParams();

  useEffect(() => {
    console.log("Thread id", id);
    if (id) {
      getThreadById(id).then((th) => {
        setThread(th);
      });
    }
  }, [id]);

  return (
    <div className="screen-root-container">
      <div className="thread-nav-container">
        <Nav />
      </div>
      <div className="thread-content-container">
        <div className="thread-content-post-container">
          <ThreadHeader
            userName={thread?.userName}
            lastModifiedOn={thread ? thread.lastModifiedOn : new Date()}
            title={thread?.title}
          />
          <ThreadCategory categoryName={thread?.category?.name} />
          <ThreadTitle title={thread?.title} />
         
        </div>
        <div className="thread-content-points-container">
          
        </div>
      </div>
      <div className="thread-content-response-container">
        <hr className="thread-section-divider" />
        
      </div>
    </div>
  );
};

export default Thread;

/*

 <ThreadBody body={thread?.body} />

 <ThreadPointsBar
            points={thread?.points || 0}
            responseCount={
              thread && thread.threadItems && thread.threadItems.length
            }
          />

 <ThreadResponsesBuilder threadItems={thread?.threadItems} />

*/