/* templates.js - Updated V2.1 */
export const pagesData = [

  // Priority items - their order here dictates their order in the priority section
  {
    id: "important_tools", 
    title: "Important Tools", 
    icon: "fas fa-tools",
    // No tabs or templates, content is handled by addImportantToolsSectionContent in script.js
  },
  {
    id: "queries",
    title: "Queries",
    icon: "fas fa-database",
    tabs: [], // No standard tabs, content generated directly
    queriesData: [ // Moved queriesData here
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
    ]
  },
  
 
    /* Essential Points */

{
  id: "essential_points",
  "title": "Essential Points",
  "icon": "fas fa-triangle-exclamation",
  "tabs": [
  
      {
      "title": "Zoho Tickets",
      "icon": "fas fa-file-import",
      "templates": [
        {
          "heading": "Case 1",
	      "content": "In the case of replying to the CX's email and upon review, if it is found that the Noon Care Issue was previously set incorrectly, it is necessary to update it and set the correct Noon Care Issue based on your other response, not according to the initial one provided to the customer.\n\nHowever, if the initial response was correct from the beginning, you should not update the Noon Care Issue at all. Instead, leave it as is and follow the standard procedures for responding to the CX."
		  },
		  
      ]
    },
	
	      {
      "title": "Return",
      "icon": "fas fa-file-import",
      "templates": [
        {
          "heading": "Case 1",
		  "content": "We must inform the CX of the complete return policy, whether the product is less than or more than 300 EGP Or direct return.\n\nThis includes that the product must be in its original condition with all its accessories, labels, etc.\n\nWe provide this information whether we are offering a return or tracking a return request, except in cases where the product has already been picked up. In that case, we do not need to inform the CX about the policy."		  },
		  
      ]
    },

      {
      "title": "Refund",
      "icon": "fas fa-file-import",
      "templates": [
        {
          "heading": "Case 1",
		  "content": "In the case that the CX has a failed refund in their account, the steps are as follows:\n\nInform the CX to contact their bank, as we attempted to transfer the amount but it was rejected by their bank and returned to the Noon credit. This is done to protect the CX's rights.\n\nIf the CX has already contacted the bank and gets back to us, offer the CX to submit a request for a change in refund mode to transfer the money to their personal bank account, and provide them with the necessary information.\n\nIf the CX refuses or states that they do not have a bank account and wants the money refunded to the same card, create a credit to card refund request and explain what happened in the comments section."
		  },
		     {
          "heading": "Case 2",
"content": "If a customer is following up on a closed complaint or request, and you are providing them with the latest update or asking them to wait for a specific time to contact, and the response to the CX is not related to any previous Noon Care Issue, in this case, the Noon Care Issue should be set as **Follow Up Complaint or Request**.\n\nHowever, if, for example, the customer is following up on a request related to a refund, such as a credit to card refund, then the Noon Care Issue can be either Follow Up Complaint or Request or Refund Related. It is more appropriate to set it as Refund Related."		  },
		  
      ]
    },
	
	
      {
      "title": "Cancelation",
      "icon": "fas fa-file-import",
      "templates": [
		{
          "heading": "Case 1",
		  "content": "If the entire order was canceled and the status is Authorized for the exported product, and the CX inquires about the refund, we will inform them that they are not charged for the canceled order and that it will be automatically reversed by the customer's bank. It may take 5-7 business days to reflect, depending on the bank's policy."
		  },
		  {
          "heading": "Case 2",
		  "content": "If one or more products from the order were canceled and the status is Authorized for the exported product, and the CX inquires about the refund, we will inform them that the amount for the canceled item(s) will be automatically reversed, and that the customer was not charged for it.\n\nWhen the rest of the order is shipped, the amount will be automatically reversed to the customer’s card."
		  },
		  {
          "heading": "Case 3",
		  "content": "If the order is in Shipped and the payment status is Captured, and some products were canceled for an exported order:\n\nIf the cancellation date is before the order is shipped, we will inform the CX that the amount for the canceled item(s) will be automatically reversed, and that the customer was not charged for it.\n\nWhen the rest of the order is shipped, the amount will be automatically reversed to the customer’s card.\n\nIf the cancellation date is after the order has been shipped, the funds will be returned to Noon credit and will be transferred to the customer’s bank account within 24 hours.\n\nThe amount should appear in Cx account within 5 to 7 business days, depending on the bank's policy, because we would have already withdrawn the amount due to it being captured and the cancellation occurring after shipping, meaning the full amount was charged."
		  },
		  {
          "heading": "Case 4",
		  "content": "When informing the customer that the order has been canceled and is in transit, we will not provide a cancellation date. The SLA available in the KB is for refunds only.\n\nFor example, if the order is with Noon Express, we will inform the customer as follows:\n\nYour order has been canceled, and the funds will be credited to your Noon wallet within one day. \n\nPlease continue with the refund script, whether it's an auto-transfer or Noon credit."
		  },

      ]
    },
	
	
	      {
      "title": "Undeliverable",
      "icon": "fas fa-file-import",
      "templates": [
		  {
          "heading": "Case 1",
		  "content": "In the case that the order is undeliverable, the response to the customer (CX) is divided into two scenarios:\n\nIf the order was prepaid or paid using a Noon credit or part of Noon credit, we inform the customer that the order has been canceled and it is no longer possible to re-ship it. Once the cancellation appears in your account, the amount will be added to your Noon wallet within 3 days from the cancellation appearing in your account.\n\nIf the order was Cash on Delivery (COD), we will inform the customer that the cancellation will appear in their account once the product reaches Noon’s warehouses."
		  },
		  {
          "heading": "Case 2",
		  "content": "In the case that the order is undeliverable and a pseudo-comment appears in the customer's account indicating that the order is canceled for a refund within a day, as a customer service representative, you are not responsible for this matter and should not inform the customer about it. Instead, tell them that once the product reaches Noon’s warehouses, the cancellation will appear in their account. Follow the procedures outlined in Case 1."
		  },
		  
      ]
    },
	
	      {
      "title": "Commercial Scenarios",
      "icon": "fas fa-file-import",
      "templates": [
       {
          "heading": "Case 1",
		  "content": "We do not raise a Tax Invoice request unless the order has been delivered. In other cases, based on the order status, we direct the customer to download the regular invoice from their account, as it is available there if the order is in shipping status. If the customer specifically requests a Tax Invoice and insists on it, he should contact us after receiving the order so that we can raise the Tax Invoice for him."
		  },
		  
      ]
    },
	
	
	      {
      "title": "EMI",
      "icon": "fas fa-file-import",
      "templates": [
  	  {
          "heading": "Case 1",
		  "content": "It is essential to focus on the complaint related to installment payments and select the correct or most relevant sub-issue for the CX’s situation, and explain what happened in the comments section."
		  },
		  
      ]
    },

  ]
},

  


  /* General */


{
   id: "general",
 "title": "General",
       isDefault: true, // Example: Make this the default page if none is stored
 "icon": "fas fa-industry",
 "tabs": [
   {
     "title": "General Templates",
     "icon": "fas fa-earth-africa",
     "templates": [
       {
         "heading": "Opening and Closure",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Thank You Mail",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe are grateful for your communication with us, and we are delighted that your appreciation exceeds our expectations. We always strive to provide the best shopping experience for you and all our customers. We consider your feedback an opportunity to improve our services and deliver an experience worthy of you.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
  "heading": "Unsatisfied",
  "content": "Hala,\n\nThank you for choosing Noon!\n\nWe sincerely apologize for the issue you encountered. We want to assure you that we take your feedback seriously, and we will do our utmost to ensure such problems don't recur in the future.\n\nFor further assistance, please don't hesitate to contact our customer service team via email: Egypt@noon.com\n\nBest regards,\nThe Noon Team."
},
       {
         "heading": "No Info / Not Clear",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nTo provide you with the best service, please provide us with more details related to your request, such as: Order Number, Email, or Phone Number, so we can assist you quickly and efficiently.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Empty Mail",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe kindly ask you to clarify your inquiry as the email sent from you is empty and does not contain any details.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Asking For Coupon",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe would like to inform you that we currently do not have any discount codes available, and they cannot be provided through us.\n\nYou can follow our website and social media pages to stay updated on future offers and discounts.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "VAT",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nPlease note that (VAT) stands for Value Added Tax, and please be informed that it is applied to products before purchase, and the amount shown after completing the order is final and inclusive of the value.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   }
 ]
},

 /* Account Modification */
 
{
     id: "account_modification",
 "title": "Account Modification",
 "icon": "fas fa-user",
 "tabs": [
   {
     "title": "Account",
     "icon": "fas fa-user-plus",
     "templates": [
       {
         "heading": "Create Account",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nTo create an account on Noon, you will first need to visit the Noon website noon.com.\n\nThen, at the top left of the page, you will find the word \"Login\" or \"Sign Up\".\n\nClick on it and choose \"Sign Up Now\".\n\nYou will be prompted to enter your email address, and after entering it and clicking \"Sign Up\", a code will be sent to your email.\n\nOnce you enter the code and click \"Confirm\", you will be able to access your account. This is how you create an account on Noon.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Recover Account",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nThe necessary action has been taken by me to restore your account. To access your account again, please log in to the same account using the same registered email and password.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Customer Wants to Delete Account",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe are sorry to hear that. You can delete your account by logging into your Noon account, then clicking on \"My Account\", then clicking on \"Security Settings\", and then selecting \"Delete My Account\" and specifying the reason before clicking on \"Delete Your Account\".\n\nPlease read the terms and conditions carefully.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Change Email",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nPlease note that you cannot change the email address registered on Noon under any circumstances. You can create a new account using a different email address if you wish.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
        "heading": "COD Blocked Info",
        "content": "Hala,\n\nThank you for choosing Noon!\n\nWe apologize for any inconvenience you may have encountered.\n\nPlease note that the Cash on Delivery (COD) feature has been disabled on your account due to the cancellation of multiple orders created with this payment method.\n\nYou can continue to place orders normally using the prepayment service. After successfully completing a number of orders, the Cash on Delivery feature will be automatically reactivated.\n\nFor further assistance, please don't hesitate to contact our customer service team via email: Egypt@noon.com\n\nBest regards,\nThe Noon Team."
        },
       {
         "heading": "Unsubscribe",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe understand your desire to unsubscribe from email communications.\n\nYou can stop promotional messages without stopping order-related messages. You will find the \"Unsubscribe\" option at the bottom of the email.\n\nClick on it, and your request will be confirmed.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "Invoice",
     "icon": "fas fa-file-invoice",
     "templates": [
       {
         "heading": "Asking for Invoice",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding order number (______), you can obtain the invoice by logging into the Noon website or app.\n\nClick on \"My Account\".\n\nSelect \"Orders\", then select the order in question.\n\nClick on \"View Details\", then click on \"Invoice Summary\" or \"Tax Invoices\".\n\nPlease note that an email is sent to you when the order is shipped. All you need to do is click on \"View Invoice\" to see the payment details.\n\nPlease note that the invoice is certified by Noon, and you can download, print, and keep it if you wish.\n\nThe tax invoice contains warranty details if the product is covered by a warranty.\n\nThe invoice is available on your Noon account when the order is in the shipping stage.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Asking Tax Invoice Request QS / Order Above 50K Only",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding sending the tax invoice for order number (_____). Please provide the following information so we can escalate your request to the relevant department.\n\nFull Name.\n\nCity.\n\nCountry.\n\nNational ID Number.\n\nFor further assistance, please feel free to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Asking Tax Invoice Request QS / Company Only",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding sending the tax invoice for order number (_____). Please provide the following information so we can escalate your request to the relevant department.\n\nFull Name.\n\nCity.\n\nCountry.\n\nCommercial Registration Number.\n\nFor further assistance, please feel free to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Raised Tax Invoice Request",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding sending the tax invoice for order number (_____). We would like to inform you that your request has been escalated to the relevant department.\n\nYou will receive updates within a maximum of (5 days) from the date the request was raised. Once the invoice is issued, it will be sent to the email registered in your Noon account.\n\nFor further assistance, please feel free to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "Address",
     "icon": "fas fa-location-dot",
     "templates": [
       {
         "heading": "Change Address",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_____), you can change the address of your order by following these steps:\n\nGo to the \"Address\" section of your account.\nClick on the \"Add/Edit\" button next to the already registered address, or click on \"Add New Address\".\nEnter your area and search on the map, then click on \"Confirm Location\".\nEnter all the required details, including your phone number, and click on \"Save Address\".\nGo to \"Orders\" and select the order for which you want to change the address, then change the address.\nYou can also change the address from the tracking page sent to you when the order is out for delivery by selecting the \"Change Address\" icon and choosing the address you want to change to from the addresses registered in your account.\n\nPlease note that you cannot add a new address through the tracking page.\n\nYou can also request to change your address through the delivery agent, noting that a message will be sent to you to confirm your request to change the address.\n\nIf not confirmed within 48 hours, a reminder message will be sent to you, and the confirmation will be valid for 24 hours.\n\nIf not confirmed again, your order will be canceled entirely.\n\nPlease note that if the order is in the shipping stage, changing the address to a different city may delay delivery by 2 to 3 days.\n\nIf it is in the same city but a different area, it may delay delivery by 1 to 2 days.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "Phone",
     "icon": "fas fa-phone",
     "templates": [
       {
         "heading": "Change Phone",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_____), if you wish to change the phone number, you can follow these steps:\n\nGo to the \"Address\" section of your account.\nClick on \"Add New Address\", search by entering your area in the map search field, and click on \"Confirm Location\".\nEnter all the required details, including your new mobile number, and click on \"Save Address\".\nGo back to \"Orders\" and find the shipment for which you want to change the mobile number. Click on \"View Details\".\nClick on \"Change New Address\" and select the address with the new mobile number, then click on \"Change\" to save the changes.\nYou need to verify your new mobile number by clicking on \"Verify Number\".\nA pop-up page will appear where you can enter the OTP sent to the same number.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Change Phone While OFD",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_____), after reviewing, it appears that the order has already been dispatched for delivery.\n\nPlease note that changing the phone number at this stage may delay the delivery of the order by an additional day, as the order will not be delivered on the same day the data is modified.\n\nIf you wish to change the phone number, you can follow these steps:\n\nGo to the \"Address\" section of your account.\nClick on \"Add New Address\", search by entering your area in the map search field, and click on \"Confirm Location\".\nEnter all the required details, including your new mobile number, and click on \"Save Address\".\nGo back to \"Orders\" and find the shipment for which you want to change the mobile number. Click on \"View Details\".\nClick on \"Change New Address\" and select the address with the new mobile number, then click on \"Change\" to save the changes.\nYou need to verify your new mobile number by clicking on \"Verify Number\".\nA pop-up page will appear where you can enter the OTP sent to the same number.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "Password",
     "icon": "fas fa-lock",
     "templates": [
       {
         "heading": "Change Password",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nPlease note that you can log in to the website via the link: (www.noon.com).\n\nThen click on \"Login\" and then click on \"Forgot Password\".\n\nYou will need to enter your email address and then click on \"Send to Email\".\n\nAfter that, enter your registered email address, and we will send you a link to reset your password.\n\nPlease ensure that the new password contains at least 8 characters.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "K.B Links",
     "icon": "fas fa-swatchbook",
     "templates": [
       {
         "heading": "New Sign-In & Sign-Up Flow",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page#Solutions/dv/950914000042231733/en"
       },
       {
         "heading": "How to change delivery address (Shipped/exported)?",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page#Solutions/dv/950914000042249570/en"
       },
       {
         "heading": "How do I change my password?",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231147#Solutions/dv/950914000042685259/en/Article"
       },
       {
         "heading": "Technology scenarios",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page#Solutions/dv/950914000042248970/en"
       },
       {
         "heading": "How do I download my invoice?",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231074#Solutions/dv/950914000042247456/en"
       },
       {
         "heading": "Commercial scenarios",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231089#Solutions/dv/950914000042231167/en"
       },
       {
         "heading": "How do I recover my account?",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000042608091&categoryId=950914000042250172#Solutions/dv/950914000042686827/en"
       }
     ]
   }
 ]
},

 /* Other Departments */
 
{
    id: "other_departments",
 "title": "Other Departments",
 "icon": "fas fa-network-wired",
 "tabs": [
   {
     "title": "Other Departments",
     "icon": "fas fa-users-rectangle",
     "templates": [
       {
         "heading": "Want a Job",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding current job vacancies, please visit the official website https://www.noon.com.\n\nThen go to the bottom of the page and click on \"Careers\", and you will be redirected to the link: https://www.linkedin.com/company/nooncom/jobs.\n\nThen search for available opportunities and apply directly according to your qualifications.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Want to Sell With Noon",
"content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding the seller support department, you can send your inquiry to seller@noon.com, and they will assist you.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Partner / Marketing",
     "content": "Hala,\n\nThank you for choosing Noon!\n\nWe would like to confirm receipt of your email. We appreciate your interest in our services, and one of our team members will contact you if your inquiry requires follow-up.\n\nIn the meantime, we invite you to visit our Help Center, where you can find answers to many frequently asked questions via the following link: https://help.noon.com/portal/en/kb.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Contact Inbound",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding contacting us by phone, you can do so at 16358.\n\nFor further assistance, please feel free to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "K.B Links",
     "icon": "fas fa-swatchbook",
     "templates": [
       {
         "heading": "Business Days/Hours",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=published&showAllArticles=true&rootcategoryId=950914000041316047&categoryId=950914000042231001&status=published#Solutions/dv/950914000042231942/en"
       },
       {
         "heading": "Contact us",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=published&showAllArticles=true&rootcategoryId=950914000041316047&categoryId=950914000042231001&status=published#Solutions/dv/950914000042245016/en"
       }
     ]
   }
 ]
},

 /* Policies And Procedures */
 
{
    id: "policies_procedures",
 "title": "Policies And Procedures",
 "icon": "fas fa-landmark",
 "tabs": [
   {
     "title": "EMI",
     "icon": "fas fa-money-check-dollar",
     "templates": [
       {
         "heading": "General Info About EMI",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nPlease note that Monthly Installments (EMI) is one of the payment methods offered by our partner banks. You can pay for your Noon purchase in easy monthly installments.\n\nYou can pay for your Noon orders in very easy monthly installments. Orders worth 500 EGP or more with partner banks (except HSBC and Attijariwafa, where orders must be worth 1000 EGP or more) are eligible for the EMI plan as long as you have a credit card from one of our partner banks.\n\nYou can apply for more than one EMI plan at the same time with 0% interest depending on the bank. However, please check with the bank first, as they may have special conditions. If there are any interest charges, they will be mentioned on the bank's page.\n\nYou can also use discount codes and coupons.\n\nTo learn more about the steps and prices, please refer to the link below for our partner banks supported by Noon:\nhttps://www.noon.com/egypt-en/eg-Installments-new/\n\nYou have two options:\n\n1- Automatic Method:\nDuring the checkout process, you can select \"Monthly Installments\" directly from the payment page if the card used is eligible for installments.\n\n2- Manual Method:\nAfter placing the order, please contact your bank and provide them with the following information:\n\nMerchant Name: noon.com\nOrder Date: The date you placed the order on Noon\nOrder Value: The total value of the order\nOrder Number: You can find it in the Orders section of your Noon account\nRequired EMI Plan Duration: As per the bank\n\nPlease note that the full amount will be deducted after completing the purchase, and you will receive a confirmation email from Noon confirming your order using installments. It may take 3 to 5 business days for any changes to appear on your credit card statement.\n\nIf the installment is with HSBC Bank, it may take up to 7 business days for any changes to appear on your credit card statement.\n\nPlease ensure that you are using a credit card from one of our partner banks.\n\nIf you have entered the card details completely and correctly on the payment page before completing the order and the installment option does not appear, please provide us with a screenshot of this issue and the first 6 digits of the bank card.\n\nhttps://www.noon.com/egypt-en/eg-Installments-new/\n\nPlease contact the bank to confirm that your card is eligible for installments with Noon.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "EMI Was not Processed Customer Fault",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (____), we apologize for any inconvenience you may have faced. We regret to inform you that the transaction was not confirmed as an installment.\n\nIt appears that you did not select the installment plan during the order creation, or you did not use a credit card from one of our partner banks.\n\nYou can also use the manual method:\n\nAfter placing the order, please contact your bank and provide them with the following information:\n\nMerchant Name: noon.com\nOrder Date: The date you placed the order on Noon\nOrder Value: The total value of the order\nOrder Number: You can find it in the Orders section of your Noon account\nRequired EMI Plan Duration: As per the bank\n\nPlease also contact your bank for more details on activating the installment plan.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "EMI Was not Processed Appears on Agent One",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (____), we apologize for any inconvenience you may have faced. We regret to inform you that the transaction was not confirmed as an installment.\n\nPlease contact the bank regarding activating the installment plan, and they will assist you.\n\nPlease also clarify:\n\nHave you contacted the bank, and did they inform you that the transaction was not converted to an installment?\n\nIs the phone number registered in the order the same as the one registered with the bank?\n\nIf you are using CIB Bank, please send your National ID number so we can provide the necessary assistance.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "EMI Full Amount Was Deducted",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (____), we apologize for any inconvenience.\n\nPlease check your bank statement to confirm that the full amount was deducted. You can also contact your bank regarding the deducted amount, and they will assist you.\n\nPlease note that the full amount is deducted after completing the purchase, and you will receive a confirmation email from Noon confirming your order using installments. It may take 3 to 5 business days for any changes to appear on your credit card statement.\n\nIf the installment is with HSBC Bank, it may take up to 7 business days for any changes to appear on your credit card statement.\n\nPlease ensure that you are using a credit card from one of our partner banks.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "EMI Confirm to Check the Bank",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe would like to inform you that your order has been reviewed, and there is an installment plan associated with it. Please contact your bank to cancel the installment plan, as cancellations or returns do not automatically cancel the installment plan.\n\nPlease note that this step is necessary to complete the process correctly.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
{
  "title": "CIB Credit Card",
  "icon": "fas fa-credit-card",
  "templates": [
    {
      "heading": "CIB Credit Card",
      "content": "Hala,\n\nThank you for choosing Noon!\n\nThe Noon CIB credit card is the first electronic credit card issued in collaboration between CIB Bank, Noon, and Visa, offering many exclusive benefits, including:\n\n5% instant discount on Noon (up to 150 EGP per order).\n\n100 EGP cashback after your first purchase.\n\nFree delivery and priority shipping on Noon Express products within Cairo and Giza.\n\n1.5 CIB points for every 1 EGP spent outside Noon.\n\nAnnual renewal fee waiver if your annual spending exceeds 60,000 EGP.\n\nInstallment offers: 6 months available all the time, plus 10 and 15 months depending on campaign availability on the website.\n\nTo apply for the card, please visit the following link and fill out the application: https://www.noon.com/egypt-en/cibnooncreditcard\n\nAfter applying, you'll receive the card within 7 to 10 working days.\n\nRequirements include a valid national ID card, an HR letter from your employer, and additional documents may be requested depending on your case.\n\nThe card is valid for use on Noon and elsewhere, and activation is done through the steps outlined in the welcome package when you receive the card.\n\nFor further assistance, please don't hesitate to contact our customer service team via email: Egypt@noon.com\n\nBest regards,\nThe Noon Team."
    }
  ]
},
   {
     "title": "Shipping Fees",
     "icon": "fas fa-comment-dollar",
     "templates": [
       {
         "heading": "Shipping Fees",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nPlease note that the shipping fee is calculated based on the products in your shopping cart and not the area.\n\nIf your order contains only Noon Express products, free shipping is applied when the total shopping cart value is 200 EGP or more.\n\nA fee of 20 EGP will be applied if the order value is less than 200 EGP.\n\nIf your order includes only Marketplace products, a shipping fee of up to 25 EGP is applied per seller.\n\nThis fee is applied per seller based on the subtotal of the order from each seller as follows:\n\n25 EGP if the seller's subtotal is less than 200 EGP.\n\n12.5 EGP if the seller's subtotal is between 200 EGP and 600 EGP.\n\n0 EGP if the seller's subtotal is more than 600 EGP.\n\nThese fees apply even if your order includes Noon Express and Marketplace items.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "Price",
     "icon": "fas fa-barcode",
     "templates": [
       {
         "heading": "Change Price",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nPrice changes depend on several factors:\n\nThere may be a discount or offer applied by the seller, which leads to a decrease in the product price, and it may increase once the offer ends. The product price may also vary from one seller to another due to differences in cost prices for each seller.\n\nHowever, please rest assured that price factors do not affect the product quality, as each product is inspected by Noon's quality department.\n\nOffers vary from time to time, and each seller has their own pricing policy. The current price on the website is based on the seller's pricing policy.\n\nIt depends on the offer available to the seller and the time of purchase. The same seller may have the same product, but one with a warranty and the other without.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "Valu",
     "icon": "fas fa-money-check-dollar",
     "templates": [
       {
         "heading": "General Info About Valu",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nValU is a powerful application in Egypt that allows customers to pay in installments at more than 3,500 locations, either directly or online.\n\nValU allows customers to get approval easily and quickly, with flexible installment options of up to 60 months with no down payment.\n\nValU customers can purchase all products available on noon.com using the service.\n\nTo download the ValU app, you can use Google Play, App Store, or Huawei Store.\n\nYou need to register the required personal data through the app.\n\nThe account is activated through one of ValU's kiosks.\n\nYou can find more information on the official website: www.valu.com.eg.\n\nTo complete the payment using ValU on Noon, add the products to the shopping cart, select ValU as the payment method, enter the required data, and choose the appropriate installment plan.\n\nThe phone number registered in your Noon account must match the number registered with ValU.\n\nA one-time password (OTP) will be sent to the registered phone number to complete the payment.\n\nThe minimum order value eligible for using ValU is 50 EGP.\n\nInstallment plans are available from 3 months up to 60 months.\n\nTo contact ValU customer service, you can call 16671 or email: contact_us@valU.com.eg.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "K.B Links",
     "icon": "fas fa-swatchbook",
     "templates": [
       {
         "heading": "ValU FAQs",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page#Solutions/dv/950914000042248965/en"
       },
       {
         "heading": "EMI EGY",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231044#Solutions/dv/950914000042245991/en"
       }
     ]
   }
 ]
},

/* Campaign and Promotion */

{
    id: "campaign_promotion",
 "title": "Campaign and Promotion",
 "icon": "fas fa-percent",
 "tabs": [
   {
     "title": "Campaign and Promotion",
     "icon": "fas fa-percent",
     "templates": [
       {
         "heading": "How to use Coupon",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nThe option to enter the discount code will appear on the shopping cart page before completing the purchase. All you need to do is enter the discount code and then click \"Apply\".\n\nPlease note that the discount code cannot be used after completing the purchase.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "How to use Voucher",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nYou can use the purchase voucher on the Noon balance page. You will find an option to add your voucher code. Click on \"Activate Gift Card\" and then click on \"Voucher\". Enter the voucher code and click on \"Redeem\".\n\nIf the discount code is valid, the voucher amount will be added.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "How to Purchase Gift card",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nYou can purchase a gift card by following these steps:\n\nLog in to your Noon account, then click on \"Gift Cards\" and choose the appropriate category.\n\nThen select the amount in EGP, then select the quantity, then the recipient's name, then the recipient's email, and then click on \"Proceed to Checkout\".\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "How to Use Gift card",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nYou can redeem the gift card by:\n\nGo to \"My Account\".\nClick on \"Noon Balance\", then \"Activate Gift Card\", then enter the gift card code and the PIN, then click on \"Redeem\" and start shopping.\nPlease note that after redeeming the voucher, the balance will be added to your Noon wallet.\n\nYou can use your Noon balance after selecting the address and during the payment method selection by checking the box that says (Use My Noon Balance).\n\nYou can use the available balance in your wallet along with Cash on Delivery or Credit Card if your wallet balance does not match the full order value.\n\nYou can purchase a minimum of one (1) gift card and a maximum of ten (10) gift cards in one transaction.\n\nGift cards can be purchased for a minimum of 50 EGP and a maximum of 10,000 EGP.\n\nThe monthly purchase limit is 100,000 EGP.\n\nTo add the gift card correctly, you can enter the first 16 digits of the code shown to you in the card number field. In the PIN field, enter the last 4 digits.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "K.B Links",
     "icon": "fas fa-swatchbook",
     "templates": [
       {
         "heading": "Technology scenarios",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=published&showAllArticles=true&rootcategoryId=950914000041316047&categoryId=950914000042231089&status=published#Solutions/dv/950914000042248970/en"
       }
     ]
   }
 ]
},

/* Place a New Order */

{
  id: "place_new_order",
  "title": "Place a New Order",
 "icon": "fas fa-cart-shopping",
 "tabs": [
   {
     "title": "Confirmed",
     "icon": "fas fa-cart-plus",
     "templates": [
       {
         "heading": "Confirming Order Less Than 150K Asking Qs",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding order number (____), we would like to inform you that the order is in the confirmation stage, and orders are usually confirmed within 24 hours.\n\nHowever, I can help expedite the confirmation process, so please confirm the following details so we can take the necessary action:\n\nOrder Owner's Name: (____).\n\nRegistered Address: (____).\n\nConfirm Address on Map: (____).\n\nRegistered Phone Number: (____).\n\nNumber of Products in the Order: (____).\n\nAmong these products: (____), (____), (____).\n\nTotal Order Value After Discount, Including Shipping Fees and Cash on Delivery: (____).\n\nAwaiting your confirmation so we can proceed with the necessary actions.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Confirming Order Above 150K Asking Qs",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding order number (____), we would like to inform you that the order is in the confirmation stage.\n\nSince your order exceeds 150,000 EGP, we would like to inform you that it is necessary to share a copy of your Egyptian National ID (front and back) to confirm the order.\n\nYou will receive an email from our confirmation team via (egypt@noon.com). Please reply to this email with the required documents.\n\nIf you do not share the National ID, the order will be canceled.\n\nIf you face any issues, please contact us with the details of the issue so we can assist you faster.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Reseller Follow Up On Confirmed Order",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding order number (____), we would like to inform you that the order is in the confirmation stage. Please note that the order update may take up to two hours.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "New",
     "icon": "fas fa-cart-plus",
     "templates": [
       {
         "heading": "Place a New Order",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nYou can browse the product from here:\n\nYou can place a new order by following these steps:\n\nAdd your favorite products to the shopping cart.\n\nClick on the cart.\n\nClick on Checkout Now.\n\nAdd a new address or select a current address previously added by you, ensuring that the address details and nearby landmarks are clear and the phone number is activated.\n\nChoose your payment method.\n\nClick on \"Place Order\".\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Order Status New",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_______), please check the email registered in your Noon account. We have contacted you via email and sent you an email containing two options: one to cancel the order and the other to confirm it.\n\nPlease note that the validity of these options is 24 hours from the moment you receive the email, so we kindly ask you to make your decision within this period to avoid automatic cancellation of the order.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "Invalid",
     "icon": "fas fa-person-falling-burst",
     "templates": [
       {
         "heading": "Invalid Failed / Rejected Asking Questions",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_______), we regret to inform you that the order was not completed successfully. We recommend not trying more than three times to avoid stopping or blocking the card. To help resolve the issue, please answer the following questions:\n\nDid you try to place the order via mobile browser, app, computer, or laptop?\n\nDid you try using different payment cards?\n\nIs there sufficient balance in the card?\n\nDid you use virtual cards to complete this order?\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Invalid 3DS Enroll Check / 3DS Enroll Initiated",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_______), we regret to inform you that the order was not completed successfully. Please clarify some details so we can assist you better.\n\nDid you use the app or a computer when placing the order?\n\nIf the issue persists when using a computer or the app, please contact the bank, and they will assist you.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Invalid Authorized",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_______), we regret to inform you that the order was not completed successfully. This may be due to an error during the payment process.\n\nPlease note that this issue has already been escalated to the relevant department to take the necessary actions, and the complaint will be updated within a maximum of two days. We will also contact you via phone or email if necessary.\n\nWe would also like to clarify that the amount was not deducted by Noon and was only suspended by the bank. The amount will reappear in your bank account within 5 to 7 business days, depending on the bank's policy.\n\nPlease note that business days do not include official holidays such as Friday and Saturday.\n\nAlso, most refund requests do not trigger a text message from the bank informing you of the refund (in this case, please check your bank statement).\n\nIf you do not find the amount after considering the above points, please contact the bank and inquire about the reason for the amount not appearing in your statement.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
  {
    "heading": "Invalid Captured",
    "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_______), we would like to inform you that, unfortunately, the order was not successfully completed.\n\nPlease note that the amount will be refunded to your Noon Wallet within 24 hours. After that, it will be automatically transferred to your bank account within 5 to 7 business days, depending on your bank's policy.\n\nKindly be advised that business days do not include weekends and official holidays, such as Friday and Saturday.\n\nFor further assistance, please do not hesitate to contact our Customer Support Team at Egypt@noon.com.\n\nThank you,\nNoon Team."
  },
        {
    "heading": "Invalid Captured Amount not credited to Cx Noon Wallet",
    "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_______), we sincerely apologize for this issue, and we assure you that the necessary actions will be taken. We are always striving to improve our services to provide the best for our valued customers.\n\nPlease note that a complaint has been raised regarding this issue, and all details have been shared with the concerned department.\n\nYou will receive updates within a maximum of two (2) days from the date the complaint was submitted. The concerned department will investigate the matter and resolve it, God willing. You will be contacted accordingly.\n\nFor further assistance, please do not hesitate to contact our Customer Support Team at Egypt@noon.com.\n\nThank you,\nNoon Team."
  },
     ]
   },
   {
     "title": "K.B Links",
     "icon": "fas fa-swatchbook",
     "templates": [
       {
         "heading": "Confirmed",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=published&showAllArticles=true&rootcategoryId=950914000041316047&categoryId=950914000042231001&status=published#Solutions/dv/950914000042249475/en"
       },
       {
         "heading": "New",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231074#Solutions/dv/950914000042247193/en"
       },
       {
         "heading": "Invalid",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=published&showAllArticles=true&rootcategoryId=950914000041316047&categoryId=950914000042231001&status=published#Solutions/dv/950914000042248620/en"
       }
     ]
   }
 ]
},

  /* Tracking */
  
{
     id: "tracking",
 "title": "Tracking",
 "icon": "fas fa-truck-fast",
 "tabs": [
   {
     "title": "Exported",
     "icon": "fas fa-boxes-stacked",
     "templates": [
       {
         "heading": "Track Exported",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_____), please note that it has been confirmed by us and is now being processed and prepared by the seller. The expected delivery date is (00 of the current month).\n\nOnce the order is shipped, you will be notified via email. Once the order is out for delivery, you will receive an email stating that the shipment has been dispatched for delivery, confirming the delivery process as well.\n\nTo check the order status and the expected delivery date:\n\nLog in to the Noon website or app.\n\nThen click on (My Account), then (Orders).\n\nYou will find the expected delivery date and the associated order number above each product.\n\nTo check the tracking status of the order, click on the product or order you want to track.\n\nYou will be taken to the tracking details page.\n\nClick on \"View Full Tracking\" and track your order or product according to the tracking statuses shown to you, and you will find an explanation for each status below it.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "Shipped Noon Express",
     "icon": "fas fa-truck",
     "templates": [
       {
         "heading": "Track Shipped COD",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_____), it is now being shipped, and the expected delivery date is (00 of the current month). Please note that delivery times are from (10 AM to 10 PM).\n\nYour order is in the final stage, and once it is out for delivery, you will receive an email containing a tracking link.\n\nWhen the agent approaches your address, their phone number will appear through the \"Call Agent\" button on the order page in your account.\n\nThe agent will also have the option to send a text message titled \"On My Way\", which will allow you to see the agent's phone number and communicate with them directly to coordinate the receipt.\n\nTo check the order status and the expected delivery date:\n\nLog in to the Noon website or app.\n\nThen click on (My Account), then (Orders).\n\nYou will find the expected delivery date and the associated order number above each product.\n\nTo check the tracking status of the order, click on the product or order you want to track.\n\nYou will be taken to the tracking details page.\n\nClick on \"View Full Tracking\" and track your order or product according to the tracking statuses shown to you, and you will find an explanation for each status below it.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Track Shipped Prepaid Less than 4500",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_____), it is now being shipped, and the expected delivery date is (00 of the current month). Please note that delivery times are from (10 AM to 10 PM).\n\nYour order is in the final stage, and once it is out for delivery, you will receive an email containing a tracking link.\n\nWhen the agent approaches your address, their phone number will appear through the \"Call Agent\" button on the order page in your account.\n\nTo check the order status and the expected delivery date:\n\nLog in to the Noon website or app.\n\nThen click on (My Account), then (Orders).\n\nYou will find the expected delivery date and the associated order number above each product.\n\nTo check the tracking status of the order, click on the product or order you want to track.\n\nYou will be taken to the tracking details page.\n\nClick on \"View Full Tracking\" and track your order or product according to the tracking statuses shown to you, and you will find an explanation for each status below it.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Track Shipped Prepaid More than 4500 & Bulky",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_____), it is now being shipped, and the expected delivery date is (00 of the current month). Please note that delivery times are between (10 AM and 10 PM).\n\nYour order is in its final stage. Once it is out for delivery, you will receive an email with a tracking link.\n\nWhen the delivery agent gets close to your area, their phone number will appear via the \"Call the Agent\" button on the order page in your account.\n\nThe agent may also choose to send a WhatsApp message saying \"I’m on my way,\" which will include their number to help facilitate contact and coordinate the handover.\n\nPlease note that an OTP (One-Time Password) is required to complete the delivery if your order is prepaid and exceeds EGP 4500, or if it contains bulky items. You will be asked to enter this OTP to complete the delivery.\n\nYou can find the OTP in the WhatsApp message sent to your registered number, or on the order page in your noon app account.\n\nIf you're unable to access the OTP, please contact us and we’ll assist you after verifying some information to ensure the security of your order.\n\nTo check your order status and expected delivery date:\n\nLog in to the noon website or app.\n\nThen go to (My Account), then (Orders).\n\nYou will see the expected delivery date and order number above each item.\n\nTo check the tracking status of your order, click on the item or order you want to track.\n\nYou’ll be directed to the tracking details page.\n\nClick on \"View Full Tracking\" and follow your order or item based on the tracking updates shown. An explanation of each status will appear below.\n\nFor more assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
},
          {
         "heading": "Confirm Tracker Shipped COD",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_____), it is now being shipped, and according to the latest update on the order (_____), please confirm this.\n\nPlease note that delivery times are from (10 AM to 10 PM).\n\nYour order is in the final stage, and once it is out for delivery, you will receive an email containing a tracking link.\n\nWhen the agent approaches your address, their phone number will appear through the \"Call Agent\" button on the order page in your account.\n\nThe agent will also have the option to send a text message titled \"On My Way\", which will allow you to see the agent's phone number and communicate with them directly to coordinate the receipt.\n\nTo check the order status and the expected delivery date:\n\nLog in to the Noon website or app.\n\nThen click on (My Account), then (Orders).\n\nYou will find the expected delivery date and the associated order number above each product.\n\nTo check the tracking status of the order, click on the product or order you want to track.\n\nYou will be taken to the tracking details page.\n\nClick on \"View Full Tracking\" and track your order or product according to the tracking statuses shown to you, and you will find an explanation for each status below it.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Confirm Tracker Shipped Prepaid Less than 4500",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_____), it is now being shipped, and according to the latest update on the order (_____), please confirm this.\n\nPlease note that delivery times are from (10 AM to 10 PM).\n\nYour order is in the final stage, and once it is out for delivery, you will receive an email containing a tracking link.\n\nWhen the agent approaches your address, their phone number will appear through the \"Call Agent\" button on the order page in your account.\n\nTo check the order status and the expected delivery date:\n\nLog in to the Noon website or app.\n\nThen click on (My Account), then (Orders).\n\nYou will find the expected delivery date and the associated order number above each product.\n\nTo check the tracking status of the order, click on the product or order you want to track.\n\nYou will be taken to the tracking details page.\n\nClick on \"View Full Tracking\" and track your order or product according to the tracking statuses shown to you, and you will find an explanation for each status below it.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Confirm Tracker Shipped Prepaid More than 4500 & Bulky",
        "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_____), it is now in the shipping phase. According to the latest update on your order (_____), so please confirm this.\n\nPlease note that delivery times are between (10 AM and 10 PM).\n\nYour order is in its final stage, and once it is out for delivery, you will receive an email containing a tracking link.\n\nWhen the delivery agent approaches your area, their phone number will appear via the \"Call the Agent\" button on the order page in your account.\n\nThe agent may also choose to send a text message saying \"I'm on my way,\" which will include their number to make it easier to contact them and coordinate the handover.\n\nPlease note that an OTP (One-Time Password) is required to complete the delivery if your order is prepaid and its value exceeds EGP 4500, or if it contains bulky items. You will be asked to enter a one-time verification code (OTP) to complete the delivery.\n\nYou can find the OTP in the WhatsApp message sent to your registered number or through the orders page in your noon app account.\n\nIf you're unable to access the code, please contact us and we will assist you after verifying some information to ensure the security of your order.\n\nTo check the status of your order and the expected delivery date:\n\nLog in to the noon website or app.\n\nThen click on (My Account), then (Orders).\n\nAbove each item, you will find the expected delivery date and the related order number.\n\nTo check the tracking status of your order, click on the item or order you wish to track.\n\nYou will be directed to the tracking details page.\n\nClick on \"View Full Tracking\" and track your order or item according to the tracking statuses shown, with an explanation provided below each status.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nThe noon Team."     
        }
     ]
   },
   {
     "title": "Exported & Shipped",
     "icon": "fas fa-truck-moving",
     "templates": [
       {
         "heading": "Track Export Shipped Noon Express COD",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_____), it contains products being prepared and processed and other products that are now being shipped. The expected delivery date is (from 00 to 00 of the current month). Please note that delivery times are from (10 AM to 10 PM).\n\nOnce the order is shipped, you will be notified via email. Regarding the products that have been shipped, they are in the final stage, and once they are out for delivery, you will receive an email containing a tracking link.\n\nWhen the agent approaches your address, their phone number will appear through the \"Call Agent\" button on the order page in your account.\n\nTo check the order status and the expected delivery date:\n\nLog in to the Noon website or app.\n\nThen click on (My Account), then (Orders).\n\nYou will find the expected delivery date and the associated order number above each product.\n\nTo check the tracking status of the order, click on the product or order you want to track.\n\nYou will be taken to the tracking details page.\n\nClick on \"View Full Tracking\" and track your order or product according to the tracking statuses shown to you, and you will find an explanation for each status below it.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Track Export Shipped Noon Express Prepaid Less than 4500",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_____), it contains products being prepared and processed and other products that are now being shipped. The expected delivery date is (from 00 to 00 of the current month). Please note that delivery times are from (10 AM to 10 PM).\n\nOnce the order is shipped, you will be notified via email. Regarding the products that have been shipped, they are in the final stage, and once they are out for delivery, you will receive an email containing a tracking link.\n\nWhen the agent approaches your address, their phone number will appear through the \"Call Agent\" button on the order page in your account.\n\nTo check the order status and the expected delivery date:\n\nLog in to the Noon website or app.\n\nThen click on (My Account), then (Orders).\n\nYou will find the expected delivery date and the associated order number above each product.\n\nTo check the tracking status of the order, click on the product or order you want to track.\n\nYou will be taken to the tracking details page.\n\nClick on \"View Full Tracking\" and track your order or product according to the tracking statuses shown to you, and you will find an explanation for each status below it.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Track Export Shipped Noon Express Prepaid More than 4500 & Bulky",
        "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_____), it includes some items that are being prepared and others that are already in the shipping phase. The expected delivery date is (from 00 to 00 of the current month). Please note that delivery times are from (10 AM to 10 PM).\n\nOnce the order is shipped, you will be notified via email. As soon as the order is out for delivery, you will receive an email confirming that the shipment is on its way to confirm the delivery process.\n\nWhen the delivery agent approaches your area, their phone number will appear via the \"Call the Agent\" button on the order page in your account.\n\nThe agent may also choose to send a text message saying \"I'm on my way,\" which will include their number to facilitate communication and coordination for delivery.\n\nPlease note that an OTP (One-Time Password) is required to complete the delivery if your order is prepaid and exceeds EGP 4500, or if it includes bulky items. You will be asked to enter a one-time verification code (OTP) to complete the delivery.\n\nYou can find the OTP in a WhatsApp message sent to your registered number or through the orders page in your noon app account.\n\nIf you are unable to access the code, please contact us and we will assist you after verifying some information to ensure the security of your order.\n\nTo check the order status and the expected delivery date:\n\nLog in to the noon website or app.\n\nThen click on (My Account), then (Orders).\n\nAbove each item, you will find the expected delivery date and the related order number.\n\nTo check the tracking status of your order, click on the item or order you wish to track.\n\nYou will be directed to the tracking details page.\n\nClick on \"View Full Tracking\" and track your order or item based on the visible tracking statuses. An explanation will be shown below each status.\n\nFor further assistance, don’t hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nThe noon Team."
       }
     ]
   },
   {
     "title": "3PL",
     "icon": "fas fa-truck-plane",
     "templates": [
       {
         "heading": "Track Shipped JT Express",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_____), it is now being shipped, and the expected delivery date is (00 of the current month).\n\nPlease note that delivery times are throughout the day, as the order is shipped with J&T Express.\n\nYou can track your order via the link https://www.jtexpress-eg.com, and the tracking number for the order is (_____).\n\nYou can contact them at 15885 or via email care@jtexpress.eg to coordinate the receipt with them.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "Get it Together / Today / Next / Two Days",
     "icon": "fas fa-truck-fast",
     "templates": [
       {
         "heading": "Get it Together",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (____), please note that sometimes products are shipped in multiple shipments due to different sellers and warehouses from which they are shipped. Each item is shipped based on its location.\n\nShipment consolidation is a free service provided by Noon, where we attempt to consolidate your products until they are all ready for delivery, and then they are shipped to you in the least number of shipments possible.\n\nPlease note that activating the shipment consolidation service in future orders can be done by you during the payment stage when placing the order. You will find the option \"Get Fewer Deliveries\". Please activate the indicated option to have shipments delivered consolidated. Please note that the expected delivery time is the delivery time of the last product in the order.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Get it Today",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (____), please note that same-day delivery service is available for some (Express) products. You can benefit from this service by placing the order before 12 PM, noting that the service cost is 35 EGP.\n\nIf same-day delivery service is available for your registered address and the requested product, it will appear as an option during the payment stage after moving from the shopping cart.\n\nFor further assistance, please feel free to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Next Day Delivery",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (____), please note that next-day delivery service is available for some (Express) products. Delivery will be made the next day by 10 PM at the latest, noting that the service cost is 28 EGP.\n\nIf next-day delivery service is available for your registered address and the requested product, the option will appear during the payment stage after moving from the shopping cart.\n\nFor further assistance, please feel free to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Two Days Delivery",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (____), please note that two-day delivery service is available for some (Express) products, noting that the service cost is 20 EGP.\n\nIf two-day delivery is available for your registered address and the product, the delivery option will appear for you during the payment stage after moving from the shopping cart.\n\nFor further assistance, please feel free to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "ASAP",
     "icon": "fas fa-rocket",
     "templates": [
       {
         "heading": "Track ASAP",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (____), we fully understand the importance of your order and the necessity of delivering it on time.\n\nWe assure you that we are doing our best to ensure that your order arrives as quickly as possible, and we are committed to meeting your needs with the highest level of efficiency.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
  "title": "OTP",
  "icon": "fas fa-mobile",
  "templates": [
    {
      "heading": "OTP Info",
      "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_____): please note that the One-Time Password (OTP) for receiving your order is available through the following steps:\n\n- By accessing the \"My Orders\" page and selecting the relevant order number.\n\n- Or via a WhatsApp message that is automatically sent to the phone number registered on your account.\n\nIf you're unable to retrieve the OTP, please reply to this email and answer at least two of the following questions so we can assist you and securely share the code:\n\n- What are the items included in the order?\n\n- What is the email address registered on your Noon account?\n\n- What is the phone number registered on your Noon account?\n\nIf you are contacting us from the same registered email or phone number, we may be able to share the OTP with you directly after verification.\n\nIf you are unable to provide the required information, please try retrieving the OTP via the Noon app or the WhatsApp message.\n\nFor further assistance, feel free to contact our Customer Support Team at Egypt@noon.com.\n\nThank you,\nNoon Team."
    }
  ]
},
   {
  "title": "Card on Delivery",
  "icon": "fas fa-credit-card",
  "templates": [
    {
      "heading": "Card on Delivery General",
      "content": "Hala,\n\nThank you for choosing Noon!\n\nPlease note that \"Card on Delivery\" is one of the payment methods available through our delivery service Noon Express. This service allows you to pay using your bank card (credit or debit) upon receiving your order, even if you selected cash on delivery during checkout.\n\nThis service is currently available only in Greater Cairo and Alexandria.\n\nYou can inform the delivery representative of your desire to pay by card, and the representative will assist you with the process.\n\nThere's no need to modify your order or payment method during purchase. Simply selecting \"Cash on Delivery\" during checkout allows you to pay by card directly with the representative at the time of delivery.\n\nPlease ensure your bank card is valid, activated for electronic transactions, and has sufficient balance.\n\nIf you encounter any issues during the payment process, please contact us immediately for assistance.\n\nPlease note this service is only available for orders delivered by Noon Express and does not apply to shipments from other courier companies like J&T.\n\nFor further assistance, don't hesitate to contact our customer service team at Egypt@noon.com.\n\nBest regards,\nThe Noon Team."
    }
  ]
},
   {
     "title": "K.B Links",
     "icon": "fas fa-swatchbook",
     "templates": [
       {
         "heading": "Noon Express V2",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231001#Solutions/dv/950914000042249934/en"
       },
       {
         "heading": "Exported- EGY",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231001#Solutions/dv/950914000042250050/en"
       },
       {
         "heading": "Shipped- EGY",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page#Solutions/dv/950914001933109646/en"
       },
       {
         "heading": "Shipping Options (Get It Together - Get It Tomorrow (NDD) - Two Day Delivery - Get It Today (SDD))",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231074#Solutions/dv/950914000042245762/en"
       },
       {
         "heading": "Order Tracking -O2D Experience",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page#Solutions/dv/950914000042245752/en"
       }
     ]
   }
 ]
},


/* Delivered */

{
    id: "delivered",
 "title": "Delivered",
 "icon": "fas fa-truck-ramp-box",
 "tabs": [
   {
     "title": "Delivered",
     "icon": "fas fa-truck-ramp-box",
     "templates": [
       {
         "heading": "Delivery Done",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (____), we are very happy that your order has arrived, and we hope that the product has met your expectations! Your comfort and satisfaction are what always drive us to deliver the best.\n\nAt Noon, every customer is part of our growing family, and your continuous support and encouragement are the secret to our success.\n\nWe look forward to serving you again soon, and we hope that your next experience with us will be special and enjoyable!\n\nSee you soon in a new purchase.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Marked As Delivered But Not Received Asking QS",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (____), we would like you to clarify the following points so we can assist you in the best way:\n\nIs the product that was not received a single product, or was the entire order not received?\n\nPlease confirm your current address (____).\n\nIs the registered phone number (____)?\n\nWere instructions given to the agent to deliver the product or shipment to someone else?\n\nHave you checked with family members, friends, neighbors in the same building, or the security guard or building owner regarding receiving the product on your behalf?\n\nPlease reply to the same email to provide assistance.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "K.B Links",
     "icon": "fas fa-swatchbook",
     "templates": [
       {
         "heading": "Delivered- EGY",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page#Solutions/dv/950914003055276480"
       }
     ]
   }
 ]
},



 /* Non Returnable Or Exceeded */

{
    id: "non_returnable_exceeded",
 "title": "Non Returnable / Exceeded",
 "icon": "fas fa-skull-crossbones",
 "tabs": [
   {
     "title": "Damage Item",
     "icon": "fas fa-heart-crack",
     "templates": [
       {
         "heading": "Asking Damage Questions",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (____), we apologize for any issues you have encountered.\n\nPlease answer the following questions:\n\nWhat exactly is the damage to the order?\n\nWas there any damage to the external delivery box? And what was the condition of the package upon receipt? (Sealed/Open/Damaged).\n\nHow was the product packaged? (Bubble wrap/Rubber plastic/No packaging).\n\nPlease note that it is necessary to share a photo or video of the damage to assist you in taking the necessary actions.\n\nFor further assistance, feel free to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Raised Damage Complaint after Sharing the images",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for this issue and confirm that this is not the norm for Noon. We always strive to improve our services to provide the best for our valued customers.\n\nPlease be informed that a complaint has been raised regarding the damaged order, and all details have been clarified to the relevant department with the attached files.\n\nYou will be provided with updates within a maximum period of (3 days) from the date of submitting the complaint, as the relevant department will investigate and resolve the matter, and you will be contacted directly.\n\nFor further assistance, feel free to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "Wrong Item",
     "icon": "fas fa-circle-xmark",
     "templates": [
       {
         "heading": "Asking Wrong Questions",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (____), we apologize for any issues you have encountered.\n\nPlease answer the following questions:\n\nWhat exactly is wrong with the product? Please describe the product you received and how it differs from the order.\n\nDoes the Noon package contain different order details than your order details?\n\nWas there any damage to the delivery box or signs of it being opened?\n\nPlease note that it is necessary to share a photo or video of the error to assist you in taking the necessary actions.\n\nFor further assistance, feel free to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Raised Wrong Complaint after Sharing the images",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for this issue and confirm that this is not the norm for Noon. We always strive to improve our services to provide the best for our valued customers.\n\nPlease be informed that a complaint has been raised regarding the wrong order, and all details have been clarified to the relevant department with the attached files.\n\nYou will be provided with updates within a maximum period of (3 days) from the date of submitting the complaint, as the relevant department will investigate and resolve the matter, and you will be contacted directly.\n\nFor further assistance, feel free to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
      {
     "title": "Wrong or Missing SN In the Invoice",
     "icon": "fas fa-xmark",
     "templates": [
      {
  "heading": "Asking Wrong SN Questions",
  "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_____), we kindly ask you to clarify the following:\n\nWhat is the correct serial number found on the actual device.\n\nPlease send clear pictures of the device and the product box showing the serial number clearly.\n\nFor further assistance, please do not hesitate to contact our Customer Care team at Egypt@noon.com.\n\nThank you,\nNoon Team."
},
{
  "heading": "Raised Wrong or Missing SN Complaint",
  "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (_____), we sincerely apologize for this issue. Please be informed that a complaint has been raised concerning the serial number on the invoice, and all relevant details and files have been shared with the concerned department.\n\nYou will receive updates within a maximum of (3 days) from the date the complaint was submitted. The concerned department will investigate and resolve the matter, and you will be contacted directly.\n\nFor further assistance, please do not hesitate to contact our Customer Care team at Egypt@noon.com.\n\nThank you,\nNoon Team."
},
     ]
   },
   {
     "title": "Fake Item",
     "icon": "fas fa-skull",
     "templates": [
       {
         "heading": "Asking Fake Questions",
"content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (____), we apologize for any issue you have faced.\n\nPlease answer the following questions:\n\nHow did you identify that the item is fake?\n\nPlease note that you must share a photo or video of the item, including the product box with the serial number.\n\nDo you have a report or proof from an authorized service center? If available, please share it.\n\nFor further assistance, feel free to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Raised Fake Complaint after Sharing the images / Don't Forget Delist",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for this issue and confirm that this is not the norm for Noon.\n\nPlease note that all products displayed on our website are 100% original, as we only deal with a group of trusted sellers, in addition to a specialized and highly trained quality control team.\n\nPlease be informed that a complaint has been raised regarding the non-original order, with all details clarified to the relevant department and the necessary files attached.\n\nYou will be provided with updates within a maximum period of (2 days) from the date of submitting the complaint, as the relevant department will investigate and resolve the matter, and you will be contacted directly.\n\nFor further assistance, feel free to contact our customer service team via: Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Raised Fake For Generic / Unbranded Products / Don't Forget Delist",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for this issue and confirm that this is not the norm for Noon.\n\nPlease note that all products displayed on our website are 100% original, as we only deal with a group of trusted sellers, in addition to a specialized and highly trained quality control team.\n\nPlease note that generic or unbranded products are compared to the specifications and description available on the Noon website, and not to similar branded products.\n\nPlease be informed that a complaint has been raised regarding the non-original order, with all details clarified to the relevant department and the necessary files attached.\n\nYou will be provided with updates within a maximum period of (2 days) from the date of submitting the complaint, as the relevant department will investigate and resolve the matter, and you will be contacted directly.\n\nFor further assistance, feel free to contact our customer service team via: Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "K.B Links",
     "icon": "fas fa-swatchbook",
     "templates": [
       {
         "heading": "Delivered- EGY",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page#Solutions/dv/950914003055276480"
       }
     ]
   }
 ]
},

/* Returnable */

{
  "id": "returnable",
  "title": "Returnable",
  "icon": "fas fa-warehouse",
  "tabs": [
    {
      "title": "Offer Normal Return",
      "icon": "fas fa-hand-holding-dollar",
      "templates": [
        {
          "heading": "Offer Return For COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we would like to apologize for any issue you have faced. Please be advised that noon provides a return grace period of 15 days from the date of receiving the product if it is returnable for new products, and 7 days for renewed products if you received it with an issue or it did not meet your expectations and was not as described.\n\nPlease ensure the product is returned in its original packaging, undamaged, and unused, with all labels attached. For more details on our return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nPlease note that once the return request is created, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number sent to you.\n\nThe item will be picked up from you within 2 to 3 business days, and it will then take 4 to 6 business days to reach us. A quality check will be performed within 2 business days, after which the amount will be refunded to your account if the return passes the quality inspection.\n\nYou will receive a message when the courier is on the way to pick up the return.\n\nPlease note that for Cash on Delivery payments, the refund will be credited to your noon wallet.\n\nYour noon credit is valid for a lifetime and can be used to place a new order if you wish.\n\nYou can use it after selecting your address and during the payment method selection by checking the box labeled (Use my noon credit).\n\nYou can easily raise a return request for returnable products by following these steps:\n\n1- Open the noon app or website and click on \"My Account\", then select the \"Returns\" option from the menu.\n2- Click on \"Return\", then \"Create a new return request\".\n3- Select the product you wish to return.\n4- Choose the reason for return.\n5- Select the specific additional reason for the return (if any).\n6- Add any additional comments - the more details, the better.\n7- Answer the questions to determine the condition of the returned product.\n8- Add photos of the product's condition.\n9- Choose your pickup address or select the primary one.\n10- Acknowledge the return policy.\n11- Submit the return request.\n\nFor further assistance, please do not hesitate to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Offer Return For Prepaid",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we would like to apologize for any issue you have faced. Please be advised that noon provides a return grace period of 15 days from the date of receiving the product if it is returnable for new products, and 7 days for renewed products if you received it with an issue or it did not meet your expectations and was not as described.\n\nPlease ensure the product is returned in its original packaging, undamaged, and unused, with all labels attached. For more details on our return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nPlease note that once the return request is created, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number sent to you.\n\nThe item will be picked up from you within 2 to 3 business days, and it will then take 4 to 6 business days to reach us. A quality check will be performed within 2 business days, after which the amount will be refunded to your account if the return passes the quality inspection.\n\nYou will receive a message when the courier is on the way to pick up the return.\n\nPlease be advised that for card payments, the amount will be automatically refunded to your bank account and will take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nYou can easily raise a return request for returnable products by following these steps:\n\n1- Open the noon app or website and click on \"My Account\", then select the \"Returns\" option from the menu.\n2- Click on \"Return\", then \"Create a new return request\".\n3- Select the product you wish to return.\n4- Choose the reason for return.\n5- Select the specific additional reason for the return (if any).\n6- Add any additional comments - the more details, the better.\n7- Answer the questions to determine the condition of the returned product.\n8- Add photos of the product's condition.\n9- Choose your pickup address or select the primary one.\n10- Acknowledge the return policy.\n11- Submit the return request.\n\nFor further assistance, please do not hesitate to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Offer Return For Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any issue you have faced. Please be advised that noon offers a return grace period of 15 days from the date of receiving the product for new returnable items, and 7 days for renewed products if you received it with an issue, disliked it, or it was not as described.\n\nPlease ensure the product is returned in its original packaging and is undamaged. Also, please do not use the product and make sure all labels are on the package. For more details on the return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nPlease note that once a return request is made, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number that was sent to you.\n\nThe item will be picked up from you within 2 to 3 business days, then it will take 4 to 6 business days to reach us, and the quality check will be done within 2 business days. Afterward, the amount will be refunded to your account if it passes the quality inspection.\n\nYou will receive a message when the courier is on their way to pick up the return.\n\nPlease note that when paying via \"ValU\", the refund will be directly returned to the source of payment (\"ValU\").\n\nYou can easily raise a return request for returnable products by following these steps:\n\n1- Open the noon app or website, click on \"My Account\", then select the \"Returns\" option from the menu.\n2- Click on \"Return\", then \"Create a new return request\".\n3- Select the product to be returned.\n4- Choose the reason for return.\n5- Choose the specific additional reason for return (if any).\n6- Add any additional comments - the more details, the better.\n7- Answer the questions to determine the condition of the returned product.\n8- Add photos of the product's condition.\n9- Choose your pickup address or select the primary one.\n10- Acknowledge the return policy.\n11- Submit the return request.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Offer Return For Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any issue you have faced. Please be advised that noon offers a return grace period of 15 days from the date of receiving the product for new returnable items, and 7 days for renewed products if you received it with an issue, disliked it, or it was not as described.\n\nPlease ensure the product is returned in its original packaging and is undamaged. Also, please do not use the product and make sure all labels are on the package. For more details on the return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nPlease note that once a return request is made, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number that was sent to you.\n\nThe item will be picked up from you within 2 to 3 business days, then it will take 4 to 6 business days to reach us, and the quality check will be done within 2 business days. Afterward, the amount will be refunded to your account if it passes the quality inspection.\n\nYou will receive a message when the courier is on their way to pick up the return.\n\nPlease note that when paying with noon credit, the refund will be issued to your noon wallet.\n\nPlease be advised that noon credit is valid for a lifetime, and you can use it to place a new order if you wish. You can use it after selecting the address and during payment method selection by checking the box labeled (Use my noon credit).\n\nYou can easily raise a return request for returnable products by following these steps:\n\n1- Open the noon app or website, click on \"My Account\", then select the \"Returns\" option from the menu.\n2- Click on \"Return\", then \"Create a new return request\".\n3- Select the product to be returned.\n4- Choose the reason for return.\n5- Choose the specific additional reason for return (if any).\n6- Add any additional comments - the more details, the better.\n7- Answer the questions to determine the condition of the returned product.\n8- Add photos of the product's condition.\n9- Choose your pickup address or select the primary one.\n10- Acknowledge the return policy.\n11- Submit the return request.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Track Normal Return",
      "icon": "fas fa-truck-pickup",
      "templates": [
        {
          "heading": "Track Normal Return Not Picked COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that once a return request is created, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number that was sent to you.\n\nPlease ensure the product is returned in its original packaging and is undamaged. Also, please do not use the product and make sure all labels are on the package. For more details on the return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nUpon tracking your return request, the item will be picked up from you within 2 to 3 business days, then it will take 4 to 6 business days to reach us, and the quality check will be done within 2 business days.\n\nThe amount will be refunded to your account if the return passes the quality inspection.\n\nYou will receive a message when the courier is on the way to pick up the return.\n\nPlease note that for Cash on Delivery payments, the refund will be credited to your noon wallet.\n\nPlease be advised that noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Normal Return Not Picked Prepaid",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that once a return request is created, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number that was sent to you.\n\nPlease ensure the product is returned in its original packaging and is undamaged. Also, please do not use the product and make sure all labels are on the package. For more details on the return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nUpon tracking your return request, the item will be picked up from you within 2 to 3 business days, then it will take 4 to 6 business days to reach us, and the quality check will be done within 2 business days.\n\nThe amount will be refunded to your account if the return passes the quality inspection.\n\nYou will receive a message when the courier is on the way to pick up the return.\n\nPlease be advised that for card payments, the amount will be automatically refunded to your bank account and will take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Normal Return Not Picked Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that once a return request is created, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number that was sent to you.\n\nPlease ensure the product is returned in its original packaging and is undamaged. Also, please do not use the product and make sure all labels are on the package. For more details on the return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nUpon tracking your return request, the item will be picked up from you within 2 to 3 business days, then it will take 4 to 6 business days to reach us, and the quality check will be done within 2 business days.\n\nThe amount will be refunded to your account if the return passes the quality inspection.\n\nYou will receive a message when the courier is on the way to pick up the return.\n\nPlease note that when paying via \"ValU\", the refund will be directly returned to the source of payment (\"ValU\").\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Normal Return Not Picked Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that once a return request is created, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number that was sent to you.\n\nPlease ensure the product is returned in its original packaging and is undamaged. Also, please do not use the product and make sure all labels are on the package. For more details on the return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nUpon tracking your return request, the item will be picked up from you within 2 to 3 business days, then it will take 4 to 6 business days to reach us, and the quality check will be done within 2 business days.\n\nThe amount will be refunded to your account if the return passes the quality inspection.\n\nYou will receive a message when the courier is on the way to pick up the return.\n\nPlease note that when paying with noon credit, the refund will be issued to your noon wallet.\n\nPlease be advised that noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Normal Return Picked COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that upon tracking your return request, it was picked up from you on (_______).\n\nIt will then take 4 to 6 business days to reach us, and the quality check will be done within 2 business days.\n\nThe amount will be refunded to your account if the return passes the quality inspection.\n\nPlease note that for Cash on Delivery payments, the refund will be credited to your noon wallet.\n\nPlease be advised that noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Normal Return Picked Prepaid",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that upon tracking your return request, it was picked up from you on (_______).\n\nIt will then take 4 to 6 business days to reach us, and the quality check will be done within 2 business days.\n\nThe amount will be refunded to your account if the return passes the quality inspection.\n\nPlease be advised that for card payments, the amount will be automatically refunded to your bank account and will take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Normal Return Picked Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that upon tracking your return request, it was picked up from you on (_______).\n\nIt will then take 4 to 6 business days to reach us, and the quality check will be done within 2 business days.\n\nThe amount will be refunded to your account if the return passes the quality inspection.\n\nPlease note that when paying via \"ValU\", the refund will be directly returned to the source of payment (\"ValU\").\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Normal Return Picked Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that upon tracking your return request, it was picked up from you on (_______).\n\nIt will then take 4 to 6 business days to reach us, and the quality check will be done within 2 business days.\n\nThe amount will be refunded to your account if the return passes the quality inspection.\n\nPlease note that when paying with noon credit, the refund will be issued to your noon wallet.\n\nPlease be advised that noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Offer Below 300 Return",
      "icon": "fas fa-hand-point-down",
      "templates": [
        {
          "heading": "Offer Below 300 For COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any issue you have faced. Please be advised that noon provides a return grace period of 15 days from the date of receiving the product for new returnable items, and 7 days for renewed products if you received it with an issue, disliked it, or it was not as described.\n\nPlease ensure the product is returned in its original packaging, undamaged, and unused, with all labels attached. For more details on our return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nPlease note that once the return request is created, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number that was sent to you.\n\nIf you agree to the return request, the item will be picked up from you within 3 business days. A request to approve the refund will also be raised and processed within a maximum of 2 days. You will be contacted via email or phone after the request is approved.\n\nYou will receive a message when the courier is on the way to pick up the return.\n\nPlease note that for Cash on Delivery payments, the refund will be credited to your noon wallet.\n\nYour noon credit is valid for a lifetime and can be used to place a new order if you wish.\n\nYou can use it after selecting your address and during the payment method selection by checking the box labeled (Use my noon credit).\n\nYou can easily raise a return request for returnable products by following these steps:\n\n1- Open the noon app or website and click on \"My Account\", then select the \"Returns\" option from the menu.\n2- Click on \"Return\", then \"Create a new return request\".\n3- Select the product you wish to return.\n4- Choose the reason for return.\n5- Select the specific additional reason for the return (if any).\n6- Add any additional comments - the more details, the better.\n7- Answer the questions to determine the condition of the returned product.\n8- Add photos of the product's condition.\n9- Choose your pickup address or select the primary one.\n10- Acknowledge the return policy.\n11- Submit the return request.\n\nFor further assistance, please do not hesitate to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Offer Below 300 For Prepaid",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any issue you have faced. Please be advised that noon provides a return grace period of 15 days from the date of receiving the product for new returnable items, and 7 days for renewed products if you received it with an issue, disliked it, or it was not as described.\n\nPlease ensure the product is returned in its original packaging, undamaged, and unused, with all labels attached. For more details on our return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nPlease note that once the return request is created, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number that was sent to you.\n\nIf you agree to the return request, the item will be picked up from you within 3 business days. A request to approve the refund will also be raised and processed within a maximum of 2 days. You will be contacted via email or phone after the request is approved.\n\nYou will receive a message when the courier is on the way to pick up the return.\n\nPlease be advised that for card payments, the amount will be automatically refunded to your bank account and will take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nYou can easily raise a return request for returnable products by following these steps:\n\n1- Open the noon app or website and click on \"My Account\", then select the \"Returns\" option from the menu.\n2- Click on \"Return\", then \"Create a new return request\".\n3- Select the product you wish to return.\n4- Choose the reason for return.\n5- Select the specific additional reason for the return (if any).\n6- Add any additional comments - the more details, the better.\n7- Answer the questions to determine the condition of the returned product.\n8- Add photos of the product's condition.\n9- Choose your pickup address or select the primary one.\n10- Acknowledge the return policy.\n11- Submit the return request.\n\nFor further assistance, please do not hesitate to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Offer Below 300 For Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any issue you have faced. Please be advised that noon provides a return grace period of 15 days from the date of receiving the product for new returnable items, and 7 days for renewed products if you received it with an issue, disliked it, or it was not as described.\n\nPlease ensure the product is returned in its original packaging, undamaged, and unused, with all labels attached. For more details on our return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nPlease note that once the return request is created, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number that was sent to you.\n\nIf you agree to the return request, the item will be picked up from you within 3 business days. A request to approve the refund will also be raised and processed within a maximum of 2 days. You will be contacted via email or phone after the request is approved.\n\nYou will receive a message when the courier is on the way to pick up the return.\n\nPlease note that when paying via \"ValU\", the refund will be directly returned to the source of payment (\"ValU\").\n\nYou can easily raise a return request for returnable products by following these steps:\n\n1- Open the noon app or website and click on \"My Account\", then select the \"Returns\" option from the menu.\n2- Click on \"Return\", then \"Create a new return request\".\n3- Select the product you wish to return.\n4- Choose the reason for return.\n5- Select the specific additional reason for the return (if any).\n6- Add any additional comments - the more details, the better.\n7- Answer the questions to determine the condition of the returned product.\n8- Add photos of the product's condition.\n9- Choose your pickup address or select the primary one.\n10- Acknowledge the return policy.\n11- Submit the return request.\n\nFor further assistance, please do not hesitate to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Offer Below 300 For Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any issue you have faced. Please be advised that noon provides a return grace period of 15 days from the date of receiving the product for new returnable items, and 7 days for renewed products if you received it with an issue, disliked it, or it was not as described.\n\nPlease ensure the product is returned in its original packaging, undamaged, and unused, with all labels attached. For more details on our return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nPlease note that once the return request is created, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number that was sent to you.\n\nIf you agree to the return request, the item will be picked up from you within 3 business days. A request to approve the refund will also be raised and processed within a maximum of 2 days. You will be contacted via email or phone after the request is approved.\n\nYou will receive a message when the courier is on the way to pick up the return.\n\nPlease note that when paying with noon credit, the refund will be issued to your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nYou can easily raise a return request for returnable products by following these- Open the noon app or website and click on \"My Account\", then select the \"Returns\" option from the menu.\n2- Click on \"Return\", then \"Create a new return request\".\n3- Select the product you wish to return.\n4- Choose the reason for return.\n5- Select the specific additional reason for the return (if any).\n6- Add any additional comments - the more details, the better.\n7- Answer the questions to determine the condition of the returned product.\n8- Add photos of the product's condition.\n9- Choose your pickup address or select the primary one.\n10- Acknowledge the return policy.\n11- Submit the return request.\n\nFor further assistance, please do not hesitate to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Track Below 300 Return",
      "icon": "fas fa-tent-arrows-down",
      "templates": [
        {
          "heading": "Track Below 300 Not Picked COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that once a return request is created, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number that was sent to you.\n\nPlease ensure the product is returned in its original packaging and is undamaged. Also, please do not use the product and make sure all labels are on the package. For more details on the return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nUpon tracking your return request, the item will be picked up from you within 3 business days. A request to approve the refund has also been raised and updated by me, and it will be processed within a maximum of 2 days. You will be contacted via email or phone after the request is approved.\n\nYou will receive a message when the courier is on the way to pick up the return.\n\nPlease note that for Cash on Delivery payments, the refund will be credited to your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Below 300 Not Picked Prepaid",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that once a return request is created, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number that was sent to you.\n\nPlease ensure the product is returned in its original packaging and is undamaged. Also, please do not use the product and make sure all labels are on the package. For more details on the return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nUpon tracking your return request, the item will be picked up from you within 3 business days. A request to approve the refund has also been raised and updated by me, and it will be processed within a maximum of 2 days. You will be contacted via email or phone after the request is approved.\n\nYou will receive a message when the courier is on the way to pick up the return.\n\nPlease be advised that for card payments, the amount will be automatically refunded to your bank account and will take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Below 300 Not Picked Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that once a return request is created, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number that was sent to you.\n\nPlease ensure the product is returned in its original packaging and is undamaged. Also, please do not use the product and make sure all labels are on the package. For more details on the return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nUpon tracking your return request, the item will be picked up from you within 3 business days. A request to approve the refund has also been raised and updated by me, and it will be processed within a maximum of 2 days. You will be contacted via email or phone after the request is approved.\n\nYou will receive a message when the courier is on the way to pick up the return.\n\nPlease note that when paying via \"ValU\", the refund will be directly returned to the source of payment (\"ValU\").\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Below 300 Not Picked Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that once a return request is created, you will receive a message with the waybill number. Before pickup, the courier may ask you to confirm the message containing the return number that was sent to you.\n\nPlease ensure the product is returned in its original packaging and is undamaged. Also, please do not use the product and make sure all labels are on the package. For more details on the return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nUpon tracking your return request, the item will be picked up from you within 3 business days. A request to approve the refund has also been raised and updated by me, and it will be processed within a maximum of 2 days. You will be contacted via email or phone after the request is approved.\n\nYou will receive a message when the courier is on the way to pick up the return.\n\nPlease note that when paying with noon credit, the refund will be issued to your noon wallet.\n\nPlease be advised that noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Below 300 Picked COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that upon tracking your return request, it was picked up from you on (_______).\n\nA request to approve the refund has also been raised and updated by me, and it will be processed within a maximum of 2 days. You will be contacted via email or phone after the request is approved.\n\nPlease note that for Cash on Delivery payments, the refund will be credited to your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting your address and during the payment method selection by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Below 300 Picked Prepaid",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that upon tracking your return request, it was picked up from you on (_______).\n\nA request to approve the refund has also been raised and updated by me, and it will be processed within a maximum of 2 days. You will be contacted via email or phone after the request is approved.\n\nPlease be advised that for card payments, the amount will be automatically refunded to your bank account and will take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Below 300 Picked Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that upon tracking your return request, it was picked up from you on (_______).\n\nA request to approve the refund has also been raised and updated by me, and it will be processed within a maximum of 2 days. You will be contacted via email or phone after the request is approved.\n\nPlease note that when paying via \"ValU\", the refund will be directly returned to the source of payment (\"ValU\").\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Below 300 Picked Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that upon tracking your return request, it was picked up from you on (_______).\n\nA request to approve the refund has also been raised and updated by me, and it will be processed within a maximum of 2 days. You will be contacted via email or phone after the request is approved.\n\nPlease note that when paying with noon credit, the refund will be issued to your noon wallet.\n\nPlease be advised that noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Track Direct Return To Seller",
      "icon": "fas fa-truck-ramp-box",
      "templates": [
        {
          "heading": "Track Direct Return Not Picked COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please ensure the product is returned in its original packaging and is undamaged. Also, please do not use the product and make sure all labels are on the package. For more details on the return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nUpon tracking your return request, the item will be picked up from you within 3 days, then the return will reach the seller, and the refund will be processed within 5 to 7 days.\n\nPlease note that for Cash on Delivery payments, the refund will be credited to your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting your address and during the payment method selection by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Direct Return Not Picked Prepaid",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please ensure the product is returned in its original packaging and is undamaged. Also, please do not use the product and make sure all labels are on the package. For more details on the return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nUpon tracking your return request, the item will be picked up from you within 3 days, then the return will reach the seller, and the refund will be processed within 5 to 7 days.\n\nPlease be advised that for card payments, the amount will be automatically refunded to your bank account and will take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Direct Return Not Picked Noon Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please ensure the product is returned in its original packaging and is undamaged. Also, please do not use the product and make sure all labels are on the package. For more details on the return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nUpon tracking your return request, the item will be picked up from you within 3 days, then the return will reach the seller, and the refund will be processed within 5 to 7 days.\n\nPlease note that when paying via \"ValU\", the refund will be directly returned to the source of payment (\"ValU\").\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Direct Return Not Picked Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please ensure the product is returned in its original packaging and is undamaged. Also, please do not use the product and make sure all labels are on the package. For more details on the return policy, please visit the following link: https://www.noon.com/egypt-en/return-policy.\n\nUpon tracking your return request, the item will be picked up from you within 3 days, then the return will reach the seller, and the refund will be processed within 5 to 7 days.\n\nPlease note that when paying with noon credit, the refund will be issued to your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting your address and during the payment method selection by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Direct Return Picked COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that upon tracking your return request, it was picked up from you on (_______).\n\nThe return will then reach the seller, and the refund will be processed within 5 to 7 days.\n\nPlease note that for Cash on Delivery payments, the refund will be credited to your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting your address and during the payment method selection by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Direct Return Picked Prepaid",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that upon tracking your return request, it was picked up from you on (_______).\n\nThe return will then reach the seller, and the refund will be processed within 5 to 7 days.\n\nPlease be advised that for card payments, the amount will be automatically refunded to your bank account and will take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Direct Return Picked Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that upon tracking your return request, it was picked up from you on (_______).\n\nThe return will then reach the seller, and the refund will be processed within 5 to 7 days.\n\nPlease note that when paying via \"ValU\", the refund will be directly returned to the source of payment (\"ValU\").\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Direct Return Picked Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_______), we apologize for any issue you have faced. Please note that upon tracking your return request, it was picked up from you on (_______).\n\nThe return will then reach the seller, and the refund will be processed within 5 to 7 days.\n\nPlease note that when paying with noon credit, the refund will be issued to your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting your address and during the payment method selection by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Cancel Return",
      "icon": "fas fa-xmarks-lines",
      "templates": [
        {
          "heading": "Cancel Return",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your inquiry about order number (_______) and canceling the return request, please note that you can cancel the return request by logging into your account, then going to \"Returns\", selecting the order, then clicking on \"Manage Return Request\", and finally clicking on \"Cancel Return\".\n\nFor further assistance, please do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "K.B Links",
      "icon": "fas fa-swatchbook",
      "templates": [
        {
          "heading": "Return EGY",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=published&showAllArticles=true&rootcategoryId=950914000041316047&categoryId=950914000042231014&status=published#Solutions/dv/950914000042246400/en"
        },
        {
          "heading": "New Return Tracking",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=published&showAllArticles=true&rootcategoryId=950914000041316047&categoryId=950914000042231014&status=published#Solutions/dv/950914000042245841/en"
        },
        {
          "heading": "Item below 300 EGP",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231014#Solutions/dv/950914000042245939/en"
        },
        {
          "heading": "Single Item Returns (SIR)",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231014#Solutions/dv/950914000042248341/en"
        },
        {
          "heading": "Direct ship returns to Seller",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231014#Solutions/dv/950914000042246066/en"
        },
        {
          "heading": "Seller-customer Messaging Service",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231014#Solutions/dv/950914000042245982/en"
        },
        {
          "heading": "Refund EGY",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231044#Solutions/dv/950914000042245878/en"
        },
        {
          "heading": "Self-Service Bank Transfer",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231044#Solutions/dv/950914000042248286/en"
        }
      ]
    }
  ]
},

/* RTC */

{
  id: "rtc",
 "title": "RTC",
 "icon": "fas fa-people-pulling",
 "tabs": [
   {
     "title": "RTC",
     "icon": "fas fa-people-pulling",
     "templates": [
       {
         "heading": "RTC Template",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your order number (____), we apologize for any issues you have encountered.\n\nUnfortunately, your return request has been rejected for the following reasons:\n\nThe product or condition of the returned product does not match the original product requested for return, or the condition does not comply with the policy as the product is open, used, or tampered with.\n\nAn SMS has been sent containing a link explaining the reason for rejection, in addition to an email clarifying the reason for rejection with links to track the product.\n\nYou can also visit the following link https://www.noon.com/egypt-ar/RTC for more details.\n\nThe product will be returned to you as follows:\n\nThe first attempt to return the product will be made within 5-7 working days from the date of rejection.\n\nThe second attempt will be made on the next working day after the first attempt.\n\nIf the product is not received after the two attempts, the product will be held for 3 working days, during which you can request a new delivery.\n\nIf the request is not made within the specified period, the product will be sent for liquidation and cannot be recovered.\n\nThe grace period for returns is 15 days from the date of receiving the shipment, and returnable products are marked with \"Easy return for all products in this offer\".\n\nThe product must be returned in its original condition, unopened and unused, with all packaging and accessories intact.\n\nIn case of a manufacturing defect, please return the product with all its original contents.\n\nYou can refer to the following link https://www.noon.com/egypt-ar/return-policy to learn more about the return policy.\n\nIf you wish to re-check the return request after receiving the product, you can contact us to raise a complaint, and we will review it and take the necessary actions.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "K.B Links",
     "icon": "fas fa-swatchbook",
     "templates": [
       {
         "heading": "RTC KB Link",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231059#Solutions/dv/950914000042247110/en"
       }
     ]
   }
 ]
},




/* Refund */
{
  "id": "refund",
  "title": "Refund",
  "icon": "fas fa-money-bill-transfer",
  "tabs": [
    {
      "title": "Auto Transfer",
      "icon": "fas fa-money-bill-1-wave",
      "templates": [
        {
          "heading": "Amount Has Not Been Transferred Yet",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding order number (________), please be advised that the amount will be automatically transferred to your bank account. This will be processed within 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Amount Transferred",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding order number (________), please be advised that the money was automatically transferred to your bank account on (________) and will be processed within 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Request A Refund",
      "icon": "fas fa-money-bills",
      "templates": [
        {
          "heading": "Self Transfer",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding order number (________), you can request to transfer the amount to your bank account by visiting the noon website (not the app), then selecting \"My Account\", then \"noon Credit\", and finally \"Transfer Balance\".\n\nPlease ensure you follow these steps via the website or mobile browser, as the service is not currently available through the app.\n\nWhen you select \"Transfer Balance\", you will be asked to provide your bank account details for the transfer.\n\nPlease make sure to enter the required bank account information completely and correctly, including your full name (four parts).\n\nA text message with a code will be sent to the phone number registered with your noon account to complete the process. Please enter it in the specified field to confirm the request. Then, an email will be sent allowing you to confirm or cancel the request.\n\nPlease note that the confirmation email is valid for one hour. If not confirmed, the request will be automatically rejected and the confirmation link will expire.\n\nThe balance will be deducted from your wallet. Within 4 to 5 hours, the status will update to \"Processing\" as the request begins.\n\nThe transfer will be completed within 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nYou can transfer funds from your noon credit using this service once every 15 days. Please also note that the total amount transferred in one transaction must be between 200 EGP and 10,000 EGP.\n\nYou can track the transfer process by going to \"My Account\", then \"noon Credit\", and then clicking on \"Transfers\".\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Offer Refund Request",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding order number (________), please be advised that you can create a request to transfer the money through us if you wish. The money will be transferred to your bank account within 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Change In Refund Mode Raised",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding order number (________), please be advised that a request has been created to transfer the money. An email has been sent to your registered noon account email. Please fill in all the required details and send them to the mentioned email, which is \"refunds@noon.com\".\n\nPlease ensure you enter the required bank account details completely and correctly, including your full name (four parts).\n\nPlease note that if there is no response to the email within 72 hours, the transfer request will be closed.\n\nThis request will be pending approval for 24 to 48 hours after you send the correct and complete bank details.\n\nPlease note that this request may take 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nIf there is a discrepancy between the \"bank account holder's name\" sent to us and the \"noon account holder's name\", your reply to the email will be considered a confirmation for us to proceed with the bank transfer to the mentioned account.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Change In Refund Mode Follow up",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding order number (________), please be advised that the transfer request has been updated with the details you provided.\n\nThis request will be pending approval for 24 to 48 hours after you send the correct and complete bank details.\n\nPlease note that this request may take 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nIf there is a discrepancy between the \"bank account holder's name\" sent to us and the \"noon account holder's name\", your reply to the email will be considered a confirmation for us to proceed with the bank transfer to the mentioned account.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Raised Prepaid Request",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding order number (________), please be advised that a request has been created to transfer the money to your payment source. The processing time for this transfer to your bank account is between 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "COD / Noon Credit",
      "icon": "fas fa-wallet",
      "templates": [
        {
          "heading": "COD Refunded",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding order number (_____), please be advised that the amount was credited to your noon credit on (_____) because the payment was made via Cash on Delivery.\n\nYour noon credit is valid for a lifetime and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Noon Credit Refunded",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding order number (_____), please be advised that the amount was credited to your noon credit on (_____) because the payment was made via noon credit.\n\nYour noon credit is valid for a lifetime and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Valu Refunded",
      "icon": "fas fa-money-bill-trend-up",
      "templates": [
        {
          "heading": "Valu Refund",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding order number (_____), please be advised that the payment was made via ValU.\n\nPlease note that when paying via \"ValU\", the refund will be returned directly to the payment source (\"ValU\").\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Track A Refund",
      "icon": "fas fa-vault",
      "templates": [
        {
          "heading": "How To Track A Refund General Info",
          "content": "Hala,\n\nThank you for choosing noon!\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nIf you used noon credit for the payment, the refund details will appear, and you can click on \"View noon Credit\" to go directly to the wallet page.\n\nIn some rare cases, you may see a message asking you to contact customer support to track the refund. This may happen in cases such as:\n\n- Refund of installments from the National Bank of Egypt (NBE)\n- An issue with the refund process from the bank\n\nSometimes, the refund may remain pending in the following situations:\n\n- If the product was not delivered.\n- If \"Cancel Shipment\" was selected.\n- If the item was canceled in its early processing stage.\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the completed refund section, which explains the products/fees that were refunded.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Refund Failed",
      "icon": "fas fa-circle-exclamation",
      "templates": [
        {
          "heading": "Refund Failed",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding order number (____), please be advised that an attempt was made to transfer the money to your bank account as follows:\n\nThe money arrived in your noon credit on (____).\n\nIt was transferred to your bank account on (____).\n\nThe transfer was rejected by your bank, and the money was returned to your noon credit again on (____).\n\nWe advise you to contact your bank to resolve the issue, as the transfer was successfully processed by noon but was rejected by your bank.\n\nFor further assistance, do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "K.B Links",
      "icon": "fas fa-swatchbook",
      "templates": [
        {
          "heading": "Refund EGY",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231044#Solutions/dv/950914000042245878/en"
        },
        {
          "heading": "Self-Service Bank Transfer",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231044#Solutions/dv/950914000042248286/en"
        },
        {
          "heading": "What is the noon refund process?",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page#Solutions/dv/950914000042685878/en"
        },
        {
          "heading": "When will I receive my refund?",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000451617045&categoryId=950914000451617045#Solutions/dv/950914000042250584/en"
        }
      ]
    }
  ]
},



/* Warranty */
{
 "title": "Warranty",
 "icon": "fas fa-award",
 "tabs": [
   {
     "title": "Warranty",
     "icon": "fas fa-medal",
     "templates": [
       {
         "heading": "Offer Warranty",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding order number (_______), please accept our apologies for any inconvenience caused regarding the product that had an issue. We confirm that Noon provides you with a warranty policy to address and maintain the product.\n\nNoon Warranty Policy:\n\nOur policy ensures that your product is protected against any defects in materials, design, or workmanship after purchase. For some products or in cases where Noon is the seller, warranty-covered repairs are performed at authorized service centers. If the product was purchased from another seller, the warranty terms of that seller apply.\n\nHow to raise a warranty request:\n\nLog in to your personal account via the app or website.\n\nClick on \"Warranty Claims\" from the \"My Account\" menu.\n\nSelect \"Create a New Warranty Request,\" then choose the product in question.\n\nSelect the reason or issue with the product and the type of warranty.\n\nDescribe the issue in detail (at least 50 characters).\n\nChoose the address from which you want us to collect the product and return it to after completing the warranty request.\n\nClick on \"Submit Warranty Request.\"\n\nProcessing Time:\n\nYou will be contacted by the warranty department within 24 hours (from 8 AM to 5 PM) via the registered email or phone number.\n\nProduct collection and transfer to the maintenance team take 5 working days.\n\nMaintenance takes 14 working days.\n\nReturning the product from maintenance to you takes a maximum of 5 working days.\n\nIf you wish to proceed with the warranty request through us, please confirm the following:\n\nProduct collection address: (_______).\n\nPhone number: (_______).\n\nEmail: (_______).\n\nTo directly contact the warranty team:\n\nPhone number: (16358).\n\nSelect option 4 from the automated response to speak with a warranty team representative (from 9 AM to 9 PM).\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Track Warranty",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding order number (_______), we would like to inform you that the warranty request is still being processed. To follow up on the request and get the latest updates, please contact the warranty team at (16358), then select option 4 from the automated response, and you will be transferred to a warranty team representative from 9 AM to 9 PM.\n\nTo learn more about the warranty policy, please visit the following link: https://www.noon.com/egypt-ar/warranty-policy.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Asking Why Warranty not in The Box",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding order number (______), please note that our warranty is electronic, as part of our community role to maintain a clean and green environment. Please note that the mentioned warranty is a Noon warranty.\n\nIndeed, this product is covered by a warranty for (______), and in case -God forbid- you face an issue with this product due to a manufacturing defect and not due to misuse, you can raise a warranty request from your account, and the concerned team will take the necessary actions.\n\nTo learn more about the warranty policy: https://www.noon.com/egypt-ar/warranty-policy/\n\nHow to raise a warranty request:\n\nLog in to your personal account via the app or website.\n\nClick on \"Warranty Claims\" from the \"My Account\" menu.\n\nSelect \"Create a New Warranty Request,\" then choose the product in question.\n\nSelect the reason or issue with the product and the type of warranty.\n\nDescribe the issue in detail (at least 50 characters).\n\nChoose the address for product collection and return after maintenance.\n\nClick on \"Submit Warranty Request.\"\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "K.B Links",
     "icon": "fas fa-swatchbook",
     "templates": [
       {
         "heading": "Warranty Claims",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231059#Solutions/dv/950914000042247444/en"
       }
     ]
   }
 ]
},





/* Complaint Or Request */
{
 "title": "Complaint / Request",
 "icon": "fas fa-hand",
 "tabs": [
   {
     "title": "Complaint",
     "icon": "fas fa-spinner",
     "templates": [
       {
         "heading": "Raise a Complaint",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for this issue and confirm that this is not Noon's standard, as we always strive to improve our services to provide the best for our valued customers.\n\nPlease note that a complaint has been raised regarding this issue, with all details clarified to the concerned department.\n\nYou will be provided with updates within a maximum of (00 days) from the date of submitting the complaint, as the concerned department will investigate and resolve the matter, and you will be contacted.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Follow Up on a Complaint With no Files",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for this issue and confirm that this is not Noon's standard, as we always strive to improve our services to provide the best for our valued customers.\n\nPlease note that the raised complaint has been updated, and all details have been clarified to the concerned department.\n\nYou will be provided with updates within a maximum of (00 days) from the date of submitting the complaint, as the concerned department will investigate and resolve the matter, and you will be contacted.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Follow Up on a Complaint Include Files",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for this issue and confirm that this is not Noon's standard, as we always strive to improve our services to provide the best for our valued customers.\n\nPlease note that the raised complaint has been updated, and the files sent by you have been attached to the concerned department.\n\nYou will be provided with updates within a maximum of (00 days) from the date of submitting the complaint, as the concerned department will investigate and resolve the matter, and you will be contacted.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Follow Up on a Complaint With UCB",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for this issue and confirm that this is not Noon's standard, as we always strive to improve our services to provide the best for our valued customers.\n\nPlease note that the raised complaint has been updated, and all details have been clarified to the concerned department.\n\nYou will be provided with updates within a maximum of (00 days) from the date of submitting the complaint, as the concerned department will investigate and resolve the matter.\n\nYou will be contacted by the complaints department within 4 to 6 hours between 9 AM and 9 PM.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Follow Up on a Complaint With Supervisor",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for this issue and confirm that this is not Noon's standard, as we always strive to improve our services to provide the best for our valued customers.\n\nPlease note that the raised complaint has been updated, and all details have been clarified to the concerned department.\n\nYou will be provided with updates within a maximum of (00 days) from the date of submitting the complaint, as the concerned department will investigate and resolve the matter.\n\nYou will be contacted by a supervisor within 4 to 6 hours between 9 AM and 9 PM.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Follow Up on a Complaint With Regarding a Complaint",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for this issue and confirm that this is not Noon's standard, as we always strive to improve our services to provide the best for our valued customers.\n\nPlease note that the raised complaint has been updated, and all details have been clarified to the concerned department.\n\nYou will be provided with updates within a maximum of (00 days) from the date of submitting the complaint, as the concerned department will investigate and resolve the matter.\n\nYou will be contacted by the complaints department within 6 to 12 hours between 9 AM and 9 PM.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Re Raised a Complaint With no Files",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for this issue and confirm that this is not Noon's standard, as we always strive to improve our services to provide the best for our valued customers.\n\nPlease note that the complaint has been re-raised, and all details have been clarified to the concerned department.\n\nYou will be provided with updates within a maximum of (00 days) from the date of submitting the complaint, as the concerned department will investigate and resolve the matter, and you will be contacted.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Re Raised a Complaint Include Files",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for this issue and confirm that this is not Noon's standard, as we always strive to improve our services to provide the best for our valued customers.\n\nPlease note that the complaint has been re-raised, and the files sent by you have been attached to the concerned department.\n\nYou will be provided with updates within a maximum of (00 days) from the date of submitting the complaint, as the concerned department will investigate and resolve the matter, and you will be contacted.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Follow Up on a Complaint ASAP",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for this issue and confirm that this is not Noon's standard, as we always strive to improve our services to provide the best for our valued customers.\n\nPlease note that the raised complaint has been updated, and all details have been clarified to the concerned department.\n\nYou will be provided with updates as soon as possible, as the concerned department will investigate and resolve the matter, and you will be contacted.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "Request",
     "icon": "fas fa-hand-holding-droplet",
     "templates": [
       {
         "heading": "Raise a Request",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). Please note that the request has been raised, and all details have been clarified to the concerned department.\n\nYou will be provided with updates within a maximum of (00 days) from the date of raising the request, as the concerned department will review and resolve the matter, and you will be contacted directly.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Follow Up on a Request",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). Please note that a request has already been submitted, and I have updated it to expedite the process for you.\n\nYou will be provided with updates within a maximum of (00 days) from the date of raising the request, as the concerned department will review and resolve the matter, and you will be contacted directly.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
  "heading": "Follow Up on a Request ASAP",
  "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). Please be informed that a request has already been submitted, and I have updated it from my side to expedite the process for you.\n\nYou will receive updates as soon as possible, as the concerned team will review the case and resolve it, God willing, and they will contact you directly.\n\nFor further assistance, please do not hesitate to contact our Customer Care team at Egypt@noon.com.\n\nThank you,\nNoon Team."
},
       {
         "heading": "Re Raised a Request",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). Please note that the request has been re-raised, and all details have been clarified to the concerned department.\n\nYou will be provided with updates within a maximum of (00 days) from the date of raising the request, as the concerned department will review and resolve the matter, and you will be contacted directly.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "K.B Links",
     "icon": "fas fa-swatchbook",
     "templates": [
       {
         "heading": "Zoho Actions",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page#Solutions/dv/950914003274262983/en"
       },
       {
         "heading": "Zoho",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page#Solutions/dv/950914000042231714/en"
       },
       {
         "heading": "Ticket Creation",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231089#Solutions/dv/950914000042247327/en"
       }
     ]
   }
 ]
},




/* Fraud */
{
 "title": "Fraud Cases",
 "icon": "fas fa-user-tie",
 "tabs": [
   {
     "title": "Fraud",
     "icon": "fas fa-user-tie",
     "templates": [
       {
         "heading": "Deducted Amount from Cx Bank Account",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe are sorry to hear about your experience. We need you to provide us with some details so that the concerned department can assist you fully.\n\nPlease clarify the deducted amount and the transaction date.\n\nAlso, please provide us with the first 6 digits and the last 4 digits of your card.\n\nThe cardholder's name, phone number, and email.\n\nPlease also clarify if you recently approved an OTP code for a Noon order.\n\nPlease clarify if there are other users of the card, such as family members, who might have placed the order.\n\nWe advise you to quickly contact your bank to avoid any further purchases.\n\nAll your data/rights are preserved with us, so there is no need to worry.\n\nAwaiting your response.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Order Was Placed With Cx Noon Wallet and he Didn't Place The Order",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe kindly ask you to answer a few questions so that we can assist you better.\n\nPlease clarify if there is someone else authorized to use your Noon account, such as family members.\n\nAlso, please clarify if you have shared your Noon account password with anyone else.\n\nOr if you have tried to log in to your account from another device or through a public internet network.\n\nWe also ask you to confirm the email associated with the account from which the order was placed, so that we can share this data with the concerned department for better investigation.\n\nAll your data/rights are preserved with us, so there is no need to worry.\n\nAwaiting your response.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "Unregistered",
     "icon": "fas fa-ban",
     "templates": [
       {
         "heading": "Unregistered User Complaining That He / She is Receiving Mails From Noon",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe apologize for any inconvenience caused by this matter.\n\nWe would like to clarify that Gmail does not distinguish between email addresses if the difference is only a dot.\n\nFor example, if the email registered with us is anas.808@gmail.com (anas.808@gmail.com) and another person's email who does not have a Noon account is \"anas808@gmail.com,\" the email will be sent to both addresses.\n\nFor more examples and information, you can visit this link: https://support.google.com/mail/answer/7436150?hl=en\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "Negative Balance",
     "icon": "fas fa-ban",
     "templates": [
       {
         "heading": "Negative Wallet Balance",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding the issue related to your Noon balance, we would like to inform you that a request has been raised to the concerned department with all the necessary details clarified.\n\nYou will be provided with updates within (1 day) maximum from the date of raising the request, as the concerned team will review and resolve the issue as soon as possible, and you will be contacted directly.\n\nFor further assistance, feel free to contact our customer service team at: Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "K.B Links",
     "icon": "fas fa-swatchbook",
     "templates": [
       {
         "heading": "Fraud cases and ATO - Negative Wallet Balance",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=published&showAllArticles=true&rootcategoryId=950914000041316047&categoryId=950914000042231044&status=published#Solutions/dv/950914000042245676/en"
       }
     ]
   }
 ]
},




/* Cancellation */

{
  "id": "cancellation",
  "title": "Cancellation",
  "icon": "fas fa-xmark",
  "tabs": [
    {
      "title": "Authorized",
      "icon": "fas fa-plane-slash",
      "templates": [
        {
          "heading": "Cancel Authorized All Order in SLA",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding order number (____), we are very sorry for what happened. Please be advised that according to our records, your order was canceled on (____), and at that time, no amount was deducted from your bank account.\n\nIf a deduction appears on your bank account, the amount is expected to be automatically refunded within 5 to 7 business days, according to your bank's policy.\n\nTherefore, we kindly ask you to wait until this period is over and check your bank statement again.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nIf the issue persists, please contact your bank for further clarification, as the deduction was not made by noon.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cancel Authorized All Order After SLA",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding order number (____), we are very sorry for what happened. Please be advised that according to our records, your order was canceled on (____), and at that time, no amount was deducted from your bank account.\n\nIf a deduction appears on your bank account, it should have been automatically refunded within 5 to 7 business days, according to your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nSince the amount was deducted and not returned to you within the specified period, please contact your bank to cancel the payment, as the deduction was not made by noon.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cancel Authorized Item From The Order",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding order number (____), we are very sorry for what happened. Please be advised that according to our records, your item was canceled on (____), and at this time, no amount has been deducted from your bank account by noon.\n\nOnce the entire order reaches the \"Shipped\" status, the amount for the canceled item will be automatically reversed to your bank account (your payment source).\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Cancel Exported",
      "icon": "fas fa-building-circle-xmark",
      "templates": [
        {
          "heading": "Cancel Exported Asking QS / With Coupon",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we are sorry to hear about your wish to cancel, and we respect your decision.\n\nTo proceed, please provide us with the reason for cancellation to apply it to the order.\n\nPlease note that if you used a discount coupon with this order, it might not be usable again.\n\nTo confirm the cancellation and process your request as quickly as possible, please reply to this email with your confirmation.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cancel Exported Asking QS / No Coupon",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we are sorry to hear about your wish to cancel, and we respect your decision.\n\nTo proceed, please provide us with the reason for cancellation to apply it to the order.\n\nTo confirm the cancellation and process your request as quickly as possible, please reply to this email with your confirmation.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Taking Action To Cancel Exported / Exported With AWB COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we understand your wish to cancel, and the order has been canceled upon your request.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Taking Action To Cancel Exported / Exported With AWB Prepaid",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we understand your wish to cancel, and the order has been canceled upon your request.\n\nAfter cancellation, if paid by card, the amount will be automatically refunded to your bank account. This process will take 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Taking Action To Cancel Exported / Exported With AWB Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we understand your wish to cancel, and the order has been canceled upon your request.\n\nPlease note that when paying via \"ValU\", the refund will be directly returned to the payment source (\"ValU\").\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Taking Action To Cancel Exported / Exported With AWB Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we understand your wish to cancel, and the order has been canceled upon your request.\n\nPlease note that when paying with noon credit, the refund will be issued to your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Exported COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we understand your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Exported Prepaid Auto Transfer Not Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we understand your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nRegarding the refund, when paying by card, the amount is automatically refunded to your bank account and will take 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Exported Prepaid Auto Transfer Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we understand your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nRegarding the refund, please be advised that an automatic transfer request to your bank account was created on (____), and it will be processed within 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Exported Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we understand your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nPlease note that when paying via \"ValU\", the refund is returned directly to the payment source (\"ValU\").\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Exported Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we understand your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nPlease note that when paying with noon credit, the refund is issued to your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Cancel Shipped Noon Express",
      "icon": "fas fa-road-circle-xmark",
      "templates": [
        {
          "heading": "Cancel Shipped Asking QS / With Coupon / COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we are sorry to hear about your wish to cancel, and we respect your decision.\n\nPlease note that after review, it appears the order includes a discount coupon. If you used a coupon on this order, it might not be reusable.\n\nTo confirm the cancellation and process your request as quickly as possible, please reply to this email with your confirmation.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cancel Shipped Asking QS / With Coupon / Prepaid",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we are sorry to hear about your wish to cancel, and we respect your decision.\n\nPlease note that after review, it appears the order includes a discount coupon. If you used a coupon on this order, it might not be reusable.\n\nTo confirm the cancellation and process your request as quickly as possible, please reply to this email with your confirmation.\n\nPlease be advised that for card payments, the amount will be automatically refunded to your bank account and will take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cancel Shipped Asking QS / With Coupon / Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we are sorry to hear about your wish to cancel, and we respect your decision.\n\nPlease note that after review, it appears the order includes a discount coupon. If you used a coupon on this order, it might not be reusable.\n\nTo confirm the cancellation and process your request as quickly as possible, please reply to this email with your confirmation.\n\nPlease note that when paying via \"ValU\", the refund will be directly returned to the payment source (\"ValU\").\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cancel Shipped Asking QS / With Coupon / Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we are sorry to hear about your wish to cancel, and we respect your decision.\n\nPlease note that after review, it appears the order includes a discount coupon. If you used a coupon on this order, it might not be reusable.\n\nTo confirm the cancellation and process your request as quickly as possible, please reply to this email with your confirmation.\n\nPlease note that when paying with noon credit, the refund is issued to your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use your noon credit after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Taking Action To Cancel Shipped COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel and confirm that the cancellation request has been successfully processed.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Taking Action To Cancel Shipped Prepaid",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel and confirm that the cancellation request has been successfully processed.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nAs for the paid amount, for card payments, the refund will be automatically issued to your bank account within one day at most.\n\nIt will then take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Taking Action To Cancel Shipped Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel and confirm that the cancellation request has been successfully processed.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nAs for the paid amount, it will be returned within one day at most, as payments via \"ValU\" are refunded directly to the payment source (\"ValU\").\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Taking Action To Cancel Shipped Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel and confirm that the cancellation request has been successfully processed.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nAs for the paid amount, it will be returned to your noon wallet within one day at most.\n\nPlease be advised that when paying with noon credit, the amount remains in your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use your noon credit after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Shipped COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Shipped Prepaid Auto Transfer Not Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nAs for the paid amount, when paying by card, the amount is automatically refunded to your bank account within one day at most.\n\nIt will then be automatically transferred to your bank account and will take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Shipped Prepaid Auto Transfer Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nAs for the paid amount, if paid by card, the refund is automatically issued to your bank account. Upon review, it has been confirmed that this was done, and an automatic transfer request to your bank account was created on (____).\n\nIt will be processed within 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Shipped Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nAs for the paid amount, it will be returned within one day at most, as payments via \"ValU\" are refunded directly to the payment source (\"ValU\").\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Shipped Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nAs for the paid amount, it will be returned to your noon wallet within one day at most.\n\nPlease be advised that when paying with noon credit, the amount remains in your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use your noon credit after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Cancel 3PL",
      "icon": "fas fa-dice-three",
      "templates": [
        {
          "heading": "Taking Action To Cancel J&T Express Shipped COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we are sorry to hear about your wish to cancel, and we respect your decision.\n\nYour order has been reviewed, and it was found that the shipment is being delivered via J&T Express. To cancel the shipment, please inform the courier when they contact you.\n\nPlease be advised that the cancellation status will appear in your account once the product reaches noon's warehouses.\n\nWe would also like to inform you that the cancellation process may take up to a maximum of 30 days to complete.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Taking Action To Cancel J&T Express Shipped Prepaid",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we are sorry to hear about your wish to cancel, and we respect your decision.\n\nYour order has been reviewed, and it was found that the shipment is being delivered via J&T Express. To cancel the shipment, please inform the courier when they contact you.\n\nPlease be advised that the cancellation status will appear in your account once the product reaches noon's warehouses.\n\nWe would also like to inform you that the cancellation process may take up to a maximum of 30 days to complete.\n\nAfter cancellation, an automatic transfer request to your bank account will be created and processed within 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Taking Action To Cancel J&T Express Shipped Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we are sorry to hear about your wish to cancel, and we respect your decision.\n\nYour order has been reviewed, and it was found that the shipment is being delivered via J&T Express. To cancel the shipment, please inform the courier when they contact you.\n\nPlease be advised that the cancellation status will appear in your account once the product reaches noon's warehouses.\n\nWe would also like to inform you that the cancellation process may take up to a maximum of 30 days to complete.\n\nAfter cancellation, when paying via \"ValU\", the refund is returned directly to the payment source (\"ValU\").\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Taking Action To Cancel J&T Express Shipped Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we are sorry to hear about your wish to cancel, and we respect your decision.\n\nYour order has been reviewed, and it was found that the shipment is being delivered via J&T Express. To cancel the shipment, please inform the courier when they contact you.\n\nPlease be advised that the cancellation status will appear in your account once the product reaches noon's warehouses.\n\nWe would also like to inform you that the cancellation process may take up to a maximum of 30 days to complete.\n\nAfter cancellation, when paying with noon credit, the refund will be issued to your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Cancel Direct Delivery",
      "icon": "fas fa-bullseye",
      "templates": [
        {
          "heading": "Taking Action To Cancel Direct Delivery COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel and confirm that the cancellation request has been successfully processed.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Taking Action To Cancel Direct Delivery Prepaid",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel and confirm that the cancellation request has been successfully processed.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nAs for the paid amount, if paid by card, a refund to your bank account will be initiated within a maximum of 3 days.\n\nIt will then take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Taking Action To Cancel Direct Delivery Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel and confirm that the cancellation request has been successfully processed.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nAs for the paid amount, it will be returned within a maximum of 3 days, as payments via \"ValU\" are refunded directly to the payment source (\"ValU\").\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Taking Action To Cancel Direct Delivery Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel and confirm that the cancellation request has been successfully processed.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nAs for the paid amount, it will be returned to your noon wallet within a maximum of 3 days.\n\nPlease be advised that when paying with noon credit, the amount remains in your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use your noon credit after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Direct Delivery COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Direct Delivery Prepaid Auto Transfer Not Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nAs for the paid amount, if paid by card, a refund to your bank account will be initiated within a maximum of 3 days.\n\nIt will then take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Direct Delivery Prepaid Auto Transfer Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nAs for the paid amount, if paid by card, a refund to your bank account will be initiated within a maximum of 3 days.\n\nIt will then take 5 to 7 business days to reflect, depending on your bank's policy.\n\nIt has been confirmed that this has already been done, and an automatic transfer request to your bank account was created on (____).\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Direct Delivery Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nAs for the paid amount, it will be returned within a maximum of 3 days, as payments via \"ValU\" are refunded directly to the payment source (\"ValU\").\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Canceled Direct Delivery Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we appreciate your wish to cancel, and upon review, it has been confirmed that the order was already canceled by you.\n\nIf the courier contacts you because the order is in transit, you can inform them of your wish not to receive the order.\n\nPlease note that the cancellation status will be reflected in your account once the product is received in our warehouses.\n\nAs for the paid amount, it will be returned to your noon wallet within a maximum of 3 days.\n\nPlease be advised that when paying with noon credit, the amount remains in your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use your noon credit after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nWe would like to inform you that after cancellation, it will not be possible to reship or redeliver the order. However, if you wish to get these products again, you can easily place a new order.\n\nYou can also cancel the order yourself through your noon account by:\n\nLogging into your account.\nClicking on \"My Account\" > \"Orders\".\nSelecting the desired product and then canceling it using the available cancellation option.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Canceled Out Of Stock",
      "icon": "fas fa-arrow-trend-down",
      "templates": [
        {
          "heading": "Canceled As Out Of Stock Inform Cx COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience this may have caused. After reviewing your order, we would like to inform you that the requested product is out of stock, which forced us to cancel the order.\n\nWe attempted to find alternative options from other sellers to fulfill your order, but unfortunately, we were unable to provide the requested product in this case.\n\nWe appreciate your understanding and are working hard to ensure the availability of the products you desire in the future.\n\nOnce the product is available again, you can easily place a new order as you wish.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Canceled As Out Of Stock Inform Cx Prepaid Authorized",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience this may have caused. After reviewing your order, we would like to inform you that the requested product is out of stock, which forced us to cancel the order.\n\nWe attempted to find alternative options from other sellers to fulfill your order, but unfortunately, we were unable to provide the requested product in this case.\n\nWe appreciate your understanding and are working hard to ensure the availability of the products you desire in the future.\n\nOnce the product is available again, you can easily place a new order as you wish.\n\nYour order was canceled on (____), and at that time, no amount was deducted from your bank account.\n\nIf a deduction appears on your bank account, the amount is expected to be automatically refunded within 5 to 7 business days, according to your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nIf the issue persists, please contact your bank for further clarification, as the deduction was not made by noon.\n\nWe thank you for your understanding and always look forward to serving you better.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Canceled As Out Of Stock Inform Cx Prepaid Captured Auto Transfer Not Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience this may have caused. After reviewing your order, we would like to inform you that the requested product is out of stock, which forced us to cancel the order.\n\nWe attempted to find alternative options from other sellers to fulfill your order, but unfortunately, we were unable to provide the requested product in this case.\n\nWe appreciate your understanding and are working hard to ensure the availability of the products you desire in the future.\n\nOnce the product is available again, you can easily place a new order as you wish.\n\nRegarding the refund, an automatic transfer request to your bank account will be created and processed within 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nWe thank you for your understanding and always look forward to serving you better.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Canceled As Out Of Stock Inform Cx Prepaid Captured Auto Transfer Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience this may have caused. After reviewing your order, we would like to inform you that the requested product is out of stock, which forced us to cancel the order.\n\nWe attempted to find alternative options from other sellers to fulfill your order, but unfortunately, we were unable to provide the requested product in this case.\n\nWe appreciate your understanding and are working hard to ensure the availability of the products you desire in the future.\n\nOnce the product is available again, you can easily place a new order as you wish.\n\nRegarding the refund, please be advised that an automatic transfer request to your bank account was created on (____), and it will be processed within 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nWe thank you for your understanding and always look forward to serving you better.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Canceled As Out Of Stock Inform Cx Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience this may have caused. After reviewing your order, we would like to inform you that the requested product is out of stock, which forced us to cancel the order.\n\nWe attempted to find alternative options from other sellers to fulfill your order, but unfortunately, we were unable to provide the requested product in this case.\n\nWe appreciate your understanding and are working hard to ensure the availability of the products you desire in the future.\n\nOnce the product is available again, you can easily place a new order as you wish.\n\nPlease note that when paying via \"ValU\", the refund is returned directly to the payment source (\"ValU\").\n\nWe thank you for your understanding and always look forward to serving you better.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Canceled As Out Of Stock Inform Cx Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience this may have caused. After reviewing your order, we would like to inform you that the requested product is out of stock, which forced us to cancel the order.\n\nWe attempted to find alternative options from other sellers to fulfill your order, but unfortunately, we were unable to provide the requested product in this case.\n\nWe appreciate your understanding and are working hard to ensure the availability of the products you desire in the future.\n\nOnce the product is available again, you can easily place a new order as you wish.\n\nPlease note that when paying with noon credit, the refund will be issued to your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nWe thank you for your understanding and always look forward to serving you better.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Refused Update Raised a Complaint For Cancelation As Out Of Stock",
          "content": "Hala,\n\nThank you for choosing noon!\n\nThank you for contacting us regarding order number (______). We sincerely apologize for the issue you faced with the order cancellation.\n\nWe assure you that we are always striving to improve our services to ensure a distinguished experience that meets the expectations of our valued customers.\n\nWe would like to inform you that a complaint has been escalated regarding this issue to the concerned department, with all the details related to it, including your dissatisfaction with this cancellation.\n\nYou will be provided with updates within a maximum of (two days) from the date of submitting the complaint.\n\nThe concerned department will investigate and resolve the matter, and you will be contacted.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Know And Upset Raised a Complaint For Cancelation As Out Of Stock",
          "content": "Hala,\n\nThank you for choosing noon!\n\nThank you for contacting us regarding order number (______). We sincerely apologize for the issue you faced with the order cancellation.\n\nWe assure you that we are always striving to improve our services to ensure a distinguished experience that meets the expectations of our valued customers.\n\nWe would like to inform you that the requested product is out of stock, which forced us to cancel the order.\n\nWe attempted to find alternative options from other sellers to fulfill your order, but unfortunately, we were unable to provide the requested product in this case.\n\nWe appreciate your understanding and are working hard to ensure the availability of the products you desire in the future.\n\nOnce the product is available again, you can easily place a new order as you wish.\n\nIn appreciation of your dissatisfaction with this cancellation, we would like to inform you that the complaint related to this issue has been escalated to the concerned department, with all the details related to it to ensure proper handling of the matter.\n\nYou will be provided with updates within a maximum of (two days) from the date of submitting the complaint.\n\nThe concerned department will investigate and resolve the matter, and you will be contacted.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Canceled Reseller",
      "icon": "fas fa-repeat",
      "templates": [
        {
          "heading": "Canceled As Reseller Inform Cx COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience we may have caused. After review, we would like to inform you that the order has been canceled due to multiple similar orders being placed from different accounts belonging to you.\n\nIn our commitment to fairness and to allow all our valued customers to benefit from our offers, a maximum purchase limit is set for each customer. This measure aims to ensure that as many customers as possible can benefit from our products and exclusive offers.\n\nFor more details, you can refer to section 2.8 of the Terms of Sale available on our website, which states:\n\n\"Bulk and Multiple Purchases: We reserve the right to reject any orders at our sole discretion in the event of discovering bulk or multiple purchases of similar products.\"\n\nWe thank you for your understanding and always look forward to serving you better.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Canceled As Reseller Inform Cx Prepaid Authorized",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience we may have caused. After review, we would like to inform you that the order has been canceled due to multiple similar orders being placed from different accounts belonging to you.\n\nIn our commitment to fairness and to allow all our valued customers to benefit from our offers, a maximum purchase limit is set for each customer. This measure aims to ensure that as many customers as possible can benefit from our products and exclusive offers.\n\nFor more details, you can refer to section 2.8 of the Terms of Sale available on our website, which states:\n\n\"Bulk and Multiple Purchases: We reserve the right to reject any orders at our sole discretion in the event of discovering bulk or multiple purchases of similar products.\"\n\nYour order was canceled on (____), and at that time, no amount was deducted from your bank account.\n\nIf a deduction appears on your bank account, the amount is expected to be automatically refunded within 5 to 7 business days, according to your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nIf the issue persists, please contact your bank for further clarification, as the deduction was not made by noon.\n\nWe thank you for your understanding and always look forward to serving you better.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Canceled As Reseller Inform Cx Prepaid Captured Auto Transfer Not Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience we may have caused. After review, we would like to inform you that the order has been canceled due to multiple similar orders being placed from different accounts belonging to you.\n\nIn our commitment to fairness and to allow all our valued customers to benefit from our offers, a maximum purchase limit is set for each customer. This measure aims to ensure that as many customers as possible can benefit from our products and exclusive offers.\n\nFor more details, you can refer to section 2.8 of the Terms of Sale available on our website, which states:\n\n\"Bulk and Multiple Purchases: We reserve the right to reject any orders at our sole discretion in the event of discovering bulk or multiple purchases of similar products.\"\n\nRegarding the refund, an automatic transfer request to your bank account will be created and processed within 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Canceled As Reseller Inform Cx Prepaid Captured Auto Transfer Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience we may have caused. After review, we would like to inform you that the order has been canceled due to multiple similar orders being placed from different accounts belonging to you.\n\nIn our commitment to fairness and to allow all our valued customers to benefit from our offers, a maximum purchase limit is set for each customer. This measure aims to ensure that as many customers as possible can benefit from our products and exclusive offers.\n\nFor more details, you can refer to section 2.8 of the Terms of Sale available on our website, which states:\n\n\"Bulk and Multiple Purchases: We reserve the right to reject any orders at our sole discretion in the event of discovering bulk or multiple purchases of similar products.\"\n\nRegarding the refund, please be advised that an automatic transfer request to your bank account was created on (____), and it will be processed within 5 to 7 business days, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Canceled As Reseller Inform Cx Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience we may have caused. After review, we would like to inform you that the order has been canceled due to multiple similar orders being placed from different accounts belonging to you.\n\nIn our commitment to fairness and to allow all our valued customers to benefit from our offers, a maximum purchase limit is set for each customer. This measure aims to ensure that as many customers as possible can benefit from our products and exclusive offers.\n\nFor more details, you can refer to section 2.8 of the Terms of Sale available on our website, which states:\n\n\"Bulk and Multiple Purchases: We reserve the right to reject any orders at our sole discretion in the event of discovering bulk or multiple purchases of similar products.\"\n\nPlease note that when paying via \"ValU\", the refund is returned directly to the payment source (\"ValU\").\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Canceled As Reseller Inform Cx Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience we may have caused. After review, we would like to inform you that the order has been canceled due to multiple similar orders being placed from different accounts belonging to you.\n\nIn our commitment to fairness and to allow all our valued customers to benefit from our offers, a maximum purchase limit is set for each customer. This measure aims to ensure that as many customers as possible can benefit from our products and exclusive offers.\n\nFor more details, you can refer to section 2.8 of the Terms of Sale available on our website, which states:\n\n\"Bulk and Multiple Purchases: We reserve the right to reject any orders at our sole discretion in the event of discovering bulk or multiple purchases of similar products.\"\n\nPlease note that when paying with noon credit, the refund will be issued to your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use it after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Refused Update Raised a Complaint For Cancelation As Reseller",
          "content": "Hala,\n\nThank you for choosing noon!\n\nThank you for contacting us regarding order number (______). We sincerely apologize for the issue you faced with the order cancellation.\n\nWe assure you that we are always striving to improve our services to ensure a distinguished experience that meets the expectations of our valued customers.\n\nWe would like to inform you that a complaint has been escalated regarding this issue to the concerned department, with all the details related to it, including your dissatisfaction with this cancellation.\n\nYou will be provided with updates within a maximum of (two days) from the date of submitting the complaint.\n\nThe concerned department will investigate and resolve the matter, and you will be contacted.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Know And Upset Raised a Complaint For Cancelation As Reseller",
          "content": "Hala,\n\nThank you for choosing noon!\n\nThank you for contacting us regarding order number (______). We sincerely apologize for the issue you faced with the order cancellation.\n\nWe assure you that we are always striving to improve our services to ensure a distinguished experience that meets the expectations of our valued customers.\n\nWe would like to inform you that the order has been canceled due to multiple similar orders being placed from different accounts belonging to you.\n\nIn our commitment to fairness and to allow all our valued customers to benefit from our offers, a maximum purchase limit is set for each customer. This measure aims to ensure that as many customers as possible can benefit from our products and exclusive offers.\n\nFor more details, you can refer to section 2.8 of the Terms of Sale available on our website, which states:\n\n\"Bulk and Multiple Purchases: We reserve the right to reject any orders at our sole discretion in the event of discovering bulk or multiple purchases of similar products.\"\n\nIn appreciation of your dissatisfaction with this cancellation, we would like to inform you that the complaint related to this issue has been escalated to the concerned department, with all the details related to it to ensure proper handling of the matter.\n\nYou will be provided with updates within a maximum of (two days) from the date of submitting the complaint.\n\nThe concerned department will investigate and resolve the matter, and you will be contacted.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Canceled Without Notify Cx",
      "icon": "fas fa-user-xmark",
      "templates": [
        {
          "heading": "Canceled Without Notifying Cx Inform COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience this may have caused. After review, we would like to inform you that the order was canceled due to the shipment being damaged and not meeting the quality standards we strive to achieve.\n\nOur goal is to provide an excellent service and ensure your orders arrive in the best possible condition. We appreciate your understanding and are working hard to enhance your experience with us in the future.\n\nPlease note that the cancellation status will be reflected in your account once the product reaches our warehouses.\n\nPlease be advised that after canceling the order, it will not be possible to reship or redeliver it. However, you can easily place a new order to get the products you desire.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Canceled Without Notifying Cx Inform Prepaid Auto Transfer Not Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience this may have caused. After review, we would like to inform you that the order was canceled due to the shipment being damaged and not meeting the quality standards we strive to achieve.\n\nOur goal is to provide an excellent service and ensure your orders arrive in the best possible condition. We appreciate your understanding and are working hard to enhance your experience with us in the future.\n\nPlease note that the cancellation status will be reflected in your account once the product reaches our warehouses.\n\nAs for the paid amount, for card payments, a refund will be initiated to your bank account within a maximum of 3 days after the cancellation is reflected in your account.\n\nIt will then take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nPlease be advised that after canceling the order, it will not be possible to reship or redeliver it. However, you can easily place a new order to get the products you desire.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Canceled Without Notifying Cx Inform Prepaid Auto Transfer Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience this may have caused. After review, we would like to inform you that the order was canceled due to the shipment being damaged and not meeting the quality standards we strive to achieve.\n\nOur goal is to provide an excellent service and ensure your orders arrive in the best possible condition. We appreciate your understanding and are working hard to enhance your experience with us in the future.\n\nAs for the paid amount, for card payments, a refund will be initiated to your bank account within a maximum of 3 days after the cancellation is reflected in your account.\n\nIt will then take 5 to 7 business days to reflect, depending on your bank's policy.\n\nUpon review, it has been confirmed that this was already done, and an automatic transfer request to your bank account was created on (____).\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nPlease be advised that after canceling the order, it will not be possible to reship or redeliver it. However, you can easily place a new order to get the products you desire.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Canceled Without Notifying Cx Inform Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience this may have caused. After review, we would like to inform you that the order was canceled due to the shipment being damaged and not meeting the quality standards we strive to achieve.\n\nOur goal is to provide an excellent service and ensure your orders arrive in the best possible condition. We appreciate your understanding and are working hard to enhance your experience with us in the future.\n\nPlease note that the cancellation status will be reflected in your account once the product reaches our warehouses.\n\nAs for the paid amount, it will be returned within a maximum of 3 days after the cancellation is reflected in your account, as payments via \"ValU\" are refunded directly to the payment source (\"ValU\").\n\nPlease be advised that after canceling the order, it will not be possible to reship or redeliver it. However, you can easily place a new order to get the products you desire.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Canceled Without Notifying Cx Inform Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience this may have caused. After review, we would like to inform you that the order was canceled due to the shipment being damaged and not meeting the quality standards we strive to achieve.\n\nOur goal is to provide an excellent service and ensure your orders arrive in the best possible condition. We appreciate your understanding and are working hard to enhance your experience with us in the future.\n\nPlease note that the cancellation status will be reflected in your account once the product reaches our warehouses.\n\nAs for the paid amount, it will be returned to your noon wallet within a maximum of 3 days after the cancellation is reflected in your account.\n\nSince payment was made with noon credit, the amount will remain in your noon wallet.\n\nYour noon credit is valid for a lifetime, and you can use it to place a new order if you wish.\n\nYou can use your noon credit after selecting the address and during payment method selection, by checking the box labeled (Use my noon credit).\n\nPlease be advised that after canceling the order, it will not be possible to reship or redeliver it. However, you can easily place a new order to get the products you desire.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Refused Update Raised a Complaint For Canceled Without Notifying Cx",
          "content": "Hala,\n\nThank you for choosing noon!\n\nThank you for contacting us regarding order number (______). We sincerely apologize for the issue you faced with the order cancellation.\n\nWe assure you that we are always striving to improve our services to ensure a distinguished experience that meets the expectations of our valued customers.\n\nWe would like to inform you that a complaint has been escalated regarding this issue to the concerned department, with all the details related to it, including your dissatisfaction with this cancellation.\n\nYou will be provided with updates within a maximum of (two days) from the date of submitting the complaint.\n\nThe concerned department will investigate and resolve the matter, and you will be contacted.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Cx Already Upset Raised a Complaint For Canceled Without Notifying Cx",
          "content": "Hala,\n\nThank you for choosing noon!\n\nThank you for contacting us regarding order number (______). We sincerely apologize for the issue you faced with the order cancellation.\n\nWe assure you that we are always striving to improve our services to ensure a distinguished experience that meets the expectations of our valued customers.\n\nWe would like to inform you that the order was canceled due to the shipment being damaged and not meeting the quality standards we strive to achieve.\n\nIn appreciation of your dissatisfaction with this cancellation, we would like to inform you that the complaint related to this issue has been escalated to the concerned department, with all the details related to it to ensure proper handling of the matter.\n\nYou will be provided with updates within a maximum of (two days) from the date of submitting the complaint.\n\nThe concerned department will investigate and resolve the matter, and you will be contacted.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Undeliverable",
      "icon": "fas fa-plane-circle-xmark",
      "templates": [
        {
          "heading": "Undeliverable 3 Attempt Failed COD",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience you have faced. After review, it appears that the order was canceled after exhausting all delivery attempts. We would like to clarify that we attempt to deliver the order three times, and if delivery is unsuccessful in all attempts, the order is automatically canceled.\n\nPlease be advised that the cancellation status will be reflected in your account once the product reaches our warehouses.\n\nPlease note that after canceling the order, it will not be possible to reship or redeliver it. However, you can easily place a new order to get the products you desire.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Undeliverable 3 Attempt Failed Prepaid Auto Transfer Not Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience you have faced. After review, it appears that the order was canceled after exhausting all delivery attempts. We would like to clarify that we attempt to deliver the order three times, and if delivery is unsuccessful in all attempts, the order is automatically canceled.\n\nPlease be advised that the cancellation status will be reflected in your account once the product reaches our warehouses.\n\nAs for the paid amount, for card payments, a refund will be initiated to your bank account within a maximum of 3 days after the cancellation is reflected in your account.\n\nIt will then take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nPlease note that after canceling the order, it will not be possible to reship or redeliver it. However, you can easily place a new order to get the products you desire.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Undeliverable 3 Attempt Failed Prepaid Auto Transfer Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience you have faced. After review, it appears that the order was canceled after exhausting all delivery attempts. We would like to clarify that we attempt to deliver the order three times, and if delivery is unsuccessful in all attempts, the order is automatically canceled.\n\nPlease be advised that the cancellation status will be reflected in your account once the product reaches our warehouses.\n\nAs for the paid amount, for card payments, a refund will be initiated to your bank account within a maximum of 3 days after the cancellation is reflected in your account.\n\nIt will then take 5 to 7 business days to reflect, depending on your bank's policy.\n\nUpon review, it has been confirmed that this was already done, and an automatic transfer request to your bank account was created on (____).\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nPlease note that after canceling the order, it will not be possible to reship or redeliver it. However, you can easily place a new order to get the products you desire.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Undeliverable 3 Attempt Failed Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience you have faced. After review, it appears that the order was canceled after exhausting all delivery attempts. We would like to clarify that we attempt to deliver the order three times, and if delivery is unsuccessful in all attempts, the order is automatically canceled.\n\nPlease be advised that the cancellation status will be reflected in your account once the product reaches our warehouses.\n\nAs for the paid amount, it will be returned within a maximum of 3 days after the cancellation is reflected in your account, as payments via \"ValU\" are refunded directly to the payment source (\"ValU\").\n\nPlease note that after canceling the order, it will not be possible to reship or redeliver it. However, you can easily place a new order to get the products you desire.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Undeliverable 3 Attempt Failed Noon Credit",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (____), we apologize for any inconvenience you have faced. After review, it appears that the order was canceled after exhausting all delivery attempts. We would like to clarify that we attempt to deliver the order three times, and if delivery is unsuccessful in all attempts, the order is automatically canceled.\n\nPlease be advised that the cancellation status will be reflected in your account once the product reaches our warehouses.\n\nAs for the paid amount, it will be refunded to your noon wallet within a maximum of 3 days after the cancellation is reflected in your account.\n\nSince the payment was made using noon credit, the amount will remain in your noon wallet, and you can use it to place a new order at any time, as noon credit is valid for a lifetime.\n\nTo use your noon credit, you can select the appropriate option when choosing the payment method after selecting the address, by checking the option (Use my noon credit).\n\nPlease note that after canceling the order, it will not be possible to reship or redeliver it. However, you can easily place a new order to get the products you desire.\n\nFor further assistance, do not hesitate to contact our customer service team via email Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Undeliverable Collection Point Attempt Failed Prepaid Auto Transfer Not Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_____), we apologize for any inconvenience you may have faced. After review, it was found that the order was canceled due to not being collected from the Collection Point within the specified timeframe.\n\nPlease be aware that the order is kept at the Collection Point for only 5 days, and if it is not collected during this period, the shipment is automatically returned to noon's warehouses, the order is canceled, and a full refund is issued.\n\nAs for the paid amount, if paid by card, a refund will be initiated to your bank account within a maximum of 3 days after the cancellation is reflected in your account.\n\nIt will then take 5 to 7 business days to reflect, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nPlease note that after the order is canceled, it will not be possible to reship or redeliver it. However, you can easily create a new order to get the products you want.\n\nFor further assistance, please do not hesitate to contact our Customer Care team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Undeliverable Collection Point Attempt Failed Prepaid Auto Transfer Done",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_____), we apologize for any inconvenience you may have faced. After review, it was found that the order was canceled due to not being collected from the Collection Point within the specified timeframe.\n\nPlease be aware that the order is kept at the Collection Point for only 5 days, and if it is not collected during this period, the shipment is automatically returned to noon's warehouses, the order is canceled, and a full refund is issued.\n\nAs for the paid amount, if paid by card, a refund will be initiated to your bank account within a maximum of 3 days after the cancellation is reflected in your account.\n\nIt will then take 5 to 7 business days to reflect, depending on your bank's policy.\n\nUpon review, it has been confirmed that this has already been done, and an automatic transfer request to your bank account was created on (____).\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nPlease note that after the order is canceled, it will not be possible to reship or redeliver it. However, you can easily create a new order to get the products you want.\n\nFor further assistance, please do not hesitate to contact our Customer Care team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Undeliverable Collection Point Attempt Failed Valu",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_____), we apologize for any inconvenience you may have faced. After review, it was found that the order was canceled due to not being collected from the Collection Point within the specified timeframe.\n\nPlease be aware that the order is kept at the Collection Point for only 5 days, and if it is not collected during this period, the shipment is automatically returned to noon's warehouses, the order is canceled, and a full refund is issued.\n\nAs for the paid amount, it will be returned within a maximum of 3 days after the cancellation is reflected in your account, as payments via \"ValU\" are refunded directly to the payment source (\"ValU\").\n\nPlease note that after the order is canceled, it will not be possible to reship or redeliver it. However, you can easily create a new order to get the products you want.\n\nFor further assistance, please do not hesitate to contact our Customer Care team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "K.B Links",
      "icon": "fas fa-swatchbook",
      "templates": [
        {
          "heading": "Undeliverable",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=published&showAllArticles=true&rootcategoryId=950914000041316047&categoryId=950914000042231029&status=published#Solutions/dv/950914000042246994/en"
        },
        {
          "heading": "Cancellation EGY",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=published&showAllArticles=true&rootcategoryId=950914000041316047&categoryId=950914000042231029&status=published#Solutions/dv/950914000042246267/en"
        },
        {
          "heading": "Refund EGY",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231044#Solutions/dv/950914000042245878/en"
        }
      ]
    }
  ]
},


/* Mobiles Customs Fees */
{
 "title": "Mobiles Customs Fees",
 "icon": "fas fa-mobile",
 "tabs": [
   {
     "title": "General Inquiry",
     "icon": "fas fa-book",
     "templates": [
       {
         "heading": "Cx Asking About Customs Fees And He Didn't Make The Order Yet",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding your inquiry about fees, we would like to inform you that there are no additional fees required, as the price includes the phone's tax.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Cx Asking About Customs Fees For Order He Made",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding order number (____), we have received your inquiry about the fees. We kindly ask you to contact the National Telecommunication Regulatory Authority (NTRA) directly for more information and precise details regarding your inquiry.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   },
   {
     "title": "Asked To Pay Custom Fees",
     "icon": "fas fa-file-invoice-dollar",
     "templates": [
       {
         "heading": "Asking Cx To Send Proof",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nRegarding order number (____), we have received your inquiry regarding the required fees, and we would like to assist you in the best possible way.\n\nTherefore, please provide us with the following information:\n\n- A screenshot of the NATRA message you received.\n- A screenshot from the \"Telephony\" app showing IMEI 1 and IMEI 2 numbers.\n- A photo of the phone box with IMEI 1 and IMEI 2 clearly visible.\n\nWe look forward to your response to proceed with the matter.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."       },
       {
         "heading": "Proof Shared Raised a Request",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe have received your inquiry regarding order number (______). Please be informed that the request has been escalated to the relevant department, and the files you sent, along with all details, have been shared with them.\n\nYou will receive updates within a maximum of (3 days) from the date the request was raised. The relevant department will review the matter and resolve it accordingly, and you will be contacted directly.\n\nFor further assistance, please feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
        }
     ]
   },
   {
     "title": "K.B Links",
     "icon": "fas fa-swatchbook",
     "templates": [
       {
         "heading": "Mobiles Customs Fees - EGY",
         "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231074#Solutions/dv/950914003440618048/en"
       }
     ]
   }
 ]
},



/* Locker / Collection Point */
{
  "id": "locker_collection_point",
  "title": "Locker / Collection Point",
  "icon": "fas fa-door-closed",
  "tabs": [
    {
      "title": "Locker",
      "icon": "fas fa-building-lock",
      "templates": [
        {
          "heading": "About Locker",
          "content": "Hala,\n\nThank you for choosing noon!\n\nPlease be advised that the \"noon Locker\" service allows you to easily receive your shipments from the nearest noon Locker.\n\nTo choose a noon Locker, follow these steps:\n\nWhile completing your order, click on \"Add a new address.\"\nEnable the \"Show noon Lockers\" option.\nA list of all available lockers in your area will appear.\nChoose the locker closest to you, then click on \"Confirm Location.\"\nSave the new address and use it to complete your order.\n\nShipment limits for the locker:\n\nThe maximum number of items per order is 3.\nThe maximum dimensions for each item must fit the locker size.\nSome products cannot be sent to a \"noon Locker\" due to the risk of damage or incompatibility with the locker:\n\nCosmetics and skincare products.\nPerfumes (available only from November to March).\nFlammable materials.\nOily materials.\nHealth and hygiene products.\nAny product that may spoil due to heat.\nLarge products.\nIf the shipment is large and does not fit the locker, the delivery team will contact you to arrange delivery to an alternative address on the same day.\n\nHow to receive your shipment from a \"noon Locker\":\n\nOnce your shipment arrives at the \"noon Locker,\" we will send you a PIN code via email and SMS.\nGo to the specified \"noon Locker\" location in the message and use the PIN code to complete the pickup process.\nEnter the code on the locker screen, and it will open for you to receive your shipment.\nIf you have multiple shipments, they will be placed in multiple lockers with different PIN codes.\n\nShipment retention period in a \"noon Locker\":\n\nThe shipment will be available for pickup for 5 days from its delivery date.\nAfter this period, the shipment will be returned to noon.\n\nIf you wish to cancel a shipment in a \"noon Locker\":\n\nYou can cancel individual shipments within one or two days according to the usual process.\nFor multiple shipments, you must wait until the 5-day period has passed and then follow the usual return process.\n\nImportant notes:\n\nPlease note that the order must be prepaid.\nThe pickup address cannot be changed from a \"noon Locker\" to another address.\nThe PIN code is valid for 7 days. After the 7th day, you will not be able to receive the shipment and must reorder it.\n\nIf you need additional assistance or have any inquiries, you can always contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Locker",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_____), you have chosen to receive it from a \"noon Locker.\"\n\nThe order is now being shipped, and the expected delivery date to the \"noon Locker\" is (00 of the current month).\n\nOnce your shipment arrives at the \"noon Locker,\" we will send you a PIN code via email and SMS.\nGo to the specified \"noon Locker\" location in the message and use the PIN code to complete the pickup process.\nEnter the code on the locker screen, and it will open for you to receive your shipment.\n\nPlease note that the order must be picked up within 5 days of its arrival at the noon Locker, otherwise it will be returned to noon and canceled entirely.\n\nThe PIN code is valid for 7 days. After the 7th day, you will not be able to receive the shipment and must reorder it.\n\nHow to receive your shipment from a \"noon Locker\":\n\nOnce your shipment arrives at the \"noon Locker,\" we will send you a PIN code via email and SMS.\nGo to the specified \"noon Locker\" location in the message and use the PIN code to complete the pickup process.\nEnter the code on the locker screen, and it will open for you to receive your shipment.\n\nTo check the order status and expected delivery date:\n\nLog in to the noon website or app.\nClick on (My Account), then (Orders).\nYou will find the expected delivery date and order number above each product.\nTo check the tracking status, click on the product or order you want to track.\nYou will be directed to the tracking details page.\nClick on \"View Full Tracking\" and track your order or product according to the tracking statuses shown, with an explanation for each status below.\n\nFor further assistance, please do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Locker Pin Not Working Exceeded 7 Days SLA Prepaid",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_____), we are sorry to hear that your noon Locker PIN is not working, which is unusual.\n\nUpon review, it was found that the PIN has exceeded its validity period.\nIt is valid for 7 days. After the 7th day, you will not be able to receive the shipment and must reorder it.\nThis means the current order has been canceled and, unfortunately, cannot be reshipped.\n\nPlease note that for card payments, the amount will be refunded to your bank account automatically and will take 5-7 business days to appear, depending on your bank's policy.\n\nPlease note that business days do not include weekends and official holidays such as Friday and Saturday.\n\nTo track the status of your refund, you can obtain the Refund Reference Number (RRN) to follow up with your bank.\n\nThis can be done by going to \"My Account\", selecting the order from the \"Orders\" section, and then choosing \"View Refund Tracking Number\".\n\nWe also have a detailed refund page accessible via the link on the word \"here\" in the Completed Refund section, which explains the products/fees that were refunded.\n\nFor further assistance, please do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Locker Pin Not Working Didn't Exceed 7 Days SLA",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_____), we are sorry to hear that your noon Locker PIN is not working, which is unusual.\n\nPlease ensure that you have entered the PIN correctly, as it can sometimes be difficult to see the screen under sunlight.\n\nPlease clarify if you entered the code and the locker did not open, or if there was no order number.\n\nPlease confirm the locker address (_____).\n\nAlso, as an alternative solution, we can deliver the order to another address. If this solution works for you, please provide us with the new address details so we can deliver to it.\n\nWe await your reply to this email with the suitable delivery address so we can escalate the matter to the concerned department.\n\nFor further assistance, please do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Locker Pin Not Working Raised a Request",
          "content": "Hala,\n\nThank you for choosing noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for the issue you faced with the locker PIN and thank you for answering the questions.\n\nPlease note that a request has been raised with the concerned department with the address you provided for delivery.\n\nYou will receive updates within a maximum of (1 day) from the date the request was raised.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Locker Closed By Customer Accidentally / The Locker Is Not Working",
          "content": "Hala,\n\nThank you for choosing noon!\n\nWe have received your inquiry regarding order number (______). We are sorry to hear about what happened when receiving the product from the locker.\n\nWe can deliver the order to another address. If this solution works for you, please provide us with the new address details so we can deliver to it.\n\nWe await your reply to this email with the suitable delivery address so we can escalate the matter to the concerned department.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Locker Closed By Customer Accidentally / The Locker Is Not Working Raised a Request",
          "content": "Hala,\n\nThank you for choosing noon!\n\nWe have received your inquiry regarding order number (______), and we thank you for providing the delivery address.\n\nPlease note that a request has been raised with the concerned department with the address you provided for delivery.\n\nYou will receive updates within a maximum of (1 day) from the date the request was raised.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Locker Closed By Customer Accidentally / The Locker Is Not Working Raised a Complaint",
          "content": "Hala,\n\nThank you for choosing noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for the issue you faced with the locker, and since delivery to another address was rejected.\n\nPlease note that a complaint has been raised regarding this issue, with all details clarified to the concerned department.\n\nYou will be provided with updates within a maximum of (2 days) from the date of submitting the complaint.\n\nThe concerned department will investigate and resolve the matter, and you will be contacted directly.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "CX Did Not receive The Locker PIN Asking QS",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_____), we are sorry to hear that your noon Locker PIN did not arrive, which is unusual.\n\nOnce your shipment arrives at the \"noon Locker,\" we send you a PIN code via email and SMS.\n\nPlease review the phone number and email registered with your account.\n\nPlease confirm the phone number (_____).\n\nAlso, please confirm the email (_____).\n\nWe await your reply to this email so we can escalate the matter to the concerned department.\n\nFor further assistance, please do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "CX Did Not receive The Locker PIN Raised a Request",
          "content": "Hala,\n\nThank you for choosing noon!\n\nWe have received your inquiry regarding order number (______), and we thank you for confirming the information mentioned in the previous email.\n\nPlease note that a request has been raised with the concerned department to generate a new pickup code.\n\nYou will be provided with updates within a maximum of (1 day) from the date the request was raised.\n\nOnce the code is generated, you will be contacted via phone.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Locker Is Empty Asking QS",
          "content": "Hala,\n\nThank you for choosing noon!\n\nWe have received your inquiry regarding order number (______), and we apologize for the issue with the empty locker.\n\nPlease note that the issue may be related to the shipment size, as it may not have fit the locker, and it is expected that the delivery agent has contacted you to arrange a delivery time and location on the same day.\n\nPlease review and clarify: Did the noon delivery agent contact you or not?\n\nWe await your response to provide the necessary assistance.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Locker Is Empty Raised a Complaint",
          "content": "Hala,\n\nThank you for choosing noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for the issue you faced with the empty noon Locker.\n\nPlease note that a complaint has been raised regarding this issue after confirming that the agent did not contact you, with all details clarified to the concerned department.\n\nYou will be provided with updates within a maximum of (3 days) from the date of submitting the complaint.\n\nThe concerned department will investigate and resolve the matter, and you will be contacted directly.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Locker Is Causing Electric Shocks / Flood / Fire / Etc",
          "content": "Hala,\n\nThank you for choosing noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for the issue you faced with the noon Locker.\n\nPlease note that a complaint has been raised regarding this issue, with all details clarified to the concerned department, and it will be addressed immediately.\n\nThe concerned department will investigate and resolve the matter.\n\nYou will be contacted by the complaints department within 4 to 6 hours, between 9 AM and 9 PM.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "Collection Point",
      "icon": "fas fa-boxes-stacked",
      "templates": [
        {
          "heading": "About Collection Point",
          "content": "Hala,\n\nThank you for choosing noon!\n\nPlease be advised that the noon Collection Point service allows you to easily receive your shipments from the nearest collection point.\n\nHow to choose a collection point for your order:\n\nWhile selecting the address, click on \"Add a new address\".\nEnable the \"Show noon Collection Points\" option, and all available points in your area will appear.\nSelect the most suitable location and click on \"Save Address\".\nChoose the saved address when completing your order.\nYou will receive a confirmation email and SMS.\n\nImportant notes:\n\nThe shipment must be collected from the collection point within 5 days of its delivery date.\nIf not collected within this period, the shipment will be returned to noon, and a full refund will be issued.\nTo collect the shipment, please provide the confirmation code sent to you via SMS to the collection point representative.\n\nShipment limits for collection points:\n\nThe maximum number of items per order is 5.\nLarge-sized orders (such as large appliances or TVs) are not eligible for collection points.\nFragile or perishable products (such as flowers or food items) may not be supported.\nMaximum order value: 5000 EGP.\nMaximum number of items: 5.\nMaximum dimensions per item: 45 * 60 * 45 cm.\n\nHow to view active collection points:\n\nGo to the addresses section and click on \"Add a new address\".\nChoose \"Show noon Collection Points\".\nA list of all active centers will appear on the map; choose the one closest to you.\n\nCan I change the delivery method between a collection point and a delivery address?\n\nUnfortunately, once the order is confirmed and a collection point is selected, the delivery method cannot be changed to an address.\n\nWhy didn't the collection point option appear for me?\n\nThere is no collection point near your location.\nThe order contains ineligible products such as large appliances or fragile items.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Track Collection Point",
          "content": "Hala,\n\nThank you for choosing noon!\n\nRegarding your order number (_____), you have chosen to receive it from a Collection Point.\n\nThe order is now being shipped, and the expected delivery date to the collection point is (00 of the current month).\n\nOnce the order is delivered to the collection point, you will receive an email and SMS containing your delivery code (Pin Code), which you will need to provide to the collection point representative to receive your order.\n\nPlease note that the order must be collected within 5 days of its arrival at the collection point, otherwise it will be returned to noon and canceled entirely.\n\nTo check the order status and expected delivery date:\n\nLog in to the noon website or app.\nClick on (My Account), then (Orders).\nYou will find the expected delivery date and order number above each product.\nTo check the tracking status, click on the product or order you want to track.\nYou will be directed to the tracking details page.\nClick on \"View Full Tracking\" and track your order or product according to the tracking statuses shown, with an explanation for each status below.\n\nFor further assistance, please do not hesitate to contact our customer service team via email: Egypt@noon.com.\n\nThank you,\nnoon Team."
        },
        {
          "heading": "Collection Point Raised a Complaint",
          "content": "Hala,\n\nThank you for choosing noon!\n\nWe have received your inquiry regarding order number (______). We sincerely apologize for the issue you faced with the collection point.\n\nPlease note that a complaint has been raised regarding this issue, with all details clarified to the concerned department.\n\nYou will be provided with updates within a maximum of (two days) from the date of submitting the complaint. The concerned department will investigate and resolve the matter, and you will be contacted directly.\n\nFor further assistance, do not hesitate to contact our customer service team at Egypt@noon.com.\n\nThank you,\nnoon Team."
        }
      ]
    },
    {
      "title": "K.B Links",
      "icon": "fas fa-swatchbook",
      "templates": [
        {
          "heading": "Noon Collection Points",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231074#Solutions/dv/950914002930389669/en"
        },
        {
          "heading": "Delivery to a noon collect locker - EGY",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page?articlestatus=latest&rootcategoryId=950914000041316047&categoryId=950914000042231074#Solutions/dv/950914000042249158/en"
        },
        {
          "heading": "Noon Lockers FAQs",
          "content": "https://help.noon.com/agent/nooncs/help-center-eg/knowledge-base/page#Solutions/dv/950914000042250516/en"
        }
      ]
    }
  ]
},



/* Troubleshooting */
{
 "title": "Troubleshooting",
 "icon": "fas fa-clipboard-check",
 "tabs": [
   {
     "title": "Troubleshooting",
     "icon": "fas fa-clipboard-check",
     "templates": [
       {
         "heading": "OTP Troubleshooting",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe apologize for the issue you are facing in receiving the verification code (OTP).\n\nWe kindly ask you to first check the WhatsApp application, as the verification code is sent via the app only on the first attempt.\n\nOn the second and third attempts, the code will be sent via both WhatsApp and SMS.\n\nYou can make three attempts to receive the code within a 24-hour period.\n\nIf the three attempts are exhausted, you can try again after 24 hours.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Didn't Receive The Mail Troubleshooting",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe apologize for the issue you are facing in receiving the email.\n\nPlease first ensure that you are logged into the correct email associated with your Noon account.\n\nThen, check the spam folder as the email may have been directed there.\n\nWe also recommend checking if there is sufficient space in your email to ensure proper receipt of messages.\n\nPlease note that the email may take up to an hour to arrive, so we kindly ask you to check within this period.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "App Error Troubleshooting",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe apologize for the issue you are facing with the app.\n\nWe recommend first checking your internet connection.\n\nThen, please uninstall the current version of the app and ensure that any old data or cache is deleted.\n\nAfter that, reinstall the app with the latest available version.\n\nTry the app again. If you are still facing the issue, please attach a screenshot illustrating the issue in your reply to the same email.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       },
       {
         "heading": "Website Error Troubleshooting",
         "content": "Hala,\n\nThank you for choosing Noon!\n\nWe apologize for the issue you are facing with the website.\n\nWe recommend first checking your internet connection.\n\nThen, please ensure that any old data or cache related to the Noon website is deleted, along with any browser extensions that may affect performance.\n\nAfter that, try again. If the issue persists, please try another browser.\n\nIf you are still facing the issue, please attach a screenshot illustrating the issue in your reply to the same email.\n\nFor further assistance, feel free to contact our customer service team at Egypt@noon.com.\n\nThank you,\nNoon Team."
       }
     ]
   }
 ]
},





];





