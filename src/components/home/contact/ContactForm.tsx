import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SubmitButton } from "@/components/home/SubmitButton";
import {
  contactFormListVariants,
  createContactFormItemVariants,
} from "@/components/home/contact/contact-config";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

type ContactActionState = {
  success: boolean;
  message: string | null;
  error: string | null;
};

type ContactFormProps = {
  values: ContactFormValues;
  onValuesChange: (nextValues: ContactFormValues) => void;
  formAction: (payload: FormData) => void;
  state: ContactActionState;
  isDesktop: boolean;
  isOpen: boolean;
};

export function ContactForm({
  values,
  onValuesChange,
  formAction,
  state,
  isDesktop,
  isOpen,
}: ContactFormProps) {
  const fieldClass = cn(
    "block min-h-[3.25rem] w-full rounded-[28px] border border-transparent bg-zinc-100 dark:bg-zinc-100 px-5 py-3.5 text-zinc-900 dark:text-zinc-950 shadow-none",
    "placeholder:text-zinc-500 transition-[box-shadow] duration-200",
    "outline-none focus:ring-1 focus:ring-zinc-400/50",
  );

  const contactFormItemVariants = createContactFormItemVariants(isDesktop);

  return (
    <motion.form
      action={formAction}
      className="flex flex-col space-y-5 lg:space-y-3"
      variants={contactFormListVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div variants={contactFormItemVariants}>
        <label
          htmlFor="name"
          className="mb-1.5 ml-1 block text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-600"
        >
          Name
        </label>
        <input
          value={values.name}
          onChange={(event) =>
            onValuesChange({ ...values, name: event.target.value })
          }
          type="text"
          name="name"
          id="name"
          className={fieldClass}
          placeholder="Your name"
          required
        />
      </motion.div>

      <motion.div variants={contactFormItemVariants}>
        <label
          htmlFor="email"
          className="mb-1.5 ml-1 block text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-600"
        >
          Email
        </label>
        <input
          value={values.email}
          onChange={(event) =>
            onValuesChange({ ...values, email: event.target.value })
          }
          type="email"
          name="email"
          id="email"
          className={fieldClass}
          placeholder="your.email@example.com"
          required
        />
      </motion.div>

      <motion.div variants={contactFormItemVariants} className="flex flex-col">
        <label
          htmlFor="message"
          className="mb-1.5 ml-1 block text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-600"
        >
          Message
        </label>
        <textarea
          value={values.message}
          onChange={(event) =>
            onValuesChange({ ...values, message: event.target.value })
          }
          name="message"
          id="message"
          rows={3}
          className={cn(
            fieldClass,
            "min-h-[140px] resize-y lg:min-h-[130px] lg:h-[130px]",
          )}
          placeholder="Your message here..."
          required
        />
      </motion.div>

      <motion.div variants={contactFormItemVariants} className="pt-1">
        <SubmitButton isSuccess={state.success} />
        {state.error && (
          <p className="mt-3 text-center text-sm text-red-600 dark:text-red-400">
            {state.error}
          </p>
        )}
      </motion.div>
    </motion.form>
  );
}
