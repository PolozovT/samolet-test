import Table from "antd/lib/table";
import React, { FC } from "react";
import { ILibrary } from "../../interfaces/ILibrary";
import "./styles.css";
import { ColumnProps } from "antd/lib/table";
import { useParams } from "react-router-dom";

const LibraryInfo: FC<{ data?: ILibrary }> = () => {
    const { number } = useParams();

    function numberWithSpaces(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const columns: ColumnProps<any>[] = [
        {
            title: "Full Name",
            dataIndex: "fullname",
            key: "fullname",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Libraries count",
            dataIndex: "libraries",
            key: "libraries",
            sorter: (a: ILibrary, b: ILibrary) => a.libraries - b.libraries,
            defaultSortOrder: "descend" as "descend",
        },
        {
            title: "Employees",
            dataIndex: "employees",
            key: "employees",
            sorter: (a: ILibrary, b: ILibrary) => a.employees - b.employees,
        },
        {
            title: "Funds",
            dataIndex: "funds",
            key: "funds",
            sorter: (a: ILibrary, b: ILibrary) => a.funds - b.funds,
            render: (funds: number) => <span>{numberWithSpaces(funds)} $</span>,
        },
        {
            title: "Subscribers",
            dataIndex: "subscribers",
            key: "subscribers",
            sorter: (a: ILibrary, b: ILibrary) => a.subscribers - b.subscribers,
        },
    ];

    return (
        <div className={"main"}>
            <Table columns={columns} dataSource={[JSON.parse(number)]} />
        </div>
    );
};

export { LibraryInfo };
