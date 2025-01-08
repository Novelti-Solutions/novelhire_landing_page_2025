"use client";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useFetch from "@/hooks/use-fetch";
import { RHFAutocomplete } from "@/react-hook-form/rhf-autocomplete";
import RHFCheckbox from "@/react-hook-form/rhf-checkbox";
import RHFArea from "@/react-hook-form/rhf-textarea";
import RHFTextField from "@/react-hook-form/rhf-textfield";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { demoSchema } from "@/react-hook-form/schema";
import { useBoolean } from "@/hooks/use-boolean";
import useMutation from "@/hooks/use-mutation";
import { useEffect } from "react";
import { toast } from "sonner";
import { motion } from "motion/react";

const payload = {
  query: {
    isactive: true,
    isDeleted: false,
    type: "ROLE_ID",
  },
  options: {
    select: ["id", "name", "value", "type"],
    page: 1,
    paginate: 100,
  },
  isCountOnly: false,
};
const RequestDemoForm = () => {
  // usestom hooks
  const isSubmitted = useBoolean();
  const { data: rolesData } = useFetch("/guest/masters/list", "POST", payload);
  const { data: countriesCode } = useFetch("/general/countries/list", "GET");

  // post data
  const { data, loading, error, insertData } = useMutation("/guest/account_request/create", "POST");

  // react hook form
  const form = useForm({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile_no: "",
      mobile_code: {
        name: "India",
        dial_code: "+91",
        code: "IN",
      },
      org_name: "",
      role: {},
      message: "",
      isagree: false,
    },
  });

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      mobile_code: data.mobile_code.dial_code,
      role_id: data.role.id,
      isActive: true,
    };

    try {
      await insertData(payload);
      isSubmitted.onTrue();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (isSubmitted.value && !error) {
      toast.success("Form submitted Successfully");
      isSubmitted.onFalse();
      form.reset();
    }
    if (isSubmitted.value && error) {
      toast.error("Something went wrong");
      isSubmitted.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted.value, error]);

  return (
    <div className="relative mx-auto my-14 max-w-screen-sm p-4">
      {/* <div className="absolute left-1/2 top-0 -z-10 h-72 w-1/2 -translate-x-1/2 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 blur-[200px]" /> */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 text-center"
      >
        <h3 className="text-3xl font-semibold md:text-5xl lg:text-6xl text-theme-primaryText">
          Book a <br /> free Demo
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-theme-secondaryText">
          Discover the future of hiring with our AI-powered interview solution. Schedule a personalized demo to see how our technology can streamline
          your recruitment process and find the best candidates efficiently.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        viewport={{ once: true }}
        className="py-14"
      >
        <h4 className="text-xl font-bold text-theme-primaryText">Get Started With NovelHire</h4>
        <p className="my-2 text-theme-secondaryText">
          Experience the advantages of AI in recruitment. Book your demo today and revolutionize your hiring process!
        </p>
      </motion.div>

      <Form {...form}>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onSubmit={form.handleSubmit(onSubmit)}
          className="my-4"
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              <RHFTextField name={"name"} placeholder="Your  Name" title={"Name"} />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <RHFTextField name={"email"} placeholder="Your Email" title={"Email"} />
            </div>

            <div className="col-span-12 lg:col-span-4">
              <RHFAutocomplete
                name={"mobile_code"}
                placeholder="Your Mobile code"
                getOptionLabel={"dial_code"}
                target={"code"}
                options={countriesCode || []}
                title={"Mobile code"}
              />
            </div>

            <div className="col-span-12 lg:col-span-8">
              <RHFTextField name={"mobile_no"} type="number" placeholder="Your Mobile No" title={"Phone Number"} />
            </div>

            <div className="col-span-12">
              <RHFTextField name={"org_name"} placeholder="Your Org Name" title={"Organisation name"} />
            </div>

            <div className="col-span-12">
              <RHFAutocomplete
                name={"role"}
                placeholder="Your Role"
                getOptionLabel={"value"}
                target={"id"}
                options={rolesData || []}
                title={"Role"}
              />
            </div>

            <div className="col-span-12">
              <RHFArea title={"Message"} placeholder="Type your message here." className="max-h-28 min-h-28 resize-none" name={"message"} />
            </div>

            <div className="col-span-12">
              <div className="flex w-full flex-col gap-2">
                <RHFCheckbox
                  name={"isagree"}
                  content={
                    <>
                      I agree with <span className="text-theme-primary underline">Terms & Conditions</span>
                    </>
                  }
                />
                <Button disabled={!form.watch().isagree || loading} className="rounded-full bg-theme-primary" size="lg">
                  {loading && <Loader2 className="animate-spin" />} Submit
                </Button>
              </div>
            </div>
          </div>
        </motion.form>
      </Form>
    </div>
  );
};

export default RequestDemoForm;
