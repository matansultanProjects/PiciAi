'use client'
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { FaWhatsapp } from "react-icons/fa"; // אייקון ווצאפ

export default function A() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const message = "Your smart and secure photo management solution powered by AI..";

  useEffect(() => {
    let typingInterval;
    let deletingInterval;

    // פונקציה שמבצעת כתיבה
    const typeText = () => {
      if (index < message.length) {
        setText((prevText) => prevText + message[index]);
        setIndex(index + 1);
      } else {
        clearInterval(typingInterval);
        // מחיקה אחרי 5 שניות
        setTimeout(() => {
          deletingInterval = setInterval(() => {
            setText((prevText) => prevText.slice(0, 0));
            if (text.length === 0) {
              clearInterval(deletingInterval);
              setIndex(0);
              setText("");
              typingInterval = setInterval(typeText, 100);
            }
          }, 50);
        }, 5000);
      }
    };

    typingInterval = setInterval(typeText, 100); // תחילת כתיבה

    return () => {
      clearInterval(typingInterval);
      clearInterval(deletingInterval);
    };
  }, [index, message, text.length]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>PICI AI  - Demo</title>
        <meta
          name="description"
          content="Your smart and secure photo management solution powered by AI."
        />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-lg py-4 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110">
          PICI AI 
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-blue-600 hover:underline transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-blue-600 hover:underline transition"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600 hover:underline transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 typing-animation sm:text-3xl md:text-2xl">
  {text}
</h2>

        </section>

        {/* Features Section */}
        <section id="features" className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Upload and Manage Photos</h3>
            <p className="text-gray-600">Upload large photo files and organize them into hierarchical folders.</p>
          </div>
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Smart Organization</h3>
            <p className="text-gray-600">Use AI to group photos by face recognition and recommend top-quality images.</p>
          </div>
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Secure Sharing</h3>
            <p className="text-gray-600">Share photos with password-protected links and set custom access permissions.</p>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow p-6">
              <h3 className="text-2xl font-bold text-gray-800">Basic</h3>
              <p className="text-gray-600">$10/month</p>
              <p className="text-gray-600">For individual photographers with basic needs.</p>
            </div>
            <div className="bg-white rounded shadow p-6">
              <h3 className="text-2xl font-bold text-gray-800">Pro</h3>
              <p className="text-gray-600">$30/month</p>
              <p className="text-gray-600">For professional photographers with advanced AI tools.</p>
            </div>
            <div className="bg-white rounded shadow p-6">
              <h3 className="text-2xl font-bold text-gray-800">Enterprise</h3>
              <p className="text-gray-600">$100+/month</p>
              <p className="text-gray-600">Customized solutions for organizations.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-gray-600">Have questions? Reach out to us!</p>
          <form className="mt-6">
            <input type="text" placeholder="Your Name" className="border rounded p-2 w-full mb-4" />
            <input type="email" placeholder="Your Email" className="border rounded p-2 w-full mb-4" />
            <textarea placeholder="Your Message" className="border rounded p-2 w-full mb-4" rows="4"></textarea>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send Message</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 PICI AI . All rights reserved.</p>
      </footer>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/972502555383"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-6 bottom-6 bg-green-500 p-4 rounded-full shadow-lg text-white hover:bg-green-600 transition"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}
