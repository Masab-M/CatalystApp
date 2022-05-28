import React from "react";
import {BsGrid1X2 } from 'react-icons/bs'
import {MdOutlineKeyboardArrowUp,MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {FaRegMoneyBillAlt,FaRegFolder} from 'react-icons/fa'
import {AiOutlineFolderAdd,AiOutlineEye,AiOutlineSetting} from 'react-icons/ai'
import {BsListCheck} from 'react-icons/bs'

export const SidebarData= [
  {
    title: "DashBoard",
    path: "/userOne/dashBoard",
    icon: <BsGrid1X2 />,
    iconClosed: <MdOutlineKeyboardArrowDown />,
    iconOpened: <MdOutlineKeyboardArrowUp />,
  },
  {
    title: "Financial feasibility",
    path: "/userOne/55/ff",
    icon: <FaRegMoneyBillAlt />,
    iconClosed: <MdOutlineKeyboardArrowDown />,
    iconOpened: <MdOutlineKeyboardArrowUp />,

    subNav: [
      {
        title: "Create Project",
        path: "Project/create",
        icon: <AiOutlineFolderAdd />,
      },
      {
        title: "Review Projects",
        path: "Project/review",
        icon: <AiOutlineEye/>,
      },
      {
        title: "Generate FF",
        path: "ff/generate",
        icon: <FaRegFolder/>,
      },
      {
        title: "View FF",
        path: "ff/view",
        icon: <AiOutlineEye/>,
      },
    ],
  },
  {
    title: 'Project Appraisal',
    path: '/userOne/55/PP',
    icon: <BsListCheck />,
    iconClosed: <MdOutlineKeyboardArrowDown />,
    iconOpened: <MdOutlineKeyboardArrowUp />,
  },
  {
    title: 'Settings',
    path: 'settings',
    icon: <AiOutlineSetting />,
    iconClosed: <MdOutlineKeyboardArrowDown />,
    iconOpened: <MdOutlineKeyboardArrowUp />,
  }
];
