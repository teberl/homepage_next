import React, { useState } from "react";
import classnames from "classnames";
import styles from "./FlippingMe.module.css";

const FlippingMe: React.FunctionComponent = () => {
  const [isHovered, setHovered] = useState(false);
  const handleTouchStart = () => setHovered(!isHovered);
  return (
    <div
      className={classnames(styles.container, { hover: isHovered })}
      onTouchStart={handleTouchStart}
    >
      <div className={styles.flipper}>
        <div className={styles.front}>
          <picture className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-36 bg-cover bg-center">
            <source type="image/webp" srcSet="/horse.webp" />
            <source type="image/jpeg" srcSet="/horse.jpg" />
            <img
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-36 bg-cover bg-center"
              src="/horse.jpg"
              alt="mobile horse"
            />
          </picture>
        </div>
        <div className={styles.back}>
          <picture className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-36 bg-cover bg-center">
            <source type="image/webp" srcSet="/me.webp" />
            <source type="image/jpeg" srcSet="/me.jpg" />
            <img
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-36 bg-cover bg-center"
              src="/me.jpg"
              alt="mobile profile"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default FlippingMe;
