"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

const page = () => {
  const [isDragging, setIsDragging] = useState(false);

  const onDropRejected = (files: FileRejection[]) => {};
  const onDropAccepted = (files: File[]) => {};

  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center items-center flex-col",
        {
          "ring-blue-900/25 bg-blue-900/10": isDragging,
        }
      )}
    >
      <div className="relative flex flex-1 flex-col items-center justify-center w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDragging(true)}
          onDragLeave={() => setIsDragging(false)}
        >
            {
                ({getRootProps , getInputProps})=>(
                    <div className=" h-full w-full flex-1 flex flex-col items-center justify-center" {...getRootProps()}>
                        <input {...getInputProps()} />
                        
                    </div>
                )
            }
        </Dropzone>
      </div>
    </div>
  );
};

export default page;
