import ProjectDetails from '@/components/ProjectDetails';
import projects from '@/public/data/projects';
import React from 'react'

const page = ({ params }) => {
    const selectedProject = projects.find((project) => project.projectUrl === '/' + params.projectName);
    return (
        <div>
            {selectedProject ? (
                <>
                    <ProjectDetails
                        name={selectedProject.title}
                        imageSrc={selectedProject.backgroundImg}
                        techStack={selectedProject.tech}
                        overview={selectedProject.overview}
                        demoLink={selectedProject.demoLink}
                        codeLink={selectedProject.codeLink}
                    />
                </>
            ) : (
                <p>Project not found.</p>
            )}
        </div>
    )
}

export default page