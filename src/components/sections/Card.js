import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return props.projects.map((project) => (
    <div className="flip-card mx-auto" key={project.id}>
      <Link to={"/project" + project.id}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={"/images/projects/" + project.img}
              className="img-fluid"
              alt="Project"
            />
          </div>
          <div
            className="flip-card-back"
            style={{ background: project.colour }}
          >
            <h3 className="card-title py-3">{project.title}</h3>
            <p className="info p-4">{project.info}</p>
          </div>
        </div>
      </Link>
    </div>
  ));
}
