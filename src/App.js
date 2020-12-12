import Hero from "./components/molecules/Hero";
import Heading from "./components/atoms/Heading";
import Button from "./components/atoms/Button";
import ThemeProvider from "./styles/ThemeProvider";
import GlobalStyle from "./styles/GlobalStyle";
import Cuba from "./assets/cuba.jpg";
import Grid from "./components/atoms/Grid";
import Feature from "./components/atoms/Feature";
import { FaCar } from "react-icons/fa";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Hero image={Cuba}>
        <Heading>
          <h1>
            Ganhe sua <strong>liberdade</strong>
            <br />
            para ir e vir
          </h1>
        </Heading>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur ad</li>
          <li>Lorem ipsum dolor sit amet consectetur ad</li>
          <li>Lorem ipsum dolor sit amet consectetur ad</li>
        </ul>
        <Button color="primary" variant="outlined">
          Matricule-se agora
        </Button>
      </Hero>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota de carros">
          <p>Lorem ipsum dolor sit amet consectetur ad</p>
        </Feature>
        <Feature icon={<FaCar />} title="Habilitacao mais rapida">
          <p>Lorem ipsum dolor sit amet consectetur ad</p>
        </Feature>
        <Feature icon={<FaCar />} title="Excelente localizacao">
          <p>Lorem ipsum dolor sit amet consectetur ad</p>
        </Feature>
        <Feature icon={<FaCar />} title="Acessibilidade">
          <p>Lorem ipsum dolor sit amet consectetur ad</p>
        </Feature>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
