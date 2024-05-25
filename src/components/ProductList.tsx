import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://img.freepik.com/free-photo/front-view-natural-self-care-products-composition_23-2148980988.jpg?t=st=1716620520~exp=1716624120~hmac=667e914f86061610e59affc138aafaec89a2dda2ffff2db1207d9bfe96f42ef3&w=360"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://img.freepik.com/free-photo/coffee-cake_1339-1257.jpg?t=st=1716620601~exp=1716624201~hmac=0d6f56784727afa80528680a73f0a79c7b9c947943173bff094fd3f4f4947288&w=900"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product title</span>
          <span className="font-semibold">$46</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to cart
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://img.freepik.com/free-photo/cucumber-slices-soap-dark-background_1150-45078.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://img.freepik.com/free-photo/cucumber-slices-soap-dark-background_1150-45079.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product title</span>
          <span className="font-semibold">$46</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to cart
        </button>
      </Link>

      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://img.freepik.com/free-photo/different-ceramic-empty-plates-bowls_114579-21174.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://img.freepik.com/free-photo/top-view-empty-orange-plate-glass-made-dark-surface_140725-115121.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product title</span>
          <span className="font-semibold">$46</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to cart
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://img.freepik.com/free-photo/black-bucket-hat-unisex-accessory_53876-106055.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://img.freepik.com/free-photo/man-black-sweater-black-bucket-hat-youth-apparel-shoot_53876-102294.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product title</span>
          <span className="font-semibold">$46</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Add to cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
