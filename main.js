// Variables and Consts -------------------------------------------------------

// The ids for the button elements in the nav
const buttonsIds = [
  "button-about-me",
  "button-experiences",
  "button-projects",
  "button-interests",
];

// Maps button ids to the class for the background it should display when clicked
// Also holds the id of the content div to show when clicked
const pageContent = {
  "button-about-me": {
    bgClass: "bg-green-black",
    contentId: "page-main-about-me",
  },
  "button-experiences": {
    bgClass: "bg-blue-purple",
    contentId: "page-main-experiences",
  },
  "button-projects": {
    bgClass: "bg-red-orange",
    contentId: "page-main-projects",
  },
  "button-interests": { bgClass: "bg-eva01", contentId: "page-main-interests" },
};

// Stores the currently selected tab id and this value will be the first tab
// displayed
var selectedTab = "button-about-me";

// Helper Functions -----------------------------------------------------------

// Sleep function to wait a given amount of milliseconds
// Needs to be awaited
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Highlights the element with the provided ID
const setFocus = (elemId) => {
  const targetElem = document.getElementById(elemId);
  targetElem.classList.add("page-main-menu-item-selected");
};

// Removes highlight from the element with the provided ID
const removeFocus = (elemId) => {
  const targetElem = document.getElementById(elemId);
  targetElem.classList.remove("page-main-menu-item-selected");
};

// Adds the fade-out class to an element which fades the opacity from 1-0
const fadeOut = (elemId) => {
  const fadeElem = document.getElementById(elemId);
  fadeElem.classList.remove("fade-in");
  fadeElem.classList.add("fade-out");
};

// Adds the fade-in class to an element which fades the opacity from 0-1
const fadeIn = (elemId) => {
  const fadeElem = document.getElementById(elemId);
  fadeElem.classList.remove("fade-out");
  fadeElem.classList.add("fade-in");
};

// Sets the background to the configured background for a given tab's id
const setBg = (tabId) => {
  const pageMainContainer = document.getElementById("page-main-container");
  pageMainContainer.classList.add(pageContent[tabId].bgClass);
};

// Removes the background class of the given tab's id
const removeBg = (tabId) => {
  const pageMainContainer = document.getElementById("page-main-container");
  pageMainContainer.classList.remove(pageContent[tabId].bgClass);
};

// Shows the content for a given tab
const setContent = (tabId) => {
  const currentContentContainerElem = document.getElementById(
    pageContent[tabId].contentId
  );
  currentContentContainerElem.classList.remove("hidden");
};

// Hides the content for a given tab
const removeContent = (tabId) => {
  const currentContentContainerElem = document.getElementById(
    pageContent[tabId].contentId
  );
  currentContentContainerElem.classList.add("hidden");
};

// Handlers -------------------------------------------------------------------

// Handles hover/focus event on an element
// I'm doing this instead of :hover in the css because I want to remove
// the highlighting on the currently selected tab
const handleFocus = (element) => (_event) => {
  if (element.id === selectedTab) return;
  removeFocus(selectedTab);
  setFocus(element.id);
};

// Handles unhover/unfocus event on an element
const handleUnfocus = (element) => (_event) => {
  if (element.id === selectedTab) return;
  setFocus(selectedTab);
  removeFocus(element.id);
};

// Handles clicking a new tab on the nav bar
const handleChangeTab = (element) => async (_event) => {
  // Cancel if clicking on the current tab
  if (element.id === selectedTab) return;

  const startingTab = selectedTab;

  // Update selected tab
  selectedTab = element.id;

  const nextTab = selectedTab;

  // Fade to black
  fadeIn("page-fade"); // Fading in a full black div

  // Fade away text
  fadeOut("page-main-content-container");

  // Wait for the animation to finish
  await sleep(200);

  // After fading
  // Remove old bg
  removeBg(startingTab);

  // Remove old content
  removeContent(startingTab);

  // Add new content
  setContent(nextTab);

  // Reset Scroll to Top
  const pageMainContentElem = document.getElementById("page-main-content");
  pageMainContentElem.scrollTop = 0;

  // Add new bg
  setBg(nextTab);

  // Unfade from black
  fadeOut("page-fade"); // Fading out a full black div

  // Unfade text
  fadeIn("page-main-content-container");
};

// Handles pressing the continue button on the landing page
const handleContinueButton = async () => {
  const landingPageElem = document.getElementById("page-landing");
  landingPageElem.classList.add("super-hidden");
  const mainPageElem = document.getElementById("page-main-container");
  mainPageElem.classList.remove("super-hidden");
};

// Handles showing the up scroll arrow
const maybeHandleOverflowTop = (scrollElement) => {
  const overflowTopIndicator = document.getElementById("content-overflow-top");
  if (scrollElement.scrollTop !== 0) {
    overflowTopIndicator.classList.add("visible");
  } else {
    overflowTopIndicator.classList.remove("visible");
  }
};

// Handles showing the down scroll arrow
const maybeHandleOverflowBottom = (scrollElement) => {
  const overflowBottomIndicator = document.getElementById(
    "content-overflow-bottom"
  );
  if (
    scrollElement.scrollTop + scrollElement.clientHeight <
    scrollElement.scrollHeight - 1
  ) {
    overflowBottomIndicator.classList.add("visible");
  } else {
    overflowBottomIndicator.classList.remove("visible");
  }
};

// Init Function --------------------------------------------------------------

// Runs this function after the html loads
const init = () => {
  // Sets the first selected tab to be highlighted
  setFocus(selectedTab);

  // Sets the event handlers for each nav button
  buttonsIds.forEach((id) => {
    const idElem = document.getElementById(id);
    idElem.addEventListener("mouseover", handleFocus(idElem));
    idElem.addEventListener("mouseout", handleUnfocus(idElem));
    idElem.addEventListener("focusin", handleFocus(idElem));
    idElem.addEventListener("focusout", handleUnfocus(idElem));
    idElem.addEventListener("click", handleChangeTab(idElem));
  });

  const contentElem = document.getElementById("page-main-content");

  // Check bottom overflow on load
  maybeHandleOverflowBottom(contentElem);

  // Sets the event handlers for adding and removing the scroll arrows
  // on the scroll event
  contentElem.addEventListener("scroll", () => {
    maybeHandleOverflowTop(contentElem);
    maybeHandleOverflowBottom(contentElem);
  });

  // Sets the first background and content
  setContent(selectedTab);
  setBg(selectedTab);
};

window.onload = init;
