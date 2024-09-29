import { useState } from 'react'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import ProjectsSideBar from './components/ProjectsSidebar'

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  console.log('stuff', projectsState)
  let content

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
  <main className='h-screen my-8 flex gap-8'>
    <ProjectsSideBar onStardAddProject={handleStartAddProject}/>
    {content}
  </main>
  );
}

export default App;
