import styled from "styled-components";

const FooterStyled = styled.div`
  background: #323231;
  padding: 100px 300px 50px 300px;
  color: #fff;

  .menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    ul {
      flex-basis: 25%;
      .main-li {
        list-style: none;
        font-weight: 900;
        font-size: 20px;
        text-transform: uppercase;
        margin-bottom: 5px;
        text-decoration: none !important;
        cursor: default;
      }
      li {
        cursor: pointer;
        list-style: none;
        font-weight: 200;
        font-size: 12.5px;
        margin: 5px 0px;
        width: fit-content;

        :hover {
          text-decoration: underline;
          text-decoration-color: rgba(255, 255, 255, 0.9);
        }
      }
    }
  }

  .bottom-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 70px;
    border-top: 1px solid rgba(255, 255, 255, 0.4);

    .policy {
      .policy-title {
        font-weight: 800;
        font-size: 24px;
        margin: 20px 0px;
      }
      .policies {
        display: flex;
        margin: 10px 0px;
        p {
          cursor: pointer;
          font-size: 12px;
          font-weight: 200;
          border-right: 1px solid rgba(255, 255, 255, 0.4);
          padding: 0px 5px;
          margin: 1px 0px;
          width: fit-content;
          :hover {
            text-decoration: underline;
            text-decoration-color: rgba(255, 255, 255, 0.9);
          }
          :first-child {
            padding-left: 0px;
          }
          :last-child {
            border-right: none;
          }
        }
      }
      .copyrights {
        font-size: 10.5px;
        font-weight: 200;
      }
    }

    .social-icons {
      display: flex;
      margin-top: 20px;

      svg {
        cursor: pointer;
        margin-left: 15px;
        height: 17px;
        width: 17px;
        path {
          fill: rgba(255, 255, 255, 0.8);
        }
      }
    }
  }
`;

export default FooterStyled;
