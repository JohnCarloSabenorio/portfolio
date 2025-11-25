import roleData from "@/data/roles.json";

import RoleIcon from "./RoleIcon";
import SectionSeparator from "../SectionSeparator";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import "@/styles/RoleSection.css";
export default function RoleSection() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="w-full justify-center p-8 md:p-0 mt-5" id="roles-section">
        <SectionSeparator
          header="What I Do"
          desc="Check out what I do as a developer!"
        />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3 p-3">
          {roleData.map((data, idx) => {
            return (
              <div
                key={idx}
                className={`flex flex-col aspect-square justify-center items-center p-3 rounded-md border bg-white ${
                  isDarkMode && "role-dark"
                }`}
              >
                <RoleIcon icon={data.icon} />
                <span className="text-xl font-semibold mt-3">{data.task}</span>
                <p className="text-center">{data.phrase}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

/* 
<Carousel
        opts={{
          align: "start",
        }}
        className="w-full justify-center p-8 md:p-0 mt-5"
        id="roles-section"
      >
        <SectionSeparator
          header="What I Do"
          desc="Check out what I do as a developer!"
        />
        <CarouselContent>
          {roleData.map((data, idx) => {
            return (
              <CarouselItem key={idx} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className={`${isDarkMode && "role-dark"}`}>
                    <CardContent className="flex flex-col justify-center aspect-square items-center text-center p-6">
                      <RoleIcon icon={data.icon} />
                      <span className="text-3xl font-semibold">
                        {data.task}
                      </span>
                      <p>{data.phrase}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div className="flex justify-center mt-5 gap-3">
          <CarouselPrevious
            className={`relative cursor-pointer ${isDarkMode && "role-dark"}`}
          />
          <CarouselNext
            className={`relative cursor-pointer ${isDarkMode && "role-dark"}`}
          />
        </div>
      </Carousel>
*/
