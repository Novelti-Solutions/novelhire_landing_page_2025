import TabsComponent from "@/components/tab-component/tabs-component";
import { usecasesTabData } from "../../../data";

const UsecasesSection = () => {
  return (
    <section className="mx-auto max-w-screen-xl p-8 md:py-10 lg:py-10 py-10">
      <div className="flex justify-center items-start flex-col cursor-pointer">
        <p className="uppercase tracking-widest font-semibold mb-4">
          Novelhire usecases
        </p>
        <h1 className="text-2xl md:text-3xl md:w-[30%] text-[#172554] font-semibold mb-10">
          Reduce time-to-hire while maintaining high hiring standards.
        </h1>
        <TabsComponent data={usecasesTabData} />
      </div>
    </section>
  );
};

export default UsecasesSection;
