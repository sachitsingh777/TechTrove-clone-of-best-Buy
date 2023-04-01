import { useToast } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PayPal() {
  const paypal = useRef();
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Your order",
                amount: {
                  currency_code: "USD",
                  value: 999.99,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          toast({
            title: `Payment Successful`,
            status: "success",
            isClosable: true,
          });
          navigate('/')
          console.log("orders", order);
        },
        onError: (err) => {
          console.log(err);
          toast({
            title: `Payment Failed`,
            status: "error",
            isClosable: true,
          });
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <>
      <div ref={paypal}></div>
    </>
  );
}
