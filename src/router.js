import App from "./App";
import {
    createHashRouter,
    createRoutesFromElements,
    json,
    Route,
} from "react-router-dom";
import ContactsPage from "./pages/contacts/ContactsPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ProjectPage from "./pages/projects/ProjectPage";

import projects from "./projects.json";
import Home from "./pages/home/Home";

const projects_loader = async function () {
    return json(projects, { status: 200 });
};

const project_loader = function ({ params }) {
    const project =
        projects.projects.find((value) => value.id === params.name) || null;
    return json(project, { status: 200 });
};

export default createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route
                path="/projects"
                loader={projects_loader}
                element={<ProjectsPage />}
            >
                <Route
                    path="/projects:name"
                    loader={project_loader}
                    element={<ProjectPage />}
                />
            </Route>
        </Route>
    )
);
