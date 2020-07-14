import styled from "styled-components";

const ScheduleStyle = styled.div`
  padding: 200px 300px;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.07);

  .days {
    .notification-message {
      position: absolute;
      z-index: 9999;
      top: 200px;
      left: -200px;
      border-radius: 2px;
      height: 140px;
      width: 180px;
      border-top: 10px solid #4285f4;
      opacity: 1;
      background: rgba(0, 0, 0, 0.08);
      transition: all 0.3s;
      padding: 5px 10px;
      font-size: 14px;
      color: #000;
      font-weight: 400;
      p {
        font-size: 14px;
        font-weight: 600;
        margin: 5px 0px 15px 0px;
      }
    }
    .header-for-table {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .month-name {
        text-align: center;
        font-size: 35px;
        font-weight: 200;
        text-transform: uppercase;
      }

      .side-legend {
        .element {
          display: flex !important;
          flex-direction: row !important;
          justify-content: flex-start !important;
          align-items: center !important;
          width: 100% !important;
        }
        .red-dot {
          height: 15px;
          width: 15px;
          background: red;
          margin-right: 15px;
        }

        .blue-dot {
          height: 15px;
          width: 15px;
          background: blue;
          margin-right: 15px;
        }
      }
    }
  }

  .table th {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .table td {
    height: 110px !important;
    width: 110px !important;
    padding: 15px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .day {
    .d-day {
      cursor: pointer;
      position: relative;
      background: inherit;
      transition: all 0.3s;
      :hover {
        background: rgba(0, 0, 0, 0.1);
      }

      .date-month {
        padding: 0px;
        margin: 0px;
        text-align: center;
        font-size: 14px;
        margin-bottom: 5px;
      }
      .date-day {
        text-align: center;
        font-size: 40px;
        font-weight: 500;
      }

      .date-color {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 20px;
        width: 20px;
        .edit-blue {
          height: 100%;
          width: 100%;
          background: blue;
        }
        .reserved-red {
          height: 100%;
          width: 100%;
          background: red;
        }
      }
    }
  }
`;

export default ScheduleStyle;
