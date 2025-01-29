/* Generate Pages and Tabs Dynamically */
function generatePages() {
  const navbar = document.getElementById("navbar");
  const pagesContainer = document.getElementById("pagesContainer");

  pagesData.forEach((page, pageIndex) => {
    // Add Page to Navbar
    const navItem = document.createElement("li");
    navItem.innerHTML = `<a href="#page${pageIndex}" onclick="showPage(${pageIndex})"><i class="${page.icon}"></i> ${page.title}</a>`;
    navbar.appendChild(navItem);

    // Add Page Content
    const pageDiv = document.createElement("div");
    pageDiv.id = `page${pageIndex}`;
    pageDiv.className = "tabsm";
    pageDiv.style.display = pageIndex === 0 ? "block" : "none";

    if (page.title === "Queries") {
      // إنشاء الجدول للصفحة "كويريز"
      const table = document.createElement("table");
      table.className = "queries-table";

      // إضافة عناوين الجدول
      const tableHeader = document.createElement("thead");
      tableHeader.innerHTML = `
        <tr>
          <th class="word-column">Noon Care Issue</th>
          <th class="explanation-column">Guideline</th>
        </tr>
      `;
      table.appendChild(tableHeader);

      // بيانات الجدول (يمكن استبدالها ببيانات ديناميكية)
      const data = [
        { word: "Account Related", explanation: "If Cx has concerns regarding his noon account [ invoice related, Account preferences or change email, password, name, verify mobile number, etc..]." },
        { word: "SMS issue", explanation: "" },
        { word: "Address ChangeorPhone Number", explanation: "Cx requests to change the address or phone number." },
        { word: "ApporWebsite Related", explanation: "If the Cx inquires about steps how to use features or services on our app & website/if the cx inquires about how to use (eg-Noon Credits) & Gift cards & how to make a review on the app." },
        { word: "policies procedures", explanation: "If the Cx is asking for information about any service policy [eg-EMI - COD/Shipping Fees/installation/Noon Locker], return (In case the cx has no order yet or order is not delivered yet), cancelation(In case the cx has no order yet), or asking about any of our policies listed on our website or if the cx is asking about the company's profile or history/if the cx is inquiring about how our delivery services operate or to where we deliver" },
        { word: "Campaigns and Promotions", explanation: "If the Cx is talking about the current, finished or future discounts, codes, gift cards for a specific campaign or brand, promotions or offers." },
        { word: "Cancel Order", explanation: "If the Cx wants to cancel an item/order or asking why my order is canceled." },
        { word: "ScheduleorReattempt Delivery", explanation: "If the Cx is asking for urgent delivery for the order / Customer needs to reschedule a delivery for only (Aramex, SMSA, Saudi Post (SPL), iMile, Flow, and J&T Express)." },
        { word: "Arrange delivery from locker", explanation: "" },
        { word: "Locker switched offordisconnected", explanation: "" },
        { word: "Delivery validation code", explanation: "Used when the Cx inquires about the OTP for prepaid orders above 4500 EGP or bulky items. The OTP can be found on the 'My Orders' page in the noon app or in the SMS sent to the registered phone number. If the cx cannot locate the OTP, verify their identity by asking about the order items, registered email, or phone number. If verified, share the OTP via SUDO and log the query. If the cx fails verification, advise them to check the app or SMS and contact us again." },
        { word: "Follow Up ComplaintorRequest", explanation: "If the Cx is following up on an existing complaint or request (Already solved with resolution and no room for leaving a comment on the solved ticket) or it has been closed, and you can inform the CX of the latest update / When the customer comes for a follow up on an existing open complaint or request." },
        { word: "noon One membership", explanation: "If the Cx inquiring about noonone membership subscription/ how to cancel." },
        { word: "No Response from Customer", explanation: "If the Cx query wasn't clear and didn't continue the conversation for any reason before clarifying the query (Don't forget to update with the Noon care issue as soon as the customer replies with their query). / Cx sends emojis or talks unnecessary or irrelevant things or any prank call" },
        { word: "Order Tracking", explanation: "When the Cx is asking for an update on an order / Item status [exported, shipped, OFD, cancelled, undelivered]." },
        { word: "Not Competitive Price Item", explanation: "GCC / Used when the Cx reports that an item's price is higher compared to competitors. Check the price difference and confirm if the comparison is valid. If valid, create a ticket using the template: 'Noon Care Issue: Content or Price Error'. Assign the ticket to 'EGY CS - Escalation' and submit it with SLA of 2 days. Inform the cx that the issue has been escalated for review and update them once resolved." },
        { word: "Other Dept Info", explanation: "If Cx has questions about other departments or functions of noon (Namshi / Food / SIVVI / VIP / Minutes / Seller Support / Partnerships / Marketing or asking about job vacancies)." },
        { word: "Product Related", explanation: "If the Cx is inquiring about the specifications or authenticity of an item, even if the order has already been created, but the Cx is asking about specific details of the product / seller's info of an item." },
        { word: "Place a New Order", explanation: "Cx needs guidance in placing a new order or if we are placing an order on the customer's behalf or Cx follows up or is upset about the order status (new/invalid)." },
        { word: "direct return to seller", explanation: "If the the return request marked to Agent One with the following notification: 'This item has a return request and is managed by a Direct Ship seller'." },
        { word: "Return Related", explanation: "If the Cx is inquiring about the return status, when the return will be picked up, or wants to raise a return request, or we offer a return for returnable items to the cx." },
        { word: "Damage Item", explanation: "" },
        { word: "Fake Item", explanation: "" },
        { word: "Wrong Item", explanation: "" },
        { word: "Refund Related", explanation: "If the Cx is asking about the refund status for a returned or canceled order, or we will clarify the self-transfer for the customer, or the refund status SLA." },
        { word: "Warranty Related", explanation: "If the Cx is asking about the warranty policy, or wants to raise warranty claim through agent one or following up on an existing warranty claim" },
        { word: "Trade In related", explanation: "GCC / Used when the cx inquires about the Noon Trade-in program or has concerns related to it. This can include general inquiries about eligibility, process, and terms (e.g., which devices are eligible, available regions for trade-in, how the pickup works). If the cx is experiencing issues like delays in pickup or refund, or needs help contacting North Ladder, create a ticket using the template: 'Noon Care Issue: Trade-in Process'. Assign the ticket to 'CS Escalation Process Team' and submit it with SLA of 48 hours. Provide the customer with the appropriate contact details for North Ladder (UAE or KSA), if necessary, and inform the cx that the issue is being reviewed." },
        { word: "VOC", explanation: "Used when a customer provides feedback, suggestions, or wishes to submit ideas to improve the service or product." },
        { word: "IPL Related", explanation: "Used when the customer has queries or issues related to the IPL (Indian Premier League) campaign for GCC & EGY regions. This can include subscription issues or streaming issues. If the customer is unable to subscribe, advise them to 'Refresh the app and try again in a while.' For streaming issues, ask them to 'Check the internet connection, refresh, and try again in some time.' These issues should be raised under the 'Query' category and closed without creating a complaint. If the customer insists on escalating or raising a complaint, then a complaint ticket should be created." },
        { word: "Custom Fees inquiries", explanation: "Used when the customer inquires about customs fees related to their purchases, especially for mobiles. / For general inquiries, inform the customer that there are no additional charges for pre-orders. / For purchased mobiles, advise them to check directly with NTRA (National Telecommunications Regulatory Authority)." },
      ];

      const tableBody = document.createElement("tbody");
      data.forEach(item => {
        const row = document.createElement("tr");

        // العمود الأيسر (الكلمة مع زر النسخ)
        const wordCell = document.createElement("td");
        wordCell.className = "word-column";

        // زر النسخ قبل الكلمة
        const copyButton = document.createElement("button");
        copyButton.className = "copy-word-btn";
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        copyButton.onclick = () => copyContent(copyButton);
        wordCell.appendChild(copyButton);

        // إضافة الكلمة بعد زر النسخ
        const wordText = document.createTextNode(item.word);
        wordCell.appendChild(wordText);

        // العمود الأيمن (الشرح)
        const explanationCell = document.createElement("td");
        explanationCell.className = "explanation-column";
        explanationCell.textContent = item.explanation;

        // إضافة الخلايا إلى الصف
        row.appendChild(wordCell);
        row.appendChild(explanationCell);

        // إضافة الصف إلى الجدول
        tableBody.appendChild(row);
      });

      table.appendChild(tableBody);
      pageDiv.appendChild(table);
    } else if (page.title === "Essential Points") {
      // إنشاء تابات عمودية لصفحة "Essential Points"
      const verticalTabsContainer = document.createElement("div");
      verticalTabsContainer.className = "vertical-tabs-container";

      // إنشاء التابات العمودية
      const verticalTabs = document.createElement("div");
      verticalTabs.className = "vertical-tabs";

      page.tabs.forEach((tab, tabIndex) => {
        const tabButton = document.createElement("button");
        tabButton.className = `vertical-tab-button ${tabIndex === 0 ? "active" : ""}`;
        tabButton.innerHTML = `<i class="${tab.icon}"></i> ${tab.title}`;
        tabButton.onclick = () => showTab(pageIndex, tabIndex);
        verticalTabs.appendChild(tabButton);
      });

      verticalTabsContainer.appendChild(verticalTabs);

      // إنشاء محتوى التابات
      const verticalTabContent = document.createElement("div");
      verticalTabContent.className = "vertical-tab-content";

      page.tabs.forEach((tab, tabIndex) => {
        const tabContent = document.createElement("div");
        tabContent.className = "tab-content";
        tabContent.style.display = tabIndex === 0 ? "block" : "none";

        if (tab.title === "K.B Links") {
          // إزالة قسم tab-section-nav
          tabContent.innerHTML = '';

          // إضافة الأزرار للروابط
          tab.templates.forEach((template, templateIndex) => {
            const linkButton = document.createElement("a");
            linkButton.href = template.content;
            linkButton.target = "_blank";
            linkButton.className = "kb-link-button";
            linkButton.innerHTML = `
              <i class="fas fa-external-link-alt"></i>
              ${template.heading}
            `;

            tabContent.appendChild(linkButton);
          });
        } else {
          // إضافة المحتوى مباشرة بدون عنوان أو مربع بحث
          tab.templates.forEach((template, templateIndex) => {
            const templateDiv = document.createElement("div");
            templateDiv.style.position = "relative";
            templateDiv.id = `section-${pageIndex}-${tabIndex}-${templateIndex}`;

            const textarea = document.createElement("textarea");
            textarea.dir = "rtl";
            textarea.disabled = true;
            textarea.textContent = template.content;

            templateDiv.innerHTML = `<h4>${template.heading}</h4>`;
            templateDiv.appendChild(textarea);

            setTimeout(() => adjustTextareaHeight(textarea), 10);

            templateDiv.innerHTML += `
              <button class="copy-btn" onclick="copyContent(this)"><i class="fas fa-copy"></i></button>
              <div class="copy-notification">!تم النسخ</div>
            `;
            tabContent.appendChild(templateDiv);
          });
        }

        verticalTabContent.appendChild(tabContent);
      });

      verticalTabsContainer.appendChild(verticalTabContent);
      pageDiv.appendChild(verticalTabsContainer);
    } else {
      // الكود الأصلي لإضافة التابات والصفحات الأخرى
      const tabsNav = document.createElement("div");
      tabsNav.className = "tabsm-nav";
      page.tabs.forEach((tab, tabIndex) => {
        const tabButton = document.createElement("button");
        tabButton.className = `tabm-button ${tabIndex === 0 ? "active" : ""}`;
        tabButton.innerHTML = `<i class="${tab.icon}"></i> ${tab.title}`;
        tabButton.onclick = () => showTab(pageIndex, tabIndex);
        tabsNav.appendChild(tabButton);
      });
      pageDiv.appendChild(tabsNav);

      // Add Templates and Navigation for Each Tab
      page.tabs.forEach((tab, tabIndex) => {
        const tabContent = document.createElement("div");
        tabContent.className = "tab-content";
        tabContent.style.display = tabIndex === 0 ? "block" : "none";

        if (tab.title === "K.B Links") {
          // إزالة قسم tab-section-nav
          tabContent.innerHTML = '';

          // إضافة الأزرار للروابط
          tab.templates.forEach((template, templateIndex) => {
            const linkButton = document.createElement("a");
            linkButton.href = template.content;
            linkButton.target = "_blank";
            linkButton.className = "kb-link-button";
            linkButton.innerHTML = `
              <i class="fas fa-external-link-alt"></i>
              ${template.heading}
            `;

            tabContent.appendChild(linkButton);
          });
        } else {
          // إضافة المحتوى مع عنوان ومربع بحث
          const tabSectionNav = document.createElement("div");
          tabSectionNav.className = "tab-section-nav";
          tabSectionNav.style.marginBottom = "20px";
          tabSectionNav.style.border = "1px solid var(--highlight-color)";
          tabSectionNav.style.padding = "10px";
          tabSectionNav.style.borderRadius = "4px";

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
          });

          tabSectionNav.appendChild(templatesTitle);
          tabSectionNav.appendChild(searchBox);

          tab.templates.forEach((template, templateIndex) => {
            const sectionLink = document.createElement("a");
            sectionLink.href = `#section-${pageIndex}-${tabIndex}-${templateIndex}`;
            sectionLink.style.margin = "0 auto";
            sectionLink.style.cursor = "pointer";
            sectionLink.style.color = "var(--primary-color)";
            sectionLink.onclick = (e) => {
              e.preventDefault();
              document
                .getElementById(`section-${pageIndex}-${tabIndex}-${templateIndex}`)
                .scrollIntoView({ behavior: "smooth", block: "start" });
            };

            const icon = document.createElement("i");
            icon.className = "fas fa-bolt-lightning";
            icon.style.marginRight = "8px";

            const linkText = document.createTextNode(template.heading);

            sectionLink.appendChild(icon);
            sectionLink.appendChild(linkText);

            linksContainer.appendChild(sectionLink);
          });

          tabSectionNav.appendChild(linksContainer);
          tabContent.appendChild(tabSectionNav);

          tab.templates.forEach((template, templateIndex) => {
            const templateDiv = document.createElement("div");
            templateDiv.style.position = "relative";
            templateDiv.id = `section-${pageIndex}-${tabIndex}-${templateIndex}`;

            const textarea = document.createElement("textarea");
            textarea.dir = "rtl";
            textarea.disabled = true;
            textarea.textContent = template.content;

            templateDiv.innerHTML = `<h4>${template.heading}</h4>`;
            templateDiv.appendChild(textarea);

            setTimeout(() => adjustTextareaHeight(textarea), 10);

            templateDiv.innerHTML += `
              <button class="copy-btn" onclick="copyContent(this)"><i class="fas fa-copy"></i></button>
              <div class="copy-notification">!تم النسخ</div>
            `;
            tabContent.appendChild(templateDiv);
          });
        }

        pageDiv.appendChild(tabContent);
      });
    }

    pagesContainer.appendChild(pageDiv);
  });

  setTimeout(adjustTextareaHeightsOnLoad, 50);
}

/* Adjust Individual Textarea Height */
function adjustTextareaHeight(textarea) {
  textarea.style.height = "auto"; // Reset height
  textarea.style.height = `${textarea.scrollHeight}px`; // Set to fit content
  textarea.style.overflow = "hidden"; // Hide scrollbar
}

/* Adjust All Textareas in Active Page */
function adjustTextareaHeightsOnLoad() {
  const activePage = document.querySelector(".tabsm[style*='block']");
  if (activePage) {
    activePage.querySelectorAll("textarea").forEach((textarea) => {
      adjustTextareaHeight(textarea);
    });
  }
}

/* Adjust Individual Textarea Height */
function adjustTextareaHeight(textarea) {
  textarea.style.height = "auto"; // Reset height
  textarea.style.height = `${textarea.scrollHeight}px`; // Set to fit content
  textarea.style.overflow = "hidden"; // Hide scrollbar
}

/* Adjust All Textareas in Active Page */
function adjustTextareaHeightsOnLoad() {
  const activePage = document.querySelector(".tabsm[style*='block']");
  if (activePage) {
    activePage.querySelectorAll("textarea").forEach((textarea) => {
      adjustTextareaHeight(textarea);
    });
  }
}

/* Show Specific Page */
function showPage(index) {
  document.querySelectorAll(".tabsm").forEach((page, i) => {
    page.style.display = i === index ? "block" : "none";
  });

  document.querySelectorAll("nav ul li a").forEach((link, i) => {
    link.classList.toggle("active", i === index);
  });

  // Adjust textareas in the active page
  const activePage = document.querySelector(`.tabsm:nth-child(${index + 1})`);
  if (activePage) {
    activePage.querySelectorAll("textarea").forEach((textarea) => {
      adjustTextareaHeight(textarea);
    });
  }
}

/* Show Specific Tab */
function showTab(pageIndex, tabIndex) {
  const page = document.getElementById(`page${pageIndex}`);
  const isEssentialPoints = pagesData[pageIndex].title === "Essential Points";

  if (isEssentialPoints) {
    // معالجة التابات العمودية لصفحة Essential Points
    const verticalTabs = page.querySelectorAll(".vertical-tab-button");
    const verticalContents = page.querySelectorAll(".vertical-tab-content .tab-content");

    verticalTabs.forEach((tab, i) => {
      tab.classList.toggle("active", i === tabIndex);
    });

    verticalContents.forEach((content, i) => {
      content.style.display = i === tabIndex ? "block" : "none";

      if (i === tabIndex) {
        content.querySelectorAll("textarea").forEach((textarea) => {
          adjustTextareaHeight(textarea);
        });
      }
    });
  } else {
    // معالجة التابات العادية للصفحات الأخرى
    const tabs = page.querySelectorAll(".tabsm-nav .tabm-button");
    const contents = page.querySelectorAll(".tab-content");

    tabs.forEach((tab, i) => {
      tab.classList.toggle("active", i === tabIndex);
    });

    contents.forEach((content, i) => {
      content.style.display = i === tabIndex ? "block" : "none";

      if (i === tabIndex) {
        content.querySelectorAll("textarea").forEach((textarea) => {
          adjustTextareaHeight(textarea);
        });
      }
    });
  }
}

/* Copy Content with Notification */
function copyContent(button) {
  // البحث عن العنصر textarea المجاور للزر
  const textarea = button.previousElementSibling;
  
  if (textarea && textarea.tagName === "TEXTAREA") {
    // نسخ محتوى textarea
    navigator.clipboard.writeText(textarea.value).then(() => {
      const notification = button.nextElementSibling;
      notification.classList.add("active");
      setTimeout(() => notification.classList.remove("active"), 2000);
    });
  } else {
    // في حالة عدم وجود textarea، ابحث عن الكلاس word-column
    const parentElement = button.closest(".word-column");
    if (parentElement) {
      const contentToCopy = parentElement.textContent.trim();

      // نسخ النص إلى الحافظة
      navigator.clipboard.writeText(contentToCopy).then(() => {
        const notification = document.createElement("div");
        notification.className = "copy-notification active";
        notification.textContent = "تم النسخ!";
        document.body.appendChild(notification);

        // إزالة الإشعار بعد 2 ثانية
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 2000);
      });
    } else {
      console.error("لم يتم العثور على نص للنسخ.");
    }
  }
}

/* Initialize Pages */
generatePages();

/* Back to Top Button Functionality */
    const backToTopButton = document.getElementById("backToTop");

    // Show/hide button on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        backToTopButton.style.display = "block"; // Show button
      } else {
        backToTopButton.style.display = "none"; // Hide button
      }
    });

    // Custom smooth scroll to top function
    function smoothScrollToTop(duration) {
      const startPosition = window.pageYOffset; // Current scroll position
      const startTime = performance.now();

      function scrollStep(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Progress percentage (0 to 1)

        // Ease-in-out function for smooth transition
        const easeInOutQuad = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        const scrollToPosition = startPosition * (1 - easeInOutQuad);
        window.scrollTo(0, scrollToPosition);

        if (progress < 1) {
          requestAnimationFrame(scrollStep); // Continue scrolling
        }
      }

      requestAnimationFrame(scrollStep); // Start scrolling
    }

    // Scroll to top when button is clicked
    backToTopButton.addEventListener("click", () => {
      smoothScrollToTop(800); // Duration in milliseconds
    });


document.addEventListener("DOMContentLoaded", () => {
  /* Theme Toggle */
  const themeToggle = document.getElementById("themeToggle");
  const logo = document.getElementById("logo"); // استهداف صورة الشعار
  const savedTheme = localStorage.getItem("theme") || "dark";

  // إعداد الثيم المحفوظ عند تحميل الصفحة
  document.documentElement.setAttribute("data-theme", savedTheme);

  // ضبط أيقونة الثيم وصورة الشعار بناءً على الثيم المحفوظ
  function updateTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.innerHTML = theme === "light" 
      ? '<i class="fas fa-sun"></i>' 
      : '<i class="fas fa-moon"></i>';
    if (logo) {
      logo.src = theme === "light" 
        ? "https://i.imgur.com/9FbRz6X.png" 
        : "https://i.imgur.com/8qBeodL.png";
    }
  }

  // تطبيق الثيم المحفوظ
  updateTheme(savedTheme);

  // تبديل الثيم عند الضغط على الزر
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    // تحديث الثيم وتخزينه
    localStorage.setItem("theme", newTheme);
    updateTheme(newTheme);
  });
});


// دالة البحث
function searchSections() {
  const searchBox = document.getElementById("searchBox");
  const searchTerm = searchBox.value.toLowerCase();
  const navItems = document.querySelectorAll("#navbar li");

  navItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// إضافة حدث البحث عند الكتابة
document.getElementById("searchBox").addEventListener("input", searchSections);

// إعادة عرض جميع العناصر عند مسح البحث
document.getElementById("searchBox").addEventListener("search", () => {
  const navItems = document.querySelectorAll("#navbar li");
  navItems.forEach(item => {
    item.style.display = "block";
  });
});




// فتح/إغلاق القائمة
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const closeMenuBtn = document.querySelector('.close-menu-btn');

// فتح/إغلاق القائمة المنسدلة
menuToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

// إغلاق القائمة عند الضغط على زر الإغلاق
closeMenuBtn.addEventListener('click', () => {
  dropdownMenu.classList.remove('active');
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener('click', (event) => {
  const isClickInsideMenu = dropdownMenu.contains(event.target);
  const isClickOnMenuToggle = menuToggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnMenuToggle) {
    dropdownMenu.classList.remove('active');
  }
});


// دالة لإضافة divider قبل صفحة معينة
function addDividerBeforePage(pageTitle) {
  const navbar = document.getElementById("navbar");
  const navItems = navbar.querySelectorAll("li");

  navItems.forEach((item, index) => {
    if (item.textContent.includes(pageTitle)) {
      // إنشاء العنصر divider
      const divider = document.createElement("div");
      divider.style.marginTop = "20px"; // هامش علوي
      divider.style.marginBottom = "20px"; // هامش سفلي
      divider.style.borderTop = "1px solid var(--primary-color)"; // لون الخط
      divider.style.width = "100%"; // عرض كامل

      // إضافة الـ divider قبل الصفحة المحددة
      navbar.insertBefore(divider, item);
    }
  });
}

// دالة لإضافة divider قبل مربع البحث
function addDividerBeforeSearchBox() {
  const navbar = document.getElementById("navbar");
  const searchBox = document.getElementById("searchBox"); // تحديد مربع البحث باستخدام الـ ID

  if (searchBox) {
    // إنشاء العنصر divider
    const divider = document.createElement("div");
    divider.style.marginTop = "0px"; // هامش علوي
    divider.style.marginBottom = "20px"; // هامش سفلي
    divider.style.borderTop = "1px solid var(--primary-color)"; // لون الخط
    divider.style.width = "140%"; // عرض كامل

    // إضافة الـ divider قبل مربع البحث
    searchBox.parentNode.insertBefore(divider, searchBox);
  }
}

// استدعاء الدوال لإضافة divider قبل صفحة "Essential Points" ومربع البحث
addDividerBeforePage("Essential Points");
addDividerBeforeSearchBox();

// تأخير تنفيذ الكود لضمان تطبيقه بعد اكتمال توليد الصفحة
setTimeout(() => {
  // إنشاء عنصر style وإضافة القاعدة CSS
  const style = document.createElement('style');
  style.innerHTML = `
    .vertical-tab-content textarea {
      direction: ltr !important;
      text-align: left !important;
    }
  `;
  document.head.appendChild(style); // إضافة الـ style إلى الـ head
}, 2000); // تأخير بمقدار 1000 مللي ثانية (1 ثانية)





