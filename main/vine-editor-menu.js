'use strict'

const {app} = require("electron");

const menuTemplate = [
    {
        label: "Edit",
        submenu: [
            {role: "undo"},
            {role: "redo"},
            {type: "separator"},
            {role: "cut"},
            {role: "copy"},
            {role: "paste"},
            {role: "delete"},
            {role: "selectall"}
        ]
    },
    {
        label: "View",
        submenu: [
            {role: "reload"},
            {role: "forcereload"},
            {role: "toggledevtools"},
            {type: "separator"},
            {role: "resetzoom"},
            {role: "zoomin"},
            {role: "zoomout"},
            {type: "separator"},
            {role: "togglefullscreen"}
        ]
    },
    {
        role: "window",
        submenu: [
            {role: "minimize"},
            {role: "close"}
        ]
    },
    {
        role: "help",
        submenu: [
            {
                label: "Learn More",
                click: () => {
                    require("electron").shell.openExternal("https://github.com/julsam/VineEditor");
                }
            }
        ]
    }
];

if (process.platform !== "darwin")
{
    menuTemplate.unshift({
        label: "File",
        submenu: [
            {role: "quit"}
        ]
    });
}

if (process.platform === "darwin")
{
    menuTemplate.unshift({
        label: app.getName(),
        submenu: [
            {role: "about"},
            {type: "separator"},
            {role: "services", submenu: []},
            {type: "separator"},
            {role: "hide"},
            {role: "hideothers"},
            {role: "unhide"},
            {type: "separator"},
            {role: "quit"}
        ]
    });
  
    // Edit menu
    menuTemplate[1].submenu.push(
        {type: "separator"},
        {
            label: "Speech",
            submenu: [
                {role: "startspeaking"},
                {role: "stopspeaking"}
            ]
        }
    );
  
    // Window menu
    menuTemplate[3].submenu = [
        {role: "close"},
        {role: "minimize"},
        {role: "zoom"},
        {type: "separator"},
        {role: "front"}
    ];
}

module.exports = menuTemplate;