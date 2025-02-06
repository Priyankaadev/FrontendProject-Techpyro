"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {  usePathname } from "next/navigation";
import Link from "next/link";

function BreadcrumbHeader() {
  const regex = /\d/;

  const home = ["aboutus"];

  const paths = usePathname();
  const pathname = paths.split("/").filter((path) => path);
  for (let i = 0; i < pathname.length; i++) {
    if (!regex.test(pathname[i])) {
      home.push(pathname[i]);
    } else {
      continue;
    }
  }
  console.log("home", home);

  return (
    <div className="w-full bg-[#FFF1D2] border-t-2 border-b-2 border-[#F7A600] flex justify-between items-center md:py-8 py-4 px-[5%]  mt-2">
      <div className=" PageTitle">
        <p className="text-[15px] md:text-[20px] capitalize font-bold tracking-wide">
          {home[[home.length - 1]]}
        </p>
      </div>

      {/* breadcrumb */}
      <div className="breadcrumb flex gap-2  text-[8x] md:text-[12px]">
        {home.length > 1
          ? home.map((path,idx) => (
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                  <Link href={idx === home.length-1  ? "":`/${path} `}>
                    <BreadcrumbPage className={idx === home.length-1 ?"capitalize" : "capitalize text-blue-400 cursor-pointer"} >
                      {path}
                    </BreadcrumbPage>
                    </Link>
                  </BreadcrumbItem>
                  {idx=== home.length-1 ? null :<BreadcrumbSeparator />}
                </BreadcrumbList>
              </Breadcrumb>
            ))
          : ""}
      </div>
    </div>
  );
}

export default BreadcrumbHeader;
