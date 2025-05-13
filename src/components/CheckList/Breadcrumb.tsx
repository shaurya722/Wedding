import * as React from "react";

function Breadcrumb() {
  return (
    <nav className="flex gap-2 items-center px-28 py-6 max-md:px-10 max-sm:px-5" aria-label="Breadcrumb">
      <a href="#" className="text-base text-zinc-500">Home</a>
      <div dangerouslySetInnerHTML={{
        __html:
          "<svg id=\"6630:19838\" layer-name=\"Chevron75\" width=\"10\" height=\"10\" viewBox=\"0 0 10 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-[10px] h-[10px]\"> <path d=\"M7.48207 4.40591L7.48107 4.40491L3.86007 0.782908C3.70253 0.625369 3.48886 0.536865 3.26607 0.536865C3.04327 0.536865 2.82961 0.625369 2.67207 0.782908C2.51453 0.940447 2.42603 1.15411 2.42603 1.37691C2.42603 1.5997 2.51453 1.81337 2.67207 1.97091L5.70207 4.99991L2.67207 8.02991C2.52498 8.18945 2.44534 8.39973 2.44984 8.61668C2.45434 8.83364 2.54262 9.04043 2.69619 9.19375C2.84976 9.34706 3.05671 9.43499 3.27367 9.43913C3.49063 9.44326 3.70077 9.36326 3.86007 9.21591L7.48107 5.59391H7.48207C7.56038 5.51587 7.62251 5.42314 7.66491 5.32104C7.70731 5.21893 7.72913 5.10946 7.72913 4.99891C7.72913 4.88835 7.70731 4.77888 7.66491 4.67678C7.62251 4.57468 7.56038 4.48195 7.48207 4.40391V4.40591Z\" fill=\"#8A8A8E\"></path> </svg>",
      }} />
      <span className="text-base font-bold text-neutral-900">Checklist</span>
    </nav>
  );
}

export default Breadcrumb;
