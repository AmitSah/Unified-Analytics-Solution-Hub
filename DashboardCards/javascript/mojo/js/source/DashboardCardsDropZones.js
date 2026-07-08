(function () { 
    if (!mstrmojo.plugins.DashboardCards) {
        mstrmojo.plugins.DashboardCards = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.vi.models.CustomVisDropZones",
        "mstrmojo.array"
    );

    mstrmojo.plugins.DashboardCards.DashboardCardsDropZones = mstrmojo.declare(
        mstrmojo.vi.models.CustomVisDropZones,
        null,
        {
            scriptClass: "mstrmojo.plugins.DashboardCards.DashboardCardsDropZones",
            cssClass: "DashboardCardsdropzones",
            getCustomDropZones: function getCustomDropZones(){
                return [ 
                    { 
                        name: "Dashboard Title", 
                        maxCapacity:1, 
                        title:"Drag Dashboard Card Attribute Here", 
                        allowObjectType:1
                    },                    
                    { 
                        name: "Dashboard Desc", 
                        maxCapacity:1, 
                        title:"Drag Dashboard Card Attribute Here", 
                        allowObjectType:1
                    },
                    { 
                        name: "Developed By", 
                        maxCapacity:1, 
                        title:"Drag Dashboard Card Attribute Here", 
                        allowObjectType:1
                    },
                    { 
                        name: "Developed On", 
                        maxCapacity:1, 
                        title:"Drag Dashboard Card Attribute Here", 
                        allowObjectType:1
                    },
                    { 
                        name: "Last Updated On", 
                        maxCapacity:1, 
                        title:"Drag Dashboard Card Attribute Here", 
                        allowObjectType:1
                    },
                    { 
                        name: "Quality Owner", 
                        maxCapacity:1, 
                        title:"Drag Dashboard Card Attribute Here", 
                        allowObjectType:1
                    },
                    { 
                        name: "Category", //Mobile Only, Broadband Only etc.
                        maxCapacity:1, 
                        title:"Drag Dashboard Card Attribute Here", 
                        allowObjectType:1
                    },
                    { 
                        name: "Dashboard Icon/Img URL", 
                        maxCapacity:1, 
                        title:"Drag Dashboard Card Attribute Here", 
                        allowObjectType:1
                    },
                    { 
                        name: "Platform", //ODE-P or ODE-S
                        maxCapacity:1, 
                        title:"Drag Dashboard Card Attribute Here", 
                        allowObjectType:1
                    },
                    { 
                        name: "Dashboard URL", 
                        maxCapacity:1, 
                        title:"Drag Dashboard Card Attribute Here", 
                        allowObjectType:1
                    },
                    { 
                        name: "Is Dashboard Certified", 
                        maxCapacity:1, 
                        title:"Drag Dashboard Card Attribute Here", 
                        allowObjectType:1
                    },
                    { 
                        name: "Access", //Restricted or Public
                        maxCapacity:1, 
                        title:"Drag Dashboard Card Attribute Here", 
                        allowObjectType:1
                    },
                    { 
                        name: "Access Content HTML", //HTML content for Describing how to Access dashboards
                        maxCapacity:1, 
                        title:"Drag Dashboard Card Attribute Here", 
                        allowObjectType:1
                    },
                    { 
                        name: "Documentation HTML", 
                        maxCapacity:1, 
                        title:"Drag Dashboard Card Attribute Here", 
                        allowObjectType:1
                    },
                    { 
                        name: "Metric", 
                        maxCapacity:1, 
                        title:"Drag Metric Here", 
                        allowObjectType:2
                    }/*, { 
                    name: "Tooltip", 
                    maxCapacity:4, 
                    title:"Drag Metric Here", 
                    allowObjectType:2
                    }*/
                ];},
            shouldAllowObjectsInDropZone: function shouldAllowObjectsInDropZone(zone, dragObjects, idx, edge, context) {
 








},
            getActionsForObjectsDropped: function getActionsForObjectsDropped(zone, droppedObjects, idx, replaceObject, extras) {
 








},
            getActionsForObjectsRemoved: function getActionsForObjectsRemoved(zone, objects) { 
 








},
            getDropZoneContextMenuItems: function getDropZoneContextMenuItems(cfg, zone, object, el) {
 








}
})}());
//@ sourceURL=DashboardCardsDropZones.js