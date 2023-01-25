import React from "react";
import { useAchivementsContext } from "../hooks/useAchivementsContext";

export default function AchivementForm() {
  const { dispatch } = useAchivementsContext();
  const [form, setForm] = React.useState({
    title: "",
    disc: "",
    location: "",
    photo: "",
  });

  const [error, setError] = React.useState(null);

  function handleForm(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  
  function handlePhoto(e){
    setForm({...form, photo: e.target.files[0]});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { title, disc, location } = form;
    // const achivement = { title, disc, location };
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('disc', form.disc);
    formData.append('location', form.location);
    formData.append('photo', form.photo);

    //using the fetch api to send the post request
    const response = await fetch("http://localhost:5000/api/achievements", {
      method: "POST",
      // body: JSON.stringify(achivement),
      formData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log("new Workout error", json);
      setForm({
        title: "",
        disc: "",
        location: "",
      });
      dispatch({ type: "CREATE_ACHIVEMENT", payload: json });
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
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
      <input 
      type = "file"
      accept = ".png, .jpg, .jpeg"
      name = "photo"
      onChange = {handlePhoto}
      />

      <button>Add Achievements</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
