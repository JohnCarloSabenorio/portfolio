import Description from "./Description";
import { Suspense } from "react";
import Contact from "./Contact";
export default function Profile() {
  return (
    <div className="flex flex-col justify-center md:flex-row items-center gap-3">
      <Contact />

      <Suspense
        fallback={
          <div className="flex-1 rounded-full max-w-72 aspect-square flex justify-center items-center p-5">
            Loading...
          </div>
        }
      >
        <img
          className="flex-1 rounded-full max-w-72 aspect-square object-cover"
          src="/images/formal.JPG"
        />
      </Suspense>

      <Description />
    </div>
  );
}
