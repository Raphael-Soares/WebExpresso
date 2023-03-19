import styled from "styled-components";

const Label = styled.label`
    font-weight: 600;
`;
const Input = styled.input`
    border: none;
    border: 1px solid;

    border-radius: 5px;
    padding: 5px 10px;

    outline: none;

    &:focus {
        border-width: 2px;
    }
`;

function InputGroup({ id, label, type = "text", required = false, onChange }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "1rem",
            }}
        >
            <Label htmlFor={id}>{label}</Label>

            <Input id={id} name={id} type={type} required={required} onChange={onChange} />
        </div>
    );
}
export default InputGroup;
