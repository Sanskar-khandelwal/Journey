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
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8
       col-span-2 w-4/5 m-auto"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <h3 className="text-3xl mb-10">Add a new Achievement</h3>
      <label
        className="block text-gray-700 text-xl font-normal mb-4 mt-6"
        htmlFor="title"
      >
        Achievement Title{" "}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="title"
        value={form.title}
        onChange={handleForm}
      />
      <label
        htmlFor="title"
        className="block text-gray-700 text-xl font-normal mb-4 mt-6"
      >
        {" "}
        Discription{" "}
      </label>
      <input
        type="text"
        name="disc"
        value={form.disc}
        onChange={handleForm}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <label
        htmlFor="location"
        className="block text-gray-700 text-xl font-normal mb-4 mt-6"
      >
        Achievement location{" "}
      </label>
      <input
        type="text"
        name="location"
        value={form.location}
        onChange={handleForm}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        name="photo"
        type="file"
        onChange={handlePhoto}
        className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none mt-10"
      />
      <button className=" text-white block mt-6  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-2 m-auto">
        Add Achievements
      </button>
      {error && <div className="error">{error}</div>}z
    </form>
  );
}
