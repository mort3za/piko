export const onJsonResponse = async (response: Response) => await response.json();

// const res = {
//   data: {
//     data: [
//       {
//         user: {
//           name: "Ali Spittel 🐞",
//           public_metrics: {
//             followers_count: 127349,
//             following_count: 1584,
//             tweet_count: 25142,
//             listed_count: 1610,
//           },
//           created_at: "2015-03-15T16:51:40.000Z",
//           entities: {
//             url: {
//               urls: [
//                 {
//                   start: 0,
//                   end: 23,
//                   url: "https://t.co/I1tawvrq8N",
//                   expanded_url: "https://alispit.tel",
//                   display_url: "alispit.tel",
//                 },
//               ],
//             },
//             description: {
//               mentions: [
//                 { start: 25, end: 36, username: "awsamplify" },
//                 { start: 48, end: 63, username: "ladybugpodcast" },
//                 { start: 69, end: 79, username: "jspartyfm" },
//                 { start: 91, end: 103, username: "welearncode" },
//               ],
//             },
//           },
//           verified: true,
//           url: "https://t.co/I1tawvrq8N",
//           description:
//             "Leads Developer Advocacy @awsamplify // co-host @ladybugpodcast  and @jspartyfm // blogger @welearncode // Python + JavaScript engineer // tweets my own",
//           profile_image_url:
//             "https://pbs.twimg.com/profile_images/1499419445063655424/aBi7ZB7W_normal.jpg",
//           id: "3092104835",
//           username: "ASpittel",
//           protected: false,
//         },
//         reply_settings: "everyone",
//         source: "Twitter for iPhone",
//         entities: {
//           urls: [
//             {
//               start: 2,
//               end: 25,
//               url: "https://t.co/rOTayPgEzg",
//               expanded_url: "https://twitter.com/ASpittel/status/1587227967502966784/photo/1",
//               display_url: "pic.twitter.com/rOTayPgEzg",
//               media_key: "3_1587227962826321925",
//             },
//           ],
//         },
//         possibly_sensitive: false,
//         text: "💀 https://t.co/rOTayPgEzg",
//         lang: "und",
//         attachments: { media_keys: ["3_1587227962826321925"] },
//         id: "1587227967502966784",
//         edit_history_tweet_ids: ["1587227967502966784"],
//         conversation_id: "1587227967502966784",
//         author_id: "3092104835",
//         created_at: "2022-10-31T23:40:11.000Z",
//       },
//     ],
//     includes: {
//       users: [
//         {
//           name: "Ali Spittel 🐞",
//           public_metrics: {
//             followers_count: 127349,
//             following_count: 1584,
//             tweet_count: 25142,
//             listed_count: 1610,
//           },
//           created_at: "2015-03-15T16:51:40.000Z",
//           entities: {
//             url: {
//               urls: [
//                 {
//                   start: 0,
//                   end: 23,
//                   url: "https://t.co/I1tawvrq8N",
//                   expanded_url: "https://alispit.tel",
//                   display_url: "alispit.tel",
//                 },
//               ],
//             },
//             description: {
//               mentions: [
//                 { start: 25, end: 36, username: "awsamplify" },
//                 { start: 48, end: 63, username: "ladybugpodcast" },
//                 { start: 69, end: 79, username: "jspartyfm" },
//                 { start: 91, end: 103, username: "welearncode" },
//               ],
//             },
//           },
//           verified: true,
//           url: "https://t.co/I1tawvrq8N",
//           description:
//             "Leads Developer Advocacy @awsamplify // co-host @ladybugpodcast  and @jspartyfm // blogger @welearncode // Python + JavaScript engineer // tweets my own",
//           profile_image_url:
//             "https://pbs.twimg.com/profile_images/1499419445063655424/aBi7ZB7W_normal.jpg",
//           id: "3092104835",
//           username: "ASpittel",
//           protected: false,
//         },
//       ],
//       tweets: [
//         {
//           reply_settings: "everyone",
//           source: "Twitter Web App",
//           entities: {
//             urls: [
//               {
//                 start: 207,
//                 end: 230,
//                 url: "https://t.co/L64IGwTNoO",
//                 expanded_url: "https://twitter.com/Vahid/status/1587193527628431366/video/1",
//                 display_url: "pic.twitter.com/L64IGwTNoO",
//                 media_key: "7_1587193214355836928",
//               },
//             ],
//             hashtags: [
//               { start: 51, end: 57, tag: "تهران" },
//               { start: 195, end: 206, tag: "مهسا_امینی" },
//             ],
//           },
//           possibly_sensitive: false,
//           text: "فایل صوتی بخشی از تهدیدهای ماموران در شهرک اکباتان #تهران: «۴۰ تا کشور اومدند تو سوریه هیچ غلطی نتونستند بکنند... به والله قسم پاش که برسه سر ناموس‌مون رو می‌بریم. زن و بچه خودمون رو...»\n۹ آبان، #مهسا_امینی https://t.co/L64IGwTNoO",
//           lang: "fa",
//           attachments: { media_keys: ["7_1587193214355836928"] },
//           id: "1587193527628431366",
//           edit_history_tweet_ids: ["1587193527628431366"],
//           conversation_id: "1587193527628431366",
//           author_id: "4782551",
//           created_at: "2022-10-31T21:23:20.000Z",
//         },
//         {
//           reply_settings: "everyone",
//           source: "Twitter for iPhone",
//           entities: {
//             urls: [
//               {
//                 start: 17,
//                 end: 40,
//                 url: "https://t.co/suQmxta2ac",
//                 expanded_url: "https://twitter.com/chriscoyier/status/1587218928073592833/photo/1",
//                 display_url: "pic.twitter.com/suQmxta2ac",
//                 media_key: "3_1587218920406224897",
//               },
//             ],
//           },
//           possibly_sensitive: false,
//           text: "Happy Halloween! https://t.co/suQmxta2ac",
//           lang: "en",
//           attachments: { media_keys: ["3_1587218920406224897"] },
//           id: "1587218928073592833",
//           edit_history_tweet_ids: ["1587218928073592833"],
//           conversation_id: "1587218928073592833",
//           author_id: "793830",
//           created_at: "2022-10-31T23:04:16.000Z",
//         },
//         {
//           reply_settings: "everyone",
//           entities: {
//             mentions: [{ start: 136, end: 146, username: "sarah_edo", id: "813333008" }],
//             urls: [
//               {
//                 start: 151,
//                 end: 174,
//                 url: "https://t.co/IKqWEQASNF",
//                 expanded_url: "https://twitter.com/sarah_edo/status/1587077351564640256",
//                 display_url: "twitter.com/sarah_edo/stat…",
//               },
//             ],
//           },
//           source: "Twitter Web App",
//           possibly_sensitive: false,
//           text: "SO many of my talented friends writing books!! This one is definitely a MUST HAVE. Plus, 50% of profits going to a good cause! Congrats @sarah_edo 🔥🙌🏻 https://t.co/IKqWEQASNF",
//           lang: "en",
//           id: "1587122513867407363",
//           edit_history_tweet_ids: ["1587122513867407363"],
//           conversation_id: "1587122513867407363",
//           referenced_tweets: [{ type: "quoted", id: "1587077351564640256" }],
//           author_id: "160650253",
//           created_at: "2022-10-31T16:41:09.000Z",
//         },
//         {
//           reply_settings: "everyone",
//           source: "Twitter Web App",
//           possibly_sensitive: false,
//           text: "43 سال با حمایت ملت خوب ایران، حکومت استمرار داشته است؛ آیا ‌اکنون که مردم از عملکرد مسئولان خسته شده‌اند، باید به سرکوب، زور و سرنیزه متوسل شد؟ \nآیا به این فکر کردید که آینده با همین مردم باید زندگی کنید؟\n\n#آزادی\n#اعتراضات \n#ایران",
//           lang: "fa",
//           id: "1587159943752425474",
//           edit_history_tweet_ids: ["1587159943752425474"],
//           conversation_id: "1587159943752425474",
//           entities: {
//             hashtags: [
//               { start: 207, end: 213, tag: "آزادی" },
//               { start: 214, end: 223, tag: "اعتراضات" },
//               { start: 225, end: 231, tag: "ایران" },
//             ],
//           },
//           author_id: "458443407",
//           created_at: "2022-10-31T19:09:53.000Z",
//         },
//         {
//           reply_settings: "everyone",
//           entities: {
//             mentions: [
//               { start: 0, end: 12, username: "pinchiii708", id: "957619846103126016" },
//               { start: 13, end: 28, username: "cheragh_aseman", id: "1542093223450902529" },
//               { start: 29, end: 41, username: "__Injaneb96", id: "1108428545058054145" },
//             ],
//             urls: [
//               {
//                 start: 53,
//                 end: 76,
//                 url: "https://t.co/kLBZGTtUAO",
//                 expanded_url:
//                   "https://docs.google.com/document/d/e/2PACX-1vScThpwkPwsA1VFByBsIMivgu_g6epBAQH-3ZZsYJScDkYcm_-3gLWgj2O-WcKIyV_ZLYh-0yJnG-u_/pub",
//                 display_url: "docs.google.com/document/d/e/2…",
//                 status: 200,
//                 title:
//                   "International Call Day For Freedom in Iran - روز تماس تلفنی در سراسر جهان برای ایرانی آزاد",
//                 description:
//                   "Hello to the international community! In order to make an impact internationally, we as the Iranian people must rally support from the International community in order to hold politicians accountable and to leverage policies and actions that help to tear down the Islamic Republic's regime. I am (writing/calling) to express my concern over the lack of firm political support for the people of Iran, as they fight to secure their basic human rights from the Islamic Republic regime. While the people of Iran",
//                 unwound_url:
//                   "https://docs.google.com/document/d/e/2PACX-1vScThpwkPwsA1VFByBsIMivgu_g6epBAQH-3ZZsYJScDkYcm_-3gLWgj2O-WcKIyV_ZLYh-0yJnG-u_/pub",
//               },
//             ],
//             hashtags: [
//               { start: 78, end: 89, tag: "MahsaAmini" },
//               { start: 91, end: 106, tag: "IranRevolution" },
//             ],
//           },
//           source: "Twitter for Android",
//           possibly_sensitive: false,
//           text: "@pinchiii708 @cheragh_aseman @__Injaneb96 خدمت شما:\n\nhttps://t.co/kLBZGTtUAO\n\n#MahsaAmini \n#IranRevolution",
//           lang: "ar",
//           in_reply_to_user_id: "957619846103126016",
//           id: "1587220301884293120",
//           edit_history_tweet_ids: ["1587220301884293120"],
//           conversation_id: "1587188270584119296",
//           referenced_tweets: [{ type: "replied_to", id: "1587208207776317441" }],
//           author_id: "1117045356",
//           created_at: "2022-10-31T23:09:43.000Z",
//         },
//         {
//           reply_settings: "everyone",
//           source: "Twitter for iPhone",
//           entities: {
//             urls: [
//               {
//                 start: 20,
//                 end: 43,
//                 url: "https://t.co/q81Qel3hpv",
//                 expanded_url: "https://www.instagram.com/p/CkZLAY5Af_-/?igshid=YmMyMTA2M2Y=",
//                 display_url: "instagram.com/p/CkZLAY5Af_-/…",
//                 images: [
//                   {
//                     url: "https://pbs.twimg.com/news_img/1587196111550353408/POu47piQ?format=jpg&name=orig",
//                     width: 640,
//                     height: 640,
//                   },
//                   {
//                     url: "https://pbs.twimg.com/news_img/1587196111550353408/POu47piQ?format=jpg&name=150x150",
//                     width: 150,
//                     height: 150,
//                   },
//                 ],
//                 status: 200,
//                 title: "Sana Ebrahimi (@_.sana_ebrahimi._) • Instagram photos and videos",
//                 description:
//                   'Sana Ebrahimi shared a post on Instagram: "🚨Call on action. SPREAD THE WORD🚨 A group of students and graduates in America have created a plan for an International call day on November 3rd. The purpose of this call is that everyone around the world, Iranian or none Iranian to call their representatives and national politicians as well as news agencies. The intention behind doing this all together on one day is to overwhelm the global news agencies to make sure that Iran\'s situation is not forgotten. It is also a way to urge no negotiations with the regime in Iran, including JCPOA. Please help us to spread the word. #MahsaAmini". Follow their account to see 112 posts.',
//                 unwound_url: "https://www.instagram.com/p/CkZLAY5Af_-/?igshid=YmMyMTA2M2Y=",
//               },
//             ],
//             annotations: [
//               { start: 9, end: 17, probability: 0.9519, type: "Other", normalized_text: "Instagram" },
//             ],
//           },
//           possibly_sensitive: false,
//           text: "Share on Instagram:\nhttps://t.co/q81Qel3hpv",
//           lang: "en",
//           in_reply_to_user_id: "1108428545058054145",
//           id: "1587196206031273985",
//           edit_history_tweet_ids: ["1587196206031273985"],
//           conversation_id: "1587188270584119296",
//           referenced_tweets: [{ type: "replied_to", id: "1587191355695984640" }],
//           author_id: "1108428545058054145",
//           created_at: "2022-10-31T21:33:58.000Z",
//         },
//       ],
//     },
//     meta: {
//       next_token: "7140dibdnow9c7btw423x799iapxtw56ao6dawwn8vhv4",
//       result_count: 9,
//       newest_id: "1587227967502966784",
//       oldest_id: "1587219147645141000",
//     },
//   },
// };

// export const onJsonResponse = async () => res;
