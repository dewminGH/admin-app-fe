/* eslint-disable @typescript-eslint/no-floating-promises */
import * as Styled from "../common/styles";
import DashboardFrame from "../../common";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import TableFrame from "../../../components/table";
import React, { useEffect, useState } from "react";
import { INavButton } from "../common/type";
import { getShop } from "../../../services";
import { tableClNames } from "./string";
import { setObjectToArray } from "../../../util";

const NavItems: INavButton[] = [
  {
    name: "Home",
    element: <HomeOutlinedIcon />,
  },
  {
    name: "Users",
    element: <PersonSearchOutlinedIcon />,
  },
];

const AminDashBoard: React.FC = () => {
  const [tableData, setTableData] = useState<string[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [content, setContent] = useState<React.ReactNode>(<div>no data</div>);

  const fetchShop = () => {
    setLoading(true);
    return getShop().then(items => {
      if (items.length > 0) {
        const ItemsInOrder = setObjectToArray(items);
        setTableData(ItemsInOrder);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    setContent(<TableFrame columNames={tableClNames} tableBodyData={tableData} loading={loading} />);
  }, [tableData, loading]);

  useEffect(() => {
    fetchShop();
  }, []);

  return (
    <Styled.FrameWrapper>
      <DashboardFrame title="Admin DashBoard" navItems={NavItems} content={content} />
    </Styled.FrameWrapper>
  );
};
export default AminDashBoard;
