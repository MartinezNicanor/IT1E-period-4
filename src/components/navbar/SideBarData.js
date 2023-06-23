import React from 'react'
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import * as TbIcons from 'react-icons/tb';


export const SideBarData = [
    {
        title: "Assignments",
        path: "/assignments",
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
                path: "/generateTest",
            },
            {
                title: "PHP",
                path: "/generateTest",
            },
            {
                title: "Java",
                path: "/generateTest",
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
    {
        title: "Flashcards",
        path: "/flashcards",
        icon: <TbIcons.TbCards />,
    },

]