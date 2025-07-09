// /api/get-stats.js
// هذه هي نقطة الـ API التي تقرأ كل بيانات الإحصائيات من قاعدة البيانات

import { kv } from '@vercel/kv';

export default async function handler(request, response) {
  try {
    // hgetall: هي دالة تجلب كل الحقول والقيم من الهاش المحدد
    const stats = await kv.hgetall('template-usage');
    
    // إذا لم تكن هناك بيانات، نرسل كائنًا فارغًا
    if (!stats) {
      return response.status(200).json({});
    }

    // نرسل بيانات الإحصائيات كـ JSON
    return response.status(200).json(stats);

  } catch (error) {
    console.error('Error in /api/get-stats:', error);
    return response.status(500).json({ error: error.message });
  }
}