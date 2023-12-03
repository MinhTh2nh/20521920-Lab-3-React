// Projects.js
import React from "react";
import styled from "styled-components";
import RandomQuote from "./quotes";

const ProjectsWrapper = styled.section`
padding: 2rem;
background-color: #f8f9fa;
display: flex;
justify-content: space-around;
`   

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  margin : 30px;
  height : 300px ;
  width : 400px ;

  h3 {
    margin-bottom: 1rem;
  }

  img {
    width: 150px ;
    height : 150px ;
  }
`;

const Projects = () => {
  return (
    <div>
            <h2>Projects</h2>

    <ProjectsWrapper>
      <ProjectCard>
        <h3>Ecommerce Website Application AWS</h3>
        <img src="https://www.tatvasoft.com/blog/wp-content/uploads/2014/07/cloud-computing-models-1-1280x720.jpg"/>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever since
        </p>
        <a href="#">Link Demo</a>
      </ProjectCard>
      <ProjectCard>
        <h3>Ecommerce Website Application AWS</h3>
        <img src="https://www.tatvasoft.com/blog/wp-content/uploads/2014/07/cloud-computing-models-1-1280x720.jpg"/>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever since
        </p>
        <a href="#">Link Demo</a>
      </ProjectCard>
      <ProjectCard>
        <h3>Ecommerce Website Application AWS</h3>
        <img src="https://www.tatvasoft.com/blog/wp-content/uploads/2014/07/cloud-computing-models-1-1280x720.jpg"/>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever since
        </p>
        <a href="#">Link Demo</a>
      </ProjectCard>  
    </ProjectsWrapper>
    <RandomQuote/>
    </div>

  );
};

export default Projects;