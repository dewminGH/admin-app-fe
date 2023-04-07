/* eslint-disable */
import * as Styled from "../common/styles";
import DashboardFrame from "../../common";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { IIDTokenDecode, INavButton, sx } from "../common/type";
import { getUserInventory, getUserTokens } from "../../../services";
import TableFrame from "../../../components/table";
import { tableClNames } from "./string";
import { useNavigate } from "react-router-dom";

const CustomDashBoard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [content, setContent] = useState<React.ReactNode>(<div>no data</div>);
  const [tableData, setTableData] = useState<string[][]>([]);
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  const NavItems: INavButton[] = [
    {
      name: "Inventory",
      element: <InventoryOutlinedIcon sx={sx} />,
    },
    {
      name: "Payment",
      element: <AttachMoneyOutlinedIcon sx={sx} />,
    },
  ];

  useEffect(() => {
    const token = getUserTokens().IdToken;
    if (!token) {
      navigate("/");
    }
    if (token) {
      const decode: IIDTokenDecode = jwtDecode(token);
      if (decode.profile !== "common") navigate("/");
    }
  });

  const fetchInventory = () => {
    return getUserInventory().then(data => {
      const items = data[0];
      setBalance(items.balance);
      if (items.items.length > 0) {
        let data: string[][] = [];
        /*order table data*/
        items.items?.map((item: string, index: number) => {
          data[index] = item.split(",");
        });
        setTableData(data);
        setLoading(false);
      }
    });
  };
  useEffect(() => {
    fetchInventory();
  }, []);

  useEffect(() => {
    setContent(<TableFrame columNames={tableClNames} tableBodyData={tableData} loading={loading} />);
  }, [tableData, loading]);

  return (
    <Styled.FrameWrapper>
      <DashboardFrame title="Customer DashBoard" navItems={NavItems} content={content} balance={balance} />
    </Styled.FrameWrapper>
  );
};

export default CustomDashBoard;
