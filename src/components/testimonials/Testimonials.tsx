import React from "react";

import { Check, Star } from "lucide-react";

const Testimonials = ({
  text,
  name,
  imgSrc
}: {
  text: React.ReactNode;
  name: string;
  imgSrc: string;
}) => {
  return (
    <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20 ">
      <div className="flex gap-0.5 mb-2">
        <Star className="w-5 h-5 text-green-600 fill-green-600" />
        <Star className="w-5 h-5 text-green-600 fill-green-600" />
        <Star className="w-5 h-5 text-green-600 fill-green-600" />
        <Star className="w-5 h-5 text-green-600 fill-green-600" />
        <Star className="w-5 h-5 text-green-600 fill-green-600" />
      </div>
      <div className="text-lg leading-8">
        <p>&quot;{text}&quot;</p>
      </div>
      <div className="flex gap-4 mt-2">
        <img
          className="rounded-full h-12 w-12 object-cover"
          src={imgSrc}
          alt="user"
        />
        <div className="flex flex-col">
          <p className="font-semibold">{name}</p>
          <div className="flex gap-1.5 items-center text-zinc-600">
            <Check className="h-4 w-4 stroke-[3px] text-green-600" />
            <p className="text-sm">Verified Purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
