//Developed by Amit Kumar Sah - amit.sah@t-systems.com / amitkumars954@gmail.com

(function () { 
    if (!mstrmojo.plugins.DashboardCards) {
        mstrmojo.plugins.DashboardCards = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.CustomVisBase",
        "mstrmojo.models.template.DataInterface",
        "mstrmojo.vi.models.editors.CustomVisEditorModel"
    );
	
	//Adding reference of properties
	
	mstrmojo.plugins.DashboardCards.NM_PROPERTIES = {
        dashCardsGroupBottomLineColor: 'dashCardsGroupBottomLineColor',
        dashCardGroupHeaderBgColor: 'dashCardGroupHeaderBgColor',
        dashCardFrontContentBgColor: 'dashCardFrontContentBgColor',
        dashCardBackBgColorGradient1: 'dashCardBackBgColorGradient1',
        dashCardBackBgColorGradient2: 'dashCardBackBgColorGradient2',
		dashCardBackFontColor: 'dashCardBackFontColor',
		dashInfoBtnBgColor: 'dashInfoBtnBgColor',
		dashInfoBtnBgHoverColor: 'dashInfoBtnBgHoverColor',
		dashCardHeaderBgColorGradient1: 'dashCardHeaderBgColorGradient1',
		dashCardHeaderBgColorGradient2: 'dashCardHeaderBgColorGradient2',
		dashCardContentTitleFontColor: 'dashCardContentTitleFontColor',
		dashCardContentFooterFontColor: 'dashCardContentFooterFontColor',
		dashCardContentUpdateFontColor: 'dashCardContentUpdateFontColor',
		dashCardContentDevByIconColor: 'dashCardContentDevByIconColor',
		dashCardContentQAByIconColor: 'dashCardContentQAByIconColor',
		dashCardBackHeaderFontColor: 'dashCardBackHeaderFontColor',
		dashCardContentPlatformIconColor: 'dashCardContentPlatformIconColor',
		dashCardFlipIconColor: 'dashCardFlipIconColor',
		dashCardFlipIconHoverColor: 'dashCardFlipIconHoverColor',
		dashCardToggleAllBtnBGColor: 'dashCardToggleAllBtnBGColor',
		dashCardToggleAllBtnFontColor: 'dashCardToggleAllBtnFontColor'
		
    };

    mstrmojo.plugins.DashboardCards.DashboardCards = mstrmojo.declare(
        mstrmojo.CustomVisBase,
        null,
        {
            scriptClass: "mstrmojo.plugins.DashboardCards.DashboardCards",
            cssClass: "dashboardcards",
            errorMessage: "There is either not enough data to display the visualization or an error occurred while executing the visualization.",
            errorDetails: "This visualization requires 14 attributes and one metric.",
            externalLibraries: [{url: (mstrApp.getPluginsRoot && mstrApp.getPluginsRoot() || "../plugins/") +"DashboardCards/lib/jquery-3.6.0.min.js"}], 
            useRichTooltip: false,
            reuseDOMNode: false,
            supportNEE: true,
            plot:function(){
				
				//debugger;

				var me = this;
				
				if(me.domNode.childNodes.length===1){
					me.domNode.removeChild(me.domNode.childNodes[0]);
				}
				
				var dataConfig = {hasSelection: true};
				me.addUseAsFilterMenuItem();
				me.addAttributeSelection();
				me.addSelectionsFromExpression;
				

				// var existing = document.querySelector(
				// 'link[href="../plugins/DashboardCards/lib/fontawesome/css/all.min.css"]'
				// );

				// if (!existing) {
				// var link = document.createElement("link");
				// link.rel = "stylesheet";
				// link.href = "../plugins/DashboardCards/lib/fontawesome/css/all.min.css";
				// document.head.appendChild(link);
				// }

				var pluginRoot = (mstrApp.getPluginsRoot && mstrApp.getPluginsRoot()) || "../plugins/";
				var cssPath = pluginRoot + "DashboardCards/lib/fontawesome/css/all.min.css";

				var existing = document.querySelector('link[href="' + cssPath + '"]');

				if (!existing) {
					var link = document.createElement("link");
					link.rel = "stylesheet";
					link.href = cssPath;
					document.head.appendChild(link);
				}

				/*
				var indexMap = [], // to store attributeElement - index pair
				barData = [],
				xAxisData =[];
				*/

				//const nodes = [],
				//links =[];
				
				/*
				//Creating Dynamic Bar Static and highlight Color
				const staticColor =   "steelblue",
				highlightColor = "orange";
				
				//Creating Css property 
				var sheet = document.createElement('style')
				sheet.innerHTML = ".bar {fill: "+staticColor+"} .highlight {fill:"+highlightColor+"}";
				document.body.appendChild(sheet);
				*/
				
				//Viz ID
				var gridID = me.domNode.id;
				gridID = gridID.replace(/\*/g, '\\*');
                var gridIDSplit = gridID.split("*");
                var len = gridIDSplit[2].length;
                var dynamicVizSuffix = gridIDSplit[2].substring((len - 5), (len - 1));		

				
				
				//Seeting up default property Value
				me.setDefaultPropertyValues({
                    //indextype : "" , 
                    //labelfont: { fontSize: '18pt', fontFamily: 'Arial', fontWeight : 'false' , fontColor: '#202020' } , 
                    //valuefont: {fontSize: '18pt',fontFamily: 'Arial',fontWeight : 'false' , fontColor: '#333333' } , 
                    //chgfont : {fontSize: '18pt',fontFamily: 'Arial',fontWeight : 'false' , fontColor: '#333333' } , 
                    // chgvaluefont: {fontSize: '18pt',fontFamily: 'Arial',fontWeight : 'false' , fontColor: '#141414' } , 
					
                    dashCardsGroupBottomLineColor: {
                        fillColor: "#dddddd",
                        fillAlpha: 100
                    },
					dashCardGroupHeaderBgColor: {
                        fillColor: "#e5e7eb",
                        fillAlpha: 100
                    },
					dashCardFrontContentBgColor: {
                        fillColor: "#ffffff",
                        fillAlpha: 100
                    },
					dashCardBackBgColorGradient1: {
                        fillColor: "#1f5bd8",
                        fillAlpha: 100
                    },
					dashCardBackBgColorGradient2: {
                        fillColor: "#1fa2ff",
                        fillAlpha: 100
                    },
					dashCardBackFontColor: {
                        fillColor: "#ffffff",
                        fillAlpha: 100
                    },
					dashInfoBtnBgColor: {
                        fillColor: "#ffffff",
                        fillAlpha: 100
                    },
					dashInfoBtnBgHoverColor: {
                        fillColor: "#1f5bd8",
                        fillAlpha: 100
                    },
					dashCardHeaderBgColorGradient1: {
                        fillColor: "#e20074",
                        fillAlpha: 30
                    },
					dashCardHeaderBgColorGradient2: {
                        fillColor: "#e75ba3",
                        fillAlpha: 30
                    },
					dashCardContentTitleFontColor: {
                        fillColor: "#333333",
                        fillAlpha: 100
                    },
					dashCardContentFooterFontColor: {
                        fillColor: "#666666",
                        fillAlpha: 100
                    },
					dashCardContentUpdateFontColor: {
                        fillColor: "#22c55e",
                        fillAlpha: 100
                    },
					dashCardContentDevByIconColor: {
                        fillColor: "#2a6df5",
                        fillAlpha: 100
                    },
					dashCardContentQAByIconColor: {
                        fillColor: "#e20074",
                        fillAlpha: 100
                    },
					dashCardBackHeaderFontColor: {
                        fillColor: "#1d4ed8",
                        fillAlpha: 100
                    },
					dashCardContentPlatformIconColor: {
                        fillColor: "#22c55e",
                        fillAlpha: 100
                    },
					dashCardFlipIconColor: { //use in svg fill property
                        fillColor: "#444444",
                        fillAlpha: 100
                    },
					dashCardFlipIconHoverColor: {
                        fillColor: "#e20074",
                        fillAlpha: 100
                    },
					dashCardToggleAllBtnBGColor: {
                        fillColor: "#1f5bd8",
                        fillAlpha: 100
                    },
					dashCardToggleAllBtnFontColor: {
                        fillColor: "#ffffff",
                        fillAlpha: 100
                    }

					
                });

				//Initializing the property values
                var NM_PROPERTIES = mstrmojo.plugins.DashboardCards.NM_PROPERTIES,
					
					propdashCardsGroupBottomLineColor = me.getProperty(NM_PROPERTIES.dashCardsGroupBottomLineColor).fillColor,
                    propdashCardsGroupBottomLineColorA = me.getProperty(NM_PROPERTIES.dashCardsGroupBottomLineColor).fillAlpha,

					propdashCardGroupHeaderBgColor = me.getProperty(NM_PROPERTIES.dashCardGroupHeaderBgColor).fillColor,
                    propdashCardGroupHeaderBgColorA = me.getProperty(NM_PROPERTIES.dashCardGroupHeaderBgColor).fillAlpha,

					propdashCardFrontContentBgColor = me.getProperty(NM_PROPERTIES.dashCardFrontContentBgColor).fillColor,
                    propdashCardFrontContentBgColorA = me.getProperty(NM_PROPERTIES.dashCardFrontContentBgColor).fillAlpha,

					propdashCardBackBgColorGradient1 = me.getProperty(NM_PROPERTIES.dashCardBackBgColorGradient1).fillColor,
                    propdashCardBackBgColorGradient1A = me.getProperty(NM_PROPERTIES.dashCardBackBgColorGradient1).fillAlpha,

					propdashCardBackBgColorGradient2 = me.getProperty(NM_PROPERTIES.dashCardBackBgColorGradient2).fillColor,
                    propdashCardBackBgColorGradient2A = me.getProperty(NM_PROPERTIES.dashCardBackBgColorGradient2).fillAlpha,

					propdashCardBackFontColor = me.getProperty(NM_PROPERTIES.dashCardBackFontColor).fillColor,
                    propdashCardBackFontColorA = me.getProperty(NM_PROPERTIES.dashCardBackFontColor).fillAlpha,

					propdashInfoBtnBgColor = me.getProperty(NM_PROPERTIES.dashInfoBtnBgColor).fillColor,
                    propdashInfoBtnBgColorA = me.getProperty(NM_PROPERTIES.dashInfoBtnBgColor).fillAlpha,

					propdashInfoBtnBgHoverColor = me.getProperty(NM_PROPERTIES.dashInfoBtnBgHoverColor).fillColor,
                    propdashInfoBtnBgHoverColorA = me.getProperty(NM_PROPERTIES.dashInfoBtnBgHoverColor).fillAlpha,

					propdashCardHeaderBgColorGradient1 = me.getProperty(NM_PROPERTIES.dashCardHeaderBgColorGradient1).fillColor,
                    propdashCardHeaderBgColorGradient1A = me.getProperty(NM_PROPERTIES.dashCardHeaderBgColorGradient1).fillAlpha,

					propdashCardHeaderBgColorGradient2 = me.getProperty(NM_PROPERTIES.dashCardHeaderBgColorGradient2).fillColor,
                    propdashCardHeaderBgColorGradient2A = me.getProperty(NM_PROPERTIES.dashCardHeaderBgColorGradient2).fillAlpha,

					propdashCardContentTitleFontColor = me.getProperty(NM_PROPERTIES.dashCardContentTitleFontColor).fillColor,
                    propdashCardContentTitleFontColorA = me.getProperty(NM_PROPERTIES.dashCardContentTitleFontColor).fillAlpha,

					propdashCardContentFooterFontColor = me.getProperty(NM_PROPERTIES.dashCardContentFooterFontColor).fillColor,
                    propdashCardContentFooterFontColorA = me.getProperty(NM_PROPERTIES.dashCardContentFooterFontColor).fillAlpha,

					propdashCardContentUpdateFontColor = me.getProperty(NM_PROPERTIES.dashCardContentUpdateFontColor).fillColor,
                    propdashCardContentUpdateFontColorA = me.getProperty(NM_PROPERTIES.dashCardContentUpdateFontColor).fillAlpha,

					propdashCardContentDevByIconColor = me.getProperty(NM_PROPERTIES.dashCardContentDevByIconColor).fillColor,
                    propdashCardContentDevByIconColorA = me.getProperty(NM_PROPERTIES.dashCardContentDevByIconColor).fillAlpha,

					propdashCardContentQAByIconColor = me.getProperty(NM_PROPERTIES.dashCardContentQAByIconColor).fillColor,
                    propdashCardContentQAByIconColorA = me.getProperty(NM_PROPERTIES.dashCardContentQAByIconColor).fillAlpha,

					propdashCardBackHeaderFontColor = me.getProperty(NM_PROPERTIES.dashCardBackHeaderFontColor).fillColor,
                    propdashCardBackHeaderFontColorA = me.getProperty(NM_PROPERTIES.dashCardBackHeaderFontColor).fillAlpha,

					propdashCardContentPlatformIconColor = me.getProperty(NM_PROPERTIES.dashCardContentPlatformIconColor).fillColor,
                    propdashCardContentPlatformIconColorA = me.getProperty(NM_PROPERTIES.dashCardContentPlatformIconColor).fillAlpha,

					propdashCardFlipIconColor = me.getProperty(NM_PROPERTIES.dashCardFlipIconColor).fillColor,
                    propdashCardFlipIconColorA = me.getProperty(NM_PROPERTIES.dashCardFlipIconColor).fillAlpha,

					propdashCardFlipIconHoverColor = me.getProperty(NM_PROPERTIES.dashCardFlipIconHoverColor).fillColor,
                    propdashCardFlipIconHoverColorA = me.getProperty(NM_PROPERTIES.dashCardFlipIconHoverColor).fillAlpha,

					propdashCardToggleAllBtnBGColor = me.getProperty(NM_PROPERTIES.dashCardToggleAllBtnBGColor).fillColor,
                    propdashCardToggleAllBtnBGColorA = me.getProperty(NM_PROPERTIES.dashCardToggleAllBtnBGColor).fillAlpha,

					propdashCardToggleAllBtnFontColor = me.getProperty(NM_PROPERTIES.dashCardToggleAllBtnFontColor).fillColor,
                    propdashCardToggleAllBtnFontColorA = me.getProperty(NM_PROPERTIES.dashCardToggleAllBtnFontColor).fillAlpha					
					;
				
				//get hex code for alpha
				function alphaToHex(alpha) {
					const hex = Math.round((alpha/100) * 255).toString(16).toUpperCase();
					return hex.length === 1 ? "0" + hex : hex;
				}	

				//To read the data from MSTR Viz
				var rawD = me.dataInterface.getRawData(mstrmojo.models.template.DataInterface.ENUM_RAW_DATA_FORMAT.ROWS_ADV, dataConfig);

				//throw error explicitly.
                if (rawD.length === 0 || rawD[0].headers.length < 14) {
                    throw "insufficient data!";
                }

				var cardData = [];

				for (i = 0; i < rawD.length; i++) 
				{   
										
					cardData.push({ 
						parentSelectorID: rawD[i].headers[0].attributeSelector.eid,
						title: rawD[i].headers[0].name,
						description: rawD[i].headers[1].name,
						developed_by: rawD[i].headers[2].name,
						developedOn: rawD[i].headers[3].name,  
						last_updated: rawD[i].headers[4].name, 						
						quality_owner: rawD[i].headers[5].name,						
						category: rawD[i].headers[6].name,
						image: rawD[i].headers[7].name,
						platform: rawD[i].headers[8].name,
						url: rawD[i].headers[9].name,
						certified: rawD[i].headers[10].name === "Yes" ? true : false, // Assuming the value is "Yes" for certified dashboards, adjust as needed
						//restricted_flag: rawD[i].headers[13].name === "Yes" ? true : false,
						access: rawD[i].headers[11].name,
						accessHtml: rawD[i].headers[12].name,
						documentationHtml: rawD[i].headers[13].name,
						isUserRestricted: rawD[i].values[0].v
						
					});						      
				
				}
											
				
								
				//Adding Margin to Viz Area
				var margin = {top: 50, right: 50, bottom: 0, left: 50},
				width = parseInt(me.width,10),
				height = parseInt(me.height,10);

				// Create Popup IW once click on Access icon
				// Create modal
				const accessModal = document.createElement("div");
				accessModal.id = "accessModal"+dynamicVizSuffix;
				accessModal.className = "modal";

				// Create modal content
				const modalContent = document.createElement("div");
				modalContent.className = "modal-content";

				// Create close button
				const closeBtn = document.createElement("span");
				closeBtn.className = "close-btn";
				closeBtn.innerHTML = "&times;";

				// Create modal body
				// const modalBody = document.createElement("div");
				// modalBody.id = "modalBody"+dynamicVizSuffix;				
				// modalBody.className = "modal-body";

				

				// ===== Modal Header =====
				const modalHeader = document.createElement("div");
				modalHeader.className = "modal-header";

				// Tabs container
				const modalTabs = document.createElement("div");
				modalTabs.className = "modal-tabs";

				// Access Tab
				const accessTab = document.createElement("span");
				accessTab.className = "modal-tab active";
				accessTab.dataset.tab = "access";
				accessTab.textContent = "Access Detail";

				// Documentation Tab
				const docTab = document.createElement("span");
				docTab.className = "modal-tab";
				docTab.dataset.tab = "documentation";
				docTab.textContent = "Documentation Detail";

				modalTabs.appendChild(accessTab);
				modalTabs.appendChild(docTab);

				// Close button
				modalHeader.appendChild(modalTabs);
				modalHeader.appendChild(closeBtn);

				// Access Content
				const accessBody = document.createElement("div");
				accessBody.id = "modalAccessBody" + dynamicVizSuffix;
				accessBody.className = "modal-body";

				// Documentation Content
				const docBody = document.createElement("div");
				docBody.id = "modalDocBody" + dynamicVizSuffix;
				docBody.className = "modal-body";
				docBody.style.display = "none";

				// Assemble elements
				modalContent.appendChild(closeBtn);
				//modalContent.appendChild(modalBody);

				// Assemble
				modalContent.appendChild(modalHeader);
				modalContent.appendChild(accessBody);
				modalContent.appendChild(docBody);
				
				accessModal.appendChild(modalContent);

				//---- End of Popup IW Creation ----

				// Main container
				const container = document.createElement("div");
				container.className = "dashboardCardsContainer";

				// Controls div
				const controls = document.createElement("div");
				controls.className = "dashboardCardsControls";

				// Label
				const label = document.createElement("label");

				// Checkbox
				const checkbox = document.createElement("input");
				checkbox.type = "checkbox";
				checkbox.id = "groupToggle"+dynamicVizSuffix;
				checkbox.checked = true;

				label.appendChild(checkbox);
				label.append(" Group by Category");

				// Button
				const button = document.createElement("button");
				button.id = "toggleAll"+dynamicVizSuffix;
				button.className = "dash-card-toggleAll-btn";
				button.style.background = propdashCardToggleAllBtnBGColor;
				button.style.color = propdashCardToggleAllBtnFontColor;

				// Icon inside button
				// const buttonIcon = document.createElement("i");
				// buttonIcon.className = "fa-solid fa-expand";

				// button.appendChild(buttonIcon);

				const expandIcon = `
				<svg xmlns="http://www.w3.org/2000/svg"
					width="11"
					height="11"
					viewBox="0 0 16 16"
					fill="currentColor">
				<path d="M1 6V1h5v2H3v3H1zm9-5h5v5h-2V3h-3V1zM1 10h2v3h3v2H1v-5zm12 3v-3h2v5h-5v-2h3z"/>
				</svg>
				`;

				const collapseIcon = `
				<svg xmlns="http://www.w3.org/2000/svg"
					width="11"
					height="11"
					viewBox="0 0 16 16"
					fill="currentColor">
				<path d="M6 1v2H4.41L7 5.59 5.59 7 3 4.41V6H1V1h5zm4 0h5v5h-2V4.41L10.41 7 9 5.59 11.59 3H10V1zM5.59 9 7 10.41 4.41 13H6v2H1v-5h2v1.59L5.59 9zm4.82 1.41L13 11.59V10h2v5h-5v-2h1.59L9 10.41 10.41 9z"/>
				</svg>
				`;

				button.insertAdjacentHTML("beforeend", expandIcon);
				button.append("Collapsed All");

				// Select wrapper
				const selectWrapper = document.createElement("div");
				selectWrapper.className = "dash-select-wrapper";

				// Sort icon
				const sortIcon = `
				<svg 
					class="dash-card-sort-icon"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="currentColor">
				<path d="M4 1l3 3H5v8H3V4H1l3-3zm0 14l-3-3h2V4h2v8h2l-3 3z"/>
				<path d="M10 4h5v2h-5V4zm0 3h4v2h-4V7zm0 3h3v2h-3v-2z"/>
				</svg>`;
				// document.createElement("i");
				// sortIcon.className = "dash-card-sort-icon";

				// Select dropdown
				const select = document.createElement("select");
				select.id = "sortOrder"+dynamicVizSuffix;
				select.className = "dash-select-sortOrder";

				// Options
				const option1 = document.createElement("option");
				option1.value = "desc";
				option1.textContent = "Newest First";

				const option2 = document.createElement("option");
				option2.value = "asc";
				option2.textContent = "Oldest First";

				// dropdown arrow icon
				const dropdown_arrow_Icon = `
				<svg class="dash-select-dropdown-arrow"
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 512 512"
					fill="currentColor">
				<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
				</svg>`;

				select.appendChild(option1);
				select.appendChild(option2);

				// Append select items
				selectWrapper.insertAdjacentHTML("beforeend", sortIcon);
				selectWrapper.appendChild(select);
				selectWrapper.insertAdjacentHTML("beforeend", dropdown_arrow_Icon);

				// Append controls children
				controls.appendChild(label);
				controls.appendChild(button);
				controls.appendChild(selectWrapper);

				// Card container
				const cardContainer = document.createElement("div");
				cardContainer.id = "cardContainer"+dynamicVizSuffix;
				cardContainer.style.display ="block";
				cardContainer.className = "dash-card-grid";

				// Assemble everything
				container.appendChild(controls);
				container.appendChild(cardContainer);

				
				//document.body.appendChild(container);

				// Build the HTML string with dynamic IDs
				//const html = $("<div style='width:"+width+"px; height:"+height+"px'><div class='ctrl' style='width:"+width+"px;height:50px'><input id='filter-input' placeholder='Highlight search (zooms to matches)...' /> <input id='filter-graph-input' placeholder='Filter graph by node (auto-arrange)...' /> <button id='unset-filter-btn'>Unset Filter /Fit to Screen</button><button id='fit-btn'>Fit to Screen</button> </div> <svg id='svgRoot'> <defs> <marker id='arrow' viewBox='0 -5 10 10' refX='10' refY='0' markerWidth='6' markerHeight='6' orient='auto'> <path d='M0,-5L10,0L0,5' fill='#bbb' /> </marker> </defs> <g id='zoom-container'> <g id='zoom-layer'></g> </g> </svg> <div class='tooltip' id='tooltip'></div> </div>");
				
				// Add to page
				$("#" + gridID).append(accessModal);
				$("#"+gridID).append(container);
				$("#"+gridID).css("overflow", "scroll");
				//alert("After append html");

				// Event delegation for card clicks to open URL in new tab
				$("#" + gridID)
				.off("click.dashcards", ".dash-card")
				.on("click.dashcards", ".dash-card", function (e) {

					const isUserRestricted = $(this).attr("data-isuser-restricted");
					if(isUserRestricted === '0') {
						const url = $(this).attr("data-url");					

						if (url) {
							window.open(url, "_blank");
						}
					}
				});
				
				renderCards(cardData);
				if (!$("#groupToggle"+dynamicVizSuffix).is(":checked")) {
					$("#toggleAll"+dynamicVizSuffix).hide();
				}
				
				function renderCards(data) {
					const container = $("#cardContainer"+dynamicVizSuffix);
					container.empty();
					const groupEnabled = $("#groupToggle"+dynamicVizSuffix).is(":checked");
					const sortOrder = $("#sortOrder"+dynamicVizSuffix).val();
					// ✅ Sort
					data.sort((a, b) => {
						return sortOrder === "asc" ? new Date(a.developedOn) - new Date(b.developedOn) : new Date(b.developedOn) - new Date(a.developedOn);
					});
					// ✅ If NOT grouped → normal render
					if (!groupEnabled) {
						const grid = $('<div class="dash-card-grid"></div>');
						renderCardList(data, grid);
						container.append(grid);
						return;
					}
					// ✅ Group by category
					const groups = {};
					data.forEach(item => {
						if (!groups[item.category]) {
							groups[item.category] = [];
						}
						groups[item.category].push(item);
					});
					// ✅ Render groups
					Object.keys(groups).forEach(category => {
						const groupDiv = $(`
						<div class="dash-CardsGroup" style="border-bottom: 1px solid ${propdashCardsGroupBottomLineColor};">
							<div class="dash-card-group-header" style="background: ${propdashCardGroupHeaderBgColor};">
								<span>${category}</span>
								
								<svg class="dash-toggle-icon"
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="14"
									viewBox="0 0 512 512"
									fill="currentColor">
								<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
								</svg>
							</div>
							<div class="dash-card-grid"></div>
						</div>
					`);
						const grid = groupDiv.find(".dash-card-grid");
						renderCardList(groups[category], grid);
						container.append(groupDiv);
					});
				}
				// $(document).on("click", ".dash-card-group-header", function() {
				// 	$(this).parent().toggleClass("collapsed");
				// });

				$(document).off("click", ".dash-card-group-header");

				$(document).on("click", ".dash-card-group-header", function () {
					let parent = $(this).closest(".dash-CardsGroup");
					parent.toggleClass("collapsed");
				});

				$("#" + gridID).off("click", ".access-btn, .request-access-btn");

				$("#" + gridID).on("click", ".access-btn, .request-access-btn", function(e){

					e.stopPropagation();

					const accessHtml = decodeURIComponent($(this).attr("data-html"));

					const documentationHtml = decodeURIComponent($(this).attr("data-doc"));

					$("#modalAccessBody"+dynamicVizSuffix).html(accessHtml);

					$("#modalDocBody"+dynamicVizSuffix).html(documentationHtml);

					$("#modalAccessBody"+dynamicVizSuffix).show();
					$("#modalDocBody"+dynamicVizSuffix).hide();

					$("#accessModal"+dynamicVizSuffix)
						.find(".modal-tab")
						.removeClass("active");

					$("#accessModal"+dynamicVizSuffix)
						.find('.modal-tab[data-tab="access"]')
						.addClass("active");

					$("#accessModal"+dynamicVizSuffix).fadeIn(200);

				});

				$("#" + gridID).off("click", ".close-btn");

				$("#" + gridID).on("click", ".close-btn", function (e) {
					e.stopPropagation();
					$("#accessModal" + dynamicVizSuffix).fadeOut(200);
				});

				$("#" + gridID).on("click", ".modal-tab", function () {

					const modal = $(this).closest(".modal");

					modal.find(".modal-tab").removeClass("active");
					$(this).addClass("active");

					if ($(this).data("tab") === "access") {

						modal.find(".modal-body").hide();
						modal.find('[id^="modalAccessBody"]').fadeIn(150);

					} else {

						modal.find(".modal-body").hide();
						modal.find('[id^="modalDocBody"]').fadeIn(150);

					}

				});

				// $(".dash-card-group-header").on("click", function() {
				// 	let parent = $(this).closest(".dash-CardsGroup");
				// 	//alert(parent);
    			// 	//alert($(this).closest(".dash-CardsGroup").attr("class"));				
				// 	if (parent.hasClass("collapsed")) {
				// 		parent.removeClass("collapsed");
				// 	} else {
				// 		parent.addClass("collapsed");
				// 	}
				// });


				function renderCardList(list, container) {
					list.forEach(item => {
						const card = `
						<div class="dash-card${item.isUserRestricted =='1' ? " restricted" : ""}" data-url="${item.url}" title="${item.title}" data-isuser-restricted="${item.isUserRestricted}">
							<div class="dash-card-inner">

								<div class="dash-card-front" style="background: ${propdashCardFrontContentBgColor};">									

									${item.certified ? 
										`<div class="dash-card-ribbon"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="11" height="11" fill="#ffffff"> 
											<path d="M504 256c0 136.97-111.03 248-248 248S8 392.97 8 256 119.03 8 256 8s248 111.03 248 248zM227.31 387.31l184-184c6.25-6.25 6.25-16.38 0-22.63l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0L216 308.12l-70.06-70.06c-6.25-6.25-16.38-6.25-22.63 0l-22.63 22.63c-6.25 6.25-6.25 16.38 0 22.63l104 104c6.25 6.25 16.38 6.25 22.63 0z"/>
											</svg> 
											<span>Certified</span>
										</div>`: ''}
									<div class="dash-info-btn" onclick="event.stopPropagation();" style="background: ${propdashInfoBtnBgColor};">
									<svg class="dash-card-flip-icon" viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg" fill="${propdashCardFlipIconColor}">

									<!-- Left curved shape -->
									<path d="M12 32
											a10 10 0 0 1 10-10
											h6 v4 h-6
											a6 6 0 0 0 0 12
											h6 v4 h-6
											a10 10 0 0 1-10-10z"/>

									<!-- Right curved shape + arrow -->
									<path d="M52 32
											a10 10 0 0 0-10-10
											h-6 v4 h6
											a6 6 0 0 1 0 12
											h-6 v4 h6
											a10 10 0 0 0 10-10z"/>

									<!-- Arrow head on right -->
									<polygon points="40,30 48,32 40,34"/>

									<!-- Tilted frame -->
									<polygon points="24,10 42,10 42,30 24,54"/>

									<!-- Bottom directional arrow -->
									<polygon points="26,40 36,40 32,46"/>

									</svg>

									</div>

									<div class="access-btn"	data-html="${encodeURIComponent(item.accessHtml)}" data-doc="${encodeURIComponent(item.documentationHtml)}">
										${item.access === 'restricted' 
											? '<svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 448 512"width="14"height="14"fill="#ef4444"aria-hidden="true"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>' 
											: '<svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 512 512"width="14"height="14"fill="#2f9e58"aria-hidden="true"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>'}
									</div>

									<div class="dash-card-header ${item.image ? 'dash-card-custom-image' : ''}" 
										style="${item.image ? `
											background: linear-gradient(
												135deg,
												${propdashCardHeaderBgColorGradient1}${alphaToHex(propdashCardHeaderBgColorGradient1A)},
												${propdashCardHeaderBgColorGradient2}${alphaToHex(propdashCardHeaderBgColorGradient2A)}
											),
											url(${item.image});
											background-size: contain;
											background-position: center;
											background-repeat: no-repeat;
										` : `background: linear-gradient(
												135deg,
												${propdashCardHeaderBgColorGradient1},
												${propdashCardHeaderBgColorGradient2}
											)`}">
										
										${!item.image ? '<img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"/>' : ''}
									</div>

									<div class="dash-card-body">
										
										<div style="color: ${propdashCardContentUpdateFontColor};">
											<span class="dash-updated">UPDATED</span>
											<span class="dash-doton"> • </span>
											<span class="dash-doton">On ${item.last_updated}</span>
										</div>


										<div class="dash-card-title" title="${item.title}" style="color: ${propdashCardContentTitleFontColor};">${item.title}</div>

										<div class="dash-card-footer" style="color: ${propdashCardContentFooterFontColor};">
											<div class="dash-card-dev-by" title="Developed by - ${item.developed_by} (${item.developedOn})">
												<svg xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 640 512"
													width="14"
													height="14"
													fill="${propdashCardContentDevByIconColor}"
													aria-hidden="true">
												<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM96 288C43 288 0 331 0 384v32c0 35.3 28.7 64 64 64H337.4c-10.5-18.4-17.4-39.1-20.1-61.1c-4.5-36.4 3.4-72.5 20.7-102.9C306.5 298.2 266.4 288 224 288H96zm501.1 47.1l-25.2-14.5c-2.9-9.7-6.8-19.1-11.8-27.8l14.6-25.1c5.2-8.9 3.7-20.1-3.5-27.3l-22.6-22.6c-7.2-7.2-18.4-8.6-27.3-3.5l-25.1 14.6c-8.7-5-18.1-8.9-27.8-11.8l-14.5-25.2c-5.1-8.9-14.6-14.4-24.9-14.4h-32c-10.3 0-19.8 5.5-24.9 14.4l-14.5 25.2c-9.7 2.9-19.1 6.8-27.8 11.8l-25.1-14.6c-8.9-5.2-20.1-3.7-27.3 3.5l-22.6 22.6c-7.2 7.2-8.6 18.4-3.5 27.3l14.6 25.1c-5 8.7-8.9 18.1-11.8 27.8l-25.2 14.5c-8.9 5.1-14.4 14.6-14.4 24.9v32c0 10.3 5.5 19.8 14.4 24.9l25.2 14.5c2.9 9.7 6.8 19.1 11.8 27.8l-14.6 25.1c-5.2 8.9-3.7 20.1 3.5 27.3l22.6 22.6c7.2 7.2 18.4 8.6 27.3 3.5l25.1-14.6c8.7 5 18.1 8.9 27.8 11.8l14.5 25.2c5.1 8.9 14.6 14.4 24.9 14.4h32c10.3 0 19.8-5.5 24.9-14.4l14.5-25.2c9.7-2.9 19.1-6.8 27.8-11.8l25.1 14.6c8.9 5.2 20.1 3.7 27.3-3.5l22.6-22.6c7.2-7.2 8.6-18.4 3.5-27.3l-14.6-25.1c5-8.7 8.9-18.1 11.8-27.8l25.2-14.5c8.9-5.1 14.4-14.6 14.4-24.9v-32c0-10.3-5.5-19.8-14.4-24.9zM432 416a64 64 0 1 1 0-128 64 64 0 1 1 0 128z"/>
												</svg>
												
												<span>Developed by - ${item.developed_by} (${item.developedOn})</span>
											</div>
										</div>
										<div class="dash-card-footer" style="color: ${propdashCardContentFooterFontColor};">
											<div>
												<svg xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 640 512"
													width="14"
													height="14"
													fill="${propdashCardContentQAByIconColor}"
													aria-hidden="true">
													<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM96 288C43 288 0 331 0 384v32c0 35.3 28.7 64 64 64H337.4c-10.5-18.4-17.4-39.1-20.1-61.1c-4.5-36.4 3.4-72.5 20.7-102.9C306.5 298.2 266.4 288 224 288H96zm501.1 47.1l-25.2-14.5c-2.9-9.7-6.8-19.1-11.8-27.8l14.6-25.1c5.2-8.9 3.7-20.1-3.5-27.3l-22.6-22.6c-7.2-7.2-18.4-8.6-27.3-3.5l-25.1 14.6c-8.7-5-18.1-8.9-27.8-11.8l-14.5-25.2c-5.1-8.9-14.6-14.4-24.9-14.4h-32c-10.3 0-19.8 5.5-24.9 14.4l-14.5 25.2c-9.7 2.9-19.1 6.8-27.8 11.8l-25.1-14.6c-8.9-5.2-20.1-3.7-27.3 3.5l-22.6 22.6c-7.2 7.2-8.6 18.4-3.5 27.3l14.6 25.1c-5 8.7-8.9 18.1-11.8 27.8l-25.2 14.5c-8.9 5.1-14.4 14.6-14.4 24.9v32c0 10.3 5.5 19.8 14.4 24.9l25.2 14.5c2.9 9.7 6.8 19.1 11.8 27.8l-14.6 25.1c-5.2 8.9-3.7 20.1 3.5 27.3l22.6 22.6c7.2 7.2 18.4 8.6 27.3 3.5l25.1-14.6c8.7 5 18.1 8.9 27.8 11.8l14.5 25.2c5.1 8.9 14.6 14.4 24.9 14.4h32c10.3 0 19.8-5.5 24.9-14.4l14.5-25.2c9.7-2.9 19.1-6.8 27.8-11.8l25.1 14.6c8.9 5.2 20.1 3.7 27.3-3.5l22.6-22.6c7.2-7.2 8.6-18.4 3.5-27.3l-14.6-25.1c5-8.7 8.9-18.1 11.8-27.8l25.2-14.5c8.9-5.1 14.4-14.6 14.4-24.9v-32c0-10.3-5.5-19.8-14.4-24.9zM432 416a64 64 0 1 1 0-128 64 64 0 1 1 0 128z"/>
												</svg>

												<span>Quality Owner - ${item.quality_owner}</span>
											</div>
										</div>

										<div class="dash-card-footer" style="color: ${propdashCardContentFooterFontColor};">
											<div>
												<svg xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 512 512"
													width="13"
													height="13"
													fill="${propdashCardContentPlatformIconColor}"
													aria-hidden="true">
												<path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
												</svg>
												
												<span class="dash-card-platform_text">${item.platform}</span>
											</div>
										</div>
									</div>
									
								</div>
								
								

								<div class="dash-card-back" style="background: linear-gradient(135deg, ${propdashCardBackBgColorGradient1}, ${propdashCardBackBgColorGradient2});color: ${propdashCardBackFontColor};">
									<h4 style="color: ${propdashCardBackHeaderFontColor};">${item.title}</h4>
									<p>${item.description}</p>
									<button class="dash-select-back-button" onclick="event.stopPropagation(); data-url="${item.url}">Open</button>
								</div>

								${item.isUserRestricted =='1' ?
									`<div class="dash-card-overlay">
										<i class="fas fa-lock"></i>
										<h3>Access Restricted</h3>
										<p>You don't have access to this dashboard.</p>
										<button class="request-access-btn" data-html="${encodeURIComponent(item.accessHtml)}" data-doc="${encodeURIComponent(item.documentationHtml)}">
											Request Access
										</button>
									</div>`
									:
									``}

							</div>
						</div>
						`;
						container.append(card);
					});
				}
				// ICON hover → flip
				$(document).on("mouseenter", ".dash-info-btn", function() {
					$(this).closest(".dash-card").addClass("flipped");
				});
				// Leave card → flip back
				$(document).on("mouseleave", ".dash-card", function() {
					$(this).removeClass("flipped");
				});

				

				// Re-render when toggled
				$("#groupToggle" + dynamicVizSuffix + ", #sortOrder" + dynamicVizSuffix).on("change", function() {
					renderCards(cardData);
				});
				// Expand / Collapse
				let allExpanded = true;
				$("#toggleAll"+dynamicVizSuffix).on("click", function() {
					if (allExpanded) {
						// Collapse all
						$(".dash-CardsGroup").addClass("collapsed");
						$("#toggleAll"+dynamicVizSuffix).html(`${collapseIcon} Expand All`);
					} else {
						// Expand all
						$(".dash-CardsGroup").removeClass("collapsed");
						$("#toggleAll"+dynamicVizSuffix).html(`${expandIcon} Collapse All`);
					}
					allExpanded = !allExpanded;
				});
				$("#groupToggle"+dynamicVizSuffix).on("change", function() {
					const isGrouped = $(this).is(":checked");
					if (isGrouped) {
						$("#toggleAll"+dynamicVizSuffix).fadeIn(200);
					} else {
						$("#toggleAll"+dynamicVizSuffix).hide();
						allExpanded = true;
						$("#toggleAll"+dynamicVizSuffix).html(`${expandIcon} Collapse All`);
					}
					renderCards(cardData);
				});	
				
				// on hover effect for info button
				/*
				$(document).on('mouseenter', '.dash-info-btn', function () {
					const originalBg = $(this).css('background-color');
					$(this).data('original-bg', originalBg);

					$(this).css({
						background: propdashInfoBtnBgHoverColor,
						color: 'white'
					});
				}).on('mouseleave', '.dash-info-btn', function () {
					$(this).css({
						background: $(this).data('original-bg'),
						color: ''
					});
				});
				*/




}})}());
//@ sourceURL=DashboardCards.js
//Developed by Amit Kumar Sah - amit.sah@t-systems.com / amitkumars954@gmail.com