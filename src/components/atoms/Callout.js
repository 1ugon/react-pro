import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//#region CalloutBody

const StyledCalloutBody = styled.div`
  h6,
  p {
    margin: 0 0 8px;
  }
`;

export const CalloutBody = ({ children }) => (
  <StyledCalloutBody>{children}</StyledCalloutBody>
);

CalloutBody.defaultProps = {
  children: undefined,
};

CalloutBody.propTypes = {
  children: PropTypes.node,
};

//#endregion

//#region CalloutActions

const StyledCalloutActions = styled.div`
  padding-top: 8px;
`;

export const CalloutActions = ({ children }) => (
  <StyledCalloutActions>{children}</StyledCalloutActions>
);

CalloutActions.defaultProps = {
  children: undefined,
};

CalloutActions.propTypes = {
  children: PropTypes.node,
};

//#endregion

//#region Callout

const StyledCallout = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-left: 3px solid ${(props) => props.theme.colors.primary.main};
  border-radius: 4px;
  padding: 16px;
`;

const Callout = ({ children }) => <StyledCallout>{children}</StyledCallout>;

Callout.defaultProps = {
  children: undefined,
};

Callout.propTypes = {
  children: PropTypes.node,
};

export default Callout;

//#endregion
