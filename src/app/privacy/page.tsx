import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">Privacy Policy</h1>
        <p className="text-sm font-medium text-slate-500 mb-12">Last updated: April 27, 2026</p>
        
        <div className="prose prose-slate prose-blue max-w-none text-slate-600">
          <p className="lead text-lg mb-8">
            Your privacy is critically important to us. MemePouch is designed to keep your sticker library on your device, without accounts, analytics, or independent media servers.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Local Data Storage</h2>
          <p className="mb-6">
            MemePouch processes and stores your imported stickers, photos, videos, and GIFs locally in the app&apos;s shared on-device container for the main app and iMessage extension.
            <strong> We do not maintain any independent servers to store, sync, access, or analyze your media.</strong> Your memes and stickers remain private to you.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Information Collection</h2>
          <p className="mb-6">
            MemePouch does not require an account and does not collect personal information, analytics events, or telemetry about the content of your stickers. If you email support, we use the information you provide only to respond to your request.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Device Permissions</h2>
          <p className="mb-6">
            MemePouch requests specific device permissions to function correctly:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Photo Library Access:</strong> Required to let you import photos and videos to turn into stickers, and to optionally auto-delete imported media if you enable the clean-up feature.</li>
            <li><strong>Clipboard Access:</strong> Required only when you explicitly tap the &quot;Paste from Clipboard&quot; button to import an image.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Third-party Links</h2>
          <p className="mb-6">
            Our app or website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Contact Us</h2>
          <p className="mb-6">
            If you have any questions about how we handle user data and personal information, feel free to contact us at <a href="mailto:memepouch@tetherme.app" className="text-blue-600 hover:text-blue-700 font-medium">memepouch@tetherme.app</a>.
          </p>
        </div>

        <div className="mt-16 text-center border-t border-slate-200 pt-8">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium">
              &larr; Back to Home
            </Link>
        </div>
      </div>
    </div>
  );
}
