import React from "react";
import { useAchivementsContext } from "../hooks/useAchivementsContext";
import axios from "axios";

export default function AchivementForm() {
  const { dispatch } = useAchivementsContext();
  const [form, setForm] = React.useState({
    title: "",
    disc: "",
    location: "",
    photo: "",
  });

  function handlePhoto(e) {
    //removed .name from e.target.files[0] to get the file instead of filename
    setForm((prev) => ({ ...prev, photo: e.target.files[0] }));
    console.log(form);
  }

  const [error, setError] = React.useState(null);

  function handleForm(e) {
    console.log(form);
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    console.log(form.photo);
    e.preventDefault();
    // const { title, disc, location } = form;
    // const achivement = { title, disc, location };
    const formData = new FormData();
    formData.append("photo", form.photo);
    formData.append("title", form.title);
    formData.append("disc", form.disc);
    formData.append("location", form.location);

    //using axios to post
    axios
      .post("http://localhost:5000/api/achievements", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setError(null);
        console.log("new Workout", res.data);
        setForm({
          title: "",
          disc: "",
          location: "",
          photo: "",
        });

        dispatch({ type: "CREATE_ACHIVEMENT", payload: res.data });
      })
      .catch((err) => {
        console.log("new workout error");
        console.log(err);
      });
  };

  //using the fetch api to send the post request
  //   const response = await fetch("http://localhost:5000/api/achievements", {
  //     method: "POST",
  //     body: JSON.stringify(achivement),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const json = await response.json();

  //   if (!response.ok) {
  //     setError(json.error);
  //   }
  //   if (response.ok) {
  //     setError(null);
  //     console.log("new Workout error", json);
  //     setForm({
  //       title: "",
  //       disc: "",
  //       location: "",
  //     });
  //     dispatch({ type: "CREATE_ACHIVEMENT", payload: json });
  //   }
  // };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h3>Add a new Achievement</h3>
      <label htmlFor="title">Achievement Title </label>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleForm}
      />

      <label htmlFor="title"> Discription </label>
      <input type="text" name="disc" value={form.disc} onChange={handleForm} />

      <label htmlFor="location">Achievement location </label>
      <input
        type="text"
        name="location"
        value={form.location}
        onChange={handleForm}
      />
      <input name="photo" type="file" onChange={handlePhoto} />

      <button>Add Achievements</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
