"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import RHFCheckbox from "@/react-hook-form/rhf-checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import RHFArea from "../../react-hook-form/rhf-textarea";
import RHFTextField from "../../react-hook-form/rhf-textfield";
import { contactSchema } from "../../react-hook-form/schema";
import useMutation from "@/hooks/use-mutation";
import { useBoolean } from "@/hooks/use-boolean";
import { useEffect } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const ContactUsForm = () => {
  // custom hook
  const isSubmitted = useBoolean();

  const { data, loading, error, insertData } = useMutation(
    "/guest/contactus/mail",
    "POST"
  );

  // react hook form
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      company_name: "",
      message: "",
      isagree: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      await insertData(data);
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
  }, [isSubmitted.value, error]);

  return (
    <div className="flex w-full flex-col gap-3 px-4 py-4 lg:w-1/2 lg:py-0">
      <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">Contact us</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="my-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              <RHFTextField
                name={"first_name"}
                placeholder="Your First Name"
                title={"First Name"}
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <RHFTextField
                name={"last_name"}
                placeholder="Your Last Name"
                title={"LAST NAME"}
              />
            </div>

            <div className="col-span-12">
              <RHFTextField
                name={"email"}
                placeholder="Your Email"
                title={"Email"}
              />
            </div>

            <div className="col-span-12">
              <RHFTextField
                name={"company_name"}
                placeholder="Your Company"
                title={"Company"}
              />
            </div>
            <div className="col-span-12">
              <RHFArea
                title={"Message"}
                placeholder="Type your message here."
                className="max-h-28 min-h-28 resize-none"
                name={"message"}
              />
            </div>

            <div className="col-span-12">
              <div className="flex items-center gap-2">
                <Button
                  disabled={!form.watch().isagree || loading}
                  className="rounded-full"
                  size="lg"
                >
                  {loading && <Loader2 className="animate-spin" />} Submit
                </Button>

                <div className="flex gap-2">
                  <RHFCheckbox
                    name={"isagree"}
                    content={
                      <>
                        I agree with{" "}
                        <span className="text-theme-primary underline">
                          Terms & Conditions
                        </span>
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactUsForm;
