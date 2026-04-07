"use client";

import { useActionState, useEffect, useState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const INITIAL_STATE: ContactState = {
  success: false,
  message: null,
  error: null,
};

export function useContactFormPanel() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [form, setForm] = useState<ContactFormValues>(INITIAL_VALUES);
  const [state, formAction] = useActionState(submitContact, INITIAL_STATE);

  useEffect(() => {
    if (!state.success) {
      return;
    }

    setForm(INITIAL_VALUES);
    const closeTimeoutId = window.setTimeout(() => {
      setIsContactFormOpen(false);
    }, 3000);

    return () => {
      window.clearTimeout(closeTimeoutId);
    };
  }, [state.success]);

  return {
    form,
    setForm,
    state,
    formAction,
    isContactFormOpen,
    setIsContactFormOpen,
    toggleContactForm: () => setIsContactFormOpen((previous) => !previous),
  };
}
