import React from "react";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import { useScrollToTop } from "../../hooks/scroll";

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Section from "../molecules/Section";
import Footer from "../organisms/Footer";
import Callout, { CalloutBody, CalloutActions } from "../atoms/Callout";
import Button from "../atoms/Button";
import BreadCrumb from "../atoms/BreadCrumb";

import Cuba from "../../assets/cuba.jpg";
import Speed from "../../svg/speed.svg";

const Image = styled.img`
  width: 30%;
  max-width: 200px;
`;

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = () => {
  useScrollToTop();
  return (
    <>
      <Hero image={Cuba}>
        <Heading>
          <h1>Nome do serviço</h1>
        </Heading>
        <BreadCrumb
          items={[
            { label: "Início", link: "/" },
            { label: "Serviços" },
            { label: "Nome do Serviço" },
          ]}
        />
      </Hero>
      <Section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
          pulvinar.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
          pulvinar.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
          pulvinar.
        </p>
        <h5>Documentos necessários:</h5>
        <PinnedList>
          <PinnedItem>
            <FaIdCard />
            RG
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            CPF
          </PinnedItem>
          <PinnedItem>
            <FaScroll />
            Certidão de nascimento ou casamento
          </PinnedItem>
          <PinnedItem>
            <FaHome />
            Comprovante de residência
          </PinnedItem>
        </PinnedList>
      </Section>
      <Section inverse>
        <Callout>
          <CalloutBody>
            <h6>Faça sua matrícula agora mesmo</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              porttitor mauris sit amet est efficitur, imperdiet rhoncus purus
              pulvinar.
            </p>
            <CalloutActions>
              <Button color="primary">Matricular</Button>
            </CalloutActions>
          </CalloutBody>
          <Image src={Speed} alt="Pessoa apontando para um velocimetro" />
        </Callout>
      </Section>
      <Footer />
    </>
  );
};

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {};

export default ProductDetail;