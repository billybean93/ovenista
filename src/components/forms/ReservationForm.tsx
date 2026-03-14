"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarDays, Flame, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { DayPicker } from "react-day-picker";
import { z } from "zod";

import { Button } from "@/components/ui/Button";
import { partySizes, reservationTimes } from "@/lib/restaurant-data";

const reservationSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a valid phone number"),
  date: z.date({ required_error: "Select a date" }),
  time: z.string().min(1, "Select a time"),
  partySize: z.string().min(1, "Select a party size"),
  specialRequests: z.string().optional(),
});

type ReservationSchema = z.infer<typeof reservationSchema>;

type ReservationFormProps = {
  compact?: boolean;
};

export function ReservationForm({ compact }: ReservationFormProps) {
  const [submitted, setSubmitted] = useState<ReservationSchema | null>(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReservationSchema>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      specialRequests: "",
      time: "",
      partySize: "",
    },
  });

  const onSubmit = async (values: ReservationSchema) => {
    await Promise.resolve();
    setSubmitted(values);
  };

  if (submitted) {
    return (
      <div className="luxury-panel flex min-h-[420px] flex-col items-center justify-center rounded-[28px] border border-[color:var(--color-border-hover)] p-10 text-center">
        <div className="mb-6 rounded-full border border-gold/30 bg-gold/10 p-4 text-gold">
          <Flame className="h-8 w-8" />
        </div>
        <h3 className="font-display text-4xl text-cream">Your table is confirmed.</h3>
        <p className="mt-3 max-w-md text-cream-muted">We&apos;ll see you soon.</p>
        <p className="mt-4 text-[14px] uppercase tracking-[0.2em] text-gold">
          {format(submitted.date, "PPP")} · {submitted.time}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`luxury-panel rounded-[28px] border border-[color:var(--color-border)] p-6 md:p-8 ${compact ? "" : "max-w-4xl"}`}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" error={errors.fullName?.message}>
          <input {...register("fullName")} placeholder="Your name" className={inputClassName} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" placeholder="you@example.com" className={inputClassName} />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input {...register("phone")} type="tel" placeholder="+84 ..." className={inputClassName} />
        </Field>
        <Field label="Date" error={errors.date?.message}>
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCalendarOpen((current) => !current)}
                  className={`${inputClassName} flex w-full items-center justify-between text-left ${field.value ? "text-cream" : "text-cream-muted"}`}
                >
                  <span>{field.value ? format(field.value, "PPP") : "Select a date"}</span>
                  <CalendarDays className="h-4 w-4 text-gold" />
                </button>
                {calendarOpen ? (
                  <div className="day-picker absolute z-20 mt-3 rounded-2xl border border-[color:var(--color-border)] bg-elevated p-3 shadow-card">
                    <DayPicker
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        if (date) {
                          field.onChange(date);
                          setCalendarOpen(false);
                        }
                      }}
                      disabled={{ before: new Date() }}
                    />
                  </div>
                ) : null}
              </div>
            )}
          />
        </Field>
        <Field label="Time" error={errors.time?.message}>
          <select {...register("time")} className={inputClassName}>
            <option value="">Choose a time</option>
            {reservationTimes.map((time) => (
              <option key={time} value={time} className="bg-bg">
                {time}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Party Size" error={errors.partySize?.message}>
          <select {...register("partySize")} className={inputClassName}>
            <option value="">Choose party size</option>
            {partySizes.map((size) => (
              <option key={size} value={size} className="bg-bg">
                {size}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Special Requests" error={errors.specialRequests?.message}>
          <textarea
            {...register("specialRequests")}
            rows={3}
            placeholder="Anything we should know?"
            className={inputClassName}
          />
        </Field>
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full md:w-auto">
        <span className="inline-flex items-center gap-2">
          Reserve Now
          <Sparkles className="h-4 w-4" />
        </span>
      </Button>
      {isSubmitting ? <p className="mt-3 text-[14px] text-cream-muted">Sending...</p> : null}
    </form>
  );
}

function Field({
  children,
  label,
  error,
}: {
  children: ReactNode;
  label: string;
  error?: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="font-accent text-[14px] uppercase tracking-[0.22em] text-gold">
        {label}
      </span>
      {children}
      {error ? <span className="text-[14px] text-ember">{error}</span> : null}
    </label>
  );
}

const inputClassName =
  "min-h-14 w-full rounded-2xl border border-[color:var(--color-border)] bg-white/[0.04] px-4 py-3 text-base text-cream placeholder:text-cream-muted focus:border-[color:var(--color-border-hover)] focus:outline-none";
