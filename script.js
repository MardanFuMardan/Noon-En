/* 
 * Ultimate Noon Templates Mail Ar
 * Enhanced JavaScript with improved functionality and modern features
 */

// DOM Elements
const navbar = document.getElementById("navbar");
const pagesContainer = document.getElementById("pagesContainer");
const searchBox = document.getElementById("searchBox");
const backToTopBtn = document.getElementById("backToTop");
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const logo = document.getElementById('logo');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navElement = document.querySelector('nav');

// State Management
const appState = {
  currentPage: parseInt(localStorage.getItem('currentPage') || 0),
  currentTabs: JSON.parse(localStorage.getItem('currentTabs') || '{}'),
  searchHistory: JSON.parse(localStorage.getItem('searchHistory') || '[]'),
  // Store original navbar items order for proper restoration after search
  originalNavItems: []
};

// Important Tools Data (Static, defined in code)
const importantToolsData = [
  {
    id: 'tool1',
    title: 'Image to PNG / JPEG Converter',
    description: 'Tool to Convert any Image Into JPEG / PNG Specially Heic / Heif',
    url: 'https://image-converter-seven-gold.vercel.app',
    icon: 'fas fa-image'
  },
    {
    id: 'tool1',
    title: 'Clipboard History',
    description: 'A tool that saves your full clipboard history and creates text shortcuts to speed up typing and easily retrieve copied content anytime.',
    url: 'https://chromewebstore.google.com/detail/clipboard-history-pro-%E2%80%93-b/ajiejmhbejpdgkkigpddefnjmgcbkenk',
    icon: 'fas fa-copy'
  },
     {
    id: 'tool1',
    title: 'Dublicate Links Analyzer',
    description: 'A tool that analyzes text to detect and highlight repeated links for easier cleanup and organization.',
    url: 'https://dublicate-links.vercel.app',
    icon: 'fas fa-magnifying-glass-chart'
  },
];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

// Main Initialization Function
function initializeApp() {
  // Generate pages and content
  generatePages();
  
  // Show initial page
  showPage(appState.currentPage);
  
  // Initialize event listeners
  initEventListeners();
  
  // Add mobile menu toggle if not exists
  if (!mobileMenuToggle) {
    createMobileMenuToggle();
  }
  
  // Store original navbar items for proper restoration after search
  storeOriginalNavItems();
  
  // Show welcome notification
  showNotification('info', 'مرحباً بك!', 'تم تحميل قوالب البريد الإلكتروني بنجاح');
}

// Store original navbar items for proper restoration after search
function storeOriginalNavItems() {
  const allItems = document.querySelectorAll("#navbar > *"); // نأخذ جميع العناصر المباشرة داخل navbar
  appState.originalNavItems = Array.from(allItems).map(item => {
    if (item.classList.contains("divider")) {
      // إذا كان العنصر فاصلاً
      return {
        type: "divider",
        html: item.outerHTML,
      };
    } else {
      // إذا كان العنصر li
      const link = item.querySelector("a");
      return {
        type: "navItem",
        html: item.outerHTML, // نستخدم outerHTML للحفاظ على العنصر بالكامل
        linkHtml: link ? link.innerHTML : "",
      };
    }
  });
}

// Event Listeners Initialization
function initEventListeners() {
  // Search functionality
  searchBox.addEventListener("input", searchSections);
  searchBox.addEventListener("search", resetSearch);
  
  // Menu toggle
  menuToggle.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', closeMenu);
  
  // Back to top button
  window.addEventListener('scroll', toggleBackToTopButton);
  backToTopBtn.addEventListener('click', scrollToTop);
  
  // Close menu when clicking outside
  document.addEventListener('click', handleOutsideClick);
  
  // Auto-resize all textareas on window resize
  window.addEventListener('resize', () => {
    const allTextareas = document.querySelectorAll('textarea');
    allTextareas.forEach(textarea => adjustTextareaHeight(textarea));
  });
  
  // Add input event listeners to all textareas for dynamic resizing
  document.addEventListener('input', function(e) {
    if (e.target.tagName.toLowerCase() === 'textarea') {
      adjustTextareaHeight(e.target);
    }
  }, true);
}

// Generate Pages and Tabs Dynamically
function generatePages() {
  // Clear existing content
  navbar.innerHTML = '';
  pagesContainer.innerHTML = '';

  // Add Important Tools section first
  addImportantToolsSection();
  
  // Add divider after Important Tools
  addDivider(navbar);
  
  // Generate pages from data
  pagesData.forEach((page, pageIndex) => {
    // Add Page to Navbar with animation delay
    const navItem = document.createElement("li");
    navItem.style.animationDelay = `${pageIndex * 0.05}s`;
    navItem.classList.add('fade-in');
    navItem.innerHTML = `<a href="#page${pageIndex}" onclick="showPage(${pageIndex})"><i class="${page.icon}"></i> ${page.title}</a>`;
    navbar.appendChild(navItem);

    // Add Page Content
    const pageDiv = document.createElement("div");
    pageDiv.id = `page${pageIndex}`;
    pageDiv.className = "tabsm";
    pageDiv.style.display = "none";

    // Special handling for different page types
    if (page.title === "Queries") {
      generateQueriesPage(pageDiv, page);
    } else if (page.title === "Essential Points") {
      generateEssentialPointsPage(pageDiv, page);
    } else {
      generateStandardPage(pageDiv, page, pageIndex);
    }

    pagesContainer.appendChild(pageDiv);
  });

  // Add dividers at specific positions
  addDividerBeforePage("Essential Points");
}

// Generate Standard Page with Tabs
function generateStandardPage(pageDiv, page, pageIndex) {
  const tabsNav = document.createElement("div");
  tabsNav.className = "tabsm-nav";
  
  // Create tab buttons
  page.tabs.forEach((tab, tabIndex) => {
    const tabButton = document.createElement("button");
    tabButton.className = `tabm-button ${tabIndex === (appState.currentTabs[pageIndex] || 0) ? "active" : ""}`;
    tabButton.innerHTML = `<i class="${tab.icon}"></i> ${tab.title}`;
    tabButton.onclick = () => showTab(pageIndex, tabIndex);
    tabsNav.appendChild(tabButton);
  });
  
  pageDiv.appendChild(tabsNav);

  // Add Templates and Navigation for Each Tab
  page.tabs.forEach((tab, tabIndex) => {
    const tabContent = document.createElement("div");
    tabContent.className = "tab-content";
    tabContent.style.display = tabIndex === (appState.currentTabs[pageIndex] || 0) ? "block" : "none";

    if (tab.title === "K.B Links") {
      generateKBLinksTab(tabContent, tab);
    } else {
      generateStandardTab(tabContent, tab, pageIndex, tabIndex);
    }

    pageDiv.appendChild(tabContent);
  });
}

// Generate KB Links Tab with Card Style
function generateKBLinksTab(tabContent, tab) {
  tabContent.innerHTML = '';
  
  // Create container for KB link cards
  const kbLinksContainer = document.createElement("div");
  kbLinksContainer.className = "kb-links-container";

  // Add links as cards
  tab.templates.forEach((template) => {
    const linkCard = document.createElement("div");
    linkCard.className = "kb-link-card";
    
    // Generate a short description from the URL or use a default
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

// Generate Standard Tab with Templates
function generateStandardTab(tabContent, tab, pageIndex, tabIndex) {
  // Add section navigation
  const tabSectionNav = document.createElement("div");
  tabSectionNav.className = "tab-section-nav";

  const templatesTitle = document.createElement("h3");
  templatesTitle.className = "templates-title";
  templatesTitle.textContent = "Template List";

  const searchBox = document.createElement("input");
  searchBox.type = "text";
  searchBox.id = `templateSearch-${pageIndex}-${tabIndex}`;
  searchBox.placeholder = "Search templates...";
  searchBox.className = "template-search-box";

  const linksContainer = document.createElement("div");
  linksContainer.className = "links-container";

  // Add search functionality
  searchBox.addEventListener("input", () => {
    const searchTerm = searchBox.value.toLowerCase();
    const links = linksContainer.querySelectorAll("a");

    links.forEach(link => {
      const text = link.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        link.style.display = "block";
      } else {
        link.style.display = "none";
      }
    });
    
    // Save search term to history
    if (searchTerm.length > 2 && !appState.searchHistory.includes(searchTerm)) {
      appState.searchHistory.unshift(searchTerm);
      if (appState.searchHistory.length > 10) {
        appState.searchHistory.pop();
      }
      localStorage.setItem('searchHistory', JSON.stringify(appState.searchHistory));
    }
  });

  tabSectionNav.appendChild(templatesTitle);
  tabSectionNav.appendChild(searchBox);

  // Add template links
  tab.templates.forEach((template, templateIndex) => {
    const sectionLink = document.createElement("a");
    sectionLink.href = `#section-${pageIndex}-${tabIndex}-${templateIndex}`;
    sectionLink.textContent = template.heading;
    sectionLink.onclick = (e) => {
      e.preventDefault();
      const targetElement = document.getElementById(`section-${pageIndex}-${tabIndex}-${templateIndex}`);
      if (targetElement) {
        // Scroll to element with offset for header
        const yOffset = -80; 
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
        highlightElement(targetElement);
      }
    };
    linksContainer.appendChild(sectionLink);
  });

  tabSectionNav.appendChild(linksContainer);
  tabContent.appendChild(tabSectionNav);

  // Add template content
  tab.templates.forEach((template, templateIndex) => {
    const templateDiv = document.createElement("div");
    templateDiv.className = "template-item";
    templateDiv.id = `section-${pageIndex}-${tabIndex}-${templateIndex}`;

    const heading = document.createElement("h4");
    heading.textContent = template.heading;
    templateDiv.appendChild(heading);

    const textarea = document.createElement("textarea");
    textarea.dir = "rtl";
    textarea.disabled = true;
    textarea.textContent = template.content;
    templateDiv.appendChild(textarea);

    // Adjust textarea height immediately and after a short delay to ensure content is fully loaded
    setTimeout(() => adjustTextareaHeight(textarea), 0);
    setTimeout(() => adjustTextareaHeight(textarea), 100);

    // Add copy button
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-btn";
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    copyBtn.onclick = () => copyContent(copyBtn, template.heading);
    templateDiv.appendChild(copyBtn);

    tabContent.appendChild(templateDiv);
  });
}

// Generate Queries Page with Table
function generateQueriesPage(pageDiv, page) {
  // Create table
  const table = document.createElement("table");
  table.className = "queries-table";

  // Add table header
  const tableHeader = document.createElement("thead");
  tableHeader.innerHTML = `
    <tr>
      <th class="word-column">Noon Care Issue</th>
      <th class="explanation-column">Guideline</th>
    </tr>
  `;
  table.appendChild(tableHeader);

  // Table data
  const data = [
        { word: "Account Related", explanation: "If Cx has concerns regarding his noon account [ invoice related, Account preferences or change email, password, name, verify mobile number, etc..]." },
        { word: "Address ChangeorPhone Number", explanation: "Cx requests to change the address or phone number." },
        { word: "ApporWebsite Related", explanation: "If the Cx inquires about steps how to use features or services on our app & website/if the cx inquires about how to use (eg-Noon Credits) & Gift cards & how to make a review on the app." },
        { word: "Policies and Procedures", explanation: "If the Cx is asking for information about any service policy [eg-EMI - COD/Shipping Fees/installation/Noon Locker], return (In case the cx has no order yet or order is not delivered yet), cancelation(In case the cx has no order yet), or asking about any of our policies listed on our website or if the cx is asking about the company's profile or history/if the cx is inquiring about how our delivery services operate or to where we deliver" },
        { word: "Campaigns and Promotions", explanation: "If the Cx is talking about the current, finished or future discounts, codes, gift cards for a specific campaign or brand, promotions or offers." },
        { word: "Cancel Order", explanation: "If the Cx wants to cancel an item/order or asking why my order is canceled." },
        { word: "ScheduleorReattempt Delivery", explanation: "If the Cx is asking for urgent delivery for the order / Customer needs to reschedule a delivery for only (Aramex, SMSA, Saudi Post (SPL), iMile, Flow, and J&T Express)." },
        { word: "Delivery validation code", explanation: "Used when the Cx inquires about the OTP for prepaid orders above 4500 EGP or bulky items. The OTP can be found on the 'My Orders' page in the noon app or in the SMS sent to the registered phone number. If the cx cannot locate the OTP, verify their identity by asking about the order items, registered email, or phone number. If verified, share the OTP via SUDO and log the query. If the cx fails verification, advise them to check the app or SMS and contact us again." },
        { word: "Follow Up ComplaintorRequest", explanation: "Canceled Query Don't Use It" },
        { word: "noon One membership", explanation: "If the Cx inquiring about noonone membership subscription/ how to cancel." },
        { word: "No Response from Customer", explanation: "If the Cx query wasn't clear and didn't continue the conversation for any reason before clarifying the query (Don't forget to update with the Noon care issue as soon as the customer replies with their query). / Cx sends emojis or talks unnecessary or irrelevant things or any prank call" },
        { word: "Order Tracking", explanation: "When the Cx is asking for an update on an order / Item status [exported, shipped, OFD, cancelled, undelivered]." },
        { word: "Not Competitive Price Item", explanation: "GCC / Used when the Cx reports that an item's price is higher compared to competitors. Check the price difference and confirm if the comparison is valid. If valid, create a ticket using the template: 'Noon Care Issue: Content or Price Error'. Assign the ticket to 'EGY CS - Escalation' and submit it with SLA of 2 days. Inform the cx that the issue has been escalated for review and update them once resolved." },
        { word: "Other Dept Info", explanation: "If Cx has questions about other departments or functions of noon (Namshi / Food / SIVVI / VIP / Minutes / Seller Support / Partnerships / Marketing or asking about job vacancies)." },
        { word: "Product Related", explanation: "If the Cx is inquiring about the specifications or authenticity of an item, even if the order has already been created, but the Cx is asking about specific details of the product / seller's info of an item." },
        { word: "Place a New Order", explanation: "Cx needs guidance in placing a new order or if we are placing an order on the customer's behalf or Cx follows up or is upset about the order status (new/invalid)." },
        { word: "direct return to seller", explanation: "If the the return request marked to Agent One with the following notification: 'This item has a return request and is managed by a Direct Ship seller'." },
        { word: "Return Related", explanation: "If the Cx is inquiring about the return status, when the return will be picked up, or wants to raise a return request, or we offer a return for returnable items to the cx." },
        { word: "Damage Item", explanation: "This query is used when the customer contacts us for the first time to report a damaged item, or if the customer has stated that the item is damaged but has not provided the remaining required information, a complete response to the questions, or the requested images." },
        { word: "Fake Item", explanation: "This query is used when the customer contacts us for the first time to report receiving a fake item, or if the customer has stated that the item received is fake but has not provided the remaining required information, a complete response to the questions, or the requested images." },
        { word: "Wrong Item", explanation: "This query is used when the customer contacts us for the first time to report receiving a wrong item, or if the customer has stated that the item received is incorrect but has not provided the remaining required information, a complete response to the questions, or the requested images." },
        { word: "Refund Related", explanation: "If the Cx is asking about the refund status for a returned or canceled order, or we will clarify the self-transfer for the customer, or the refund status SLA." },
        { word: "Warranty Related", explanation: "If the Cx is asking about the warranty policy, or wants to raise warranty claim through agent one or following up on an existing warranty claim" },
        { word: "Trade In related", explanation: "GCC / Used when the cx inquires about the Noon Trade-in program or has concerns related to it. This can include general inquiries about eligibility, process, and terms (e.g., which devices are eligible, available regions for trade-in, how the pickup works). If the cx is experiencing issues like delays in pickup or refund, or needs help contacting North Ladder, create a ticket using the template: 'Noon Care Issue: Trade-in Process'. Assign the ticket to 'CS Escalation Process Team' and submit it with SLA of 48 hours. Provide the customer with the appropriate contact details for North Ladder (UAE or KSA), if necessary, and inform the cx that the issue is being reviewed." },
        { word: "VOC", explanation: "Used when a customer provides feedback, suggestions, or wishes to submit ideas to improve the service or product." },
        { word: "IPL Related", explanation: "Used when the customer has queries or issues related to the IPL (Indian Premier League) campaign for GCC & EGY regions. This can include subscription issues or streaming issues. If the customer is unable to subscribe, advise them to 'Refresh the app and try again in a while.' For streaming issues, ask them to 'Check the internet connection, refresh, and try again in some time.' These issues should be raised under the 'Query' category and closed without creating a complaint. If the customer insists on escalating or raising a complaint, then a complaint ticket should be created." },
        { word: "Custom Fees inquiries", explanation: "Used when the customer inquires about customs fees related to their purchases, especially for mobiles. / For general inquiries, inform the customer that there are no additional charges for pre-orders. / For purchased mobiles, advise them to check directly with NTRA (National Telecommunications Regulatory Authority)." },
        { word: "Arrange delivery from locker", explanation: "" },
        { word: "Locker switched offordisconnected", explanation: "" },
		    { word: "SMS issue", explanation: "" },

	  ];

  // Add table body
  const tableBody = document.createElement("tbody");
  data.forEach(item => {
    const row = document.createElement("tr");
    
    const wordCell = document.createElement("td");
    wordCell.className = "word-column";
    
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-word-btn";
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(item.word);
      showNotification('success', 'تم النسخ!', `تم نسخ "${item.word}" إلى الحافظة`);
    };
    
    wordCell.appendChild(copyBtn);
    wordCell.appendChild(document.createTextNode(item.word));
    
    const explanationCell = document.createElement("td");
    explanationCell.className = "explanation-column";
    explanationCell.textContent = item.explanation;
    
    row.appendChild(wordCell);
    row.appendChild(explanationCell);
    tableBody.appendChild(row);
  });
  
  table.appendChild(tableBody);
  pageDiv.appendChild(table);
}

// Generate Essential Points Page
function generateEssentialPointsPage(pageDiv, page) {
  const container = document.createElement("div");
  container.className = "vertical-tabs-container";
  
  const tabsContainer = document.createElement("div");
  tabsContainer.className = "vertical-tabs";
  
  const contentContainer = document.createElement("div");
  contentContainer.className = "vertical-tab-content";
  
  // Create tab buttons
  page.tabs.forEach((tab, tabIndex) => {
    const tabButton = document.createElement("button");
    tabButton.className = `vertical-tab-button ${tabIndex === 0 ? "active" : ""}`;
    tabButton.innerHTML = `<i class="${tab.icon}"></i> ${tab.title}`;
    tabButton.onclick = () => showTab('Essential Points', tabIndex);
    tabsContainer.appendChild(tabButton);
    
    // Create tab content
    const tabContent = document.createElement("div");
    tabContent.className = "tab-content";
    tabContent.style.display = tabIndex === 0 ? "block" : "none";
    
    // Generate content based on tab type
    if (tab.title === "K.B Links") {
      generateKBLinksTab(tabContent, tab);
    } else {
      generateStandardTab(tabContent, tab, 'Essential Points', tabIndex);
    }
    
    contentContainer.appendChild(tabContent);
  });
  
  container.appendChild(tabsContainer);
  container.appendChild(contentContainer);
  pageDiv.appendChild(container);
}

// Add Important Tools Section
function addImportantToolsSection() {
  // Create Important Tools page
  const importantToolsPage = document.createElement("div");
  importantToolsPage.id = "important-tools";
  importantToolsPage.className = "tabsm";
  importantToolsPage.style.display = "none";
  
  // Create header
  const header = document.createElement("div");
  header.className = "important-tools-header";
  
  const title = document.createElement("h2");
  title.className = "important-tools-title";
  title.innerHTML = '<i class="fas fa-tools"></i> Important Tools';
  
  header.appendChild(title);
  importantToolsPage.appendChild(header);
  
  // Create container for tools
  const toolsContainer = document.createElement("div");
  toolsContainer.id = "importantToolsContainer";
  toolsContainer.className = "important-tools-container";
  importantToolsPage.appendChild(toolsContainer);
  
  // Add to pages container
  pagesContainer.appendChild(importantToolsPage);
  
  // Add to navbar
  const navItem = document.createElement("li");
  navItem.className = "important-tools-nav";
  navItem.innerHTML = `<a href="#important-tools" onclick="showImportantTools()"><i class="fas fa-tools"></i> Important Tools</a>`;
  navbar.appendChild(navItem);
  
  // Render tools
  renderImportantTools();
}

// Render Important Tools
function renderImportantTools() {
  const container = document.getElementById('importantToolsContainer');
  container.innerHTML = '';
  
  importantToolsData.forEach(tool => {
    const toolCard = document.createElement('div');
    toolCard.className = 'tool-card';
    
    toolCard.innerHTML = `
      <h3 class="tool-card-title">${tool.title}</h3>
      <p class="tool-card-description">${tool.description}</p>
      <a href="${tool.url}" target="_blank" class="tool-card-link">
        <i class="${tool.icon || 'fas fa-external-link-alt'}"></i> Open Tool
      </a>
    `;
    
    container.appendChild(toolCard);
  });
}

// Show Important Tools Page
function showImportantTools() {
  // Hide all pages
  const pages = document.querySelectorAll('.tabsm');
  pages.forEach(page => {
    page.style.display = 'none';
    page.classList.remove('active-page');
  });
  
  // Show Important Tools page
  const importantToolsPage = document.getElementById('important-tools');
  importantToolsPage.style.display = 'block';
  setTimeout(() => {
    importantToolsPage.classList.add('active-page');
  }, 10);
  
  // Update active nav item
  const navItems = document.querySelectorAll('#navbar li a');
  navItems.forEach(item => {
    item.classList.remove('active');
  });
  
  document.querySelector('#navbar li.important-tools-nav a').classList.add('active');
  
  // Close mobile menu if open
  if (window.innerWidth <= 768) {
    closeMenu();
  }
}

// Show Page
function showPage(pageIndex) {
  // Hide all pages
  const pages = document.querySelectorAll('.tabsm');
  pages.forEach(page => {
    page.style.display = 'none';
    page.classList.remove('active-page');
  });
  
  // Show selected page with animation
  const selectedPage = document.getElementById(`page${pageIndex}`);
  if (selectedPage) {
    selectedPage.style.display = 'block';
    setTimeout(() => {
      selectedPage.classList.add('active-page');
    }, 10);
    
    // Update active nav item
    const navItems = document.querySelectorAll('#navbar li a');
    navItems.forEach(item => {
      item.classList.remove('active');
    });
    
    const currentNavItem = document.querySelector(`#navbar li a[href="#page${pageIndex}"]`);
    if (currentNavItem) {
      currentNavItem.classList.add('active');
    }
    
    // Save current page to localStorage
    appState.currentPage = pageIndex;
    localStorage.setItem('currentPage', pageIndex);
    
    // Show current tab
    const currentTabIndex = appState.currentTabs[pageIndex] || 0;
    showTab(pageIndex, currentTabIndex);
    
    // Close mobile menu if open
    if (window.innerWidth <= 768) {
      closeMenu();
    }
    
    // Adjust all textareas in the page after a short delay
    setTimeout(() => {
      const allTextareas = selectedPage.querySelectorAll('textarea');
      allTextareas.forEach(textarea => adjustTextareaHeight(textarea));
    }, 100);
  }
}

// Show Tab
function showTab(pageIndex, tabIndex) {
  // Get all tab buttons and content for the current page
  let tabButtons, tabContents;
  
  if (typeof pageIndex === 'string' && pageIndex === 'Essential Points') {
    // For Essential Points page with vertical tabs
    tabButtons = document.querySelectorAll('.vertical-tab-button');
    tabContents = document.querySelectorAll('.vertical-tab-content .tab-content');
  } else {
    // For standard pages
    const page = document.getElementById(`page${pageIndex}`);
    if (!page) return;
    
    tabButtons = page.querySelectorAll('.tabm-button');
    tabContents = page.querySelectorAll('.tab-content');
  }
  
  // Hide all tab contents and deactivate buttons
  tabContents.forEach(content => {
    content.style.display = 'none';
    content.classList.remove('active-tab');
  });
  
  tabButtons.forEach(button => {
    button.classList.remove('active');
  });
  
  // Show selected tab with animation
  if (tabContents[tabIndex]) {
    tabContents[tabIndex].style.display = 'block';
    setTimeout(() => {
      tabContents[tabIndex].classList.add('active-tab');
    }, 10);
    
    // Adjust all textareas in the tab after a short delay
    setTimeout(() => {
      const allTextareas = tabContents[tabIndex].querySelectorAll('textarea');
      allTextareas.forEach(textarea => adjustTextareaHeight(textarea));
    }, 100);
  }
  
  if (tabButtons[tabIndex]) {
    tabButtons[tabIndex].classList.add('active');
  }
  
  // Save current tab to localStorage
  if (typeof pageIndex === 'string') {
    appState.currentTabs[pageIndex] = tabIndex;
  } else {
    appState.currentTabs[pageIndex] = tabIndex;
  }
  localStorage.setItem('currentTabs', JSON.stringify(appState.currentTabs));
}

// Copy Content
function copyContent(button, title) {
  const parent = button.parentElement;
  const textarea = parent.querySelector('textarea');
  const content = textarea.value || textarea.textContent;
  
  // Copy to clipboard
  navigator.clipboard.writeText(content)
    .then(() => {
      // Show notification
      showNotification('success', 'تم النسخ!', `تم نسخ "${title}" إلى الحافظة`);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      showNotification('error', 'خطأ!', 'فشل نسخ المحتوى');
    });
}

// Adjust Textarea Height
function adjustTextareaHeight(textarea) {
  if (!textarea) return;
  
  // Reset height to auto to get the correct scrollHeight
  textarea.style.height = 'auto';
  
  // Set the height to match the content exactly (scrollHeight includes padding)
  const paddingTop = parseInt(window.getComputedStyle(textarea).paddingTop, 10);
  const paddingBottom = parseInt(window.getComputedStyle(textarea).paddingBottom, 10);
  const totalPadding = paddingTop + paddingBottom;
  
  // Add a small buffer to ensure all text is visible
  textarea.style.height = (textarea.scrollHeight + 2) + 'px';
}

// Search Sections
function searchSections() {
  const searchTerm = searchBox.value.toLowerCase();
  let hasResults = false;

  // إنشاء قائمة مؤقتة للعناصر المطابقة مع الحفاظ على الترتيب الأصلي
  const filteredItems = appState.originalNavItems.map(item => {
    if (item.type === "navItem") {
      const text = item.linkHtml.toLowerCase();
      if (text.includes(searchTerm)) {
        hasResults = true;
        return { ...item, shouldDisplay: true };
      } else {
        return { ...item, shouldDisplay: false };
      }
    }
    return item; // الفواصل لا تتأثر بالبحث
  });

  // إعادة بناء navbar بناءً على التصفية
  navbar.innerHTML = '';
  filteredItems.forEach(item => {
    if (item.type === "divider") {
      const divider = document.createElement("div");
      divider.className = "divider";
      navbar.appendChild(divider);
    } else if (item.type === "navItem" && item.shouldDisplay) {
      const li = document.createElement("li");
      li.innerHTML = item.html;
      // إعادة ربط الحدث onclick
      const link = li.querySelector("a");
      if (link) {
        const href = link.getAttribute("href");
        if (href.includes("important-tools")) {
          link.onclick = () => showImportantTools();
        } else {
          const pageIndex = parseInt(href.replace("#page", ""));
          link.onclick = () => showPage(pageIndex);
        }
      }
      navbar.appendChild(li);
    }
  });

  // إظهار رسالة "لا توجد نتائج" إذا لزم الأمر
  const noResultsMsg = document.getElementById('noResultsMsg');
  if (!hasResults && searchTerm) {
    if (!noResultsMsg) {
      const msg = document.createElement('div');
      msg.id = 'noResultsMsg';
      msg.className = 'no-results-message';
      msg.textContent = 'لا توجد نتائج للبحث';
      navbar.appendChild(msg);
    }
  } else if (noResultsMsg) {
    noResultsMsg.remove();
  }

  // حفظ مصطلح البحث في السجل
  if (searchTerm.length > 2 && !appState.searchHistory.includes(searchTerm)) {
    appState.searchHistory.unshift(searchTerm);
    if (appState.searchHistory.length > 10) {
      appState.searchHistory.pop();
    }
    localStorage.setItem('searchHistory', JSON.stringify(appState.searchHistory));
  }
}

// Reset Search
function resetSearch() {
  // مسح محتوى البحث
  searchBox.value = '';

  // إعادة بناء navbar من الصفر
  navbar.innerHTML = '';

  // إعادة إنشاء العناصر بناءً على originalNavItems
  appState.originalNavItems.forEach(item => {
    if (item.type === "divider") {
      const divider = document.createElement("div");
      divider.className = "divider";
      navbar.appendChild(divider);
    } else if (item.type === "navItem") {
      const li = document.createElement("li");
      li.innerHTML = item.html;
      // إعادة ربط الحدث onclick
      const link = li.querySelector("a");
      if (link) {
        const href = link.getAttribute("href");
        if (href.includes("important-tools")) {
          link.onclick = () => showImportantTools();
        } else {
          const pageIndex = parseInt(href.replace("#page", ""));
          link.onclick = () => showPage(pageIndex);
        }
      }
      navbar.appendChild(li);
    }
  });

  // إزالة رسالة "لا توجد نتائج"
  const noResultsMsg = document.getElementById('noResultsMsg');
  if (noResultsMsg) {
    noResultsMsg.remove();
  }
}

// Toggle Menu
function toggleMenu() {
  dropdownMenu.classList.toggle('active');
}

// Close Menu
function closeMenu() {
  dropdownMenu.classList.remove('active');
}

// Handle Outside Click
function handleOutsideClick(event) {
  const isClickInsideMenu = dropdownMenu.contains(event.target);
  const isClickOnMenuToggle = menuToggle.contains(event.target);
  
  if (!isClickInsideMenu && !isClickOnMenuToggle) {
    closeMenu();
  }
}

// Toggle Back to Top Button
function toggleBackToTopButton() {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Add Divider
function addDivider(container) {
  const divider = document.createElement("div");
  divider.className = "divider";
  container.appendChild(divider);
}

// Add Divider Before Page
function addDividerBeforePage(pageTitle) {
  const navItems = navbar.querySelectorAll("li");
  
  navItems.forEach((item) => {
    if (item.textContent.includes(pageTitle)) {
      const divider = document.createElement("div");
      divider.className = "divider";
      navbar.insertBefore(divider, item);
    }
  });
}

// Create Mobile Menu Toggle
function createMobileMenuToggle() {
  const toggle = document.createElement('button');
  toggle.id = 'mobileMenuToggle';
  toggle.className = 'circle-button mobile-menu-toggle';
  toggle.title = 'Toggle Mobile Menu';
  toggle.innerHTML = '<i class="fas fa-bars"></i>';
  
  document.body.appendChild(toggle);
  
  toggle.addEventListener('click', () => {
    navElement.classList.toggle('active');
    toggle.innerHTML = navElement.classList.contains('active')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });
}

// Highlight Element
function highlightElement(element) {
  element.classList.add('highlight-animation');
  setTimeout(() => {
    element.classList.remove('highlight-animation');
  }, 2000);
}

// Show Notification
function showNotification(type, title, message) {
  // Remove existing notification
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  
  notification.innerHTML = `
    <div class="notification-icon">
      <i class="fas ${getIconForType(type)}"></i>
    </div>
    <div class="notification-content">
      <div class="notification-title">${title}</div>
      <div class="notification-message">${message}</div>
    </div>
    <button class="notification-close">×</button>
  `;
  
  document.body.appendChild(notification);
  
  // Show notification
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Auto hide after 5 seconds
  const hideTimeout = setTimeout(() => {
    hideNotification(notification);
  }, 5000);
  
  // Add close button event
  notification.querySelector('.notification-close').addEventListener('click', () => {
    clearTimeout(hideTimeout);
    hideNotification(notification);
  });
}

// Hide Notification
function hideNotification(notification) {
  notification.classList.remove('show');
  setTimeout(() => {
    notification.remove();
  }, 300);
}

// Get Icon for Notification Type
function getIconForType(type) {
  switch (type) {
    case 'success': return 'fa-check-circle';
    case 'error': return 'fa-exclamation-circle';
    case 'warning': return 'fa-exclamation-triangle';
    case 'info': return 'fa-info-circle';
    default: return 'fa-info-circle';
  }
}

// Make functions globally accessible
window.showPage = showPage;
window.showTab = showTab;
window.copyContent = copyContent;
window.showImportantTools = showImportantTools;
