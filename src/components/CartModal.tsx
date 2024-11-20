import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import { useCartStore } from "../hooks/useCardStore";
import React, { useEffect } from "react";
import { media as wixMedia } from "@wix/sdk";

const CartModal = () => {
  // const cart = true;

  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();

  // console.log(cart);

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {isLoading ? (
        "Loading"
      ) : !cart.lineItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="font-bold">Shopping Cart</h2>
          {cart.lineItems?.map((cartItem) => (
            <div key={cartItem._id}>
              {cartItem.image && (
                <Image
                  src={wixMedia.getScaledToFillImageUrl(
                    cartItem.image,
                    72,
                    96,
                    {}
                  )}
                  alt=""
                  width={72}
                  height={96}
                  className="object-cover rounded-md"
                />
              )}
              <div className="flex flex-col justify-between w-full">
                <div className="">
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">
                      {cartItem.productName?.original}
                    </h3>
                    <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                      {cartItem.quantity && cartItem.quantity > 1 && (
                        <div className="text-xs text-green-500">
                          {cartItem.quantity} x{" "}
                        </div>
                      )}{" "}
                      {cartItem.price?.amount}
                    </div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">
                    {cartItem.availability?.status}
                  </div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{cartItem.quantity}</span>
                  <span
                    className="text-blue-500"
                    style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                    onClick={() => removeItem(wixClient, cartItem._id!)}
                  >
                    Remove
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">
                {cart.currency} {cart?.subtotal?.amount}
              </span>
            </div>

            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                // disabled={isLoading}
                // onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
