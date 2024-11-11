import Notification from '../assets/Icons/Notification.svg?raw';
import Search from '../assets/Icons/Search.svg?raw';
import Home from '../assets/Icons/Home.svg?raw';
import Inventory from '../assets/Icons/Inventory.svg?raw';
import Report from '../assets/Icons/Report.svg?raw';
import Suppliers from '../assets/Icons/Suppliers.svg?raw';
import Order from '../assets/Icons/Order.svg?raw';
import ManageStore from '../assets/Icons/ManageStore.svg?raw';
import Settings from '../assets/Icons/Settings.svg?raw';
import LogOut from '../assets/Icons/LogOut.svg?raw';


export type PathObject = {
    name: string,
    path: string[],
    sidebarItem?: boolean,
    grayLevel: number,
    hoverBlueShade: boolean,
    fill: boolean,
    stroke: boolean,
    width?: number,
    height?: number
}

function getPathData(imgPath: string): string[] {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(imgPath, "image/svg+xml");
    const pathElements = svgDoc.querySelectorAll("path");

    const arrayOfPathValues: string[] = [];

    if (pathElements != null && pathElements.length > 1) {
        pathElements.forEach(e => {
            arrayOfPathValues.push(e?.getAttribute("d") ?? "");
        });

        return arrayOfPathValues;
    }
    else arrayOfPathValues.push(pathElements[0]?.getAttribute("d") ?? "");
    
    return arrayOfPathValues;
}

export const listOfPaths: PathObject[] = [
    {
        name: "notification",
        path: getPathData(Notification),
        grayLevel: 600,
        hoverBlueShade: true,
        fill: false,
        stroke: true
    },
    {
        name: "search",
        path: getPathData(Search),
        grayLevel: 400,
        hoverBlueShade: false,
        fill: true,
        stroke: false
    },
    {
        name: "dashboard",
        path: getPathData(Home),
        sidebarItem: true,
        grayLevel: 600,
        hoverBlueShade: true,
        fill: false,
        stroke: true
    },
    {
        name: "inventory",
        path: getPathData(Inventory),
        sidebarItem: true,
        grayLevel: 600,
        hoverBlueShade: true,
        fill: true,
        stroke: false
    },
    {
        name: "reports",
        path: getPathData(Report),
        sidebarItem: true,
        grayLevel: 600,
        hoverBlueShade: true,
        fill: true,
        stroke: false
    },
    {
        name: "suppliers",
        path: getPathData(Suppliers),
        sidebarItem: true,
        grayLevel: 600,
        hoverBlueShade: true,
        fill: true,
        stroke: false
    },
    {
        name: "orders",
        path: getPathData(Order),
        sidebarItem: true,
        grayLevel: 600,
        hoverBlueShade: true,
        fill: true,
        stroke: false
    },
    {
        name: "manage stores",
        path: getPathData(ManageStore),
        sidebarItem: true,
        grayLevel: 600,
        hoverBlueShade: true,
        fill: true,
        stroke: false
    },
    {
        name: "settings",
        path: getPathData(Settings),
        grayLevel: 600,
        hoverBlueShade: false,
        fill: true,
        stroke: false
    },
    {
        name: "log out",
        path: getPathData(LogOut),
        grayLevel: 600,
        hoverBlueShade: false,
        fill: true,
        stroke: false
    },
];