import React from "react";
import propTypes from "prop-types";

export default function Breadcrumb({ list }) {
  return (
    <div>
      <section class="bg-gray-100 py-8 px-4">
        <div class="container mx-auto">
          <ul class="breadcrumb">
            {list?.map?.((item, index) => {
              const arias =
                index === list?.length
                  ? {
                      "aria-label": "current page",
                    }
                  : {};
              return (
                <li key={item.url}>
                  <a href="index.html">Home</a>
                </li>
              );
            })}
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#">Office Room</a>
            </li>
            <li>
              <a href="#" aria-label="current-page">
                Details
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
Breadcrumb.propTypes = {
  list: propTypes.array.isRequired,
};
