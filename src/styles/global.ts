import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  .box {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: blue;
  }

  .refresh {
    padding: 20px;
    position: absolute;
    border: 1px dotted blue;
    border-radius: 5px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .refresh path {
    fill: blue;
  }

  .container {
    display: flex;
    gap: 10px;
  }
`;