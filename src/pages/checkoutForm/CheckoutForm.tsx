import { Select, SelectChangeEvent, TextField, Paper } from "@mui/material";
import { Box, Button, Grid, MenuItem, Modal, Typography } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import React, { useContext, useState } from "react";
import YupValidation from "./components/YupValidation";
import { CartContext } from "context/cart/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import CheckoutButton from "pages/checkoutForm/components/CheckoutButton";
import { PaymentMathodEnym } from "context/cart/CartProvider";
import { useTranslation } from "react-i18next";

const CheckoutForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { cartState, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [value, setValue] = useState<string>(cartState.paymentMethod);
  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  interface IFormValues {
    name: string;
    email: string;
    phoneNumber: string;
    paymentMethod: string;
  }

  const initialValue: IFormValues = {
    name: "",
    email: "",
    phoneNumber: "",
    paymentMethod: value,
  };

  const handleSubmit = (values: IFormValues, props: any) => {
    alert(`Well done.
    Spent ${cartState.total.toFixed(2)}$ using ${value}.
    name: ${values.name}
    email: ${values.email}
    phoneNumber: ${values.phoneNumber}`);
    props.resetForm();
    clearCart();
    setOpen(false);
    navigate("/");
  };

  return (
    <Box className={styles.checkoutForm}>
      <CheckoutButton onClickEvent={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container>
          <Grid item sm={3} xs={false}></Grid>
          <Grid item sm={6} xs={12}>
            <Paper>
              <Box
                m={5}
                p={3}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography
                  fontSize={"large"}
                  sx={{ margin: "10px", alignSelf: "center" }}
                >
                  Checkout
                </Typography>
                <Formik
                  initialValues={initialValue}
                  validationSchema={YupValidation}
                  onSubmit={handleSubmit}
                >
                  {(props) => {
                    const { name } = props.values;
                    return (
                      <Form>
                        <Field
                          as={Select}
                          label={t("Payment method")}
                          name="paymentMethod"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          value={value}
                          onChange={handleChange}
                          onBlur={props.handleBlur}
                          error={
                            props.errors.paymentMethod &&
                            props.touched.paymentMethod
                          }
                          required
                        >
                          {PaymentMathodEnym.map((x) => (
                            <MenuItem value={x} key={x}>
                              {x}
                            </MenuItem>
                          ))}
                        </Field>

                        <Field
                          as={TextField}
                          label={t("Name")}
                          name="name"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          value={name}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          helperText={<ErrorMessage name="name" />}
                          error={props.errors.name && props.touched.name}
                          required
                        />
                        {/* Second Way */}
                        <Field
                          as={TextField}
                          label="Email"
                          type="Email"
                          name="email"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="email" />}
                          error={props.errors.email && props.touched.email}
                          required
                        />

                        <Field
                          as={TextField}
                          label={t("Phone Number")}
                          name="phoneNumber"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="phoneNumber" />}
                          error={
                            props.errors.phoneNumber &&
                            props.touched.phoneNumber
                          }
                          required
                        />

                        <Button
                          variant="contained"
                          type="submit"
                          color="primary"
                          fullWidth
                        >
                          {t("Submit")}
                        </Button>
                      </Form>
                    );
                  }}
                </Formik>
              </Box>
            </Paper>
          </Grid>
          <Grid item sm={3} xs={false}></Grid>
        </Grid>
      </Modal>
    </Box>
  );
};

export default CheckoutForm;
