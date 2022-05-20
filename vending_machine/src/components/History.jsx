import styled from 'styled-components';

function History({ progressBox }) {
  return (
    <>
      {progressBox.map((data, idx) => (
        <HistoryItem key={idx}>{data}</HistoryItem>
      ))}
    </>
  );
}

const HistoryItem = styled.li`
  margin-top: 10px;
`;

export default History;
