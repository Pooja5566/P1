import Firebase from "./FirebaseConfig";
import React, { useState } from "react";
const DB = Firebase.firestore();
const bloglist = DB.collection("blogs");
const strogeRef = Firebase.storage().ref();
function BlogForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [cover, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const submit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const uploadtask = strogeRef.child("images/" + cover.name).put(cover);
    uploadtask.on(
      "state_changes",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        strogeRef
          .child("images/" + cover.name)
          .getDownloadURL()
          .then((url) => {
            console.log("img url", url);
            submitCreateBlog(e, url);
          });
      }
    );
  };

  const submitCreateBlog = (e, url) => {
    e.preventDefault();

    bloglist
      .add({
        Title: title,
        Body: body,
        coverimage: url,
      })
      .then((docRef) => {
        alert("data added successfully");
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("error", error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <form
        id="contact_form"
        className="contact_form"
        onSubmit={(e) => submit(e)}
      >
        <input
          type="text"
          placeholder="Title"
          required
          className="contact_input"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="10"
          placeholder="Description"
          cols="0"
          onChange={(e) => setBody(e.target.value)}
          className="contact_input"
        ></textarea>
        <input
          type="file"
          placeholder="Description"
          required
          accept="images/*"
          className="contact_input"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {/* <input
          onClick={submit}
          type="submit"
          value="Send"
          className="button contact_button"
        /> */}
        <button
          className="button contact_button"
          onClick={submit}
          type="submit"
        >
          {isLoading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
}
export default BlogForm;
