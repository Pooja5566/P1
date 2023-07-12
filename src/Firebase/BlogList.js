import React, { useState, useEffect } from "react";
import Firebase from "./FirebaseConfig";
import axios from "axios";
const DB = Firebase.firestore();

const bloglist = DB.collection("blogs");
export default function BlogList() {
  const [blogList, setBlogList] = useState([]);
  console.log("blogList====", blogList);

  useEffect(() => {
    const fetchBlogList = async () => {
      try {
        const response = await axios.get(
          "https://firestore.googleapis.com/v1/projects/bn-developers-e3987/databases/(default)/documents/blogs"
        );

        console.log("response==", response);

        const blogListData = response.data.documents.map((doc) => ({
          id: doc.name.split("/").pop(),
          ...doc.fields,
        }));
        setBlogList(blogListData);
      } catch (error) {
        console.error("Error retrieving blog list:", error);
      }
    };

    fetchBlogList();
  }, []);

  return (
    <>
      <div>
        {blogList.map((blog) => {
          console.log("blog=====", blog.Body);
          return (
            <div key={blog.id}>
              <div>
                {/* <img src={blog?.coverimage?.stringValue} width="100%" /> */}
                <div style={{ padding: "15px 0px 15px 10px" }}>
                  {" "}
                  {/* <h3>{blog?.Title?.stringValue}</h3>
                  <p>{blog?.Body?.stringValue}</p> */}
                  <p>{blog?.Title?.stringValue}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <section className="projects section" id="blog">
        <div className="circle projects_circleOne"></div>
        <div className="circle projects_circleThree"></div>
        <h2 className="section_title">My Blog List</h2>
        <div className="projects_container bd_grid">
          {blogList.map((blog) => {
            console.log("blog=====", blog.Body);
            return (
              <div key={blog.id}>
                <div className="projects_img">
                  <img src={blog?.coverimage?.stringValue} width="100%" />
                  <div style={{ padding: "15px 0px 15px 10px" }}>
                    {" "}
                    <h3>{blog?.Title?.stringValue}</h3>
                    <p>{blog?.Body?.stringValue}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
