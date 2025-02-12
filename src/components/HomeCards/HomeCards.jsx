import { Link } from "react-router-dom";
import styles from "./HomeCards.module.scss";

export const HomeCards = () => {
  return (
    <section
      className={styles.cardsContainer}
      style={{
        backgroundImage: `url("/tw-2.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.card}>
        <h2>Client</h2>
        <div>
          <img src="/client-person-1.svg" alt="SVG Icon" />
        </div>

        <Link to="/client" className={styles.cardLink}>
          Explore Client Area
        </Link>
      </div>
      <div className={styles.card}>
        <h2>Operations</h2>
        <div>
          <img src="/ops-person-1.svg" alt="SVG Icon" />
        </div>
        <Link to="/ops" className={styles.cardLink}>
          Explore Ops Area
        </Link>
      </div>

      {/* <div className={styles.spinnerCard}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <path
            fill="#212A31"
            stroke="#212A31"
            stroke-width="2"
            transform-origin="center"
            d="m148 84.7 13.8-8-10-17.3-13.8 8a50 50 0 0 0-27.4-15.9v-16h-20v16A50 50 0 0 0 63 67.4l-13.8-8-10 17.3 13.8 8a50 50 0 0 0 0 31.7l-13.8 8 10 17.3 13.8-8a50 50 0 0 0 27.5 15.9v16h20v-16a50 50 0 0 0 27.4-15.9l13.8 8 10-17.3-13.8-8a50 50 0 0 0 0-31.7Zm-47.5 50.8a35 35 0 1 1 0-70 35 35 0 0 1 0 70Z"
          >
            <animateTransform
              type="rotate"
              attributeName="transform"
              calcMode="spline"
              dur="5"
              values="0;120"
              keyTimes="0;1"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animateTransform>
          </path>
        </svg>
      </div> */}
    </section>
  );
};
