// api/get-total-templates.js

import { pagesData } from '../templates.js'; // تم تعديل هذا السطر

export default function handler(request, response) {
  try {
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

    response.status(200).json({ totalTemplates: totalCount });

  } catch (error) {
    console.error("Error calculating total templates:", error);
    response.status(500).json({ error: "Could not calculate total templates." });
  }
}
