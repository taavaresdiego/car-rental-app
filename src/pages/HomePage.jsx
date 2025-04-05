import React, { useState, useEffect } from "react";
import CarCard from "../components/Cars/CarCard";
import { fetchCars } from "../services/api"; // Importar a função da API
import Spinner from "../components/Common/Spinner"; // Importar Spinner
import styles from "./HomePage.module.css";

function HomePage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de loading para os carros
  const [error, setError] = useState(null); // Estado de erro para os carros

  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchCars();
        // Assumindo que mockCars tem 'id', mas a API real retornará '_id'
        // Ajuste a key no map se necessário quando conectar ao backend
        setCars(response.data);
      } catch (err) {
        console.error("Erro ao buscar carros:", err);
        setError(
          "Não foi possível carregar os carros. Tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    loadCars();
  }, []); // Array vazio para executar apenas na montagem do componente

  return (
    <div className={`container ${styles.homePage}`}>
      {" "}
      {/* Alterado para div para não ter main dentro de main */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Encontre o carro perfeito para sua viagem
        </h1>
        <p className={styles.heroSubtitle}>
          Aluguel fácil, rápido e com os melhores preços.
        </p>
      </section>
      <section id="cars" className={styles.carListSection}>
        <h2>Nossa Frota</h2>
        {loading && <Spinner />}
        {error && <p className={styles.errorLoadingCars}>{error}</p>}{" "}
        {/* Estilo para erro */}
        {!loading && !error && cars.length > 0 ? (
          <div className={styles.carGrid}>
            {/* Usar car.id (do mock) ou car._id (da API real) como key */}
            {cars.map((car) => (
              <CarCard key={car.id || car._id} car={car} />
            ))}
          </div>
        ) : (
          !loading && !error && <p>Nenhum carro encontrado.</p>
        )}
      </section>
    </div>
  );
}

export default HomePage;
