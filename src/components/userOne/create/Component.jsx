import React from 'react'
import ProjectComponent from '../../createForm/component/ProjectComponent'
import DashNav from '../../Dashboard/DashNav'
import Components from '../../createForm/import/components'
import ComponentDet from '../../createForm/import/ComponentDet'
export default function Component() {
  return (
    <>
    <DashNav/>
    <ProjectComponent/>
    <Components/>
    <ComponentDet/>
    </>
  )
}
