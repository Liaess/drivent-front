import { CgCheckO, CgCloseO, CgEnter } from "react-icons/cg";
import styled from "styled-components";

export default function Icon(status) {
  return(
    <CheckIcon>
      {
        status === "chosen" ?
          <>
            <CgCheckO />
            <p>Inscrito</p>
          </>
          :
          status === "soldOff" ?
            <>
              <CgCloseO />
              <p>Esgotado</p>
            </>
            :
            <>
              <CgEnter />
              <p>xx vagas</p>
            </>
      }
    </CheckIcon>

  );
}

const CheckIcon = styled.div`
  width: 66px;
  height: calc(100% - 20px);
  border-left: 1px solid #CFCFCF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  line-height: 11px;
  color: #078632; //#CC6666

  svg {
    width: 16px;
    height: 16px;
  }
`;
