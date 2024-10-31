import React, { useState } from "react";

type CreateProjectProps = {
  onAddProject: (project: {
    title: string;
    description: string;
    category: string;
    createdAt: string; 
    public: boolean;
    tags: string[];
  }) => void;
};

const CreateProject: React.FC<CreateProjectProps> = ({ onAddProject }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [createdAt, setCreatedAt] = useState(""); 
  const [isPublic, setIspublic] = useState(false);
  const [tags, setTags] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!title || !description || !category || !createdAt) {
      alert("Alle feltene må fylles ut.");
      return;
    }
  
    onAddProject({ 
      title, 
      description, 
      createdAt,
      category, 
      public: isPublic,  
      tags: tags.split(",").map(tag => tag.trim()) 
    });
  

    setTitle("");
    setDescription("");
    setCategory("");
    setCreatedAt("");
    setIspublic(false);
    setTags("");
  };

  return (
    <form onSubmit={handleSubmit} className="create-project-form">
      <label htmlFor="title">Prosjekttittel:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Skriv prosjekttittel"
      />

      <label htmlFor="public" className="isPublicButton">Skal prosjektet være offentlig eller privat? (Huk av knappen for offentlig)</label>
      <input
        type="checkbox"
        id="public"
        checked={isPublic}
        onChange={(e) => setIspublic(e.target.checked)}
      />

      <label htmlFor="tags" className="form-label">Tags (separert med komma):</label>
      <input
        type="text"
        id="tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Skriv tags"
      />

      <label htmlFor="description">Beskrivelse:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Skriv beskrivelse"
      />

      <label htmlFor="category">Kategori:</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Skriv kategori"
      />

      <label htmlFor="createdAt">Dato (YYYY-MM-DD):</label> {/* Ny etikett for dato */}
      <input
        type="date"
        id="createdAt"
        value={createdAt}
        onChange={(e) => setCreatedAt(e.target.value)} // Oppdater createdAt
      />

      <button type="submit">Opprett Prosjekt</button>
    </form>
  );
};

export default CreateProject;
