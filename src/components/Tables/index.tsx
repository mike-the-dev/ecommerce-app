"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Switch,
} from "@nextui-org/react";
import { columns, users, statusOptions } from "./data";
import { VerticalDotsIcon } from "./VerticalDotsIcon";

const statusColorMap: any = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const ProductTable: React.FC = (): React.ReactElement => {
  const INITIAL_VISIBLE_COLUMNS = ["title", "inStock", "enabled", "price", "actions"];
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const headerColumns = React.useMemo(() => {
    // @ts-ignore
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "title":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar, "size": "lg" }}
            description={user.email}
            name={<div className="font-bold">{cellValue}</div>}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "inStock":
        return (
          <div className="flex flex-col">
            <Chip color={ cellValue? "success": "default" } variant="dot">{cellValue ? "Yes" : "No"}</Chip>
            {/* <p className="text-bold text-tiny capitalize text-default-400">{user.team}</p> */}
          </div>
        );
      case "enabled":
        return (
          <Switch defaultSelected aria-label="Enabled" color={cellValue ? "success" : "default"} />
        );
      case "price":
        return (
          <div className="flex flex-col">
            <p className="font-bold text-small">{cellValue}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  
  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      // bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        // wrapper: "max-h-[382px]",
      }}
      // selectedKeys={selectedKeys}
      selectionMode="multiple"
      // sortDescriptor={sortDescriptor}
      // topContent={topContent}
      topContentPlacement="outside"
      // onSelectionChange={setSelectedKeys}
      // onSortChange={setSortDescriptor}
    >
      <TableHeader 
        columns={headerColumns}
      >
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody 
        emptyContent={"No products found."} 
        items={users}
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ProductTable;