import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare MemePouch Alternative iMessage Sticker Makers",
  description:
    "Compare MemePouch with other popular iMessage sticker maker apps like Sticker Drop and Sticker Maker.",
  alternates: { canonical: "/compare" },
};

export default function ComparePage() {
  const COMPARE_LD = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SoftwareApplication",
        "position": 1,
        "name": "MemePouch",
        "operatingSystem": "iOS",
        "applicationCategory": "UtilitiesApplication"
      },
      {
        "@type": "SoftwareApplication",
        "position": 2,
        "name": "Sticker Drop",
        "operatingSystem": "iOS",
        "applicationCategory": "UtilitiesApplication"
      },
      {
        "@type": "SoftwareApplication",
        "position": 3,
        "name": "WA Sticker Maker",
        "operatingSystem": "iOS",
        "applicationCategory": "UtilitiesApplication"
      },
      {
        "@type": "SoftwareApplication",
        "position": 4,
        "name": "iOS 17 Built-in Stickers",
        "operatingSystem": "iOS",
        "applicationCategory": "UtilitiesApplication"
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(COMPARE_LD) }}
      />
      <h1 className="text-4xl font-bold mb-12">MemePouch Alternatives & Comparisons</h1>
      <p className="text-lg text-slate-600 mb-8">
        Looking for the best way to make iMessage stickers? Here is a breakdown of how MemePouch compares to other options on the App Store.
      </p>

      <div className="overflow-x-auto mb-16">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="py-4 px-6 font-semibold text-slate-900 bg-slate-50">Feature</th>
              <th className="py-4 px-6 font-bold text-blue-600 bg-blue-50 border-x border-slate-200">MemePouch</th>
              <th className="py-4 px-6 font-semibold text-slate-500">Sticker Drop</th>
              <th className="py-4 px-6 font-semibold text-slate-500">WA Sticker Maker</th>
              <th className="py-4 px-6 font-semibold text-slate-500">iOS 17 Built-in</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="py-4 px-6 text-slate-900 font-medium">Keep stickers isolated from Camera Roll</td>
              <td className="py-4 px-6 font-medium text-emerald-600 bg-blue-50 border-x border-slate-200">✔️ Yes</td>
              <td className="py-4 px-6 text-slate-500">✔️ Yes</td>
              <td className="py-4 px-6 text-slate-500">✔️ Yes</td>
              <td className="py-4 px-6 text-rose-500">❌ No</td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-slate-900 font-medium">Drag-and-drop save received stickers</td>
              <td className="py-4 px-6 font-medium text-emerald-600 bg-blue-50 border-x border-slate-200">✔️ Yes</td>
              <td className="py-4 px-6 text-emerald-600">✔️ Yes</td>
              <td className="py-4 px-6 text-rose-500">❌ No</td>
              <td className="py-4 px-6 text-slate-500">N/A</td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-slate-900 font-medium">Convert short video to GIF sticker</td>
              <td className="py-4 px-6 font-medium text-emerald-600 bg-blue-50 border-x border-slate-200">✔️ Yes</td>
              <td className="py-4 px-6 text-rose-500">❌ No</td>
              <td className="py-4 px-6 text-emerald-600">✔️ Yes</td>
              <td className="py-4 px-6 text-rose-500">❌ No</td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-slate-900 font-medium">Auto-delete original photo from library</td>
              <td className="py-4 px-6 font-medium text-emerald-600 bg-blue-50 border-x border-slate-200">✔️ Yes</td>
              <td className="py-4 px-6 text-rose-500">❌ No</td>
              <td className="py-4 px-6 text-rose-500">❌ No</td>
              <td className="py-4 px-6 text-rose-500">❌ No</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">MemePouch vs Sticker Drop</h2>
          <p className="text-slate-600 leading-relaxed">
            If you mostly want to grab stickers people send you in iMessage, both apps support the drag-into-the-extension flow. However, if you want background removal for static stickers, Sticker Drop&apos;s iOS 16 subject isolation is more focused. MemePouch shines when you want to convert videos into animated GIFs and auto-clean your camera roll.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">MemePouch vs iOS 17 Built-in Stickers</h2>
          <p className="text-slate-600 leading-relaxed">
            iOS 17 introduced a built-in stickers drawer. While it&apos;s great for isolating subjects from live photos, MemePouch is better when you want to convert short videos into animated GIFs, organize a massive library, and keep an untethered collection of downloaded memes totally independent of your main Photos library.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">MemePouch vs WA Sticker Maker</h2>
          <p className="text-slate-600 leading-relaxed">
            Most generic &quot;sticker maker&quot; apps focus heavily on WhatsApp export and text-overlay meme generation. MemePouch is completely optimized for native Apple iMessage extension experiences—no web servers, no ads, and purely focused on the iOS visual design language.
          </p>
        </section>
      </div>
    </div>
  );
}
