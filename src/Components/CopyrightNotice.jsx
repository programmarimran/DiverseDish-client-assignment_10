import React from "react";

const CopyrightNotice = () => {
  const year = new Date().getFullYear();

  return (
    <section className="prose mx-auto max-w-prose  rounded-xl py-16 shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Copyright Notice</h2>

      <p>
        © {year} <strong>DiverseDish / HireNest</strong>. All rights reserved.
        No part of this website, including text, graphics, or code, may be
        reproduced or distributed without prior written permission from the
        author.
      </p>

      <p className="mt-4">
        You may print or download portions of material from the different areas
        of the Site solely for your own non-commercial use, provided that you
        agree not to change or delete any copyright or proprietary notices from
        the materials.
      </p>

      <p className="mt-4 italic text-center">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </section>
  );
};

export default CopyrightNotice;
