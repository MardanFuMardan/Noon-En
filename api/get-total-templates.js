// api/get-total-templates.js

// ملاحظة: Vercel يسمح لنا باستيراد البيانات هكذا في بيئة الخادم
import { pagesData } from '../../templates.js'; 

export default function handler(request, response) {
  try {
    let totalCount = 0;
    // نفس الكود الذي استخدمناه في الـ Console، لكنه الآن يعمل على الخادم
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
