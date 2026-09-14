import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy-policy" } };
import Link from "next/link";
import { Shield, Lock, Eye, Cookie, Globe, RefreshCw, Mail } from "lucide-react";

export default function PrivacyPolicy() {
    const sections = [
        { id: "collection", title: "Information We Collect", icon: <Eye size={20} /> },
        { id: "usage", title: "How We Use Information", icon: <Lock size={20} /> },
        { id: "cookies", title: "Cookies & Analytics", icon: <Cookie size={20} /> },
        { id: "protection", title: "Data Protection", icon: <Shield size={20} /> }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                

                {/* Simple Header */}
                <header className="max-w-6xl mx-auto px-4 pb-5 md:pb-10 text-center border-b border-gray-200">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        This policy explains how we collect, use, and protect your personal information.
                    </p>
                </header>

                <main className="max-w-6xl mx-auto py-5 md:py-12">
                    <div className="grid lg:grid-cols-[250px_1fr] gap-10 md:gap-0">

                        {/* Sticky Side Nav - Great for scannability */}
                        <aside className="lg:w-64 shrink-0">
                            <div className="sticky top-10 space-y-4">
                                <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Contents</p>
                                <nav className="flex flex-col gap-2">
                                    {sections.map((s) => (
                                        <Link
                                            key={s.id}
                                            href={`#${s.id}`}
                                            className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-[#041f4a] p-2 rounded-lg hover:bg-gray-50 transition-all"
                                        >
                                            {s.icon}
                                            {s.title}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content Area */}
                        <div className="flex-1 space-y-5 md:space-y-12">

                            <section className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
                                <p className="text-lg italic text-gray-600">
                                    PRPROMOTIONHUB values your privacy and is committed to protecting the personal
                                    information of our readers. This policy explains our data practices in simple terms.
                                </p>
                            </section>

                            {/* Information We Collect */}
                            <section id="collection" className="scroll-mt-10">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Eye size={24} /></span>
                                    Information We Collect
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        <strong>Voluntary Data:</strong> We collect personal information when you contact us,
                                        such as your name, email address, and the content of your message.
                                    </p>
                                    <p>
                                        <strong>Automatic Data:</strong> We collect non-personal data like browser type,
                                        device info, and page views to improve our blog and site speed.
                                    </p>
                                </div>
                            </section>

                            {/* Usage */}
                            <section id="usage" className="scroll-mt-10 border-t pt-10">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="p-2 bg-green-50 text-green-600 rounded-lg"><Lock size={24} /></span>
                                    How We Use Information
                                </h2>
                                <ul className="grid sm:grid-cols-2 gap-0 md:gap-4 list-none p-0">
                                    {["Responding to tips", "Improving site layout", "Site security", "Reader feedback"].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-gray-600 bg-gray-50 p-3 rounded-md border border-gray-100">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Cookies */}
                            <section id="cookies" className="scroll-mt-10 border-t pt-10">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="p-2 bg-orange-50 text-orange-600 rounded-lg"><Cookie size={24} /></span>
                                    Cookies & Analytics
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    We use cookies to analyze traffic patterns. This helps us understand which stories
                                    are most important to our readers.
                                </p>
                                <div className="bg-orange-50/50 border border-orange-100 p-4 rounded-xl text-sm text-orange-800">
                                    <strong>User Control:</strong> You can manage or disable cookies via your browser
                                    settings at any time.
                                </div>
                            </section>

                            {/* Protection */}
                            <section id="protection" className="scroll-mt-10 border-t pt-10">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Shield size={24} /></span>
                                    Data Protection
                                </h2>
                                <p className="text-gray-700">
                                    We use industry-standard encryption and security measures. While no method of
                                    online transmission is 100% secure, we regularly update our protocols to
                                    protect your data.
                                </p>
                            </section>

                            {/* Policy Updates */}
                            <section id="updates" className="bg-[#041f4a] text-white p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6">
                                <div className="p-4 bg-white/10 rounded-full text-blue-300">
                                    <RefreshCw size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Policy Updates</h3>
                                    <p className="text-blue-100 text-sm">
                                        We update this policy periodically to stay compliant with global laws.
                                        Any changes will be posted here immediately.
                                    </p>
                                </div>
                            </section>

                        </div>
                    </div>
                </main>

                {/* Footer Contact */}
                <footer className="bg-gray-50 border-t border-gray-200 py-5 md:py-10 mt-10">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Have More Questions About Your Privacy?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            If you need additional information or clarification about our data practices, our privacy team is here to help.
                        </p>

                        <Link
                            href="/contact"
                            title="contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-full font-semibold text-[#041f4a] hover:bg-gray-50 transition-colors shadow-sm"
                        >
                            <Mail size={18} /> Contact Us
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}