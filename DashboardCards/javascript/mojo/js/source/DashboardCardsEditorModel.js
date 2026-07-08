(function () { 
    if (!mstrmojo.plugins.DashboardCards) {
        mstrmojo.plugins.DashboardCards = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.vi.models.editors.CustomVisEditorModel",
        "mstrmojo.array"
    );
	
	var $WT = mstrmojo.vi.models.editors.CustomVisEditorModel.WIDGET_TYPE;

    mstrmojo.plugins.DashboardCards.DashboardCardsEditorModel = mstrmojo.declare(
        mstrmojo.vi.models.editors.CustomVisEditorModel,
        null,
        {
            scriptClass: "mstrmojo.plugins.DashboardCards.DashboardCardsEditorModel",
            cssClass: "DashboardCardseditormodel",
            getCustomProperty: function getCustomProperty(){
				
				var host = this.getHost();
				
				
				return [{
                        name: "Chart Color Configuration",
                        value: [
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Group Line"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardsGroupBottomLineColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Group Header Background"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardGroupHeaderBgColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Group Front Content Background"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardFrontContentBgColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
                            {
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Card Back Header Font Color"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardBackHeaderFontColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Card Back Bkg Gradient1"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardBackBgColorGradient1",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Card Back Bkg Gradient2"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardBackBgColorGradient2",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Card Back Font"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardBackFontColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Info Button Background"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashInfoBtnBgColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Info Button on Hover Background"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashInfoBtnBgHoverColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Card Header Background Gradient1"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardHeaderBgColorGradient1",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Card Header Background Gradient2"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardHeaderBgColorGradient2",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Card Content Title Font"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardContentTitleFontColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Card Content Footer Font"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardContentFooterFontColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Card Content Update Font"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardContentUpdateFontColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Card Content Dev By Icon"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardContentDevByIconColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Card Content QA By Icon"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardContentQAByIconColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },							
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Card Content Platform Icon"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardContentPlatformIconColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Card Flip Icon"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardFlipIconColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Card Flip Icon Hover"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardFlipIconHoverColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Toggle All Button Background"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardToggleAllBtnBGColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            },
							{
                                style: $WT.EDITORGROUP,
                                items: [
                                    {
                                        style: $WT.LABEL,
                                        name: "text",
                                        width: "100%",
                                        labelText: "Toggle All Button Font"
                                    },
									{
                                        style: $WT.FILLGROUP,
                                        width: "100%",
                                        propertyName: "dashCardToggleAllBtnFontColor",
                                        config: {
                                            suppressData: true,
                                            callback: function() {
                                                host.refresh();
                                            }
                                        },
                                        items: [{
                                            childName: "fillAlpha",
                                            disabled: false
                                        }]
                                    }
									
                                    /*, 
                                    { 
                                           style: $WT.CHECKBOXANDLABEL, 
                                           propertyName: 'roundimage', 
                                           labelText: "Round Image" 
                                       }*/
                                ]
                            }
						
                        ]
                    }					
					
                ];






}
})}());
//@ sourceURL=DashboardCardsEditorModel.js