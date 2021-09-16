import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export default function Photo({ editedFile, setEditedFile, setFile }) {
  return (
    <>
      {editedFile.map((uploadedFile, index) => {
        return (
          <FileInfo key={index}>
            <ImageHolder>
              <Preview src={uploadedFile.preview} />
              <div>
                <AiOutlineClose />
                <p
                  onClick={() => {
                    setEditedFile([]);
                    setFile([]);
                  }}
                >
                  Delete
                </p>
              </div>
            </ImageHolder>
            <FileDescription>
              <p>{uploadedFile.name}</p>
              <p>{uploadedFile.readableSize}</p>
            </FileDescription>
          </FileInfo>
        );
      })}
    </>
  );
}

const FileInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 7px;
`;

const ImageHolder = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    cursor: pointer;
    padding-top: 5px;
  }
`;

const FileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Preview = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;
