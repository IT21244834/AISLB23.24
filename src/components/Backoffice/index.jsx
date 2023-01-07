import React from "react";
import {
  BackofficeContainer,
  BackofficeH1,
  BackofficeWrapper,
  BackofficeCard,
  BackofficeH2,
  BackofficeLink,
  BackofficeAlignmentWrapper,
} from "./BackofficeElements";

const Backoffice = () => {
  return (
    <BackofficeContainer id="backoffice">
      <BackofficeH1>
        <h3>Back Office</h3>
      </BackofficeH1>
      <BackofficeWrapper>
        <BackofficeCard backgroundColor="#e64929">
          <BackofficeH2>
            <BackofficeLink to="/lb/dxp">
              <b>DXP & IM</b>
            </BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
        <BackofficeCard backgroundColor="#FFC845">
          <BackofficeH2>
            <BackofficeLink to="/lb/pd">PD</BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
        <BackofficeCard backgroundColor="#0A8EA0">
          <BackofficeH2>
            <BackofficeLink to="/lb/ewa_innovation">PR & EwA</BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
      </BackofficeWrapper>
      <br />

      <BackofficeWrapper>
        <BackofficeCard backgroundColor="#c44953">
          <BackofficeH2>
            <BackofficeLink to="/lb/mkt">
              <b>MKT</b>
            </BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
        <BackofficeCard backgroundColor="#47f567">
          <BackofficeH2>
            <BackofficeLink to="/lb/fnl_im">FnL</BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
        <BackofficeCard backgroundColor="#d448ca">
          <BackofficeH2>
            <BackofficeLink to="/lb/ewa_innovation">MXP</BackofficeLink>
          </BackofficeH2>
        </BackofficeCard>
      </BackofficeWrapper>
    </BackofficeContainer>
  );
};

export default Backoffice;
