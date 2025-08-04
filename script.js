import { pagesData } from './templates.js';

/* * Ultimate Noon Templates Mail Ar - Enhanced V2.3 (with Dynamic Counters)
 * Enhanced JavaScript with on-scroll animations, smooth scrolling, and UI fixes
 */

// DOM Elements
const mainNav = document.getElementById("mainNav"); 
const navbarList = document.getElementById("navbar"); 
const priorityNavSection = document.getElementById("priorityNavSection");
const pagesContainer = document.getElementById("pagesContainer");
const searchBox = document.getElementById("searchBox");
const backToTopBtn = document.getElementById("backToTop");
const menuToggle = document.getElementById('menuToggle'); 
const dropdownMenu = document.querySelector('.dropdown-menu'); 
const closeMenuBtn = document.querySelector('.close-menu-btn'); 
const logo = document.getElementById('logo');
const mobileMenuToggle = document.getElementById('mobileMenuToggle'); 
const aboutUsPageLinkContainer = document.getElementById('aboutUsPageLinkContainer');


// State Management
const appState = {
  currentPageId: localStorage.getItem('currentPageId') || 'important-tools', 
  currentTabs: JSON.parse(localStorage.getItem('currentTabs') || '{}'),
  searchHistory: JSON.parse(localStorage.getItem('searchHistory') || '[]'),
  originalNavItems: [],
  originalPriorityNavItems: []
};

// Important Tools Data - Restructured for Blocks
const importantToolsData = [
      {
blockTitle: "3PL Tools",
    tools: [
      { id: 'tool1', title: 'Egyption jt Express Tracker', description: 'Egyption jt Express Tracker, Just Put The AWB Number', url: 'https://jt-express.vercel.app/', icon: 'fas fa-compass' },
]
  },
  {
blockTitle: "External Help Tools",
    tools: [
      { id: 'tool1', title: 'Image to PNG / JPEG Converter', description: 'Tool to Convert any Image Into JPEG / PNG Specially Heic / Heif', url: 'https://converte-image.vercel.app/', icon: 'fas fa-image' },
      { id: 'tool2', title: 'Clipboard History', description: 'A tool that saves your full clipboard history and creates text shortcuts to speed up typing and easily retrieve copied content anytime.', url: 'https://chromewebstore.google.com/detail/clipboard-history-pro-%E2%80%93-b/ajiejmhbejpdgkkigpddefnjmgcbkenk', icon: 'fas fa-copy' },
      { id: 'tool3', title: 'Dublicate Links Analyzer', description: 'A tool that analyzes text to detect and highlight repeated links for easier cleanup and organization.', url: 'https://dublicate-links.vercel.app', icon: 'fas fa-magnifying-glass-chart' },
    ]
  }
];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

// Main Initialization Function
function initializeApp() {
  generatePagesAndNav(); 
  const initialPageId = appState.currentPageId || 'important-tools'; 
  showPage(initialPageId, true); 
  initEventListeners();
  showNotification('success', '😎 Loaded Like a Pro', 'Templates are in. Time to roll!');
  applySmoothScrollToLinks();
  document.documentElement.setAttribute('dir', 'ltr'); 
}

// =================================================================
// ==============  GLOBAL USAGE TRACKING FUNCTIONS  ==============
// =================================================================

async function trackTemplateUsage(templateName) {
  try {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ templateName: templateName }),
    });
    console.log(`Tracked usage for: ${templateName}`);
  } catch (error) {
    console.error('Failed to send tracking data:', error);
  }
}

function initManualSelectionTracking() {
    let selectionDebounceTimeout;
    document.addEventListener('mouseup', (e) => {
        if (e.target.tagName.toLowerCase() === 'textarea') {
            clearTimeout(selectionDebounceTimeout);
            selectionDebounceTimeout = setTimeout(() => {
                const selectedText = window.getSelection().toString().trim();
                if (selectedText.length > 10) { 
                    const templateName = e.target.dataset.templateName;
                    if (templateName) {
                        trackTemplateUsage(templateName);
                    }
                }
            }, 1500);
        }
    });
    document.addEventListener('mousedown', (e) => {
       if (e.target.tagName.toLowerCase() === 'textarea') {
           clearTimeout(selectionDebounceTimeout);
       }
    });
}

// =================================================================
// =================================================================

function storeOriginalNavItems() {
  const regularItems = navbarList.querySelectorAll(":scope > li, :scope > .divider"); 
  appState.originalNavItems = Array.from(regularItems).map(item => mapNavItem(item)).filter(Boolean);

  const priorityItemsContainer = priorityNavSection.querySelector('ul');
  if (priorityItemsContainer) {
    const PrioItems = priorityItemsContainer.querySelectorAll(":scope > li"); 
    appState.originalPriorityNavItems = Array.from(PrioItems).map(item => mapNavItem(item)).filter(Boolean);
  }
}

function mapNavItem(item) {
    if (item.classList.contains("divider")) {
      return { type: "divider", html: item.outerHTML };
    } else if (item.tagName === 'LI') { 
      const link = item.querySelector("a");
      return { 
        type: "navItem", 
        html: item.outerHTML, 
        linkHtml: link ? link.innerHTML : "", 
        textForSearch: link ? (link.textContent || link.innerText || "").trim() : "", 
        id: item.id 
      };
    }
    return null; 
}


function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function animateOnScroll() {
    const itemsToAnimate = document.querySelectorAll('.template-item, .kb-link-card, .tool-card, .queries-table tr, #about-us-page');
    itemsToAnimate.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0 && !item.classList.contains('has-animated')) {
             item.classList.add('visible-on-scroll'); 
             item.classList.add('has-animated'); 
        } 
    });
}

function initEventListeners() {
  searchBox.addEventListener("input", searchSections);
  searchBox.addEventListener("search", resetSearch); 
  menuToggle.addEventListener('click', toggleDropdownMenu); 
  closeMenuBtn.addEventListener('click', closeDropdownMenu); 
  window.addEventListener('scroll', toggleBackToTopButton);
  window.addEventListener('scroll', debounce(animateOnScroll, 10)); 
  backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.addEventListener('click', handleOutsideClick);
  window.addEventListener('resize', () => {
    document.querySelectorAll('textarea').forEach(adjustTextareaHeight);
    document.querySelectorAll('.has-animated.visible-on-scroll').forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= window.innerHeight || rect.bottom <=0) {
            item.classList.remove('has-animated', 'visible-on-scroll');
            item.style.opacity = '0'; 
            item.style.transform = 'translateY(20px)'; 
        }
    });
    animateOnScroll(); 
  });
  document.addEventListener('input', (e) => {
    if (e.target.tagName.toLowerCase() === 'textarea') {
      adjustTextareaHeight(e.target);
    }
  }, true);
  mobileMenuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuToggle.innerHTML = mainNav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  initManualSelectionTracking();
}

/**
 * Calculates the total number of templates from the pagesData object.
 * @returns {number} The total count of templates.
 */
function calculateTotalTemplates() {
    let totalCount = 0;
    pagesData.forEach(page => {
      if (page.tabs) {
        page.tabs.forEach(tab => {
          if (tab.templates) {
            totalCount += tab.templates.length;
          }
        });
      }
    });
    return totalCount;
}

/**
 * Creates and injects the total template counter into the navigation.
 */
function displayTotalTemplateCounter() {
    const total = calculateTotalTemplates();
    const counterContainer = document.createElement('div');
    counterContainer.style.textAlign = 'center';
    counterContainer.style.padding = '5px 10px';
    counterContainer.style.margin = '5px 10px';
    counterContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    counterContainer.style.borderRadius = '4px';
    counterContainer.style.fontSize = '0.8rem';
    counterContainer.style.color = 'var(--text-secondary)';
    
    counterContainer.innerHTML = `
        <i class="fas fa-file-alt" style="color: var(--accent-primary); margin-right: 5px;"></i>
        Total En Templates: <strong style="color: var(--text-primary);">${total}</strong>
    `;

    // Insert the counter before the "About Us" section
    const aboutUsDivider = document.querySelector('.divider:last-of-type');
    if (aboutUsDivider) {
        aboutUsDivider.parentNode.insertBefore(counterContainer, aboutUsDivider);
    } else {
        aboutUsPageLinkContainer.parentNode.insertBefore(counterContainer, aboutUsPageLinkContainer);
    }
}

function generatePagesAndNav() {
  const iconColors = ['#82aaff', '#c792ea', '#ffcb6b', '#f78c6c', '#89ddff', '#c3e88d', '#ff5370', '#FF966C'];
  navbarList.innerHTML = ''; 
  priorityNavSection.innerHTML = ''; 
  const priorityUl = document.createElement('ul');
  priorityNavSection.appendChild(priorityUl);
  pagesContainer.innerHTML = ''; 
  aboutUsPageLinkContainer.innerHTML = ''; 

  let navItemIndexCounter = 0;
  const priorityPageIdsOrder = ["important_tools", "queries", "essential_points"];
  
  const sortedPagesData = [
      ...pagesData.filter(p => priorityPageIdsOrder.includes(p.id)).sort((a, b) => priorityPageIdsOrder.indexOf(a.id) - priorityPageIdsOrder.indexOf(b.id)),
      ...pagesData.filter(p => !priorityPageIdsOrder.includes(p.id))
  ];

  createPageContent('important-tools', 'Important Tools'); 
  addImportantToolsSectionContent(document.getElementById('important-tools'));
  
  generateAboutUsPageContent(); 

  sortedPagesData.forEach((page, index) => {
    if (!page.id) { 
        page.id = page.title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '') || `gen_id_${index}`;
    }
    const pageId = page.id === 'important_tools' ? 'important-tools' : `page-${page.id}`; 
    const navItem = document.createElement("li");
    navItem.id = `nav-item-${pageId}`; 
    navItem.style.setProperty('--item-index', navItemIndexCounter++);
    const color = iconColors[index % iconColors.length];
    navItem.innerHTML = `<a href="#${pageId}" data-target-id="${pageId}"><i class="${page.icon}" style="color: ${color};"></i> ${page.title}</a>`;
    if (priorityPageIdsOrder.includes(page.id)) {
        priorityUl.appendChild(navItem);
    } else {
        navbarList.appendChild(navItem);
    }
    if (page.id !== 'important_tools' && page.id !== 'about_us') { 
        createPageContent(pageId, page.title); 
        const pageDiv = document.getElementById(pageId);
        if (page.title === "Queries") {
          generateQueriesPage(pageDiv, page);
        } else if (page.title === "Essential Points") {
          generateEssentialPointsPage(pageDiv, page, pageId); 
        } else {
          generateStandardPage(pageDiv, page, pageId);
        }
    }
  });
  
  if (navbarList.children.length > 0 && priorityUl.children.length > 0) {
      const divider = document.createElement("div");
      divider.className = "divider";
      priorityNavSection.after(divider); 
  }

  const aboutUsNavLi = document.createElement("li"); 
  aboutUsNavLi.id = "nav-item-about-us-page";
  aboutUsNavLi.style.setProperty('--item-index', navItemIndexCounter++);
  aboutUsNavLi.innerHTML = `<a href="#about-us-page" data-target-id="about-us-page"><i class="fas fa-info-circle"></i> About This Project</a>`;
  const aboutUsUl = document.createElement('ul'); 
  aboutUsUl.appendChild(aboutUsNavLi);
  aboutUsPageLinkContainer.appendChild(aboutUsUl);
  
  const lastRegularNavItem = navbarList.lastElementChild;
  const lastPriorityNavItem = priorityUl.lastElementChild;

  if (lastRegularNavItem || lastPriorityNavItem) { 
      let referenceNodeForAboutDivider = lastRegularNavItem ? navbarList : (lastPriorityNavItem ? priorityNavSection : null);
      if (referenceNodeForAboutDivider) {
          const aboutDivider = document.createElement("div");
          aboutDivider.className = "divider";
          aboutUsPageLinkContainer.parentNode.insertBefore(aboutDivider, aboutUsPageLinkContainer);
      }
  }

  // Call the new function to display the counter
  displayTotalTemplateCounter();

  storeOriginalNavItems(); 
  applySmoothScrollToLinks(); 
}

// ... the rest of your functions (createPageContent, generateStandardPage, etc.) remain unchanged ...
// Make sure to include all of them here. For brevity, I'm omitting them, but you should have them.

function createPageContent(pageId, pageTitle) {
    let pageDiv = document.getElementById(pageId);
    if (!pageDiv) { 
        pageDiv = document.createElement("div");
        pageDiv.id = pageId;
        pageDiv.className = "tabsm"; 
        pageDiv.style.display = "none"; 
        pagesContainer.appendChild(pageDiv);
    }
}


function generateStandardPage(pageDiv, page, pageId) {
  const tabsNav = document.createElement("div");
  tabsNav.className = "tabsm-nav";
  
  page.tabs.forEach((tab, tabIndex) => {
    const tabButton = document.createElement("button");
    tabButton.className = `tabm-button ${tabIndex === (appState.currentTabs[pageId] || 0) ? "active" : ""}`;
    tabButton.innerHTML = `<i class="${tab.icon}"></i> ${tab.title}`;
    if (tab.title.match(/[\u0600-\u06FF]/)) {
        tabButton.setAttribute('lang', 'ar');
    }
    tabButton.onclick = () => showTab(pageId, tabIndex);
    tabsNav.appendChild(tabButton);
  });
  pageDiv.appendChild(tabsNav);

  page.tabs.forEach((tab, tabIndex) => {
    const tabContent = document.createElement("div");
    tabContent.className = "tab-content";
    tabContent.style.display = "none"; 

    if (tab.title === "K.B Links") {
      generateKBLinksTab(tabContent, tab);
    } else {
      generateStandardTab(tabContent, tab, pageId, tabIndex);
    }
    pageDiv.appendChild(tabContent);
  });
}

function generateKBLinksTab(tabContent, tab) {
  const kbLinksContainer = document.createElement("div");
  kbLinksContainer.className = "kb-links-container";

  tab.templates.forEach((template) => {
    const linkCard = document.createElement("div");
    linkCard.className = "kb-link-card"; 
    
    const description = template.content.includes('noon.com') ? 
      'Noon official resource for customer service agents' : 
      'External resource for customer service information';
    
    linkCard.innerHTML = `
      <h3>${template.heading}</h3>
      <p>${description}</p>
      <a href="${template.content}" target="_blank" class="kb-link-button">
        <i class="fas fa-external-link-alt"></i> Open Link
      </a>
    `;
    kbLinksContainer.appendChild(linkCard);
  });
  tabContent.appendChild(kbLinksContainer);
}

function generateStandardTab(tabContent, tab, pageId, tabIndex) {
  const tabSectionNav = document.createElement("div");
  tabSectionNav.className = "tab-section-nav";

  const templatesTitle = document.createElement("h3");
  templatesTitle.className = "templates-title";
  templatesTitle.textContent = "قائمة القوالب"; 
  
  const searchBoxEl = document.createElement("input"); 
  searchBoxEl.type = "text";
  searchBoxEl.id = `templateSearch-${pageId}-${tabIndex}`;
  searchBoxEl.placeholder = "ابحث في القوالب..."; 
  searchBoxEl.className = "template-search-box";

  const linksContainer = document.createElement("div");
  linksContainer.className = "links-container";

  searchBoxEl.addEventListener("input", () => {
    const searchTerm = searchBoxEl.value.toLowerCase();
    const links = linksContainer.querySelectorAll("a");
    links.forEach(link => {
      link.style.display = link.textContent.toLowerCase().includes(searchTerm) ? "flex" : "none"; 
    });
  });

  tabSectionNav.appendChild(templatesTitle);
  tabSectionNav.appendChild(searchBoxEl);

  tab.templates.forEach((template, templateIndex) => {
    const sectionLink = document.createElement("a");
    const targetId = `section-${pageId}-${tabIndex}-${templateIndex}`;
    sectionLink.href = `#${targetId}`;
    sectionLink.innerHTML = `<i class="far fa-file-alt"></i> ${template.heading}`; 
    sectionLink.dataset.targetId = targetId; 
    if (template.heading.match(/[\u0600-\u06FF]/)) { 
        sectionLink.lang = 'ar'; 
    }
    linksContainer.appendChild(sectionLink);
  });

  tabSectionNav.appendChild(linksContainer);
  tabContent.appendChild(tabSectionNav);

  tab.templates.forEach((template, templateIndex) => {
    const templateDiv = document.createElement("div");
    templateDiv.className = "template-item"; 
    templateDiv.id = `section-${pageId}-${tabIndex}-${templateIndex}`;

    const heading = document.createElement("h4");
    heading.textContent = template.heading;
    heading.dir = template.heading.match(/[\u0600-\u06FF]/) ? "rtl" : "ltr"; 
    templateDiv.appendChild(heading);

    const textarea = document.createElement("textarea");
    textarea.dataset.templateName = template.heading; 

    const essentialPointsPageId = `page-${pagesData.find(p => p.title === "Essential Points")?.id}`;
    if (pageId === essentialPointsPageId) {
        textarea.dir = "ltr";
    } else {
        textarea.dir = "rtl"; 
    }
    textarea.readOnly = true; 
    textarea.textContent = template.content;
    templateDiv.appendChild(textarea);
    setTimeout(() => adjustTextareaHeight(textarea), 0); 

    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-btn";
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    copyBtn.onclick = () => copyContent(copyBtn, template.heading);
    templateDiv.appendChild(copyBtn);

    tabContent.appendChild(templateDiv);
  });
  applySmoothScrollToLinks(tabContent.querySelectorAll('.links-container a'));
}


function generateQueriesPage(pageDiv, page) {
  const table = document.createElement("table");
  table.className = "queries-table"; 

  const tableHeader = document.createElement("thead");
  tableHeader.innerHTML = `<tr><th class="word-column">Noon Care Issue</th><th class="explanation-column">Guideline</th></tr>`;
  table.appendChild(tableHeader);

  const data = page.queriesData || []; 
  if (data.length === 0) {
    console.warn("Queries data is empty for page:", page.title);
    pageDiv.innerHTML = "<p style='text-align:center; color: var(--text-secondary); font-family: \"Cairo\", sans-serif; direction:rtl;'>لا توجد بيانات استعلامات متاحة لهذا القسم.</p>";
    return;
  }

  const tableBody = document.createElement("tbody");
  data.forEach(item => {
    const row = document.createElement("tr"); 
    const wordCell = document.createElement("td");
    wordCell.className = "word-column";
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-word-btn";
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(item.word)
        .then(() => showNotification('success', '📋 Copied Like Magic', `"${item.word}" is now chilling in your clipboard!`))
        .catch(err => showNotification('error', '💥 Copy Failed', 'Tried... but couldn’t copy that word. 🫠'));
    };
    wordCell.appendChild(copyBtn);
    const wordTextNode = document.createTextNode(` ${item.word}`);
    wordCell.appendChild(wordTextNode);
    if (item.word.match(/[\u0600-\u06FF]/)) {
        wordCell.setAttribute('lang', 'ar');
        wordCell.style.textAlign = 'right'; 
    }
    
    const explanationCell = document.createElement("td");
    explanationCell.className = "explanation-column";
    explanationCell.textContent = item.explanation;
     if (item.explanation.match(/[\u0600-\u06FF]/)) {
        explanationCell.setAttribute('lang', 'ar');
        explanationCell.style.textAlign = 'right'; 
    }
    
    row.appendChild(wordCell);
    row.appendChild(explanationCell);
    tableBody.appendChild(row);
  });
  
  table.appendChild(tableBody);
  pageDiv.appendChild(table);
}

function generateEssentialPointsPage(pageDiv, page, pageId) { 
  const container = document.createElement("div");
  container.className = "vertical-tabs-container";
  
  const tabsNavContainer = document.createElement("div");
  tabsNavContainer.className = "vertical-tabs"; 
  
  const contentContainer = document.createElement("div");
  contentContainer.className = "vertical-tab-content";
  
  const currentActiveTabForEssential = appState.currentTabs[pageId] || 0;

  page.tabs.forEach((tab, tabIndex) => {
    const tabButton = document.createElement("button");
    tabButton.className = `vertical-tab-button ${tabIndex === currentActiveTabForEssential ? "active" : ""}`;
    tabButton.innerHTML = `<i class="${tab.icon}"></i> ${tab.title}`;
    if (tab.title.match(/[\u0600-\u06FF]/)) {
        tabButton.setAttribute('lang', 'ar');
    }
    tabButton.onclick = () => showTab(pageId, tabIndex);
    tabsNavContainer.appendChild(tabButton);
    
    const tabContentDiv = document.createElement("div");
    tabContentDiv.className = "tab-content"; 
    tabContentDiv.style.display = "none"; 
    
    if (tab.title === "K.B Links") {
      generateKBLinksTab(tabContentDiv, tab);
    } else {
      generateStandardTab(tabContentDiv, tab, pageId, tabIndex); 
    }
    contentContainer.appendChild(tabContentDiv);
  });
  
  container.appendChild(tabsNavContainer); 
  container.appendChild(contentContainer);
  pageDiv.appendChild(container);
}

function addImportantToolsSectionContent(pageDiv) { 
  if (!pageDiv) {
      console.error("Important Tools pageDiv is null in addImportantToolsSectionContent");
      return;
  }
  const header = document.createElement("div");
  header.className = "important-tools-header"; 
  header.innerHTML = `<h2 class="important-tools-title"><i class="fas fa-tools"></i> Important Tools</h2>`;
  pageDiv.appendChild(header);
  
  const toolsContainer = document.createElement("div");
  toolsContainer.id = "importantToolsContainer";
  pageDiv.appendChild(toolsContainer);
  renderImportantTools();
}

function renderImportantTools() {
  const container = document.getElementById('importantToolsContainer');
  if (!container) return;
  container.innerHTML = ''; 

  importantToolsData.forEach(block => {
    const blockTitleElement = document.createElement('h3');
    blockTitleElement.className = 'tools-block-title';
    blockTitleElement.textContent = block.blockTitle;
    blockTitleElement.dir = block.blockTitle.match(/[\u0600-\u06FF]/) ? "rtl" : "ltr"; 
    container.appendChild(blockTitleElement);

    const blockToolsContainer = document.createElement('div');
    blockToolsContainer.className = 'tools-block'; 

    block.tools.forEach((tool) => {
      const toolCard = document.createElement('div');
      toolCard.className = 'tool-card'; 
      
      toolCard.innerHTML = `
        <h3 class="tool-card-title">${tool.title}</h3>
        <p class="tool-card-description">${tool.description}</p>
        <a href="${tool.url}" target="_blank" class="tool-card-link">
          <i class="${tool.icon || 'fas fa-external-link-alt'}"></i> Open Tool
        </a>
      `;
      blockToolsContainer.appendChild(toolCard);
    });
    container.appendChild(blockToolsContainer);
  });
}


function generateAboutUsPageContent() {
    const pageId = "about-us-page";
    createPageContent(pageId, "About This Project"); 
    const aboutPageDiv = document.getElementById(pageId);
    if (!aboutPageDiv) return;

    aboutPageDiv.innerHTML = `
        <h2>About This Project</h2>
        <p>Welcome to "Ultimate Noon Templates Mail Ar - Enhanced V2.3"! This project is the culmination of dedicated individual effort by <span class="highlight">Mahmoud Ali</span>, aimed at providing a comprehensive and user-friendly platform for Noon's customer service agents to quickly access and utilize standardized email templates and essential resources.</p>
        <h3>Project Vision & Goals:</h3>
        <p>The primary vision was to streamline the workflow for agents, reduce response times, and ensure consistency in customer communications. Key goals included:</p>
        <ul>
            <li>Centralizing all relevant Arabic email templates.</li>
            <li>Offering an intuitive and aesthetically pleasing user interface with a "glassmorphism" dark theme.</li>
            <li>Implementing fast search capabilities for both template categories and individual templates.</li>
            <li>Ensuring responsiveness across various devices for accessibility.</li>
            <li>Integrating useful external tools and knowledge base links directly within the application.</li>
        </ul>
        <h3>Development & Technology:</h3>
        <p>This application was built from the ground up using core web technologies: HTML, CSS, and modern JavaScript. The dynamic nature of the content, including pages, tabs, and templates, is handled entirely on the client-side, ensuring a fast and interactive experience. On-scroll animations were added to enhance visual engagement, and careful attention was paid to UI/UX details.</p>
        <h3>The Role of AI as an Assistant:</h3>
        <p class="ai-mention">Throughout the development journey, Artificial Intelligence served as a valuable assistant. AI tools were leveraged for tasks such as:
            <ul>
                <li>Generating boilerplate code for certain JavaScript functions and CSS rules.</li>
                <li>Assisting in debugging and suggesting code optimizations.</li>
                <li>Helping to draft and refine textual content, including parts of this "About" section and some template descriptions.</li>
                <li>Providing quick answers to technical questions, speeding up the research process.</li>
            </ul>
        It's important to note that while AI provided significant support in accelerating development and exploring creative solutions, the core architecture, logic, design choices, and the final implementation were driven by Mahmoud Ali's direct effort, expertise, and vision for the project. The AI acted as a powerful co-pilot, not the pilot.
        </p>
        <h3>Key Features:</h3>
        <ul>
            <li><strong>Dynamic Content:</strong> Pages, tabs, and templates are generated dynamically from structured data.</li>
            <li><strong>Responsive Design:</strong> Adapts to desktop, tablet, and mobile screens.</li>
            <li><strong>Efficient Search:</strong> Quickly find navigation categories and specific templates.</li>
            <li><strong>Modern UI/UX:</strong> Glassmorphism theme, smooth transitions, and engaging on-scroll animations.</li>
            <li><strong>Client-Side Performance:</strong> Fast load times and interactions due to client-side rendering.</li>
            <li><strong>Integrated Tools:</strong> Easy access to important external tools and knowledge base links.</li>
            <li><strong>Copy Functionality:</strong> One-click copy for all templates.</li>
            <li><strong>State Persistence:</strong> Remembers the last viewed page and tab using localStorage.</li>
        </ul>
        <h3>Future Enhancements (Potential):</h3>
        <p>While this version (V2.3) is a significant step, potential future ideas include: multi-language support for the UI itself, user accounts for personalized settings, and integration with more Noon-specific APIs if available.</p>
        <h3>Acknowledgement:</h3>
        <p>This project is a testament to what can be achieved with passion, dedication, and the smart use of modern tools. Thank you for using it!</p>
        <div class="contact-info">
            <p>For any inquiries, feedback, or suggestions regarding this project, please feel free to reach out to <a href="mailto:mmohamedali@noon.com">Mahmoud Ali</a>.</p>
        </div>
    `;
}


function clearActiveStatesAndAnimations() {
    document.querySelectorAll('.tabsm').forEach(p => {
        p.style.display = 'none';
        p.classList.remove('active-page');
        p.querySelectorAll('.template-item, .kb-link-card, .tool-card, .queries-table tr, #about-us-page').forEach(item => { 
            item.classList.remove('visible-on-scroll', 'has-animated');
            item.style.opacity = '0'; 
            item.style.transform = 'translateY(20px)'; 
            item.style.transitionDelay = '';
        });
    });
    document.querySelectorAll('#navbar li a, #priorityNavSection ul li a, #aboutUsPageLinkContainer li a').forEach(item => item.classList.remove('active'));
}


function showPage(pageId, isInitial = false) {
  clearActiveStatesAndAnimations();
  
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.style.display = 'block';
    selectedPage.classList.add('active-page'); 
    
    const currentNavItem = document.querySelector(`a[data-target-id="${pageId}"]`);
    if (currentNavItem) currentNavItem.classList.add('active');
    
    appState.currentPageId = pageId;
    localStorage.setItem('currentPageId', pageId);
    
    const pageDataObj = pagesData.find(p => pageId === 'important-tools' ? p.id === 'important_tools' : `page-${p.id}` === pageId);

    if (pageDataObj && pageDataObj.tabs && pageDataObj.tabs.length > 0) {
        const currentTabIndex = appState.currentTabs[pageId] || 0;
        showTab(pageId, currentTabIndex, isInitial);
    } else if (pageId === 'important-tools') {
        document.getElementById('important-tools').style.display = 'block';
    } else if (pageId === 'about-us-page') {
        document.getElementById('about-us-page').style.display = 'block';
    }
    
    if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
       mainNav.classList.remove('active');
       mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
    
    setTimeout(() => {
      selectedPage.querySelectorAll('textarea').forEach(adjustTextareaHeight);
      animateOnScroll(); 
    }, 50); 
  } else {
    console.warn(`Page with ID "${pageId}" not found. Attempting fallback.`);
    const fallbackPageData = pagesData.find(p => p.isDefault) || pagesData[0];
    const fallbackPageId = fallbackPageData ? (fallbackPageData.id === 'important_tools' ? 'important-tools' : `page-${fallbackPageData.id}`) : 'important-tools';

    if (pageId !== fallbackPageId) { 
        showPage(fallbackPageId, isInitial);
    } else {
        console.error("Fallback page also not found or is the same as the problematic page ID.");
    }
  }
}

function showTab(pageId, tabIndex, isInitial = false) {
  const pageElement = document.getElementById(pageId);
  if (!pageElement) {
      console.error(`Page element not found for ID: ${pageId}`);
      return;
  }

  const isEssentialPointsPage = pageId === `page-${pagesData.find(p => p.title === "Essential Points")?.id}`;
  const tabButtonSelector = isEssentialPointsPage ? '.vertical-tab-button' : '.tabm-button';
  const tabButtons = pageElement.querySelectorAll(tabButtonSelector);
  
  let tabContentsWrapper = isEssentialPointsPage ? pageElement.querySelector('.vertical-tab-content') : pageElement;
  if (!tabContentsWrapper) {
      const queriesPageData = pagesData.find(p => p.title === "Queries");
      const queriesPageId = queriesPageData ? `page-${queriesPageData.id}` : null;
      if (pageId !== queriesPageId) { 
          console.error("Tab contents wrapper not found for page:", pageId);
      }
      return; 
  }
  const tabContents = tabContentsWrapper.querySelectorAll(':scope > .tab-content');

  tabContents.forEach(content => {
    content.style.display = 'none';
    content.classList.remove('active-tab', 'visible-no-animation');
    content.querySelectorAll('.template-item, .kb-link-card, .tool-card, .queries-table tr, #about-us-page').forEach(item => {
        item.classList.remove('visible-on-scroll', 'has-animated');
        item.style.opacity = '0'; 
        item.style.transform = 'translateY(20px)';
        item.style.transitionDelay = '';
    });
  });
  tabButtons.forEach(button => button.classList.remove('active'));

  if (tabContents[tabIndex]) {
    tabContents[tabIndex].style.display = 'block';
    if (isInitial) {
        tabContents[tabIndex].classList.add('visible-no-animation'); 
    } else {
        tabContents[tabIndex].classList.add('active-tab'); 
    }
    
    setTimeout(() => {
      tabContents[tabIndex].querySelectorAll('textarea').forEach(adjustTextareaHeight);
      animateOnScroll(); 
    }, 50);
  } else if (tabContents.length > 0) {
      console.error(`Tab content at index ${tabIndex} not found for page ${pageId}`);
  }
  
  if (tabButtons[tabIndex]) {
      tabButtons[tabIndex].classList.add('active');
  } else if (tabButtons.length > 0) {
      console.error(`Tab button at index ${tabIndex} not found for page ${pageId}`);
  }
  
  appState.currentTabs[pageId] = tabIndex;
  localStorage.setItem('currentTabs', JSON.stringify(appState.currentTabs));
}

function copyContent(button, title) {
  const textarea = button.parentElement.querySelector('textarea');
  navigator.clipboard.writeText(textarea.textContent)
    .then(() => {
        showNotification('success', '📋 Copied Like Magic', `"${title}" is now chilling in your clipboard!`);
        trackTemplateUsage(title);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      showNotification('error', '💥 Copy Failed', 'Tried... but couldn’t copy that content. 🫠');
    });
}

function adjustTextareaHeight(textarea) {
  if (!textarea) return;
  textarea.style.height = 'auto'; 
  textarea.style.height = (textarea.scrollHeight + 2) + 'px'; 
}

function searchSections() {
  const searchTerm = searchBox.value.toLowerCase().trim();
  const noResultsMsgId = 'noResultsMsg';
  let hasResults = false;

  function rebuildList(listElement, originalItems) {
      if (!listElement) return; 
      listElement.innerHTML = '';
      originalItems.forEach(itemData => {
          if (!itemData) return;
          const itemTextForSearch = itemData.textForSearch ? itemData.textForSearch.toLowerCase() : '';
          if (itemData.type === "divider") {
              if (searchTerm === "") {
                  const tempDiv = document.createElement('div');
                  tempDiv.innerHTML = itemData.html;
                  if (tempDiv.firstElementChild) listElement.appendChild(tempDiv.firstElementChild);
              }
          } else if (itemData.type === "navItem") {
              if (searchTerm === "" || itemTextForSearch.includes(searchTerm)) {
                  hasResults = true;
                  const tempDiv = document.createElement('div');
                  tempDiv.innerHTML = itemData.html;
                  const newNavItem = tempDiv.firstElementChild;
                  if (newNavItem) {
                      const link = newNavItem.querySelector('a');
                      if (link) {
                          const targetPageId = link.getAttribute('href')?.substring(1);
                          if (targetPageId) link.dataset.targetId = targetPageId;
                      }
                      listElement.appendChild(newNavItem);
                  }
              }
          }
      });
  }
  
  const priorityUl = priorityNavSection.querySelector('ul');
  rebuildList(priorityUl, appState.originalPriorityNavItems); 
  rebuildList(navbarList, appState.originalNavItems); 

  document.querySelectorAll(`#${noResultsMsgId}`).forEach(el => el.remove());

  if (!hasResults && searchTerm) {
    const msg = document.createElement('li'); 
    msg.id = noResultsMsgId;
    msg.className = 'no-results-message';
    msg.textContent = 'لا توجد نتائج للبحث'; 
    msg.dir = "rtl"; 
    navbarList.appendChild(msg);
  }
  applySmoothScrollToLinks(document.querySelectorAll('#navbar a[href^="#"], #priorityNavSection ul a[href^="#"]')); 
}


function resetSearch() {
  if (searchBox.value === '') { 
    searchSections(); 
  }
}

function toggleDropdownMenu() { dropdownMenu.classList.toggle('active'); }
function closeDropdownMenu() { dropdownMenu.classList.remove('active'); }

function handleOutsideClick(event) {
  if (dropdownMenu.classList.contains('active') && !dropdownMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    closeDropdownMenu();
  }
  if (window.innerWidth <= 768 && mainNav.classList.contains('active') && !mainNav.contains(event.target) && !mobileMenuToggle.contains(event.target)){
    mainNav.classList.remove('active');
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

function toggleBackToTopButton() {
  if (backToTopBtn) { 
    if (window.pageYOffset > 200) { 
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }
}

function highlightElement(element) {
  if (!element) return;
  if (!element.classList.contains('visible-on-scroll')) {
    element.classList.add('visible-on-scroll');
    if(!element.classList.contains('has-animated')){
        element.classList.add('has-animated');
    }
  } else if (getComputedStyle(element).opacity === '0') {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0px)';
  }
  element.classList.remove('highlight-animation'); 
  void element.offsetWidth; 
  element.classList.add('highlight-animation');
  setTimeout(() => {
    element.classList.remove('highlight-animation');
  }, 1200); 
} 


function showNotification(type, title, message) {
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) existingNotification.remove();
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  
  const icons = { 
    success: 'fa-check-circle', 
    error: 'fa-exclamation-circle', 
    info: 'fa-info-circle', 
    warning: 'fa-exclamation-triangle' 
  };
  
  notification.innerHTML = `
    <div class="notification-icon"><i class="fas ${icons[type] || 'fa-info-circle'}"></i></div>
    <div class="notification-content">
      <div class="notification-title">${title}</div>
      <div class="notification-message">${message}</div>
    </div>
    <button class="notification-close" aria-label="Close notification">&times;</button>
  `;
  
  document.body.appendChild(notification);
  setTimeout(() => notification.classList.add('show'), 10);
  const hideTimeout = setTimeout(() => hideNotification(notification), 5000);
  notification.querySelector('.notification-close').addEventListener('click', () => {
    clearTimeout(hideTimeout); 
    hideNotification(notification);
  });
}

function hideNotification(notification) {
  if (!notification) return;
  notification.classList.remove('show');
  setTimeout(() => notification.remove(), 400); 
}

function applySmoothScrollToLinks(links) {
    const linksToProcess = links || document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    linksToProcess.forEach(link => {
        link.removeEventListener('click', handleSmoothScrollLinkClick); 
        link.addEventListener('click', handleSmoothScrollLinkClick);
    });
}

function handleSmoothScrollLinkClick(event) {
    event.preventDefault(); 

    const href = this.getAttribute('href');
    const targetId = this.dataset.targetId || (href && href.startsWith('#') ? href.substring(1) : null);

    if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            if (targetElement.classList.contains('tabsm') || targetId === "important-tools" || targetId === "about-us-page") {
                showPage(targetId);
                setTimeout(() => { 
                    const scrollTargetY = pagesContainer.offsetTop > 60 ? pagesContainer.offsetTop - 20 : 0; 
                    window.scrollTo({ top: scrollTargetY, behavior: 'smooth' });
                }, 50);
            } else { 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - 20; 

                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
                
                setTimeout(() => {
                    highlightElement(targetElement); 
                }, 500); 
            }
        } else {
            console.warn(`Smooth scroll target not found: #${targetId}`);
        }
    }
}


window.showPage = showPage;
window.showTab = showTab;
window.copyContent = copyContent;

