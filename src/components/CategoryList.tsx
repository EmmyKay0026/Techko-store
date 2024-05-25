import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link
          href={`/list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative  bg-slate-100 w-full h-96">
            <Image
              src={
                "https://img.freepik.com/free-photo/coffee-cake_1339-1257.jpg?t=st=1716620601~exp=1716624201~hmac=0d6f56784727afa80528680a73f0a79c7b9c947943173bff094fd3f4f4947288&w=900"
              }
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href={`/list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative  bg-slate-100 w-full h-96">
            <Image
              src={
                "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817602.jpg"
              }
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Phone Accessories
          </h1>
        </Link>
        <Link
          href={`/list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative  bg-slate-100 w-full h-96">
            <Image
              src={
                "https://img.freepik.com/free-photo/girl-wearing-green-cap_53876-97835.jpg"
              }
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Kids section
          </h1>
        </Link>
        <Link
          href={`/list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative  bg-slate-100 w-full h-96">
            <Image
              src={
                "https://img.freepik.com/free-vector/saucepan-set-cooking-breakfast-lunch-dinner-realistic_1284-33154.jpg"
              }
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Kitchen</h1>
        </Link>
        <Link
          href={`/list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative  bg-slate-100 w-full h-96">
            <Image
              src={
                "https://img.freepik.com/free-photo/close-up-collection-make-up-beauty-products_23-2148620012.jpg"
              }
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Make up</h1>
        </Link>
        <Link
          href={`/list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative  bg-slate-100 w-full h-96">
            <Image
              src={
                "https://img.freepik.com/premium-vector/realistic-watch-clock-chronograph-stainless-steel-dark-blue-design-luxury-fashion-object-men_33869-2790.jpg"
              }
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Watches</h1>
        </Link>
        <Link
          href={`/list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative  bg-slate-100 w-full h-96">
            <Image
              src={
                "https://img.freepik.com/free-photo/brownies-tower-with-cottage-cheesecake-raspberries_114579-1241.jpg"
              }
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Cakes</h1>
        </Link>
        <Link
          href={`/list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative  bg-slate-100 w-full h-96">
            <Image
              src={
                "https://img.freepik.com/free-photo/camera-photography-design-studio-editing-concept_53876-42954.jpg"
              }
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Computer</h1>
        </Link>
        <Link
          href={`/list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative  bg-slate-100 w-full h-96">
            <Image
              src={
                "https://img.freepik.com/free-photo/camera-photography-design-studio-editing-concept_53876-42954.jpg"
              }
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Musical instruments
          </h1>
        </Link>
        <Link
          href={`/list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative  bg-slate-100 w-full h-96">
            <Image
              src={
                "https://img.freepik.com/free-photo/still-life-cosmetic-products_23-2149163110.jpg"
              }
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Perfume</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
