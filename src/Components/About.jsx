import React from "react";

const About = () => {
  return (
    <section className=" py-18 rounded-xl shadow max-w-5xl mx-auto mt-12 mb-12">
      <h2 className="text-4xl dark:text-gray-50 font-extrabold text-center text-primary mb-8">
        🍽️ Welcome to DiverseDish
      </h2>

      <p className="text-lg text-base-content leading-relaxed mb-6">
        <strong>DiverseDish</strong> is more than just a recipe app — it's a vibrant global food community built by passionate home cooks, culinary explorers, and cultural food enthusiasts. Our mission is to make authentic, home-style recipes from all around the world accessible, shareable, and enjoyable for everyone.
      </p>

      <h3 className="text-2xl dark:text-gray-50  font-bold text-primary mb-4 mt-8">🌍 Our Mission</h3>
      <p className="text-base-content text-lg leading-relaxed mb-6">
        At DiverseDish, we believe that food connects people. Our mission is to:
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Celebrate the diversity of world cuisines</li>
          <li>Encourage cultural exchange through cooking</li>
          <li>Promote home cooking with easy-to-follow recipes</li>
          <li>Provide a platform where everyone can share their food stories</li>
        </ul>
      </p>

      <h3 className="text-2xl dark:text-gray-50 font-bold text-primary mb-4 mt-8">👨‍🍳 Who We Are</h3>
      <p className="text-base-content text-lg leading-relaxed mb-6">
        DiverseDish is created and maintained by <strong>Md Imran</strong>, a passionate MERN Stack Developer and food enthusiast from Bangladesh. With a love for technology and culture, Imran has brought together a platform where developers, food bloggers, and everyday cooks can feel at home.
      </p>

      <h3 className="text-2xl dark:text-gray-50 font-bold text-primary mb-4 mt-8">📌 What Makes Us Different</h3>
      <ul className="list-disc list-inside ml-6 text-lg text-base-content leading-relaxed">
        <li>Multi-cuisine support with country-based filtering</li>
        <li>Personalized recipe dashboard for users</li>
        <li>Wishlist and review system for interactive feedback</li>
        <li>Dark mode support for better user experience</li>
        <li>Community-focused with user-submitted content</li>
      </ul>

      <h3 className="text-2xl dark:text-gray-50 font-bold text-primary mb-4 mt-8">🚀 Our Vision</h3>
      <p className="text-base-content text-lg leading-relaxed mb-6">
        We aim to become the go-to global platform for recipe sharing, food storytelling, and cultural connection. As we grow, DiverseDish will include video tutorials, real-time cooking challenges, and more interactive features.
      </p>

      <h3 className="text-2xl dark:text-gray-50 font-bold text-primary mb-4 mt-8">📅 Timeline</h3>
      <ul className="list-disc list-inside ml-6 text-lg text-base-content leading-relaxed mb-6">
        <li><strong>2025:</strong> Project started as a personal passion</li>
        <li><strong>2025 (Q2):</strong> DiverseDish web app launched</li>
        <li><strong>2025 (Q3):</strong> Public features opened (recipes, wishlist, reviews)</li>
        <li><strong>Future:</strong> Mobile app, recipe video support, chef profiles</li>
      </ul>

      <div className="mt-10 text-center">
        <p className="italic text-gray-500 text-lg">
          "Every dish tells a story. Start sharing yours today."
        </p>
        <button className="btn btn-primary mt-6">Join the Community</button>
      </div>
    </section>
  );
};

export default About;
