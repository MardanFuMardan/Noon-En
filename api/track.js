// /api/track.js
// هذه هي نقطة الـ API التي تستقبل طلبات التتبع من المستخدمين

import { kv } from '@vercel/kv';

export default async function handler(request, response) {
  // نتأكد أن الطلب هو من نوع POST فقط
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { templateName } = request.body;

    // نتأكد أن اسم القالب موجود في الطلب
    if (!templateName) {
      return response.status(400).json({ message: 'Template name is required.' });
    }

    // hincrby: هي دالة سريعة جداً تقوم بزيادة قيمة حقل داخل "هاش"
    // 'template-usage': هو اسم الهاش الذي سنخزن فيه كل العدادات
    // templateName: هو اسم القالب (الحقل) الذي نريد زيادة عداده
    // 1: القيمة التي سنزيد بها العداد في كل مرة
    await kv.hincrby('template-usage', templateName, 1);

    // نرسل استجابة ناجحة
    return response.status(200).json({ success: true, message: `Tracked: ${templateName}` });

  } catch (error) {
    console.error('Error in /api/track:', error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}