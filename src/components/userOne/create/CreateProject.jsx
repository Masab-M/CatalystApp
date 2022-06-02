import React from 'react'
import Project from '../../createForm/form/Project'
import DashNav from '../../Dashboard/DashNav'

function createProject() {
  return (
    <>
    <DashNav srch={false} />
    <Project/>
    </>
  )
}

export default createProject