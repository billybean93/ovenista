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

const compactReservationSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().optional(),
  phone: z.string().optional(),
  date: z.date({ required_error: "Select a date" }),
  time: z.string().min(1, "Select a time"),
  partySize: z.string().min(1, "Select a party size"),
  specialRequests: z.string().optional(),
});

type ReservationSchema = {
  fullName: string;
  email?: string;
  phone?: string;
  date: Date;
  time: string;
  partySize: string;
  specialRequests?: string;
};

type ReservationFormProps = {
  compact?: boolean;
};

export function ReservationForm({ compact }: ReservationFormProps) {
  const [submitted, setSubmitted] = useState<ReservationSchema | null>(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const schema = compact ? compactReservationSchema : reservationSchema;
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReservationSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      phone: "",
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
      <div
        className={`flex flex-col items-center justify-center text-center ${
          compact
            ? "min-h-[320px] bg-[#fcfbf9] px-6 py-10"
            : "luxury-panel min-h-[420px] rounded-[28px] border border-[color:var(--color-border-hover)] p-10"
        }`}
      >
        <div className="mb-6 rounded-full border border-ember/20 bg-ember/10 p-4 text-ember">
          <Flame className="h-8 w-8" />
        </div>
        <h3 className="font-display text-4xl text-cream">Your table is confirmed.</h3>
        <p className="mt-3 max-w-md text-cream-muted">We&apos;ll see you soon.</p>
        <p className="mt-4 text-base uppercase tracking-[0.14em] text-ember">
          {format(submitted.date, "PPP")} · {submitted.time}
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="text-left">
        <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
          <Field label="Full Name" error={errors.fullName?.message} compact>
            <input {...register("fullName")} placeholder="John Doe" className={compactInputClassName} />
          </Field>
          <Field label="Guests" error={errors.partySize?.message} compact>
            <select {...register("partySize")} className={compactInputClassName}>
              <option value="">2 People</option>
              {partySizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Date" error={errors.date?.message} compact>
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <input
                  type="date"
                  min={format(new Date(), "yyyy-MM-dd")}
                  value={field.value ? format(field.value, "yyyy-MM-dd") : ""}
                  onChange={(event) => {
                    const value = event.target.value;
                    field.onChange(value ? new Date(`${value}T00:00:00`) : undefined);
                  }}
                  className={compactInputClassName}
                />
              )}
            />
          </Field>
          <Field label="Time" error={errors.time?.message} compact>
            <select {...register("time")} className={compactInputClassName}>
              <option value="">18:00</option>
              {reservationTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center bg-[#2d2119] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#3c2b20]"
          >
            Confirm Reservation
          </button>
        </div>
        {isSubmitting ? <p className="mt-4 text-center text-sm text-cream-muted">Sending...</p> : null}
      </form>
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
                  <CalendarDays className="h-4 w-4 text-ember" />
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
              <option key={time} value={time} className="bg-surface text-cream">
                {time}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Party Size" error={errors.partySize?.message}>
          <select {...register("partySize")} className={inputClassName}>
            <option value="">Choose party size</option>
            {partySizes.map((size) => (
              <option key={size} value={size} className="bg-surface text-cream">
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
      {isSubmitting ? <p className="mt-3 text-base text-cream-muted">Sending...</p> : null}
    </form>
  );
}

function Field({
  children,
  label,
  error,
  compact,
}: {
  children: ReactNode;
  label: string;
  error?: string;
  compact?: boolean;
}) {
  return (
    <label className="block space-y-2">
      <span
        className={
          compact
            ? "text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a88d69]"
            : "font-accent text-base uppercase tracking-[0.12em] text-gold-muted"
        }
      >
        {label}
      </span>
      {children}
      {error ? <span className="text-sm text-ember">{error}</span> : null}
    </label>
  );
}

const inputClassName =
  "min-h-14 w-full rounded-2xl border border-[color:var(--color-border)] bg-white/55 px-4 py-3 text-base text-cream placeholder:text-cream-muted focus:border-[color:var(--color-border-hover)] focus:bg-white/80 focus:outline-none";

const compactInputClassName =
  "min-h-12 w-full border-b border-[rgba(88,66,43,0.18)] bg-transparent px-0 py-2 text-sm text-[#34271d] outline-none transition placeholder:text-[#b7a28a] focus:border-[#d66a3f]";
