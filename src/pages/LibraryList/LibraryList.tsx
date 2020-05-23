import Table from "antd/lib/table";
import Tooltip from "antd/lib/tooltip";
import { getData } from "../../api";
import React, { FC, useEffect, useState } from "react";
import { ILibrary } from "../../interfaces/ILibrary";
import "./styles.css";
import { ColumnProps } from "antd/lib/table";
import { Link } from "react-router-dom";

const LibraryList: FC<{ data?: Array<ILibrary> }> = () => {
    const [data, setData] = useState([]);

    const columns: ColumnProps<any>[] = [
        {
            title: "Full Name",
            dataIndex: "fullname",
            key: "fullname",
            render: (text: string, record: any) => (
                <Tooltip title={"Show more info"}>
                    <Link to={`/lib-info/${JSON.stringify(record)}`}>
                        {text}
                    </Link>
                </Tooltip>
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
