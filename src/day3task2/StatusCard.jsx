import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.type === "success" ? "green" : "red"};
  color: white;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  width: fit-content;
`;

function StatusCard({ type }) {
  return (
    <Card type={type}>
      {type === "success" ? "✅ Operation Successful!" : "❌ Something went wrong!"}
    </Card>
  );
}

export default StatusCard;