import React, { useState, useEffect } from "react";

import CategoryButton from "../components/CategoryButton";

import api from "../api/api";

const Home: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get("categories");
      setCategories(response.data);
    }

    loadCategories();
  }, []);

  return (
    <>
      <div>
        <br />

        <main>
          {categories.map((category) => (
            <ul>
              <button>
                <CategoryButton key={category} category={category} />
              </button>
            </ul>
          ))}
        </main>
      </div>
    </>
  );
};

export default Home;
