import { TableFooter, TableHead, TableRow, Typography } from "@mui/material";
import { Box, Table, TableBody, TableCell } from "@mui/material";
import { CartContext } from "context/cart/CartContext";
import { memo, useContext } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

const CartTotals = () => {
  const { cartState } = useContext(CartContext);
  const { t } = useTranslation();

  return (
    <Box className={styles.cartTotal}>
      <Box className={styles.cart_content}>
        <Typography>{t("Cart totals")}</Typography>
        <Table aria-label="top-table">
          <TableHead>
            <TableRow>
              <TableCell
                className={styles.subtotal_title}
                sx={{ borderBottom: "gray solid 1px" }}
              >
                {t("SUBTOTAL")}
              </TableCell>
              <TableCell sx={{ borderBottom: "gray solid 1px" }}>
                ${cartState.amount.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={styles.table_body}>
            <TableRow>
              <TableCell
                className={styles.title_head}
                sx={{ borderBottom: "gray solid 1px" }}
              >
                {t("Shipping")}
              </TableCell>
              <TableCell
                className={styles.table_value}
                sx={{ borderBottom: "gray solid 1px" }}
              >
                ${cartState.shipping.toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                className={styles.title_head}
                sx={{ borderBottom: "gray solid 1px" }}
              >
                {t("Flat rate:")}
              </TableCell>
              <TableCell
                className={styles.table_value}
                sx={{ borderBottom: "gray solid 1px" }}
              >
                ${cartState.flatRate.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Table aria-label="bottom-table">
        <TableFooter>
          <TableRow>
            <TableCell
              className={styles.title_head}
              sx={{ borderBottom: "gray solid 1px" }}
            >
              {t("TOTAL")}
            </TableCell>
            <TableCell
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "Black",
                borderBottom: "gray solid 1px",
              }}
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
