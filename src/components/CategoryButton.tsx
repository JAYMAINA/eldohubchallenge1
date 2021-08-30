import React, { useCallback, ButtonHTMLAttributes } from "react";
import { useHistory } from "react-router-dom";

interface CategoryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category }) => {
  const history = useHistory();

  const navigateToJoke = useCallback(() => {
    history.push(`joke/${category}`);
  }, [history, category]);

  return (
    <div onClick={navigateToJoke}>
      <span>{category}</span>
    </div>
  );
};

export default CategoryButton;
