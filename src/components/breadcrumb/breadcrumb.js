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
import { useParams, usePathname } from "next/navigation";

function BreadcrumbHeader() {
  const regex = /\d/;

  const home = ["Home"];

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
    <div className="w-full bg-[#FFF1D2] border-t-2 border-b-2 border-[#F7A600] flex justify-between items-center py-8 px-[5%] mt-5">
      <div className=" PageTitle">
        <p className="text-[20px] md:text-[25px] capitalize font-bold tracking-wide">
          {home[[home.length - 1]]}
        </p>
      </div>

      {/* breadcrumb */}
      <div className="breadcrumb flex gap-2 ">
        {home.length > 1
          ? home.map((path,idx) => (
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="capitalize">
                      {path}
                    </BreadcrumbPage>
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
