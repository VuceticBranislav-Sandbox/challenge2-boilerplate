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
    <Box className={styles.cartTotal}>
      <Box className={styles.cart_content}>
        <Typography>Cart totals</Typography>
        <Table aria-label="top-table">
          <TableHead>
            <TableRow>
              <TableCell className={styles.subtotal_title} sx={{borderBottom:"gray solid 1px"}}>SUBTOTAL</TableCell>
              <TableCell sx={{borderBottom:"gray solid 1px"}}>${cartState.amount.toFixed(2)}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={styles.table_body}>
            <TableRow>
              <TableCell className={styles.title_head } sx={{borderBottom:"gray solid 1px"}}>Shipping</TableCell>
              <TableCell className={styles.table_value} sx={{borderBottom:"gray solid 1px"}}>
                ${cartState.shipping.toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles.title_head} sx={{borderBottom:"gray solid 1px"}}>Flat rate:</TableCell>
              <TableCell className={styles.table_value} sx={{borderBottom:"gray solid 1px"}}>
                ${cartState.flatRate.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Table aria-label="bottom-table">
        <TableFooter>
          <TableRow>
            <TableCell className={styles.title_head} sx={{borderBottom:"gray solid 1px"}}>TOTAL</TableCell>
            <TableCell
              sx={{ fontSize: "15px", fontWeight: "bold", color: "Black", borderBottom:"gray solid 1px"}}
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
