import React, { useEffect } from "react";
import {
    Outlet,
    useLoaderData,
    useNavigate,
    useParams,
} from "react-router-dom";

function ProjectsPage() {
    const data = useLoaderData();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!params.name && data.projects[0]) {
            navigate(`/projects/${data.projects[0].id}`);
        }
    }, [data.projects, navigate, params.name]);

    return (
        <div className="projects-page">
            <ul className="projects-page-list">
                {data.projects.map(({ id, name }) => (
                    <li key={id}>
                        <a
                            className={params.name === id ? "active" : ""}
                            href={`/projects/${id}`}
                        >
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
}

export default ProjectsPage;
