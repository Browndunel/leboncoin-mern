import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ user }) => {
  const [annonces, setAnnonces] = useState([]);
  const [newAnnonce, setNewAnnonce] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    fetchAnnonces();
  }, []);

  const fetchAnnonces = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/annonces/getAllAnnonces"
      );
      setAnnonces(response.data);
    } catch (error) {
      console.error("Error fetching annonces:", error);
    }
  };

  const deleteAnnonce = async (id) => {
    console.log(id);
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You need to be logged in to delete an annonce.");
      return;
    }

    try {
      await axios.delete(`http://localhost:3001/annonces/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Annonce deleted successfully");
      fetchAnnonces(); // Update the annonces state after deletion
    } catch (error) {
      console.error("Error deleting annonce:", error);
    }
  };

  // Function to handle the creation of a new annonce with token authentication and axios
  const createAnnonce = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You need to be logged in to create an annonce.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/annonces/create",
        newAnnonce,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Annonce created successfully");
      setAnnonces([...annonces, response.data]); // Update the annonces state with the new annonce
      setNewAnnonce({ title: "", description: "" }); // Reset the new annonce form
    } catch (error) {
      console.error("Error creating annonce:", error);
    }
  };

  return (
    <div>
      <h1>Welcome to LebonCoin App</h1>
      <hr />
      <div>
        {annonces.map((annonce) => (
          <div key={annonce._id}>
            <p>
              {annonce.author?.name || 'Utilisateur'}
            </p>
            <h2>{annonce.title}</h2>
            <p>{annonce.description}</p>
            <p>{annonce.price}</p>
            <button onClick={() => deleteAnnonce(annonce._id)}>Delete</button>
            <hr />
          </div>
        ))}
      </div>
      <div>
        <h2>Create a New Annonce</h2>
        <input
          type="text"
          placeholder="Title"
          value={newAnnonce.title}
          onChange={(e) =>
            setNewAnnonce({ ...newAnnonce, title: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Price"
          value={newAnnonce.price}
          onChange={(e) =>
            setNewAnnonce({ ...newAnnonce, price: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Description"
          value={newAnnonce.description}
          onChange={(e) =>
            setNewAnnonce({ ...newAnnonce, description: e.target.value })
          }
        />
        <button onClick={createAnnonce}>Create Annonce</button>
      </div>
    </div>
  );
};

export default Home;
