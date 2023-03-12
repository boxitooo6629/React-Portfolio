import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";

function ProjectPage() {
    const { name, desc, image, github } = useLoaderData();

    return (
        <div className="project-section">
            <div
                className="project-section-image"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="project-section-content">
                <span className="project-section-title">
                    <h1>{name}</h1>
                    {github && (
                        <a className="project-section-icon" href={github}>
                            <FaGithubSquare size={30} color="#400E32" />
                        </a>
                    )}
                </span>
                <div>{desc}</div>
            </div>
        </div>
    );
}

export default ProjectPage;
