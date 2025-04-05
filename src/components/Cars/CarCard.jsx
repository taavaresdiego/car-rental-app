import React from "react";
import styles from "../Cars/CarCard.module.css";

// Componente de Botão reutilizável (pode ir para seu próprio arquivo depois)
function Button({ children, onClick, variant = "primary" }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

function CarCard({ car }) {
  const handleRentClick = () => {
    alert(`Alugar ${car.make} ${car.model}? (Lógica a implementar)`);
  };

  return (
    <div className={styles.card}>
      <img
        src={car.imageUrl}
        alt={`${car.make} ${car.model}`}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>
          {car.make} {car.model}{" "}
          <span className={styles.year}>({car.year})</span>
        </h3>
        <p className={styles.type}>{car.type}</p>
        {/* Opcional: Mostrar features */}
        {/* <div className={styles.features}>
          {car.features.map(feature => <span key={feature} className={styles.featureTag}>{feature}</span>)}
        </div> */}
        <div className={styles.footer}>
          <p className={styles.price}>
            R$ {car.pricePerDay.toFixed(2).replace(".", ",")}
            <span className={styles.perDay}> / dia</span>
          </p>
          <Button onClick={handleRentClick}>Alugar Agora</Button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
