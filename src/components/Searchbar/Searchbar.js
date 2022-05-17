import styled from 'styled-components';

function Searchbar({ onSubmit }) {
    return (<header className="searchbar">
        <form className="form" onSubmit={onSubmit}>

            <Input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />

            <Button type="submit" className="button">
                <span className="button-label">Search</span>
            </Button>

        </form>
    </header>);
}

const Input = styled.input`
padding: 0.5em;
color: ${props => props.inputColor || "teal"};
background: papayawhip;
border: none;
border-radius: 3px;
`;

const Button = styled.button`
  background: ${props => props.primary ? "teal" : "white"};
  color: ${props => props.primary ? "teal" : "palevioletred"};
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


export default Searchbar;