import React from "react";
import { useAchivementsContext } from "../hooks/useAchivementsContext";

export default function AchivementForm() {
  const { dispatch } = useAchivementsContext();
  const [form, setForm] = React.useState({
    title: "",
    disc: "",
    location: "",
  });

  const [error, setError] = React.useState(null);

  function handleForm(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, disc, location } = form;
    const achivement = { title, disc, location };

    //using the fetch api to send the post request
    const response = await fetch("http://localhost:5000/api/achievements", {
      method: "POST",
      body: JSON.stringify(achivement),
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
    <form className="create" onSubmit={handleSubmit}>
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

      <button>Add Achievements</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
