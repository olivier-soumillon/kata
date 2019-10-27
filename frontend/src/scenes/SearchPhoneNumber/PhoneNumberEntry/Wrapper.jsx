import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "fullName actions"
    "phoneNumber actions";
  grid-template-columns: 1fr 40px;
  padding: 20px;
`

export default Wrapper