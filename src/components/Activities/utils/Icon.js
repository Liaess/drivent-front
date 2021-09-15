import { CgCheckO, CgCloseO, CgEnter } from "react-icons/cg";
import styled from "styled-components";

export default function Icon({ remainingSeats, userRegistered }) {
  return(
    <CheckIcon available={remainingSeats === 0 && userRegistered === false}>
      {
        userRegistered === true ?
          <>
            <CgCheckO />
            <p>Inscrito</p>
          </>
          :    
          remainingSeats === 0 ?
            <>
              <CgCloseO />
              <p>Esgotado</p>
            </>
            :
            <>
              <CgEnter />
              <p>{remainingSeats} vagas</p>
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
  color: ${props => props.available ? "#CC6666" : "#078632"}; 

  svg {
    width: 16px;
    height: 16px;
  }
`;
