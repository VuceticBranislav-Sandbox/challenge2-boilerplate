import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { CartContext } from "context/cart/CartContext";
import { memo, useContext } from "react";
import styles from "./styles.module.css";

const CartTotals = () => {
  const { cartState } = useContext(CartContext);

  return (
    <Box className={styles.checkOutTotal}>
      <Box className={styles.cart_content}>
        <Typography>Cart totals</Typography>
        <Table aria-label="top-table">
          <TableHead>
            <TableRow>
              <TableCell className={styles.subtotal_title}>SUBTOTAL</TableCell>
              <TableCell>${cartState.amount.toFixed(2)}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={styles.table_body}>
            <TableRow>
              <TableCell className={styles.title_head}>Shipping</TableCell>
              <TableCell className={styles.table_value}>
                ${cartState.shipping.toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles.title_head}>Flat rate:</TableCell>
              <TableCell className={styles.table_value}>
                ${cartState.flatRate.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Table aria-label="bottom-table">
        <TableFooter>
          <TableRow>
            <TableCell className={styles.title_head}>TOTAL</TableCell>
            <TableCell
              sx={{ fontSize: "15px", fontWeight: "bold", color: "Black" }}
            >
              ${cartState.total.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Box>
  );
};

export default memo(CartTotals);
