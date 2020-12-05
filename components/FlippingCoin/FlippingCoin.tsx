import React, { PropsWithChildren, ReactNode, useState } from "react";
import classnames from "classnames";
import styles from "./FlippingCoin.module.css";

export type Type = "front" | "back";

interface SideProps {
  type: Type;
}

const renderSideElement = (child: ReactNode, height?: number) => {
  if (React.isValidElement(child) && child.type === Side) {
    return React.cloneElement(child, {
      style: { height },
    });
  }
};

export const Side: React.FC<PropsWithChildren<SideProps>> = (
  props: PropsWithChildren<SideProps>
) => (
  <div
    className={classnames({
      [styles.front]: props.type === "front",
      [styles.back]: props.type === "back",
    })}
  >
    {props.children}
  </div>
);

interface Props {
  height?: number;
}

const Flipper: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      style={{ height: props.height }}
      className={classnames(styles.container, {
        hover: isHovered,
      })}
      onTouchStart={() => setHovered(!isHovered)}
    >
      <div className={styles.flipper}>
        {React.Children.map(props.children, (child) =>
          renderSideElement(child, props.height)
        )}
      </div>
    </div>
  );
};

export default React.memo(Flipper);
