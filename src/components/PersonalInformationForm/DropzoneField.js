import Dropzone from "react-dropzone";
import styled from "styled-components";

export default function DropzoneField({ handleUpload }) {
  return (
    <Dropzone
      accept="image/*"
      onDrop={(accpetedFile) => handleUpload(accpetedFile)}
    >
      {({ getRootProps, getInputProps, isDragAccept, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragAccept={isDragAccept}
          isDragReject={isDragReject}
        >
          {isDragAccept ? (
            <Sucess>Somente imagens serão aceitas</Sucess>
          ) : isDragReject ? (
            <Fail>Esse arquivo não é uma imagem</Fail>
          ) : (
            <p>Arraste ou clique aqui para enviar uma imagem</p>
          )}
          <input {...getInputProps()} />
        </DropContainer>
      )}
    </Dropzone>
  );
}

const DropContainer = styled.div`
  height: 55px;
  width: calc(50% - 20px);
  border: 1px dashed #ddd;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.54);
  cursor: pointer;
  font: inherit;
  border-color: ${(props) =>
    props.isDragAccept ? "#34A853" : props.isDragReject ? "#e57878" : "none"};
  padding: 6px 0 7px;
  label {
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Sucess = styled.p`
  color: #34a853;
`;

const Fail = styled.p`
  color: #e57878;
`;
