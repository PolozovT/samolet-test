import { Table } from "antd";
import { getData } from "../../api";
import React, { FC, useEffect, useState } from "react";
import { ILibrary } from "../../interfaces/ILibrary";
import "./styles.css";
import { ColumnProps } from "antd/lib/table";

const LibraryList: FC<{ data?: Array<ILibrary> }> = () => {
    const [data, setData] = useState([]);

    const columns: ColumnProps<any>[] = [
        {
            title: "Full Name",
            dataIndex: "fullname",
            key: "fullname",
            render: (text: string) => (
                <span style={{ fontWeight: "bold" }}>{text}</span>
            ),
        },
        {
            title: "Libraries count",
            dataIndex: "libraries",
            key: "libraries",
            sorter: (a: ILibrary, b: ILibrary) => a.libraries - b.libraries,
            defaultSortOrder: "descend" as "descend",
        },
    ];

    useEffect(() => {
        getData().then(setData).catch();
    }, []);

    return (
        <div className={"main"}>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export { LibraryList };
