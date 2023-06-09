import React from 'react'
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';


export const SideBarData = [
    {
        title: "Assignments",
        icon: <BsIcons.BsJournalCode />,
        iconClosed: <BsIcons.BsArrowDownShort />,
        iconOpened: <BsIcons.BsArrowUpShort />,
        subNav: [
            {
                title: "HTML/CSS",
                path: "/assignments/html",
            },
            {
                title: "PHP",
                path: "/assignments/php",
            },
            {
                title: "Java",
                path: "/assignments/java",
            },
        ]

    },
    {
        title: "Tests",
        icon: <BsIcons.BsFileEarmarkCode />,
        iconClosed: <BsIcons.BsArrowDownShort />,
        iconOpened: <BsIcons.BsArrowUpShort />,
        subNav: [
            {
                title: "HTML/CSS",
                path: "/tests",
            },
            {
                title: "PHP",
                path: "/tests",
            },
            {
                title: "Java",
                path: "/tests",
            },
        ]

    },
    {
        title: "Progress",
        path: "/progress",
        icon: <MdIcons.MdOutlineTrackChanges />,
    },
    {
        title: "Forum",
        path: "/forum",
        icon: <BsIcons.BsChatText />,
    },

]