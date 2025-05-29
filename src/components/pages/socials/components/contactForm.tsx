"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { LoadComponent } from "@/components/animations/loadComponent";

const formSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name." }),
  email: z
    .string()
    .min(1, { message: "Please enter your email." })
    .email("Please enter a valid email address."),
  message: z
    .string()
    .min(10, { message: "Please write a message (at least 10 characters)." })
    .max(500),
});

export const ContactForm = ({ isTitle = false }: { isTitle?: boolean }) => {
  const [loading, setLoading] = useState(false); // State to manage loading
  const [success, setSuccess] = useState(false); // State to manage success component visibility
  const [countdown, setCountdown] = useState(10); // Countdown timer state
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env does not setup properly");
      return;
    }

    setLoading(true);

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        values,
        publicKey
      );

      if (response.status === 200) {
        setSuccess(true);
        form.reset();
        setCountdown(10);
        const interval = setInterval(() => {
          setCountdown((prev) => {
            if (prev === 1) {
              clearInterval(interval);
              setSuccess(false);
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.", {
        duration: 3000,
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex items-center flex-col gap-6">
        <div className="flex items-center justify-center w-[4.5rem] aspect-square bg-gray-900 rounded-full">
          <svg
            className="w-8 h-8"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.8317 7.25201C25.1627 7.47268 25.3924 7.81579 25.4704 8.20586C25.5485 8.59593 25.4683 9.00101 25.2477 9.33201L15.2477 24.332C15.1245 24.5165 14.962 24.6714 14.7718 24.7855C14.5815 24.8996 14.3684 24.9701 14.1476 24.9919C13.9269 25.0137 13.704 24.9863 13.4952 24.9116C13.2863 24.8369 13.0966 24.7168 12.9397 24.56L6.93969 18.56C6.67473 18.2757 6.53049 17.8996 6.53734 17.511C6.5442 17.1224 6.70162 16.7516 6.97645 16.4768C7.25128 16.2019 7.62205 16.0445 8.01065 16.0377C8.39925 16.0308 8.77534 16.175 9.05969 16.44L13.7657 21.146L22.7517 7.66601C22.9727 7.33536 23.3159 7.10601 23.706 7.02838C24.096 6.95074 24.5009 7.03118 24.8317 7.25201Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center gap-8 text-center">
          <div className="flex flex-col justify-center gap-1">
            <p className="text-h1 text-gray-900 font-medium">Messages Sent!</p>
            <p className="text-bodyMedium text-gray-600">
              Thanks for reaching out! I’ll get back to you soon.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button
              variant="default"
              onClick={() => {
                setSuccess(false); // Hide the success component
                setCountdown(10); // Reset the countdown
              }}
            >
              Send Again
            </Button>
            <p className="text-bodySmall text-gray-600">
              You&apos;ll be able to submit again in{" "}
              <span className="text-neutral-900 font-medium">{countdown}</span>{" "}
              seconds.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {isTitle && (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <span className="text-bodyMedium text-gray-600">
              Let&apos;s get in touch and
            </span>
            <h1 className="text-h1 font-medium">Say Hi!</h1>
          </div>
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className="min-h-[10.75rem]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full mt-2 flex items-center justify-center gap-2"
            type="submit"
            disabled={loading}
          >
            {loading ? <LoadComponent /> : "Send"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
