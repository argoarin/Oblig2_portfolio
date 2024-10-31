import React from "react";

type ProjectProps = {
  title: string;
  description: string;
  category: string;
  createdAt: string;
  public: boolean;
  tags: string[];
  removeProject: () => void;
};

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  category,
  createdAt,
  public: isPublic,
  tags,
  removeProject,
}) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Kategori: {category}</p>
      <p>Opprettet: {createdAt}</p>
      <p>Offentlig: {isPublic ? "Ja" : "Nei"}</p>
      <p>Tags: {tags?.join(", ") || "ingen tagger"}</p>
      <button onClick={removeProject}>Fjern prosjekt</button>
    </div>
  );
};

export default Project;
