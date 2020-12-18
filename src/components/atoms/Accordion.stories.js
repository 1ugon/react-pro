import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor
      mauris sit amet est efficitur, imperdiet rhoncus purus pulvinar.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor
      mauris sit amet est efficitur, imperdiet rhoncus purus pulvinar.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor
      mauris sit amet est efficitur, imperdiet rhoncus purus pulvinar.
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor
      mauris sit amet est efficitur, imperdiet rhoncus purus pulvinar.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor
      mauris sit amet est efficitur, imperdiet rhoncus purus pulvinar.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor
      mauris sit amet est efficitur, imperdiet rhoncus purus pulvinar.
    </Accordion>
  </AccordionGroup>
);
