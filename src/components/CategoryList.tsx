import { wixClientServer } from "@/lib/wixClientServer";
import { constants } from "buffer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const categories = await wixClient.collections.queryCollections().find();

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories.items.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            key={item._id}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3  "
          >
            <div className="relative  bg-slate-100 w-full h-96 ">
              <Image
                src={item.media?.mainMedia?.image?.url || "cat.png"}
                alt=""
                fill
                sizes="30vw"
                className="object-cover rounded-lg "
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
